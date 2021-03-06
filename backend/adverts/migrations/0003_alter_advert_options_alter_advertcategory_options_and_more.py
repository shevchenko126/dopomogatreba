# Generated by Django 4.0.5 on 2022-06-27 19:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('adverts', '0002_advertcategory'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='advert',
            options={'verbose_name': 'Advert', 'verbose_name_plural': 'Adverts'},
        ),
        migrations.AlterModelOptions(
            name='advertcategory',
            options={'verbose_name': 'Advert category', 'verbose_name_plural': 'Advert categories'},
        ),
        migrations.AddField(
            model_name='advert',
            name='author',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='advert',
            name='description',
            field=models.TextField(blank=True, max_length=1000, null=True),
        ),
        migrations.CreateModel(
            name='AdvertResponse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Advert response',
                'verbose_name_plural': 'Advert responses',
            },
        ),
    ]
