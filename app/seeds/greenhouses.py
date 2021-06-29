from app.models import db, Greenhouse


def seed_greenhouses():
    greenhouses = [
        Greenhouse(
            userId=1, plantId=1
        ),
        Greenhouse(
            userId=2, plantId=1
        ),
        Greenhouse(
            userId=1, plantId=2
        ),
        Greenhouse(
            userId=1, plantId=3
        ),
    ]

    for greenhouse in greenhouses:
        db.session.add(greenhouse)
    
    db.session.commit()


def undo_greenhouses():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()