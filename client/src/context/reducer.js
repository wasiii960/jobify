import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR
} from "./action";
import { initialState } from "./appContext";
const reducer = (state, action) => {
  if (action.type == DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provider all values.",
    };
  }
  if (action.type == CLEAR_ALERT) {
    return { ...state, showAlert: false, alertType: "", alertText: "" };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertText: "User Created! Redirecting...",
      alertType: "success",
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertText: "Login Successful! Redirecting...",
      alertType: "success",
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }
  if(action.type === LOGOUT_USER){
    return {
      ...initialState,
      user:null,
      token:null,
      userLocation:'',
      jobLocation:''
    }
  }
  if(action.type === UPDATE_USER_BEGIN){
    return {
      ...state,
      isLoading:true
    }
  }
  if(action.type === UPDATE_USER_ERROR){
    return {
      ...state,
      isLoading:false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    }
  }
  if(action.type === UPDATE_USER_SUCCESS){
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertText: "User updated successfuly",
      alertType: "success",
    }
  }
  throw new Error(`no such action : ${action.type}`);
};
export default reducer;
