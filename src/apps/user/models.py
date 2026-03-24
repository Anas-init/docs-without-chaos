from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime
# Create your models here.
class User(AbstractUser):
    username=models.CharField(max_length=255,unique=True)
    email=models.CharField(max_length=255)
    password=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)  # if user logins then he created a doc then he become owner.. 
    class Meta:
        verbose_name="User"
        verbose_name_plural="Users"

        