const LOAD_WISHLIST = 'wishlist/loadWishlist';
const ADD_WISHLIST = 'wishlist/addWishlist';
const REMOVE_WISHLIST = 'wishlist/removeWishlist';

const loadUserWishlist = (wishlist) => {
    return {
        type: LOAD_WISHLIST,
        wishlist
    }
}

const addToWishlist = (wishlist) => {
    return {
        type: ADD_WISHLIST,
        wishlist
    }
}

const removeWishlist = (id) => {
    return {
        type: REMOVE_WISHLIST,
        id
    }
}

export const getUserWishlist= (userId) => async (dispatch) => {
    const res = await fetch(`/api/wishlist/${userId}`);
    if(res.ok) {
        const wishlist = await res.json();
        dispatch(loadUserWishlist(wishlist.wishlists));
        return res;
    }
} 

export const createWishlist = (userId, plantIdInt) => async (dispatch) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('plantId', plantIdInt);

    const res = await fetch(`/api/wishlist/new_plant`, {
        method: "POST",
        body: formData
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(addToWishlist(data));
        return data;
    }
}

export const deleteFromWishlist = (id) => async (dispatch) => {
    const res = await fetch(`/api/wishlist/${id}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(removeWishlist(id))
    }
}

const initialState = {}

const wishlistReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_WISHLIST:
            newState = {};
            action.wishlist.forEach((wishlist) => {
                newState[wishlist.id] = wishlist;
            });
            return newState
        case ADD_WISHLIST:
            newState = Object.assign({}, state);
            newState[action.wishlist.id] = action.wishlist;
            return newState
        case REMOVE_WISHLIST:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default wishlistReducer;
