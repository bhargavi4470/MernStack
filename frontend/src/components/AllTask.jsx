import React, { useContext } from 'react';
import Task from './Task/Task';
import TaskContext from '../context/TaskContext';

function AllTask() {
    const { tasks } = useContext(TaskContext);
    return (
        <div className="task-list-container">
            {
                (tasks.length !==0) ? (
                    tasks.map((task) => {
                        return (
                            <Task
                                key={task._id}
                                task={task}
                                id={task._id}
                            />
                        )
                    })
                ) : (
                    <h1>No Task Found</h1>
                )
            }
        </div>
    );
}

export default AllTask;
