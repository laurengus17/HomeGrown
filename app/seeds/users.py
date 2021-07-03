from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='McDemo', username='Demo', email='demoMcdemo@demo.io', 
        password='password', imgURL='https://static.wikia.nocookie.net/twinpeaks/images/d/de/Harold_001.jpg/revision/latest/scale-to-width-down/2000?cb=20100423101150')
    david = User(
        first_name='David', last_name='Attenborough', username='davidA', email='davidA@borough.com', 
        password='password', imgURL='https://cdn.britannica.com/83/136183-050-28D77230/David-Attenborough-2008.jpg')
    jane = User(
        first_name='Jane', last_name='Goodall', username='janeGood', email='jGood@all.com', 
        password='password', imgURL='https://bloximages.chicago2.vip.townnews.com/idahopress.com/content/tncms/assets/v3/editorial/5/f1/5f1f5910-1762-5b42-a771-eac424e304f0/5f1f5910-1762-5b42-a771-eac424e304f0.preview-300.jpg?crop=201%2C201%2C49%2C0&resize=1200%2C1200&order=crop%2Cresize')
    ansel = User(
        first_name='Ansel', last_name='Adams', username='aAdams', email='ansel@Adams.com', 
        password='password', imgURL='https://i0.wp.com/www.anseladams.com/wp-content/uploads/2018/10/AA-moonrise-768x768-1.jpg?ssl=1')
    john = User(
        first_name='John', last_name='Muir', username='jMuir', email='john@mountains.com', 
        password='password', imgURL='https://www.rucsacs.com/wp-content/uploads/2020/08/ciclwarefblogspot.com-_Young_John__Muir.jpg')
    mary = User(
        first_name='Mary', last_name='Oliver', username='mOliver', email='maryO@poems.com', 
        password='password', imgURL='https://bostonglobe-prod.cdn.arcpublishing.com/resizer/s9E-QY5SFm8bhLCkd_01CdzXcwg=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/BKY27MQ2QII6TKCUYBGA6AGH3Q.jpg')
    alice = User(
        first_name='Alice', last_name='Waters', username='aWaters', email='alice@freshfood.com', 
        password='password', imgURL='https://i0.wp.com/slowfoodnations.org/wp-content/uploads/Alice-Waters_sq.jpg?fit=500%2C500&ssl=1')
    michael = User(
        first_name='Michael', last_name='Pollan', username='pollanSeason', email='mike@pollan.com', 
        password='password', imgURL='https://news.northeastern.edu/wp-content/uploads/2019/09/091019_AG_Michael_Pollan_00222-590x886.jpg')
    stephen = User(
        first_name='Stephen', last_name='Satterfield', username='stephenS', email='satterfield@onthehog.com', 
        password='password', imgURL='https://www.moadsf.org/wp-content/uploads/2018/04/Stephen-Satterfield.jpg')

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
