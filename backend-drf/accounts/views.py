from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerialzer
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
# Create your views here.
from rest_framework.response import Response
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerialzer
    permission_classes = [AllowAny]

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        response = {
            'status':'request is accepted'
        }
        return Response(response)