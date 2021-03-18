import firebase from 'firebase/app'
import {authConstant} from './constants'
require('firebase/firestore')
require('firebase/auth')


export const register = (user) => {
    return async (dispatch) => {
        const db = firebase.firestore();

        dispatch({type:`${authConstant.USER_LOGIN}_REQUEST`})

        firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
            console.log(data);
            const currentUser = firebase.auth().currentUser;
            const name = `${user.firstname} ${user.lastname}`;
            currentUser.updateProfile({
                displayName: name
            })
            .then(()=> {
                //updated
                db.collection('users').add({
                    firstname:user.firstname,
                    lastname:user.lastname,
                    uid:data.user.uid,
                    createAt:new Date()
                })
                .then(()=>{
                    const loggedInUser = {
                        firstname:user.firstname,
                        lastname:user.lastname,
                        uid:data.user.uid,
                        email: user.email
                    }
                    localStorage.setItem('user', JSON.stringify(loggedInUser));
                    console.log('Logged In.....')
                    dispatch({
                        type: `${authConstant.USER_LOGIN}_SUCCESS`,
                        payload: {user:loggedInUser}
                    })
                })
                .catch(error => {
                    console.log(error)
                    dispatch({type:`${authConstant.USER_LOGIN}_FAILURE`,
                    payload: { error}    
                })
                })
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
}