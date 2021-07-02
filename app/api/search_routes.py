from flask import Blueprint, request
from app.models import Plant

search_routes = Blueprint('search', __name__)


# GET /search/searchedWord
@search_routes.route('/<searchedWord>')
def searchbar(searchedWord):
    # check plant name, description, care, light, size, variety
    plant_results = Plant.query.filter(Plant.ilike(f'%{searchedWord}%')).all()
    # plant_descriptions = Plant.query.filter(Plant.name.ilike(f'%{searchedWord}%')).all()
    # plant_care = Plant.query.filter(Plant.care.ilike(f'%{searchedWord}%')).all()
    # plant_light = Plant.query.filter(Plant.light.ilike(f'%{searchedWord}%')).all()
    # plant_size = Plant.query.filter(Plant.size.ilike(f'%{searchedWord}%')).all()
    # plant_variety = Plant.query.filter(Plant.variety.ilike(f'%{searchedWord}%')).all()

    plants = set(plant_results)
    return {"results": [plant.to_dict() for plant in plants]}