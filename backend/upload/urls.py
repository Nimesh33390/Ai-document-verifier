from django.urls import path
from .views import DocsUploadView

urlpatterns = [
    path('upload/', DocsUploadView.as_view(), name='doc-upload'),
]
