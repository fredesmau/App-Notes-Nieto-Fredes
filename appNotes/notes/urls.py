# Django import
from django.urls import path

# Views
from notes.views import NotesApiView,NoteDetailApiView

# Urls
urlpatterns =[
    path('notes-list/', NotesApiView.as_view(), name= 'notes_lists'),
    path('note-detail/<int:pk>/', NoteDetailApiView.as_view(), name= 'detail_note'),
]