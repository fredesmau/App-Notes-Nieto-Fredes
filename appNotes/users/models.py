from django.db import models

# Create your models here.
class Users(models.Model):
    
    # Atributos
    name = models.CharField(
        max_length=50,
        verbose_name='Nombre'
        )
    
    lastName = models.CharField(
        max_length=50,
        verbose_name='Apellido'
    )
    
    userName = models.CharField(
        max_length=20,
        unique=True,
        verbose_name='Nombre de Usuario'
    )

    email = models.CharField(
        max_length=30,
        unique=True,
        verbose_name='Email'
    )

    password = models.CharField(
        max_length=30,
        verbose_name='Contraseña'
    )