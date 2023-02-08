import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 全局样式
import "@/assets/styles/global.scss"
// 引入路由
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
