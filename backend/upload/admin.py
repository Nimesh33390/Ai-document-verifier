from django.contrib import admin
from .models import Docs

@admin.register(Docs)
class DocsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'uploaded_at', 'pdf_content', 'is_verified')  # Add fields you want to see

# admin.site.register(Docs)
