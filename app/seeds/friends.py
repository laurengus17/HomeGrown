from app.models import db, Friend


def seed_friends():
    friends = [
        Friend(
            userId=1, friendId=2
        ),
        Friend(
            userId=2, friendId=1
        ),
        Friend(
            userId=1, friendId=3
        ),
        Friend(
            userId=3, friendId=1
        ),
    ]

    for friend in friends:
        db.session.add(friend)
    
    db.session.commit()


def undo_friends():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()