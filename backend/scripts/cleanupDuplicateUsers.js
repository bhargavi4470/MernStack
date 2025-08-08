import mongoose from 'mongoose';
import userModel from '../models/userModel.js';

const mongoURI = 'mongodb://127.0.0.1:27017/todos-app';

async function cleanupDuplicateUsers() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Find all users grouped by email with count > 1
    const duplicates = await userModel.aggregate([
      {
        $group: {
          _id: '$email',
          count: { $sum: 1 },
          ids: { $push: '$_id' },
        },
      },
      { $match: { count: { $gt: 1 } } },
    ]);

    if (duplicates.length === 0) {
      console.log('No duplicate users found.');
      process.exit(0);
    }

    console.log(`Found ${duplicates.length} duplicate emails.`);

    for (const dup of duplicates) {
      // Keep the first user, delete the rest
      const [keepId, ...deleteIds] = dup.ids;
      console.log(`Keeping user ${keepId} and deleting duplicates: ${deleteIds}`);

      await userModel.deleteMany({ _id: { $in: deleteIds } });
    }

    console.log('Duplicate users cleanup completed.');
    process.exit(0);
  } catch (error) {
    console.error('Error during cleanup:', error);
    process.exit(1);
  }
}

cleanupDuplicateUsers();
