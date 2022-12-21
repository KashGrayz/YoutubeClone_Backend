from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from comments.models import Comments
from authentication.models import User
from serializer import ReplySerializer


# Create your views here.


#GET request: 

# Requires JWT authorization (Protected route). 
# Accepts a value from the request’s URL (The id of the comment I am trying to get replies for).  
# Returns a 200 status code. 
# Responds with all replies from the database that are related to the comment id sent in the URL. 




#POST request: 

# Requires JWT authorization (Protected route). 
# Accepts a value from the request’s URL (The id of the comment the reply will be connected to).  
# Accepts a body object from the request in the form of a Reply model.  
# Adds the new reply to the database associated with the comment id sent in the URL and the user who sent the JWT in the request. 
# Returns a 201 status code.  
# Responds with the newly created reply object.  



