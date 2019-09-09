const initialState = {
    id: null, 
    username: '', 
    profile_pic: ''
}; 

const GET_USER_INFO = 'GET_USER_INFO'; 

export function getUserInfo(userObj) {
    return {
        type: GET_USER_INFO, 
        payload: userObj
    }
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER_INFO:
            const { id, username, profile_pic } = action.payload
            return Object.assign({}, state, {id, username, profile_pic} )
        default:
            return state; 
    }
};

