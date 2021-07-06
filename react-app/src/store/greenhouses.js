const LOAD_GREENHOUSES = 'greenhouses/loadGreenhouses';
const ADD_GREENHOUSE = 'greenhouses/addGreenhouse';
const REMOVE_GREENHOUSE = 'greenhouses/removeGreenhouse';

const loadUserGreenhouse = (greenhouses) => {
    return {
        type: LOAD_GREENHOUSES,
        greenhouses
    }
}

const addToGreenhouse = (greenhouse) => {
    return {
        type: ADD_GREENHOUSE,
        greenhouse
    }
}

const removeGreenhouse = (id) => {
    return {
        type: REMOVE_GREENHOUSE,
        id
    }
}

export const getUserGreenhouse= (userId) => async (dispatch) => {
    const res = await fetch(`/api/greenhouse/${userId}`);
    if(res.ok) {
        const greenhouses = await res.json();
        console.log(greenhouses, 'HERE ARE THE GREENHOUSESSS IN THUNK')
        dispatch(loadUserGreenhouse(greenhouses.greenhouses));
        return res;
    }
} 

export const createGreenhouse = (userId, plantIdInt) => async (dispatch) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('plantId', plantIdInt);

    const res = await fetch(`/api/greenhouse/new_plant`, {
        method: "POST",
        body: formData
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(addToGreenhouse(data));
        return data;
    }
}

export const deleteFromGreenhouse = (id) => async (dispatch) => {
    const res = await fetch(`/api/greenhouse/${id}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(removeGreenhouse(id))
    }
}

const initialState = {}

const greenhouseReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_GREENHOUSES:
            newState = {};
            action.greenhouses.forEach((greenhouse) => {
                newState[greenhouse.id] = greenhouse;
            });
            return newState
        case ADD_GREENHOUSE:
            newState = Object.assign({}, state);
            newState[action.greenhouse.id] = action.greenhouse;
            return newState
        case REMOVE_GREENHOUSE:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default greenhouseReducer;
