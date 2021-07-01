from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField, IntegerField, TextAreaField, SelectField
from wtforms.validators import DataRequired

class PlantForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    care = StringField('care', validators=[DataRequired()])
    light = SelectField('light', choices=[('low', 'Low Light'), ('average', 'Partially Shaded'), ('high', 'Direct Light')], validators=[DataRequired()])
    size = SelectField('size', choices=[('small', 'Small'), ('medium', 'Medium'), ('large', 'Large')], validators=[DataRequired()])
    difficulty = IntegerField('difficulty', validators=[DataRequired()], widget=html5.NumberInput(min = 1, max = 5))
    variety = SelectField('variety', choices=[('Air Plant', 'Air Plant'), ('Calathea', 'Calathea'), ('Fern', 'Fern'), ('Fiddle Leaf Fig', 'Fiddle leaf Fig'), ('Flowers', 'Flowers'),
    ('Money Tree', 'Money Tree'), ('Monstera', 'Monstera'), ('Palm', 'Palm'), ('Peperomia', 'Peperomia'), ('Philodendron', 'Philodendron'), ('Pothos', 'Pothos'),
    ('Snake Plant', 'Snake Plant'), ('Succulent', 'Succulent')], validators=[DataRequired()])
    imgURL = StringField('imgURL', validators=[DataRequired()])
    # imgURL = FileField('image', FileRequired(), FileAllowed(['jpg', 'png'], 'Images only!'))
    userId = IntegerField('userId', validators=[DataRequired()])