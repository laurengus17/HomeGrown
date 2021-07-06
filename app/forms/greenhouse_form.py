from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired
from app.models import Greenhouse

class GreenhouseForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    plantId = IntegerField('plantId', validators=[DataRequired()])
