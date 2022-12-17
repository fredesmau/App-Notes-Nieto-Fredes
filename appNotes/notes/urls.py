# Django import
from django.urls import path

# Views
from notes.views import NotesApiView

# Urls
urlpatterns =[
    path('notes-list/', NotesApiView.as_view(), name= 'notes_lists'),
]