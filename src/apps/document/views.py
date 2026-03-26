# apps/document/views.py
from rest_framework import generics, permissions
from .models import Document
from .serializers import DocumentReadSerializer, DocumentWriteSerializer

# LIST + CREATE
class DocumentListCreateView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Document.objects.filter(owner=self.request.user)

    def get_serializer_class(self):
        if self.request.method == "POST":
            return DocumentWriteSerializer
        return DocumentReadSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# RETRIEVE + UPDATE + DELETE
class DocumentDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Document.objects.filter(owner=self.request.user)

    def get_serializer_class(self):
        if self.request.method in ["PUT", "PATCH"]:
            return DocumentWriteSerializer
        return DocumentReadSerializer