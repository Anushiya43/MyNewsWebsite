# Generated by Django 5.0.3 on 2024-03-17 05:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0002_rename_movie_news'),
    ]

    operations = [
        migrations.RenameField(
            model_name='news',
            old_name='explanation',
            new_name='description',
        ),
        migrations.AddField(
            model_name='news',
            name='country',
            field=models.CharField(default='us', max_length=200),
        ),
        migrations.AddField(
            model_name='news',
            name='language',
            field=models.CharField(default='english', max_length=250),
        ),
        migrations.AddField(
            model_name='news',
            name='url',
            field=models.CharField(default='-', max_length=500),
        ),
        migrations.AlterField(
            model_name='news',
            name='category',
            field=models.CharField(default='general', max_length=200),
        ),
        migrations.AlterField(
            model_name='news',
            name='id',
            field=models.CharField(max_length=250, primary_key=True, serialize=False),
        ),
    ]