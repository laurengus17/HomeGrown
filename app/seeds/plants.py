from app.models import db, Plant


def seed_plants():
    plants = [
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Air Plant', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Air Plant', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Calathea', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Calathea', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Fern', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Fern', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Fiddle Leaf Fig', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Fiddle Leaf Fig', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Marimo', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Marimo', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Money Tree', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Money Tree', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Monstera', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Monstera', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Palm', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Palm', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Peperomia', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Peperomia', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Philodendron', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Philodendron', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Pilea', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Pilea', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Pothos', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Pothos', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Snake Plant', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Snake Plant', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Succulent', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='Succulent', userId=''
        )
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='ZZ', userId=''
        ),
        Plant(
            name='', description='', imgURL='',
            care='', light='', size='', difficulty='',
            variety='ZZ', userId=''
        )
    ]

    for plant in plants:
        db.session.add(plant)
    
    db.session.commit()


def undo_plants():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()