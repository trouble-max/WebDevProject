# Generated by Django 2.2 on 2022-04-23 00:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20220423_0633'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='city',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shop', to='api.City'),
        ),
    ]
