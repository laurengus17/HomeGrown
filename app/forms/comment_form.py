from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField 
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    content = TextAreaField('content', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    plantId = IntegerField('plantId', validators=[DataRequired()])