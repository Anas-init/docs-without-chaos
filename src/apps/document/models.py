from django.db import models
from apps.user.models import User

# Create your models here.
class Document(models.Model):
    title=models.CharField(max_length=255 , verbose_name="document name")
    created_at=models.DateTimeField(auto_now_add=True,verbose_name="document creation time")
    updated_at=models.DateField(auto_now=True)
    content=models.TextField(blank=True)
    file=models.FileField(upload_to="media/")
    owner=models.ForeignKey(User,on_delete=models.CASCADE)
    collaborators = models.ManyToManyField(User, related_name="shared_docs")

    class Meta:
        verbose_name="Document"
        verbose_name_plural="Documents"

        

    
