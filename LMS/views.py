from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.contrib import messages
from rest_framework import views
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

class LoginView(views.APIView):

    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(request, email=email, password=password)
        if user is not None:
            token = RefreshToken.for_user(user)
            return Response({"access": str(token.access_token), "refresh": str(token)})
        else:
            return Response({"error": "Invalid Email or Password"})