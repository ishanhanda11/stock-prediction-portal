from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerialzer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style = {'input_type':'password'})
    class Meta:
        model = User
        fields = ['username','email', 'password']

    def create(self, validated_data):
        # user.objects.create = saves the password in plain text
        # where as user.objects.create_user() = automatically hashes the password so even if compromised cannot be understood by others
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user