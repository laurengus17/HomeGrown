from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(50), nullable = False)
    content = db.Column(db.Text, nullable = False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    plantId = db.Column(db.Integer, db.ForeignKey('plants.id'), nullable = False)

    user = db.relationship('User', back_populates='comments')
    plants = db.relationship('Plant', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'userId': self.userId,
            'plantId': self.plantId
        }