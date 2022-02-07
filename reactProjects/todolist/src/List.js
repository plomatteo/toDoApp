import React from "react";

const List = (props) => {
  return (
    <>
      <ul className="user-list">
        {props.data.map((task) => (
          <li key={task.id}>
            {" "}
            <Tasks {...task} removeItem={props.removeItem} />
          </li>
        ))}
      </ul>
    </>
  );
};

const Tasks = ({ id, title, description, removeItem }) => {
  return (
    <article>
      <div className="person-info">
        <div className="person-action">
          <h4>{title}</h4>
          <button className="btn" onClick={() => removeItem(id)}>
            {"Done"}
          </button>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
};


export default List;
