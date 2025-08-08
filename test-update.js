// Simple test to verify update functionality
// Run this in browser console or as a separate test

// Test the update endpoint
async function testUpdateTask() {
    const testData = {
        id: "test-task-id", // Replace with actual task ID
        title: "Updated Test Task",
        description: "This is an updated test description",
        completed: true
    };
    
    try {
        const response = await fetch('http://localhost:3000/api/task/updateTask', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your-token-here' // Replace with actual token
            },
            body: JSON.stringify(testData)
        });
        
        const result = await response.json();
        console.log('Update test result:', result);
        return result;
    } catch (error) {
        console.error('Update test failed:', error);
        return error;
    }
}

// Test instructions:
// 1. Start the backend server: cd backend && node server.js
// 2. Get a valid task ID from your database
// 3. Get a valid JWT token from login
// 4. Run testUpdateTask() in browser console or modify and run this script

console.log("Update test script loaded. Run testUpdateTask() to test.");
