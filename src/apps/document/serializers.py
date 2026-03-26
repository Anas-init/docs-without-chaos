
from rest_framework import serializers
from .models import Document

class DocumentReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = "__all__"
        read_only_fields = ["id", "owner", "created_at", "updated_at"]


class DocumentWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ["title", "content"]