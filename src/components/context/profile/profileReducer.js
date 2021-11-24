import {
  ADD_PROFILE,
  DELETE_PROFILE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PROFILE,
  FILTER_PROFILES,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_PROFILES,
  CLEAR_PROFILES
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles : action.payload,
        laoding : false
      }
    case ADD_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
        laoding : false
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.map((profile) =>
          profile.id === action.payload.id ? action.payload : profile
        ),
        laoding : false
      };
    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
        laoding : false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_PROFILES:
      return {
        ...state,
        filtered: state.profiles.filter((profile) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            profile.firstname.match(regex) || profile.lastname.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case  CONTACT_ERROR:
      return{
        ...state,
        error : action.payload
      }

    default:
      return state;
  }
};
