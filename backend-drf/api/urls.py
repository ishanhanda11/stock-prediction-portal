from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from accounts.views import RegisterView, ProtectedView
urlpatterns = [
    path('register/',RegisterView.as_view() , name='register'),
    path('protected-view/',ProtectedView.as_view(), name='protected-view' ),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]