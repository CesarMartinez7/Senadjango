from django.db import models


# Create your models here.




class Usuario(models.Model):
    nombre=models.CharField(max_length=200)
    correo=models.EmailField(max_length=200)
    telefono=models.CharField(max_length=15)
    fecha=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return {self.nombre} 

class Productos(models.Model):
    coloresOpciones=[
        ("AM","AMARILLO"),
        ("AZ","AZUL"),
        ("RO","ROJO")
    ]
    nombre=models.CharField(max_length=200)
    descripcion=models.TextField(max_length=300)
    precio=models.FloatField()
    colores=models.CharField(choices=coloresOpciones,default="Gris",max_length=2)


    def __str__(self):
        return self.nombre