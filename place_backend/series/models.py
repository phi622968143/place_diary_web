from django.db import models

class Serie(models.Model):##first latter capital
    title=models.CharField(max_length=50)
    intro=models.CharField(max_length=100)
    postDate=models.DateField(auto_now_add=True)

