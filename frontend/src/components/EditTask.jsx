import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';
import TokenContext from '../context/TokenContext';
import axios from "../Axios/axios.js";

function EditTask({ task, onClose }) {
    const { fetchTasks } = useContext(TaskContext);
    const { userToken } = useContext(TokenContext);
    
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [completed, setCompleted] = useState(task.completed);

    const handleUpdate = async (e) => {
        e.preventDefault();
        
        // Validate inputs
        if (!title.trim()) {
            return;
        }
        
        try {
            const res = await axios.put("/task/updateTask", {
                id: task._id,
                title: title.trim(),
                description: description.trim(),
                completed
            }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            
            if (res.data.success) {
                // Remove dispatch, rely on fetchTasks to refresh state
                await fetchTasks(); // Refresh tasks list after update
                onClose();
            }
            
        } catch (error) {
            console.error("Update task error:", error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md text-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Edit Task</h2>
                <form onSubmit={handleUpdate}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-200"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-200"
                            rows="4"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={completed}
                                onChange={(e) => setCompleted(e.target.checked)}
                                className="mr-2"
                            />
                            Mark as completed
                        </label>
                    </div>
                    
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                        >
                            Update Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditTask;
