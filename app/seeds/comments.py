from app.models import db, Comment



def seed_comments():
    c1 = Comment(
        title='Lots Of Sun', content='I put mine on my windowsill where it gets a lot of sunlight and it is thriving!',
        userId=1, plantId=1)
    c2 = Comment(
        title='Satisfying Colors', content='The evergreen leaves are calming and warm',
        userId=2, plantId=1)
    c3 = Comment(
        title='Easy To Own', content='Love the ease of care when it comes to this plant.',
        userId=4, plantId=1)
    c4 = Comment(
        title='Never Liked Air Plants', content='Just do not get it.',
        userId=7, plantId=1)
    c5 = Comment(
        title='Love Fern', content='I call this my love fern.',
        userId=8, plantId=6)
    c6 = Comment(
        title='Monstera Foreva', content='Title says it all.',
        userId=3, plantId=13)
    c7 = Comment(
        title='Oo La La', content='Really brightens up my room!',
        userId=5, plantId=19)
    c8 = Comment(
        title='Tricked', content='Thought it would grow real pearls.',
        userId=4, plantId=25)
    c9 = Comment(
        title='Nope', content='I hate bananas.',
        userId=5, plantId=26)

    comments = [c1, c2, c3, c4, c5, c6, c7, c8, c9]
    for comment in comments:
        db.session.add(comment)
    
    db.session.commit()



def undo_comments():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()