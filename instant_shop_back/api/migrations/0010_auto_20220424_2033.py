# Generated by Django 2.2 on 2022-04-24 14:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_category_shop_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='shop_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='category', to='api.Shop'),
        ),
    ]
