from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import Comment
from app.models.db import db
from app.forms.comment_form import CommentForm

comments_routes = Blueprint('comments', __name__)