from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Docs
from .serializers import DocsSerializer

class DocsUploadView(APIView):
    def get(self, request):
        docs = Docs.objects.all()
        serializer = DocsSerializer(docs, many=True)
        return Response(serializer.data)

    def post(self, request):
        title = request.data.get('title')
        pdf_file = request.FILES.get('pdf_file')

        if not pdf_file or pdf_file.content_type != 'application/pdf':
            return Response({"error": "Invalid or missing PDF file."}, status=status.HTTP_400_BAD_REQUEST)

        pdf_data = pdf_file.read()

        doc = Docs.objects.create(
            title=title,
            pdf_content=pdf_data
        )

        return Response(DocsSerializer(doc).data, status=status.HTTP_201_CREATED)
