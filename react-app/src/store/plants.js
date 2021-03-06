const LOAD_PLANTS = 'plants/loadPlants';
const LOAD_EASY = 'plants/loadEasy';
const LOAD_BALCONY = 'plants/loadBalcony';
const LOAD_SIZE = 'plants/loadSize';
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

const loadEasy = (plants) => {
    return {
        type: LOAD_EASY,
        plants
    }
}

const loadBalcony = (plants) => {
    return {
        type: LOAD_BALCONY,
        plants
    }
}

const loadSize = (plants) => {
    return {
        type: LOAD_SIZE,
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

// ALL FILTERS

export const getEasyPlants = () => async (dispatch) => {
    const res = await fetch(`/api/plants/easy`);
    if (res.ok) {
        const plants = await res.json();
        dispatch(loadEasy(plants.plants));
    }
}

export const getSmallPlants = () => async (dispatch) => {
    const res = await fetch(`/api/plants/small`);
    if (res.ok) {
        const plants = await res.json();
        dispatch(loadSize(plants.plants));
    }
}

export const getBalconyPlants = () => async (dispatch) => {
    const res = await fetch(`/api/plants/balcony`);
    if (res.ok) {
        const plants = await res.json();
        dispatch(loadBalcony(plants.plants));
    }
}

export const getLightPlants = (light) => async (dispatch) => {
    const res = await fetch(`/api/plants/light/${light}`);
    if (res.ok) {
        const plants = await res.json();
        dispatch(loadPlants(plants.plants));
    }
}

export const getSizePlants = (size) => async (dispatch) => {
    const res = await fetch(`/api/plants/size/${size}`);
    if (res.ok) {
        const plants = await res.json();
        dispatch(loadPlants(plants.plants));
    }
}

export const getDifficultyPlants = (difficulty) => async (dispatch) => {
    const res = await fetch(`/api/plants/difficulty/${difficulty}`);
    if (res.ok) {
        const plants = await res.json();
        dispatch(loadPlants(plants.plants));
    }
}


export const getVarietyPlants = (variety) => async (dispatch) => {
    const res = await fetch(`/api/plants/variety/${variety}`);
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


const initialState = {all: {}, easy: {}, balcony: {}, size: {}}

const plantsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PLANTS:
            newState = {...state, all:{}};
            action.plants.forEach((plant) => {
                newState.all[plant.id] = plant;
            });
            return newState
        case LOAD_EASY:
            newState = {...state, easy: {}};
            action.plants.forEach((plant) => {
                newState.easy[plant.id] = plant;
            });
            return newState
        case LOAD_BALCONY:
            newState = {...state, balcony: {}};
            action.plants.forEach((plant) => {
                newState.balcony[plant.id] = plant;
            });
            return newState
        case LOAD_SIZE:
            newState = {...state, size: {}};
            action.plants.forEach((plant) => {
                newState.size[plant.id] = plant;
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