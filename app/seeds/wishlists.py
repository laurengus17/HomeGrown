from app.models import db, Wishlist


def seed_wishlists():
    wishlists = [
        Wishlist(
            userId=1, plantId=5
        ),
        Wishlist(
            userId=1, plantId=7
        ),
        Wishlist(
            userId=1, plantId=8
        ),
        Wishlist(
            userId=1, plantId=10
        ),
    ]

    for wishlist in wishlists:
        db.session.add(wishlist)
    
    db.session.commit()


def undo_wishlists():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()