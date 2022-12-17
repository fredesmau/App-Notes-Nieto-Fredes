from django.db import models

# Create your models here.
class Notes(models.Model):
    
    # Atributos
    title = models.CharField(
        max_length=20,
        unique=True,
        verbose_name='Titulo'
        )
    
    desc = models.CharField(
        max_length=100,
        unique=True,
        verbose_name='Descripcion'
    )
    
    fecha = models.DateTimeField(
        verbose_name='Fecha'
    )