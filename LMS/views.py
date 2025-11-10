from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.contrib import messages
from rest_framework import views
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def current_user(request):
    user = request.user
    return Response({
        "email": user.email,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "role": user.role,
    })

def post(self, request, *args, **kwargs):
    email = request.data.get("email")
    password = request.data.get("password")
    user = authenticate(request, email=email, password=password)
    if user is not None:
        token = RefreshToken.for_user(user)
        return Response({"access": str(token.access_token), "refresh": str(token)})
    else:
        return Response({"error": "Invalid Email or Password"})