# Rest imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models
from users.models import Users

# Serializers imports
from users.serializer import UserSerializer

# Create your views here.

class UsersApiView(APIView):
    
    def get(self, request):
        """Retorna un listado de todos los usuarios almacenadas en la base de datos"""
    
        # print(f'REQUEST --> {request.method}')
        
        users = Users.objects.all()
        users_serializer = UserSerializer(users, many=True)
        # print(users.values())
        # print(users_serializer)
        # print(users_serializer.data)
        
        return Response(
            data=users_serializer.data,
            status=status.HTTP_200_OK
        )

    def post(self, request):
        """Crea un nuevo registro"""

        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {'message': 'Usuario creado correctamente'},
                status=status.HTTP_201_CREATED
            )

        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

   

    
        
class UsersDetailApiView(APIView):

    def get(self, request, pk):
        """Retorna un listado con todas los usuarios en la base"""

        user = Users.objects.get(pk=pk)
        user_serializer = UserSerializer(user)

        return Response(
            data=user_serializer.data,
            status=status.HTTP_200_OK
        )

    def delete(self, request, pk):
        """Elimina usuario"""

        user = Users.objects.get(pk=pk)
        user.delete()

        return Response(
            {'message': 'Usuario eliminado correctamente'},
            status=status.HTTP_200_OK
        )

        
