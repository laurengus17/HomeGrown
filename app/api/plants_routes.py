from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import Plant
from app.models.db import db
from app.forms.plant_form import PlantForm
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)

plants_routes = Blueprint('plants', __name__)

# GET /api/plants
@plants_routes.route('/')
def all_plants():
    plants = Plant.query.all()
    return {"plants": [plant.to_dict() for plant in plants]}

# GET /api/plants/variety
# GET /api/plants/light
# GET /api/plants/size
# GET /api/plants/difficulty
# GET /api/plants/plantId
# POST /api/plants
# PUT /api/plants/plantId
# DELETE /api/plants/plantId