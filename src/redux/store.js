import { createStore } from 'redux';
import rootReducer from './reducers/index.js';

//const store = createStore(rootReducer);

const store = createStore(
  rootReducer, ['redux']
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store; 
