from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse
from utils.jwtauth import parse_payload


class JwtAuthorizationMiddleware(MiddlewareMixin):
    def process_request(self, request):
        allow_path = ['/', '/login/']
        if request.path_info in allow_path:
            return

        if request.path_info.startswith('/admin/'):
            return

        if request.path_info.startswith('/statics/'):
            return

        if request.path_info.startswith('/js/'):
            return

        if request.path_info.startswith('/css/'):
            return

        if request.path_info.startswith('/assets/'):
            return

        authorization = request.META.get('HTTP_TOKEN', '')
        auth = authorization.split()
        if not auth:
            return JsonResponse({'error': 'Token request header not obtained', 'status': False})
        if auth[0].lower() != 'jwt':
            return JsonResponse({'error': 'Authentication method error in Token request header', 'status': False})
        if len(auth) >= 1:
            return JsonResponse({'error': "Illegal Token Request Header", 'status': False})

        token = auth[1]
        result = parse_payload(token)
        if not result['status']:
            return JsonResponse(result)
        request.user_info = result['data']
