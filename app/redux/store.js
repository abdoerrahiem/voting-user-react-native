import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import user from './reducers/user'
import candidate from './reducers/candidate'
import vote from './reducers/vote'

const rooterReducer = combineReducers({
  userReducer: user,
  candidateReducer: candidate,
  voteReducer: vote,
})
const initialState = {}
const middleware = [thunk]

const store = createStore(
  rooterReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
