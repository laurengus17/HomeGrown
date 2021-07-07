const LOAD_FRIENDS = 'friends/loadFriends';
const ADD_FRIEND = 'friends/addFriend';
const REMOVE_FREIND = 'friends/removeFriend';

const loadFriends = (friends) => {
    return {
        type: LOAD_FRIENDS,
        friends
    }
}

const addFriend = (friend) => {
    return {
        type: ADD_FRIEND,
        friend
    }
}

const removeFriend = (id) => {
    return {
        type: REMOVE_FREIND,
        id
    }
}


export const getUserFriends= (userId) => async (dispatch) => {
    const res = await fetch(`/api/friends/${userId}`);
    if(res.ok) {
        const friends = await res.json();
        dispatch(loadFriends(friends.friends));
        return res;
    }
} 

export const createFriend = (userId, friendId, confirmed) => async (dispatch) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('friendId', friendId);
    formData.append('confirmed', confirmed)

    const res = await fetch(`/api/friends/new_friend`, {
        method: "POST",
        body: formData
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(addFriend(data));
        return data;
    }
}


export const deleteFriend = (id) => async (dispatch) => {
    const res = await fetch(`/api/friends/${id}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(removeFriend(id))
    }
}


const initialState = {}

const friendsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_FRIENDS:
            newState = {};
            action.friends.forEach((friend) => {
                newState[friend.id] = friend;
            });
            return newState
        case ADD_FRIEND:
            newState = Object.assign({}, state);
            newState[action.friend.id] = action.friend;
            return newState
        case REMOVE_FREIND:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default friendsReducer;
