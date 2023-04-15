
from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:company_id>', company_details),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies', VacanciesAPIView.as_view()),
    path('vacancies/<int:id>', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten', top_ten_vacancies)
]
