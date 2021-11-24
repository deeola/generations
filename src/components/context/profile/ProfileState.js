import React, { useReducer, useEffect} from "react";
import { v4 as uuid } from "uuid";
import ProfileContext from "./profileContext";
import profileReducer from "./profileReducer";
import axios from "axios";

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

const ProfileState = (props) => {
  const initialState = {
    profiles: [],
    current: null,
    filtered: null,
    error : null
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  //GET profiles
  const getProfiles = async () => {
  

    try{
        const res = await axios.get('/showcase')
        dispatch({ type: GET_PROFILES, payload: res.data});
        

    } catch(err){
        dispatch({type:CONTACT_ERROR, payload: err.response.msg})

    }

  

};




  //Add profile

  const addProfile = async (profile) => {
      const config = {
          headers : {
              'Content-Type' : 'application/json'
          }
      }

      try{
          const res = await axios.post('/showcase', profile, config)
          dispatch({ type: ADD_PROFILE, payload: res.data});

          console.log(res.data)

      } catch(err){
          dispatch({type:CONTACT_ERROR, payload: err.response.msg})

      }

    

  };

  //delete profile

  const deleteProfile = (id) => {
    dispatch({ type: DELETE_PROFILE, payload: id });
  };

  //set current profile
  const setCurrent = (profile) => {
    dispatch({ type: SET_CURRENT, payload: profile });
  };

  //clear current profile
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update profile

  const updateProfile = (profile) => {
    dispatch({ type: UPDATE_PROFILE, payload: profile });
  };

  //filter profiles
  const filterProfiles = (text) => {
    dispatch({ type: FILTER_PROFILES, payload: text });
  };

  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles: state.profiles,
        current: state.current,
        filtered: state.filtered,
        error : state.error,
        addProfile,
        deleteProfile,
        clearCurrent,
        setCurrent,
        updateProfile,
        filterProfiles,
        clearFilter,
        getProfiles
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
