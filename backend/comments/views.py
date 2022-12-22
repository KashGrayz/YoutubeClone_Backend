from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from authentication.models import User
from .serializers import CommentSerializer
from .models import Comments
from django.contrib.auth.models import Permission
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated

# Create your views here.




#GET request:

# Accepts a value from the request’s URL (The YouTube video id I am trying to get comments for). 
# Returns a 200 status code. 
# Responds with all comments from the database that are related to the video id sent in the URL. 

@api_view(['GET'])
@permission_classes([AllowAny])
def getAllComments(request, vpk):
    if request.method == 'GET':
        comments = Comments.objects.filter(video_id=vpk)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
   

#POST request:

# Requires JWT authorization (Protected route). 
# Accepts a body object from the request in the form of a Comment model. 
# Adds the new comment to the database associated with the user who sent the JWT in the request. 
# Returns a 201 status code.  
# Responds with the newly created comment object.  

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addComment(request, vpk):
    'User ', f"{request.user.id} {request.user.email} {request.user.username}"
    serializer = CommentSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)


#PUT request: 

# Requires JWT authorization (Protected route). 
# Accepts a value from the request’s URL (The id of the comment to be updated).  
# Accepts a body object from the request in the form of a Comment model.  
# Finds the comment in the Comments table and updates that comment with the properties that were sent in the request’s body.  
# Returns a 200 status code.  
# Responds with the newly updated comment object.  

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateComment(request, cpk):
    'User ', f"{request.user.id} {request.user.email} {request.user.username}"
    comment = get_object_or_404(Comments, id=cpk)
    # Comments.objects.filter(id=cpk)
    serializer = CommentSerializer(comment, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)




