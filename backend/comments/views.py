from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from authentication.models import User
from serializer import CommentSerializer
from models import Comments
from rest_framework.decorators import permission_classes
from django.contrib.auth.models import Permission
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated

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
def addComment(request):
    if request.method == 'POST':
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








# Create your views here.
# @api_view(['GET', 'POST'])
# def cards_list(request, cpk):
#     if request.method == 'GET':
#         cards = Card.objects.filter(collection_id=cpk)
#         serializer = CardSerializer(cards, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         serializer = CardSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save(collection_id=cpk)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)


# @api_view(['GET', 'PUT', 'DELETE'])
# def card_detail(request, cpk, pk):
#     card = get_object_or_404(Card, pk=pk)
#     if request.method == 'GET':
#         serializer = CardSerializer(card)
#         return Response(serializer.data)
#     elif request.method == 'PUT':
#         serializer = CardSerializer(card, data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save(collection_id=cpk)
#         return Response(serializer.data)
#     elif request.method == 'DELETE':
#         card.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)