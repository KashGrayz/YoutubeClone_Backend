from rest_framework import serializers
from .models import Replies

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Replies
        fields = ['id', 'user', 'comment', 'text', 'comments_id']
        depth = 1

        comments_id = serializers.IntegerField(write_only = True)
        


