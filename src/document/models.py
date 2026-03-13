from django.db import models
from user.models import User

# Create your models here.
class Document(models.Model):
    name=models.CharField(max_length=255 , verbose_name="document name")
    created_at=models.DateTimeField(auto_now_add=True,verbose_name="document creation time")
    updated_at=models.DateField(auto_add=True)
    content=models.TextField(blank=True)
    file=models.FileField(upload_to="media/")
    owner=models.ForeignKey(User,on_delete=models.CASCADE)

    class Meta:
        verbose_name="Document"
        verbose_plural="Documents"

        

    
