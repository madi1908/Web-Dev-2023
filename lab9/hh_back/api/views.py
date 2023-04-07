from django.shortcuts import render
from .models import *
from django.http.response import JsonResponse


def company_list(request):
    companies = Company.objects.all()
    company_json = [company.to_json() for company in companies]
    return JsonResponse(company_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(company.to_json(), safe=False)


def company_vacancies(request, id):
    company = Company.objects.get(id=id)
    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancy_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancy_json, safe=False)


def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(vacancy.to_json())


def top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancy_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancy_json, safe=False)
