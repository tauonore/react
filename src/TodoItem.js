import React from 'react'

class TodoItem extends React.Component {
    render() {
        const sample = '課題を終わらせる'
        return(
            <li>
                <p>{this.props.desc}</p>
                <button>完了</button>
            </li>

        )
    }
}

export default TodoItem