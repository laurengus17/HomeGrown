const LOAD_PLANTS = 'plants/loadPlants';
const LOAD_PLANT = 'plants/loadPlant'
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