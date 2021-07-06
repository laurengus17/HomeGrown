from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import Wishlist
from app.models.db import db
from app.forms.wishlist_form import WishlistForm


wishlist_routes = Blueprint('wishlist', __name__)


@wishlist_routes.route('/<userId>')
def user_wishlist(userId):
    wishlists = Wishlist.query.filter(Wishlist.userId == userId).all()
    return {"wishlists": [wishlist.to_dict() for wishlist in wishlists]}


@wishlist_routes.route('/new_plant', methods=["POST"])
@login_required
def add_wishlist():
    form = WishlistForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate():
        wishlist = Wishlist(
            userId=form.data['userId'],
            plantId=form.data['plantId']
        )

    db.session.add(wishlist)
    db.session.commit()

    return wishlist.to_dict()


@wishlist_routes.route('/<int:wishlistId>', methods=["DELETE"])
@login_required
def delete_item(wishlistId):
    wishlist = Wishlist.query.get(wishlistId)
    db.session.delete(wishlist)
    db.session.commit()

    return jsonify("Success")
