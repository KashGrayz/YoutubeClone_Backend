from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from authentication.models import User
from serializer import CommentSerializer


# Create your views here.




#GET request:

# Accepts a value from the request’s URL (The YouTube video id I am trying to get comments for). 
# Returns a 200 status code. 
# Responds with all comments from the database that are related to the video id sent in the URL. 





#POST request:

# Requires JWT authorization (Protected route). 
# Accepts a body object from the request in the form of a Comment model. 
# Adds the new comment to the database associated with the user who sent the JWT in the request. 
# Returns a 201 status code.  
# Responds with the newly created comment object.  




#PUT request: 

# Requires JWT authorization (Protected route). 
# Accepts a value from the request’s URL (The id of the comment to be updated).  
# Accepts a body object from the request in the form of a Comment model.  
# Finds the comment in the Comments table and updates that comment with the properties that were sent in the request’s body.  
# Returns a 200 status code.  
# Responds with the newly updated comment object.  


