from django_filters import FilterSet
from django.contrib.auth import get_user_model

User = get_user_model()


class Filter(FilterSet):
    class Meta:
        model = User
        fields = {
            "id": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'in', 'range'],
            "type": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'in', 'range'],
            "update_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']
        }
