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

    def post(self, request):
        """Crea un nuevo registro"""

        serializer = NoteSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {'message': 'Nota creada correctamente'},
                status=status.HTTP_201_CREATED
            )

        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    


class NoteDetailApiView(APIView):

    def get(self, request, pk):
        """Retorna un listado con todas las notas almacenadas en la base"""

        note = Notes.objects.get(pk=pk)
        note_serializer = NoteSerializer(note)

        return Response(
            data=note_serializer.data,
            status=status.HTTP_200_OK
        )

    def put(self, request, pk):
        """Modifica una nota"""

        note = Notes.objects.get(pk=pk)
        serializer = NoteSerializer(note, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {'message': 'Nota modificada correctamente'},
                status=status.HTTP_200_OK
            )
        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, pk):
        """Elimina una nota"""

        note = Notes.objects.get(pk=pk)
        note.delete()

        return Response(
            {'message': 'Nota eliminada correctamente'},
            status=status.HTTP_200_OK
        )


        