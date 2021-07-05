from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import Comment
from app.models.db import db
from app.forms.comment_form import CommentForm

comments_routes = Blueprint('comments', __name__)



# GET /api/comments
@comments_routes.route('/')
def all_comments():
    comments = Comment.query.all()
    return {"comments": [comment.to_dict() for comment in comments]}

@comments_routes.route('/plant/<plantId>')
def plant_comments(plantId):
    comments = Comment.query.filter(Comment.plantId == plantId).all()
    return {"comments": [comment.to_dict() for comment in comments]}


# POST /api/comments
@comments_routes.route('/new_comment', methods=["POST"])
@login_required
def create_comment():
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