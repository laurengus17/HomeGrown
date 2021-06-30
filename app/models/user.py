from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

friends = db.Table("friends",
    db.Column('userId', db.Integer, db.ForeignKey("users.id")),
    db.Column('friendId', db.Integer, db.ForeignKey("users.id")),
    db.Column('confirmed', db.Boolean, default=False)
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(20), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    imgURL = db.Column(db.String(255), nullable=False)

    Friendships = db.relationship(
        "User", secondary=friends, 
        primaryjoin=(friends.c.userId == id),
        secondaryjoin=(friends.c.friendId == id),
        backref=db.backref("friends", lazy='dynamic'),
        lazy='dynamic'
    )

    plants = db.relationship('Plant', back_populates='user')
    comments = db.relationship('Comment', back_populates='user')
    greenhouse = db.relationship('Greenhouse', back_populates='user')
    wishlist = db.relationship('Wishlist', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'email': self.email,
            'imgURL': self.imgURL
        }

