# Generated by Django 3.2.8 on 2022-06-26 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chartjs', '0002_social972'),
    ]

    operations = [
        migrations.RenameField(
            model_name='social972',
            old_name='city',
            new_name='city1',
        ),
        migrations.RemoveField(
            model_name='social972',
            name='course',
        ),
        migrations.RemoveField(
            model_name='social972',
            name='email',
        ),
        migrations.RemoveField(
            model_name='social972',
            name='gender',
        ),
        migrations.AlterField(
            model_name='social972',
            name='birthyear',
            field=models.IntegerField(choices=[(1980, '1980'), (1981, '1981'), (1982, '1982'), (1983, '1983')]),
        ),
        migrations.AlterField(
            model_name='social972',
            name='zipcode',
            field=models.IntegerField(),
        ),
    ]
