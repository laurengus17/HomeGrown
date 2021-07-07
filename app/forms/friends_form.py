from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired
from app.models import friends

class FriendForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    friendId = IntegerField('friendId', validators=[DataRequired()])
    confirmed = StringField('confirmed')