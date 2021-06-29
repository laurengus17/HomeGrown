from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='McDemo', username='Demo', email='demoMcdemo@demo.io', 
        password='password', imgURL='https://github.com/laurengus17/images2/blob/main/secret_lives_of_plants_1200x627.jpeg')
    david = User(
        first_name='David', last_name='Attenborough', username='davidA', email='davidA@borough.com', 
        password='password', imgURL='https://github.com/laurengus17/images2/blob/main/david.jpeg')
    jane = User(
        first_name='Jane', last_name='Goodall', username='janeGood', email='jGood@all.com', 
        password='password', imgURL='https://github.com/laurengus17/images2/blob/main/319c5f83513eace42b7b8f0f22cc2f56.jpeg')
    ansel = User(
        first_name='Ansel', last_name='Adams', username='aAdams', email='ansel@Adams.com', 
        password='password', imgURL='https://github.com/laurengus17/images2/blob/main/1200px-Ansel_Adams_and_camera.jpeg')
    john = User(
        first_name='John', last_name='Muir', username='jMuir', email='john@mountains.com', 
        password='password', imgURL='https://github.com/laurengus17/images2/blob/main/ciclwarefblogspot.com-_Young_John__Muir.jpg')
    mary = User(
        first_name='Mary', last_name='Oliver', username='mOliver', email='maryO@poems.com', 
        password='password', imgURL='https://github.com/laurengus17/images2/blob/main/Aizenman-MaryOliverTNY-1.jpeg')
    alice = User(
        first_name='Alice', last_name='Waters', username='aWaters', email='alice@freshfood.com', 
        password='password', imgURL='https://github.com/laurengus17/images2/blob/main/alice-waters-390360.jpeg')
    michael = User(
        first_name='Michael', last_name='Pollan', username='pollanSeason', email='mike@pollan.com', 
        password='password', imgURL='https://github.com/laurengus17/images2/blob/main/091019_AG_Michael_Pollan_00222-590x886.jpeg')
    stephen = User(
        first_name='Stephen', last_name='Satterfield', username='stephenS', email='satterfield@onthehog.com', 
        password='password', imgURL='https://github.com/laurengus17/images2/blob/main/photo-22-e1426811977363.jpeg')

    users = [demo, david, jane, ansel, john, mary, alice, michael, stephen]

    for user in users:
        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
