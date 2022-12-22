from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from comments.models import Comments
from .serializer import ReplySerializer
from .models import Replies


# Create your views here.


#GET request: 

# Requires JWT authorization (Protected route). 
# Accepts a value from the request’s URL (The id of the comment I am trying to get replies for).  
# Returns a 200 status code. 
# Responds with all replies from the database that are related to the comment id sent in the URL. 

# @api_view(['GET'])
# @permission_classes([AllowAny])
# def get_all_replies(request, comment):
#     replies = Replies.objects.all(comments_id=comment)
#     serializer = ReplySerializer(replies, many=True)
#     return Response(serializer.data)



#POST request: 

# Requires JWT authorization (Protected route). 
# Accepts a value from the request’s URL (The id of the comment the reply will be connected to).  
# Accepts a body object from the request in the form of a Reply model.  
# Adds the new reply to the database associated with the comment id sent in the URL and the user who sent the JWT in the request. 
# Returns a 201 status code.  
# Responds with the newly created reply object.  

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_replies(request, cpk):
    print(
        'User', f"{request.user.id} {request.user.email} {request.user.username}")

    if request.method == "GET":
        replies = Replies.objects.filter(comment_id = cpk)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        request.data['commebt_id'] = cpk
        serializer = ReplySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(cpk)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



# # Create your views here.
# @api_view(['GET', 'POST'])
# def cards_list(request, cpk):

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