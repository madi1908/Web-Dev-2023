
from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:company_id>', company_detail),
    path('companies/<int:id>/vacancies', company_vacancies),
    path('vacancies', vacancies),
    path('vacancies/<int:id>', vacancy_detail),
    path('vacancies/top_ten', top_ten)
]
