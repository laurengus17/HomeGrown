from .db import db

class Plant(db.Model):
    __tablename__ = 'plants'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    description = db.Column(db.Text, nullable = False)
    imgURL = db.Column(db.String(255), nullable=False)
    care = db.Column(db.Text, nullable = False)
    light = db.Column(db.String(40), nullable = False)
    size = db.Column(db.String(40), nullable = False)
    difficulty = db.Column(db.String(40), nullable = False)
    variety = db.Column(db.String(60), nullable = False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

    user = db.relationship('User', back_populates='plants')
    greenhouse = db.relationship('Greenhouse', back_populates='plants')
    wishlist = db.relationship('Wishlist', back_populates='plants')
    comments = db.relationship('Comment', back_populates='plants')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'imgURL': self.imgURL,
            'care': self.care,
            'light': self.light,
            'size': self.size,
            'difficulty': self.difficulty,
            'variety': self.variety,
            'userId': self.userId
        }
