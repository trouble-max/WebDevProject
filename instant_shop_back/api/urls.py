from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from api.views import check,products_detail, products
urlpatterns=[
    path('login/', obtain_jwt_token),
    path('products/<int:shop_id>/<int:categ_id>/', products.as_view()),
    path('products/<int:prod_id>/', products_detail.as_view()),

]