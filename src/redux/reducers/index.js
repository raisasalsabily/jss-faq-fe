import { combineReducers } from "redux"

import authReducer from "./authReducers"
import errorsReducer from "./errorsReducers"
// import profileReducer from "./profileReducer"
export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  // profiles: profileReducer,
})
