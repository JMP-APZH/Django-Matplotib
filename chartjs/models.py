from django.db import models
# from timezone_field import TimeZoneField
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.forms import modelformset_factory

# Create your models here.
class Users972(models.Model):

    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    course = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)

    def __str__(self):
        return self.firstname

class Social972(models.Model):

    birthdate_year = [
        (1980, '1980'),
        (1981, '1981'),
        (1982, '1982'),
        (1983, '1983')
    ]

    birthyear = models.IntegerField(choices=birthdate_year)
    zipcode = models.IntegerField()
    city1 = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.birthyear} - {self.zipcode} - {self.city1}'

