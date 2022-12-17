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
        

        
