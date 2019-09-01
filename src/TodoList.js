import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    render () {
        const TodoItems = this.props.todos.map(function(todo) {
            return (
                <TodoItem 
                    key={todo.id}
                    desc={todo.desc}
                    isDone={todo.isDone}></TodoItem>
            )
        })
        return (
            <ul>
                {TodoItems}
            </ul>
        )
    }
}

export default TodoList