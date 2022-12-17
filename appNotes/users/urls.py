# Django import
from django.urls import path

# Views
from users.views import UsersApiView

# Urls
urlpatterns =[
    path('users-list/', UsersApiView.as_view(), name= 'users_lists'),
]