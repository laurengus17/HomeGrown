from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import Plant
from app.models.db import db
from app.forms.plant_form import PlantForm

plants_routes = Blueprint('plants', __name__)