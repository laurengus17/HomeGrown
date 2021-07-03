from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField, IntegerField, TextAreaField, SelectField
from wtforms.validators import DataRequired

class PlantForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    imgURL = StringField('imgURL')
    care = StringField('care', validators=[DataRequired()])
    light = StringField('light', validators=[DataRequired()])
    size = StringField('size', validators=[DataRequired()])
    difficulty = IntegerField('difficulty', validators=[DataRequired()])
    variety = StringField('variety', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])