import React from 'react'

// index.jsにのみ必要(rootに描写する)
import ReactDOM from 'react-dom'

import App from './App'

import './App.css'

// scssを使用する場合は、'yarn add node-sass' を実行し、サーバーを再起動する

ReactDOM.render(<App />, document.getElementById('root'))
