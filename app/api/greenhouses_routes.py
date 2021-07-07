from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import Greenhouse, Plant
from app.models.db import db
from app.forms.greenhouse_form import GreenhouseForm


greenhouses_routes = Blueprint('greenhouse', __name__)


@greenhouses_routes.route('/<userId>')
def user_greenhouse(userId):
    greenhouses = Greenhouse.query.filter(Greenhouse.userId == userId).all()
    return {"greenhouses": [greenhouse.to_dict() for greenhouse in greenhouses]}


@greenhouses_routes.route('/new_plant', methods=["POST"])
@login_required
def add_greenhouse():
    form = GreenhouseForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate():
        greenhouse = Greenhouse(
            userId=form.data['userId'],
            plantId=form.data['plantId']
        )

    db.session.add(greenhouse)
    db.session.commit()

    return greenhouse.to_dict()


@greenhouses_routes.route('/<int:greenhouseId>', methods=["DELETE"])
@login_required
def delete_plant(greenhouseId):
    greenhouse = Greenhouse.query.get(greenhouseId)
    db.session.delete(greenhouse)
    db.session.commit()

    return jsonify("Success")
