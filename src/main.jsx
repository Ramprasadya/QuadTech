import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* Wrapping the whole app in Provider to use Store Reducers */}
  <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
)
