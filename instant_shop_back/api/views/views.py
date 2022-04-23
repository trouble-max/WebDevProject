from django.shortcuts import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated

from api.models import Product, Category, Shop, City
from api.serializers import ProductSerializer


class products(APIView):
    def get_object(self, shop_id, categ_id):
        try:
            return Product.objects.filter(category_id=categ_id).filter(shop_id=shop_id)
        except Product.DoesNotExist as e:
            raise Http404

    def get(self, request, shop_id=None, categ_id=None):
        product = self.get_object(shop_id, categ_id)
        serializer = ProductSerializer(product, many=True)
        permission_classes = (IsAuthenticated,)
        return Response(serializer.data)


class products_detail(APIView):
    def get_object(self, prod_id):
        try:
            return Product.objects.filter(id=prod_id)
        except Product.DoesNotExist as e:
            raise Http404

    def get(self, request, prod_id=None):
        product = self.get_object(prod_id)
        serializer = ProductSerializer(product, many=True)
        permission_classes = (IsAuthenticated,)
        return Response(serializer.data)


def check(request):
    print(Shop.objects.all())