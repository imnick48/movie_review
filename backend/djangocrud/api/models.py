from django.db import models

class Movie(models.Model):
    name = models.CharField(max_length=100)
    comments = models.JSONField(default=list)

    class Meta:
        db_table = 'TEST'

    def __str__(self):
        return self.name
