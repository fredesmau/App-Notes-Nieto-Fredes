# Django import
from django.urls import path

# Views
from users.views import UsersApiView, UsersDetailApiView

# Urls
urlpatterns =[
    path('users-list/', UsersApiView.as_view(), name= 'users_lists'),
    path('users-detail/<int:pk>/', UsersDetailApiView.as_view(), name= 'detail_users'),
]