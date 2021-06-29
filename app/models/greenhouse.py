from .db import db

class Greenhouse(db.Model):
    __tablename__ = 'greenhouses'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    plantId = db.Column(db.Integer, db.ForeignKey('plants.id'), nullable = False)

    user = db.relationship('User', back_populates='greenhouse')
    plants = db.relationship('Plant', back_populates='greenhouse')

    def to_dict(self):
    return {
        'id': self.id,
        'userId': self.userId,
        'plantId': self.plantId
    }