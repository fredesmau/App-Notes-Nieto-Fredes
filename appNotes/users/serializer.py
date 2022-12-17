# Rest imports
from rest_framework import serializers

# Models
from users.models import Users

# Serializer
class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Users
        fields = '__all__'