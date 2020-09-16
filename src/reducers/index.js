import { combineReducers } from "redux";

const initialState = { 
    user:{
      isSignedIn:false
    } 
};

const user =  (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER':
        return action.payload;
      default:
        return state;
    }
  };

export default combineReducers({
  user
});