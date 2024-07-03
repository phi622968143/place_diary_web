from django.db import models
import uuid

class Article(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    series=models.ForeignKey("series.Serie", on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    image = models.ImageField(upload_to='Media/', null=True, blank=True)
    postDate = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
