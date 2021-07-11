from app.models import db, Greenhouse


def seed_greenhouses():
    greenhouses = [
        Greenhouse(
            userId=1, plantId=1
        ),
        Greenhouse(
            userId=1, plantId=2
        ),
        Greenhouse(
            userId=1, plantId=3
        ),
        Greenhouse(
            userId=2, plantId=1
        ),
        Greenhouse(
            userId=2, plantId=15
        ),
        Greenhouse(
            userId=2, plantId=7
        ),
        Greenhouse(
            userId=2, plantId=10
        ),
        Greenhouse(
            userId=2, plantId=20
        ),
        Greenhouse(
            userId=2, plantId=6
        ),
        Greenhouse(
            userId=3, plantId=6
        ),
        Greenhouse(
            userId=3, plantId=24
        ),
        Greenhouse(
            userId=3, plantId=15
        ),
        Greenhouse(
            userId=3, plantId=8
        ),
        Greenhouse(
            userId=4, plantId=2
        ),
        Greenhouse(
            userId=4, plantId=9
        ),
        Greenhouse(
            userId=4, plantId=12
        ),
        Greenhouse(
            userId=5, plantId=23
        ),
        Greenhouse(
            userId=5, plantId=7
        ),
        Greenhouse(
            userId=5, plantId=11
        ),
        Greenhouse(
            userId=6, plantId=2
        ),
        Greenhouse(
            userId=6, plantId=9
        ),
        Greenhouse(
            userId=6, plantId=22
        ),
        Greenhouse(
            userId=6, plantId=23
        ),
        Greenhouse(
            userId=7, plantId=5
        ),
        Greenhouse(
            userId=7, plantId=13
        ),
        Greenhouse(
            userId=7, plantId=16
        ),
        Greenhouse(
            userId=7, plantId=19
        ),
        Greenhouse(
            userId=8, plantId=4
        ),
        Greenhouse(
            userId=8, plantId=7
        ),
        Greenhouse(
            userId=8, plantId=3
        ),
        Greenhouse(
            userId=9, plantId=6
        ),
        Greenhouse(
            userId=9, plantId=11
        ),
        Greenhouse(
            userId=9, plantId=21
        ),
        Greenhouse(
            userId=9, plantId=12
        ),
    ]

    for greenhouse in greenhouses:
        db.session.add(greenhouse)
    
    db.session.commit()


def undo_greenhouses():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()