import { useReducer, useEffect } from 'react'
import { database } from '../fire'

export function useFolder2(uniqueid = null) {
  // const {currentUser} = firebase.auth.currentUser;

  const ACTIONS = {
    SET_CHILD_FILES: 'set-child-files',
  }

  function reducer(state, { type, payload }) {
    switch (type) {
      case ACTIONS.SET_CHILD_FILES:
        return {
          ...state,
          currentFile: payload.currentFile,
        }

      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    uniqueid,
    currentFile: [],
  })

  useEffect(() => {
    if (1) {
      return database.files
        .doc(uniqueid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            //console.log('Document data:', snapshot.data())
            dispatch({
            type: ACTIONS.SET_CHILD_FILES,
            payload: { currentFile: snapshot.data() },
          })
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!')
          }
          // console.log(snapshot.val);
          
        })
    }
  }, [uniqueid])

  return state
}
