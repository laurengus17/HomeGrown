const LOAD_PLANTS = 'plants/loadPlants';
const LOAD_PLANT = 'plants/loadPlant';
const ADD_PLANT = 'plants/addPlant';
const EDIT_PLANT = 'plants/editPlant';
const REMOVE_PLANT = 'plants/removePlant';

const loadPlants = (plants) => {
    return {
        type: LOAD_PLANTS,
        plants
    }
}

const loadPlant = (plant) => {
    return {
        type: LOAD_PLANT,
        plant
    }
}

const loadUserPlants = (plants) => {
    return {
        type: LOAD_PLANTS,
        plants
    }
}

const addPlant = (plant) => {
    return {
        type: ADD_PLANT,
        plant
    }
}

const editPlant = (plant) => {
    return {
        type: EDIT_PLANT,
        plant
    }
}

const removePlant = (id) => {
    return {
        type: REMOVE_PLANT,
        id
    }
}

// GET thunks

export const getPlants = () => async (dispatch) => {
    const res = await fetch(`/api/plants/`);
    if(res.ok) {
        const plants = await res.json();
        dispatch(loadPlants(plants.plants));
        return res;
    }
} 

export const getPlant = (plantId) => async (dispatch) => {
    const res = await fetch(`/api/plants/${plantId}`);
    if(res.ok) {
        const plants = await res.json();
        dispatch(loadPlant(plants));
        return res;
    }
} 

export const getUserPlants= (userId) => async (dispatch) => {
    const res = await fetch(`/api/plants/user/${userId}`);
    if(res.ok) {
        const plants = await res.json();
        dispatch(loadUserPlants(plants.plants));
        return res;
    }
} 

export const getEasyPlants = () => async (dispatch) => {
    const res = await fetch(`/api/plants/easy`);
    if (res.ok) {
        const plants = await res.json();
        dispatch(loadPlants(plants.plants));
    }
}

export const getSmallPlants = () => async (dispatch) => {
    const res = await fetch(`/api/plants/small`);
    if (res.ok) {
        const plants = await res.json();
        dispatch(loadPlants(plants.plants));
    }
}

export const getBalconyPlants = () => async (dispatch) => {
    const res = await fetch(`/api/plants/balcony`);
    if (res.ok) {
        const plants = await res.json();
        dispatch(loadPlants(plants.plants));
    }
}

// POST, PUT, DELETE

export const createPlant = (name, description, imgURL, care, light, size, difficulty, variety, userId) => async (dispatch) => {

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('imgURL', imgURL);
    formData.append('care', care);
    formData.append('light', light);
    formData.append('size', size);
    formData.append('difficulty', difficulty);
    formData.append('variety', variety);
    formData.append('userId', userId);

    const res = await fetch(`/api/plants/new_plant`, {
        method: "POST",
        body: formData
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(addPlant(data));
        return data;
    }

}

export const updatePlant = (name, description, imgURL, care, light, size, difficulty, variety, userId, plantId) => async (dispatch) => {

    const formData = new FormData();
    formData.append('id', plantId)
    formData.append('name', name);
    formData.append('description', description);
    formData.append('imgURL', imgURL);
    formData.append('care', care);
    formData.append('light', light);
    formData.append('size', size);
    formData.append('difficulty', difficulty);
    formData.append('variety', variety);
    formData.append('userId', userId);

    const res = await fetch(`/api/plants/${plantId}`, {
        method: 'PUT',
        body: formData
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(editPlant(data));
        return data
    }
}

export const deletePlant = (plantId) => async (dispatch) => {
    const res = await fetch(`/api/plants/${plantId}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(removePlant(plantId))
    }
}


const initialState = {}

const plantsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PLANTS:
            newState = {};
            action.plants.forEach((plant) => {
                newState[plant.id] = plant;
            });
            return newState
        case LOAD_PLANT:
            newState = {...state}
            newState[action.plant.id] = action.plant;
            return newState
        case ADD_PLANT:
            newState = Object.assign({}, state);
            newState[action.plant.id] = action.plant;
            return newState
        case EDIT_PLANT:
            return {
                ...state,
                [action.plant.id]: action.plant
            }
        case REMOVE_PLANT:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default plantsReducer;