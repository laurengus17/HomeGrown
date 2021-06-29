from .db import db

class Wishlist(db.Model):
    __tablename__ = 'wishlists'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    plantId = db.Column(db.Integer, db.ForeignKey('plants.id'), nullable = False)

    user = db.relationship('User', back_populates='wishlist')
    plants = db.relationship('Plant', back_populates='wishlist')

    def to_dict(self):
    return {
        'id': self.id,
        'userId': self.userId,
        'plantId': self.plantId
    }