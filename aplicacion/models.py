from django.db import models


# Create your models here.




class Usuario(models.Model):
    nombre=models.CharField(max_length=200)
    correo=models.EmailField(max_length=200)
    telefono=models.CharField(max_length=15)
    fecha=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Usuario: {self.nombre} "

