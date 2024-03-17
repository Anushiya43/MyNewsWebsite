from backend_api.views import NewsViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'news', views.NewsViewSet, basename='news')
urlpatterns = router.urls
