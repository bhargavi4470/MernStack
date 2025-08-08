function taskReducer(tasks, action) {
    console.log("taskreducer");
    switch (action.type) {
        // eslint-disable-next-line no-lone-blocks
        case "ADD_TASK": {
            return [
                ...tasks,
                {
                    title: action.title,
                    description: action.description,
                    completed: false
                }
            ]
        }
        case "SET_TASK": {
            return action.payload
        }
        case "REMOVE_TASK": {
            return tasks.filter((task) => task._id !== action.id)
        }
        case "MARK_DONE": {
            return tasks.map((task) => {
                if (task._id === action.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            });
        }
        case "UPDATE_TASK": {
            console.log("UPDATE_TASK reducer called with:", action.payload);
            const updatedTasks = tasks.map(task => 
                task._id === action.payload._id ? action.payload : task
            );
            console.log("Updated tasks:", updatedTasks);
            return updatedTasks;
        }
        default: {
            throw Error("Unknown Action" + action.type)
        }
    }
}

export default taskReducer;