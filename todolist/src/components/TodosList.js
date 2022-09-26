import React from 'react';

class TodosList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <li key={todo.id}>{todo}</li>
        ))}
      </ul>
    );
  }
}

export default TodosList;
