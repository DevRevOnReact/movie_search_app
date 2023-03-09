import movieReducer from "./feature/movieSlice";
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
reducer:{
    movie: movieReducer
},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

// sagaMiddleware.run(rootSaga)

export default store