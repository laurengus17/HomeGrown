const LOAD_COMMENTS = 'comments/loadComments';
const ADD_COMMENT = 'comments/addComment';
const EDIT_COMMENT = 'comments/editComment';
const REMOVE_COMMENT = 'comments/removeComment';

const loadComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        comments
    }
}

const loadPlantComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        comments
    }
}

const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

const removeComment = (id) => {
    return {
        type: REMOVE_COMMENT,
        id
    }
}


export const getComments = () => async (dispatch) => {
    const res = await fetch('/api/comments/');
    if(res.ok) {
        const comments = await res.json();
        dispatch(loadComments(comments.comments));
        return res;
    }
}

export const getPlantComments= (plantId) => async (dispatch) => {
    const res = await fetch(`/api/comments/plant/${plantId}`);
    if(res.ok) {
        const comments = await res.json();
        dispatch(loadPlantComments(comments.comments));
        return res;
    }
} 

export const createComment = (comment) => async (dispatch) => {
    const { title, content, userId, plantId } = comment;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('userId', userId);
    formData.append('plantId', plantId);

    const res = await fetch(`/api/comments/new_comment`, {
        method: "POST",
        body: formData
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(addComment(data));
        return data;
    }
}

export const updateComment = ({id, title, content, userId, plantId }) => async (dispatch) => {

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('userId', userId);
    formData.append('plantId', plantId);

    const res = await fetch(`/api/comments/${id}`, {
        method: 'PUT',
        body: formData
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(editComment(data));
        return data
    }
}


export const deleteComment = (id) => async (dispatch) => {
    const res = await fetch(`/api/comments/${id}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(removeComment(id))
    }
}


const initialState = {}

const commentsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_COMMENTS:
            newState = {};
            action.comments.forEach((comment) => {
                newState[comment.id] = comment;
            });
            return newState
        case ADD_COMMENT:
            newState = Object.assign({}, state);
            newState[action.comment.id] = action.comment;
            return newState
        case EDIT_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        case REMOVE_COMMENT:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default commentsReducer;
