from django.urls import path
from .views import movie_list, movie_info,add_comment

urlpatterns = [
    path('', movie_list),
    path('<str:name>/', movie_info),
    path('<str:name>/add_comments/', add_comment),
]