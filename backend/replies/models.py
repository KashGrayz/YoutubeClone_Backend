from django.db import models
from comments.models import Comments
from authentication.models import User


# Create. your models here.


class Replies(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.CharField(Comments, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
