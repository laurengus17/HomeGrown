from flask.cli import AppGroup
from .users import seed_users, undo_users
from .plants import seed_plants, undo_plants
from .comments import seed_comments, undo_comments
from .friends import seed_friends, undo_friends
from .wishlists import seed_wishlists, undo_wishlists
from .greenhouses import seed_greenhouses, undo_greenhouses

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_plants()
    seed_comments()
    seed_friends()
    seed_wishlists()
    seed_greenhouses()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_plants()
    undo_comments()
    undo_friends()
    undo_wishlists()
    undo_greenhouses()
