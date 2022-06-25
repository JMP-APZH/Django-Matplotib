from django.shortcuts import render
from .models import Users972
import datetime
from django.db.models import Sum


# Create your views here.

def studentsView(request):
    cs_no = Users972.objects.filter(course='Computer Science').count()
    cs_no = int(cs_no)
    print('Number of Computer Science Students Are',cs_no)

    ce_no = Users972.objects.filter(course='Computer Engineering').count()
    ce_no = int(ce_no)
    print('Number of Computer Engineering Students Are',ce_no)

    se_no = Users972.objects.filter(course='Software Engineering').count()
    se_no = int(se_no)
    print('Number of Software Engineering Students Are',se_no)

    sec_no = Users972.objects.filter(course='Computer Security').count()
    sec_no = int(sec_no)
    print('Number of Computer Security Students Are',sec_no)

    male_no = Users972.objects.filter(gender='Male').count()
    male_no = int(male_no)
    print('Number of Male Are',male_no)

    female_no = Users972.objects.filter(gender='Female').count()
    female_no = int(female_no)
    print('Number of Female Are',female_no)

    gender_list = ['Male', 'Female']
    gender_number = [male_no, female_no]

    course_list = ['Computer Science', 'Computer Engineering', 'Software Engineering', 'Computer Security']
    number_list = [cs_no, ce_no, se_no, sec_no]
    context = {'course_list':course_list, 'number_list':number_list, 'gender_list':gender_list, 'gender_number':gender_number}
    return render(request, 'officer_home.html', context)


def studentsView2(request):
    cs_no = Users972.objects.filter(course='Computer Science').count()
    cs_no = int(cs_no)
    print('Number of Computer Science Students Are',cs_no)

    ce_no = Users972.objects.filter(course='Computer Engineering').count()
    ce_no = int(ce_no)
    print('Number of Computer Engineering Students Are',ce_no)

    se_no = Users972.objects.filter(course='Software Engineering').count()
    se_no = int(se_no)
    print('Number of Software Engineering Students Are',se_no)

    sec_no = Users972.objects.filter(course='Computer Security').count()
    sec_no = int(sec_no)
    print('Number of Computer Security Students Are',sec_no)

    male_no = Users972.objects.filter(gender='Male').count()
    male_no = int(male_no)
    print('Number of Male Are',male_no)

    female_no = Users972.objects.filter(gender='Female').count()
    female_no = int(female_no)
    print('Number of Female Are',female_no)

    # city_no = Users972.counter
    # city_no = int(city_no)
    # print('Number of cities registered',city_no)

    person_no = Users972.objects.count()
    print('Number of users created:',person_no)

    person_list = Users972.objects.all()
    city_listing = []
    city_users = []
    for x in person_list:
        c1 = Users972.objects.filter(city=x.city).count()
        city_listing.append(x.city)
        city_users.append(c1)
        print('The city',x.city,' has ',c1,' users')
        print('The list of registered cities is:',city_listing)
        # city_listing.save()
    print('The list of registered cities is:',city_listing)
    print('The nb of users by registered cities is:',city_users)
    

    person_list = Users972.objects.all()
    print([e.firstname for e in person_list])
    print([e.city for e in person_list])

    gender_list = ['Male', 'Female']
    gender_number = [male_no, female_no]

    city_list = Users972.objects.all()
    print(city_list)

    course_list = ['Computer Science', 'Computer Engineering', 'Software Engineering', 'Computer Security']
    number_list = [cs_no, ce_no, se_no, sec_no]
    context = {'course_list':course_list, 'number_list':number_list, 'gender_list':gender_list, 'gender_number':gender_number}
    return render(request, 'officer_home2.html', context)