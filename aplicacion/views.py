from django.shortcuts import render

from django.http import HttpResponse
from .forms import UsuarioFormulario
from .models import Usuario

# Create your views here.


def formulario(request):
    if request.method=="POST":
        form=UsuarioFormulario(request.POST)
        if form.is_valid():
            print(form.cleaned_data)
            form.save()
        else:
            print(form.errors)
    else:
        form=UsuarioFormulario()
    return render(request,"formulario.html",{
        "formulario":form
    },
    )


def index(request):
    name="cesar"
    return render(request,"index.html",{

    })