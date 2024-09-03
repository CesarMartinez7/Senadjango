from django.contrib import admin
from .models import Usuario





class TableAdmin(admin.ModelAdmin):
    list_display=("nombre","telefono","correo","fecha")

admin.site.register(Usuario,TableAdmin)