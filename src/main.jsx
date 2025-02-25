import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './redux/store.jsx'
import "./css/app.css"
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
