import React, { useState } from "react";

const FormTask = (props) => {
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const handleChangeTitle = e => {
        setTitleInput(e.target.value);
    };
    const handleChangeDescription = e => {
        setDescriptionInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit(
            {
                id: Math.floor(Math.random() * 10000),
                title: titleInput,
                description: descriptionInput,
            }
        );
        setTitleInput('');
        setDescriptionInput('');
    }


    return (
        <>
            <form className="form-task" onSubmit={handleSubmit}>
                <div className="form-field">
                    <h4><label htmlFor="taskTitle">Task title</label> </h4>
                    <input type="text" placehonder="Add to do title" name="taskTitle" id="taskTitle" value={titleInput} onChange={handleChangeTitle} />
                </div>
                <div className="form-field">
                    <h4><label htmlFor="taskDescription">Description</label></h4>
                    <input type="text" placehonder="Add to do description" name="taskDescription" id="taskDescription" onChange={handleChangeDescription} value={descriptionInput} />
                </div>
                <div className="form-field">
                    <button className="btn">{"Add task"}</button>
                </div>
            </form>
        </>
    );
};

export default FormTask;