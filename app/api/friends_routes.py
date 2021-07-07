from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import 
from app.models.db import db
from app.forms. import 

friends_routes = Blueprint('friends', __name__)


@friends_routes.route('/')
def user_friends(userId):
    friends = Friend.query.filter(Friend.userId == userId).all()
    return {"friends": [friend.to_dict() for friend in friends]}



@friends_routes.route('/new_friend', methods=["POST"])
@login_required
def add_friend():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate():
        comment = Comment(
            title=form.data['title'],
            content=form.data['content'],
            userId=form.data['userId'],
            plantId=form.data['plantId']
        )

    db.session.add(comment)
    db.session.commit()

    return comment.to_dict()


# PUT /api/comments/commentId
@comments_routes.route('/<int:commentId>', methods=["PUT"])
@login_required
def update_comment(commentId):
    comment = Comment.query.get(commentId)

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form['userId'].data = comment.userId
    form['plantId'].data = comment.plantId

    if form.validate():
        form.populate_obj(comment)
        db.session.commit()

    return comment.to_dict()


# DELETE /api/comments/commentId
@comments_routes.route('/<int:commentId>', methods=["DELETE"])
@login_required
def delete_comment(commentId):
    comment = Comment.query.get(commentId)
    db.session.delete(comment)
    db.session.commit()

    return jsonify("Success")