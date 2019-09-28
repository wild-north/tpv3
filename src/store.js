import { createStore, applyMiddleware, compose } from 'redux';
import createSageMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import { reducer } from './reducers';
import thunk from 'redux-thunk';
import { setStoreReference } from 'helpers/store';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSageMiddleware();
const middlewareList = [thunk, sagaMiddleware];


export function configureStore(preloadedState) {
    const store = createStore(
        reducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware( ...middlewareList )
        )
    );

    setStoreReference(store);
    sagaMiddleware.run(rootSaga);

    return store;
}
