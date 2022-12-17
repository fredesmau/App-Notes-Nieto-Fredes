# Generated by Django 4.1.4 on 2022-12-17 03:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Nombre')),
                ('lastName', models.CharField(max_length=50, verbose_name='Apellido')),
                ('userName', models.CharField(max_length=20, unique=True, verbose_name='Nombre de Usuario')),
                ('email', models.CharField(max_length=30, unique=True, verbose_name='Email')),
                ('password', models.CharField(max_length=30, verbose_name='Contraseña')),
            ],
        ),
    ]
