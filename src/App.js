import React from 'react'

import Form from './Form'
import TodoList from './TodoList'

class App extends React.Component {
  constructor () {
    super()
    // APPでstateを管理する
    this.state = {
      todos:[],
      // 初期値がある場合はtodos.lengthの方が良い
      count: 0
    }

  }

  handleSubmit (e) {
    // submitされたらどうしたいのかを記述する
    // => submitされたら入力値を元にstateを書き換える

    // formのinputにて入力されたdescを取得
    e.preventDefault()
    // this = targetはほぼ同じ意味、targetの方が確実
    const desc = e.target.desc.value

    // stateは部分的に書き換えることはできない
    // stateは直接書き換えることはできない
    // (ex) this.state.todos.push
    // =>  ---------- 改善方法 ----------
    // 現状のstateのデータをコピーし、変数に保管する。
    const todos = this.state.todos.slice()

    todos.push({
      id: this.state.count + 1,
      desc: desc,
      isDone: false,
    })

    this.setState({todos: todos})
    this.setState({count: this.state.count + 1})
    // キーと値が同じ時は省略できる
    // this.setState({todos})
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit}></Form>
        <TodoList todos={this.state.todos}></TodoList>
      </div>
    )
  }
}

export default App