from django.contrib import admin
from .models import Usuario
from .models import Productos





class TableAdmin(admin.ModelAdmin):
    list_display=("nombre","telefono","correo","fecha")




class ProductosAdmin(admin.ModelAdmin):
    list_display=("nombre","descripcion","precio","colores")

admin.site.register(Usuario,TableAdmin)
admin.site.register(Productos,ProductosAdmin)