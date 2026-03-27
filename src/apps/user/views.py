
from .serializers import UserRegisterSerializer,UserLoginSerializer
from rest_framework import generics
from rest_framework.response import Response

class UserRegisterLoginView(generics.CreateAPIView):

    def create(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        if serializer.__class__.__name__ == "UserRegisterSerializer":
            user=self.perform_create(serializer)
            res=get_response(user)
            return Response()
            
        else:
            # authenticate
            
            return Response()



    def get_serializer_class(self):
        if self.request.resolver_match.url_name=="register":
            serializer_class=UserRegisterSerializer
        serializer_class=UserLoginSerializer
        return serializer_class
    
    
