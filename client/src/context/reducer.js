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
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
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
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: "",
      jobLocation: "",
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertText: "User updated successfuly",
      alertType: "success",
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      jobLocation: state.userLocation,
      isEditing: false,
      editJobId: "",
      company: "",
      position: "",
      jobType: "full-time",
      status: "pending",
    };
    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CREATE_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Job Created...",
    };
  }
  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_JOBS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      numOfPages: action.payload.numOfPages,
      totalJobs: action.payload.totalJobs,
    };
  }
  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find(job=>job._id === action.payload.id)
    const {_id,company,jobLocation,position,jobType,status} = job;
    return {
      ...state,
      isEditing:true,
      editJobId:_id,
      company,
      jobLocation,
      position,
      jobType,
      status
    };
  }
  if (action.type === DELETE_JOB_BEGIN) {
    return {
      ...state,
      isLoading:true
    };
  }
  if (action.type === EDIT_JOB_BEGIN) {
    return {
      ...state,
      isLoading:true,
      isEditing:true
    };
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert:true,
      alertType:'success',
      alertText:'Job updated successfuly'
    };
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert:true,
      alertType:'danger',
      alertText:action.payload.msg
    };
  }
  throw new Error(`no such action : ${action.type}`);
};
export default reducer;
