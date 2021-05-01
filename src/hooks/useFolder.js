import { useState,useReducer, useEffect } from "react";
import { database } from '../fire'
import firebase from 'firebase'
import Loader from "react-loader-spinner";


export function useFolder( folderId = null, userid= null) {

    // const {currentUser} = firebase.auth.currentUser;
    
    const ACTIONS = {
        SET_CHILD_FILES: "set-child-files",
    }

    function reducer( state, { type,payload } ){
        
        switch(type){
            case ACTIONS.SET_CHILD_FILES:
                return {
                    ...state,
                    childFiles: payload.childFiles,
                };    

            default:
                return state;

        }

    }
    const[state,dispatch] = useReducer( reducer,{
        folderId,
        childFiles : []
        } 
    );

    useEffect(() => {
        if(1)
        {
                return (
          database.files
            .where("folderId", "==", folderId)
            .where("userId", "==", userid)
            .onSnapshot(snapshot => {
              dispatch({
                type: ACTIONS.SET_CHILD_FILES,
                payload: { childFiles: snapshot.docs.map(database.formatDoc) },
              })
            })
        )
        }
        
      }, [folderId])

    return state;
}
