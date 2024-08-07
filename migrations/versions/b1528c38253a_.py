"""empty message

Revision ID: b1528c38253a
Revises: a852839408e5
Create Date: 2024-07-02 23:49:41.642693

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b1528c38253a'
down_revision = 'a852839408e5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('influencer', schema=None) as batch_op:
        batch_op.add_column(sa.Column('bio', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('likes_instagram', sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column('likes_tiktok', sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column('comentarios_instagram', sa.String(length=10), nullable=True))
        batch_op.add_column(sa.Column('comentarios_tiktok', sa.String(length=10), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('influencer', schema=None) as batch_op:
        batch_op.drop_column('comentarios_tiktok')
        batch_op.drop_column('comentarios_instagram')
        batch_op.drop_column('likes_tiktok')
        batch_op.drop_column('likes_instagram')
        batch_op.drop_column('bio')

    # ### end Alembic commands ###
