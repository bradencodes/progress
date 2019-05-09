import { createStore, applyMiddlware, compose } from "redux"
import thunk from "redux-thunk"

const initialState = {}

const middlware = [thunk]

const store = createStore(
    () => [],
    initialState,
    compose(
        applyMiddlware(...middlware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        Window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;
