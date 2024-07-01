from django.db import models

class short(models.Model):
      content=models.CharField(max_length=100)
      Date=models.DateField(auto_now_add=True)
      
      