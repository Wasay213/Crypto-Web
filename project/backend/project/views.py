from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.db import transaction
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from rest_framework.parsers import JSONParser, FormParser, MultiPartParser

class SignUpView(APIView):
    permission_classes = [AllowAny]
    parser_classes = [JSONParser, FormParser, MultiPartParser]
    
    def get(self, request):
        return Response({
            "message": "Please use POST method to sign up",
            "required_fields": {
                "username": "your username",
                "password": "your password"
            }
        })

    @transaction.atomic
    def post(self, request, format=None):
        try:
            data = request.data
            username = data.get('username', '').strip()
            password = data.get('password', '').strip()
            
            if not username or not password:
                return Response({
                    'error': 'Username and password are required'
                }, status=status.HTTP_400_BAD_REQUEST)

            if User.objects.filter(username=username).exists():
                return Response({
                    'error': f'Username "{username}" is already taken. Please choose another.'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            user = User.objects.create_user(
                username=username,
                password=password
            )
            
            refresh = RefreshToken.for_user(user)
            
            return Response({
                'token': str(refresh.access_token),
                'refresh': str(refresh),
                'username': username,
                'message': 'Registration successful!'
            }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            print(f"Registration error: {str(e)}")
            return Response({
                'error': 'Registration failed. Please try again.'
            }, status=status.HTTP_400_BAD_REQUEST)

    def options(self, request, *args, **kwargs):
        """
        Handle responding to requests for the OPTIONS HTTP verb.
        """
        response = Response({
            'actions': {
                'POST': {
                    'username': {
                        'type': 'string',
                        'required': True,
                        'description': 'Username for registration'
                    },
                    'password': {
                        'type': 'string',
                        'required': True,
                        'description': 'Password for registration'
                    }
                }
            }
        })
        return response
