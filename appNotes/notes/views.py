# Rest imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models
from notes.models import Notes

# Serializers imports
from notes.serializer import NoteSerializer

# Create your views here.

class NotesApiView(APIView):
    
    def get(self, request):
        """Retorna un listado de todas las notas almacenadas en la base de datos"""
    
        # print(f'REQUEST --> {request.method}')
        
        notes = Notes.objects.all()
        notes_serializer = NoteSerializer(notes, many=True)
        # print(notes.values())
        # print(notes_serializer)
        # print(notes_serializer.data)
        
        return Response(
            data=notes_serializer.data,
            status=status.HTTP_200_OK
        )
        