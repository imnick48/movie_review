from rest_framework.response import Response
from .models import Movie
from .serializer import MovieSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework import status

@api_view(['GET'])
def movie_list(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def movie_info(request, name):
    movie = Movie.objects.get(name=name)
    serializer = MovieSerializer(movie,many=False)
    return Response(serializer.data)

@api_view(['POST'])
def add_comment(request, name):
    try:
        movie = Movie.objects.get(name=name)
    except Movie.DoesNotExist:
        return Response({"Error": "Movie Not Found"}, status=status.HTTP_404_NOT_FOUND)

    comment = request.data.get('comment')
    if not comment:
        return Response({"Error": "Comment not provided"}, status=status.HTTP_400_BAD_REQUEST)

    comments = movie.comments or []
    comments.append(comment)
    movie.comments = comments
    movie.save()

    serializer = MovieSerializer(movie)
    return Response({'status': 'success', 'comments': serializer.data['comments']}, status=status.HTTP_200_OK)
