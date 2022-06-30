from django.contrib import admin
<<<<<<< HEAD
from content.models import Blog, BlogCategory
# Register your models here.
=======
from content.models import *

# Register your models here.

>>>>>>> 1ebbf31daafbc5ee37967331a558b96b76b8e28c
admin.site.register(Blog)
admin.site.register(BlogCategory)