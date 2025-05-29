from django import forms

class DocsUploadForm(forms.Form):
    title = forms.CharField(max_length=255)
    pdf_file = forms.FileField()
