from rest_framework.exceptions import APIException
from django.contrib.auth import get_user_model

User = get_user_model()

class Authtication(object):
    def authenticate(self, request):
        if request.path in ['/docs/', '/swagger/']:
            return (False, None)
        else:
            token = request.META.get('HTTP_TOKEN')
            if token:
                if User.objects.filter(openid__exact=str(token)).exists():
                    user = User.objects.filter(openid__exact=str(token)).first()
                    return (True, user)
                else:
                    raise APIException({"detail": "User Does Not Exists"})
            else:
                raise APIException({"detail": "Please Add Token To Your Request Headers"})

    def authenticate_header(self, request):
        pass
