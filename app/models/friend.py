from .db import db

class Friend(db.Model):
    __tablename__ = 'friends'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    friendId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

    user = db.relationship('User', back_populates='friends')
    
    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'plantId': self.plantId
        }