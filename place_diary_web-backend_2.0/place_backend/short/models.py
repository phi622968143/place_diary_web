from django.db import models

class short(models.Model):
      series=models.ForeignKey("series.Serie", on_delete=models.CASCADE)##appname.modelname
      content=models.CharField(max_length=100)
      postDate=models.DateField(auto_now_add=True)
      
      