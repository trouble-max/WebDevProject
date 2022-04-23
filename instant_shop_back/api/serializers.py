from rest_framework import serializers
from .models import City,Shop,Category,Product


class CitySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    shop = serializers.CharField()

    def create(self, validated_data):
        city = City.objects.create(name=validated_data['name'], shop =validated_data['shop'])
        return city

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.shop = validated_data['shop']
        instance.save()
        return instance


class ShopSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    categories = serializers.CharField()

    def create(self, validated_data):
        shop = Shop.objects.create(name=validated_data['name'], description=validated_data['description'], categories = validated_data['category'])
        return shop

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.description = validated_data['description']
        instance.categories = validated_data['category']
        instance.save()
        return instance


class CategorySerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    class Meta:
        model = Category
        fields = ('id', 'name')


class ProductSerializer(serializers.ModelSerializer):
    #category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'filename', 'height','width', 'rating','category','shop_id')


class ShopSerializers(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'description', 'categories')


class CitySerializers(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'shops')

