from rest_framework import serializers
from . models import User
class UserRegisterSerializer(serializers.ModelSerializer):
    confirm_password= serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = User
        fields=['email', 'username', 'password', 'confirm_password']  # we can handle this password matching on the frontend as well if not we can check it inside  validate method
                                                                      
        extra_kwargs={
        'password':{'write_only':True}
        }
    def create(self, validated_data):
        if User.objects.filter(name=validated_data.get('name')).exists():
            raise serializers.ValidationError("Username already exists")
        if User.objects.filter(email=validated_data.get('email')).exists():
            raise serializers.ValidationError("Email already exists")
        return User.objects.create_user(**validated_data)

class UserLoginSerializer(serializers.ModelSerializer):
    
    pass