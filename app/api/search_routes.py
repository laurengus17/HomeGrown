from flask import Blueprint, request
from app.models import Plant

search_routes = Blueprint('search', __name__)


# GET /search/searchedWord
@search_routes.route('/<searchedWord>')
def searchbar(searchedWord):

    # check plant name, description, care, light, size, variety
    plant_names = Plant.query.filter(Plant.name.ilike(f'%{searchedWord}%')).all()
    plant_descriptions = Plant.query.filter(Plant.description.ilike(f'%{searchedWord}%')).all()
    plant_care = Plant.query.filter(Plant.care.ilike(f'%{searchedWord}%')).all()
    plant_light = Plant.query.filter(Plant.light.ilike(f'%{searchedWord}%')).all()
    plant_size = Plant.query.filter(Plant.size.ilike(f'%{searchedWord}%')).all()
    plant_variety = Plant.query.filter(Plant.variety.ilike(f'%{searchedWord}%')).all()
    plants = set(plant_names) | set(plant_descriptions) | set(plant_variety) | set(plant_care) | set(plant_light) | set(plant_size)
    return {"results": [plant.to_dict() for plant in plants]}