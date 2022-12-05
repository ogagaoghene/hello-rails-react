// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
// import * as bootstrap from "bootstrap"

import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/greetingsStore.js"
import App from "./components/App"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);