import { Reducer } from "redux";
import {
  LogInReqeustAction,
  LogInSuccessAction,
  LogInSuccessData,
  LogoutAction,
} from "../actions/user";

interface InitailState {
  isLoggingIn: boolean;
  data: LogInSuccessData | null;
}

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer: Reducer<
  InitailState,
  LogInSuccessAction | LogoutAction | LogInReqeustAction
> = (prevState = initialState, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        data: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        data: null,
      };
    default:
      return prevState;
  }
};

export default userReducer;
