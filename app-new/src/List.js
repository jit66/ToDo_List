import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <button
                onClick={() => {
                  this.props.handleRemove(index);
                }}
              >
                {" "}
                Delete{" "}
              </button>
            </div>
          );
        })}
      </ul>
    );
  }
}
export default TodoList;
