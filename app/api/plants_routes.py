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

# GET /api/plants/userplants
@plants_routes.route('/user/<userId>')
def user_plants(userId):
    plants = Plant.query.filter(Plant.userId == userId).all()
    return {"plants": [plant.to_dict() for plant in plants]}

# GET /api/plants/variety
@plants_routes.route('/<variety>')
def plant_variety(variety):
    plants = Plant.query.filter(Plant.variety.like(variety)).all()
    return {"plants": [plant.to_dict() for plant in plants]}

# GET /api/plants/light
@plants_routes.route('/<light>')
def plant_light(light):
    plants = Plant.query.filter(Plant.light.like(light)).all()
    return {"plants": [plant.to_dict() for plant in plants]}

# GET /api/plants/size
@plants_routes.route('/<size>')
def plant_size(size):
    plants = Plant.query.filter(Plant.size.like(size)).all()
    return {"plants": [plant.to_dict() for plant in plants]}

# GET /api/plants/difficulty
@plants_routes.route('/<difficulty>')
def plant_difficulty(difficulty):
    plants = Plant.query.filter(Plant.difficulty.like(difficulty)).all()
    return {"plants": [plant.to_dict() for plant in plants]}

# GET /api/plants/plantId
@plants_routes.route('/<plantId>')
def single_plant(plantId):
    plant = Plant.query.get(plantId)
    return plant.to_dict()


@plants_routes.route('/easy')
def plants_easy():
    plants = Plant.query.filter(Plant.difficulty.ilike(f%{1}%)).all()
    return {"plants": [plant.to_dict() for plant in plants]}

@plants_routes.route('/balcony')
def plants_balcony():
    plants = Plant.query.filter(Plant.light.ilike(f%{high}%)).all()
    return {"plants": [plant.to_dict() for plant in plants]}


@plants_routes.route('/small')
def plants_small():
    plants = Plant.query.filter(Plant.size.ilike(f%{small}%)).all()
    return {"plants": [plant.to_dict() for plant in plants]}


# POST /api/plants
@plants_routes.route('/new_plant', methods=["POST"])
@login_required
def create_plant():
    form = PlantForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate():
        plant = Plant(
            name=form.data['name'],
            description=form.data['description'],
            imgURL=form.data['imgURL'],
            care=form.data['care'],
            light=form.data['light'],
            size=form.data['size'],
            difficulty=form.data['difficulty'],
            variety=form.data['variety'],
            userId=form.data['userId'],
        )

        if request.files['imgURL'] is not None:
            image = request.files['imgURL']

            if not allowed_file(image.filename):
                return {"errors": "file type not permitted"}, 400

            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
            if "url" not in upload:
                return upload, 400

        plant.imgURL = upload["url"]
    db.session.add(plant)
    db.session.commit()
    return plant.to_dict()


# PUT /api/plants/plantId
@plants_routes.route('/<plantId>', methods=["PUT"])
@login_required
def update_plant(plantId):
    plant = Plant.query.get(plantId)
    form = PlantForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate():
        form.populate_obj(plant)

        if request.files['imgURL'] is not None:
                image = request.files['imgURL']

                if not allowed_file(image.filename):
                    return {"errors": "file type not permitted"}, 400

                image.filename = get_unique_filename(image.filename)
                upload = upload_file_to_s3(image)
                if "url" not in upload:
                    return upload, 400

        plant.imgURL = upload["url"]
    db.session.add(plant)
    db.session.commit()
    return plant.to_dict(), 200


# DELETE /api/plants/plantId
@plants_routes.route('/<plantId>', methods=["DELETE"])
@login_required
def delete_plant(plantId):
    plant = Plant.query.get(plantId)
    db.session.delete(plant)
    db.session.commit()

    return jsonify("Success")