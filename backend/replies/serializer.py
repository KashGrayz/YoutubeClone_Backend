from rest_framework import serializers
from .models import Replies

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Replies
        fields = ['id', 'user', 'comment_id', 'text']
        depth = 1

        comment_id = serializers.IntegerField(write_only = True)
        


