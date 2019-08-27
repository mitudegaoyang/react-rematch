import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import App from './App';
const count = {
    state: {
        num: 0,
        flag: true,
        flagShow: true
    },
    reducers: {
        increment: (state, payload) => {
            return {
                ...state,
                num: payload
            }
        },
        toggle: (state, payload) => {
            return {
                ...state,
                flag: payload
            }
        },
        toggleShow: (state, payload) => {
            return {
                ...state,
                flagShow: payload
            }
        },
    },
    effects: dispatch => ({
        async asyncIncrement() {
            await new Promise(resolve => {
                setTimeout(resolve, 1000)
            })
            dispatch.count.increment()
        },
    }),
}
const store = init({
    models: {
        count
    }
})
// Use react-redux's <Provider /> and pass it the store.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
)
