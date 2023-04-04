from rest_framework.exceptions import APIException
from utils.jwtauth import parse_payload
from django.contrib.auth import get_user_model

User = get_user_model()

class Authtication(object):
    def authenticate(self, request):
        if request.path in ['/docs/', '/swagger/']:
            return (False, None)
        else:
            token = request.META.get('HTTP_TOKEN', '')
            result = parse_payload(token)
            if token:
                user_data = User.objects.filter(id=result.get('data').get('id'))
                if user_data.exists():
                    user = user_data.first()
                    return (user, True)
                else:
                    raise APIException({"detail": "User Does Not Exists"})
            else:
               raise APIException({"detail": "Please Add Token To Your Request Headers"})

    def authenticate_header(self, request):
        pass
