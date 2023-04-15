from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField()
    city = models.CharField(max_length=250)
    address = models.CharField(max_length=250)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'city': self.city,
            'address': self.address
        }

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'


class Vacancy(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField()
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'salary': self.salary,
            'company': self.company.name
        }

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'
