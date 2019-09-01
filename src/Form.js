import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" name='desc'/>
                <button type='submit'>追加する</button>
            </form>
        )
    }
}

export default Form