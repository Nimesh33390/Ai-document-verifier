from django.db import models

class Docs(models.Model):
    title = models.CharField(max_length=255)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    content = models.BinaryField()
    is_verified = models.BooleanField(default=False)  # True = verified, False = not verified

    def __str__(self):
        return self.title


