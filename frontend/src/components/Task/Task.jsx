import React, { useState, useContext } from 'react';
import moment from 'moment';
import "./task.css";
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from '../../Axios/axios.js';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditTask from '../EditTask';

function Task({ task, id }) {
    const { dispatch, fetchTasks } = useContext(TaskContext);
    const { userToken } = useContext(TokenContext);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleRemove = async (e) => {
        e.preventDefault();
        try {
            await axios.delete('/task/removeTask', {
                data: { id: task._id },
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            dispatch({
                type: "REMOVE_TASK",
                id: task._id
            });
            await fetchTasks(); // Refresh tasks list after delete
        } catch (error) {
            console.error("Delete task error:", error);
        }
    }

    const handleMarkDone = (e) => {
        dispatch({
            type: "MARK_DONE",
            id: task._id
        })
    }

    const handleEdit = () => {
        setShowEditModal(true);
    }

    return (
        <>
            <div className='bg-slate-300 py-4 rounded-lg shadow-md flex items-center justify-center gap-2 mb-3'>
                <div className="mark-done">
                    <input type="checkbox" className="checkbox" onChange={handleMarkDone} checked={task.completed} />
                </div>
                <div className="task-info text-slate-900 text-sm w-10/12">
                    <h4 className="task-title text-lg capitalize">{task.title}</h4>
                    <p className="task-description">{task.description}</p>
                    <div className=' italic opacity-60'>
                        {
                            task?.createdAt ? (
                                <p>{moment(task.createdAt).fromNow()}</p>
                            ) : (
                                <p>just now</p>
                            )
                        }
                    </div>
                </div>
                <div className="task-actions flex gap-2">
                    <EditIcon
                        style={{ fontSize: 24, cursor: "pointer", color: "#3b82f6" }}
                        onClick={handleEdit}
                        className="edit-task-btn bg-yellow-500 rounded-full p-1 text-white" />
                    <DeleteIcon
                        style={{ fontSize: 24, cursor: "pointer" }}
                        onClick={handleRemove}
                        className="remove-task-btn bg-red-500 rounded-full p-1 text-white" />
                </div>
            </div>
            {showEditModal && (
                <EditTask 
                    task={task} 
                    onClose={() => setShowEditModal(false)} 
                />
            )}
        </>
    );
}

export default Task;
