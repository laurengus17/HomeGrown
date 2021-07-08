from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import User, friends
from app.models.db import db
from app.forms.friends_form import FriendForm

friends_routes = Blueprint('friends', __name__)


@friends_routes.route('/')
def user_friends():
    user = current_user
    friends = User.query.filter(User.id == user.id).first()
    return {"friends": friends.to_dict_friends()}



@friends_routes.route('/new_friend', methods=["POST"])
@login_required
def add_friend(userId, friendId):
    friend = friends.insert().values(userId=userId,
                                    friendId=friendId)

    db.session.execute(friend)
    db.session.commit()

    return friend.to_dict()


@friends_routes.route('/<int:friendId>', methods=["DELETE"])
@login_required
def delete_friend(friendId):
    friend = User.query.filter(User.id == user.id).first()
    db.session.delete(friend)
    db.session.commit()

    return jsonify("Success")