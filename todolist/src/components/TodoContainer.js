import React from 'react';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
    state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };

    render() {
      const { todos } = this.state;
      return (
        <div>
          <TodosList todo={todos.title} />
        </div>
      );
    }
}
export default TodoContainer;
