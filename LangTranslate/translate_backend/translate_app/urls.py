# translate_app/urls.py

from django.urls import path
from .views import translate

urlpatterns=[
	path('translate/', translate, name='translate')
]