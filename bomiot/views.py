from django.shortcuts import render, redirect
import json
import mimetypes
from django.conf import settings
from django.http import StreamingHttpResponse, JsonResponse
from wsgiref.util import FileWrapper
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from utils.jwtauth import create_token, parse_payload

User = get_user_model()


def logins(request):
    data = json.loads(request.body.decode().replace("'", '"'))
    user = authenticate(username=data['username'], password=data['pwd'])
    context = {}
    if user:
        login(request, user)
        user_info = {
            "id": user.id,
            "username": user.username
        }
        token = create_token(user_info)
        context['token'] = token
        context['msg'] = "Success Login"
        return JsonResponse(context)
    else:
        return JsonResponse({"msg": "User Does Not Exists"})


@login_required
def logouts(request):
    if request.user.is_authenticated:
        logout(request)
        host_name = request.META.get('HTTP_HOST')
        referer_name = request.META.get('HTTP_REFERER')
        if referer_name is None:
            redirect_url = '/'
        else:
            if str(host_name) == str(referer_name.split('/')[2]):
                redirect_url = referer_name
            else:
                redirect_url = '/'
        response = redirect(redirect_url)
        response.delete_cookie('username')
        return response
    else:
        return JsonResponse({'result': 'User Not Log In'})


def registers(request):
    data = json.loads(request.body.decode().replace("'", '"')).get('data')
    context = {}
    if data['username'] == '':
        context['result'] = '100001'
        return JsonResponse(context)
    if data['pwd1'] == '':
        context['result'] = '100002'
        return JsonResponse(context)
    if data['pwd2'] == '':
        context['result'] = '100003'
        return JsonResponse(context)
    if data['pwd1'] != data['pwd2']:
        context['result'] = '100004'
        return JsonResponse(context)
    user_exists = User.objects.filter(username=str(data['username']))
    if user_exists.exists():
        context['result'] = '100005'
        return JsonResponse(context)
    else:
        user = User.objects.create_user(username=str(data['username']),
                                        password=str(data['pwd1']))
        user.save()
        login(request, user)
        context['result'] = 'Success'
        return JsonResponse(context)


def check_token(request):
    token = request.META.get('HTTP_TOKEN')
    context = parse_payload(token)
    return JsonResponse(context)


def favicon(request):
    path = str(settings.BASE_DIR) + '/static/icons/logo.png'
    content_type, encoding = mimetypes.guess_type(path)
    resp = StreamingHttpResponse(FileWrapper(open(path, 'rb')), content_type=content_type)
    resp['Cache-Control'] = 'max-age=864000000000'
    return resp


def statics(request):
    path = str(settings.BASE_DIR) + '/templates/dist/spa' + request.path_info
    content_type, encoding = mimetypes.guess_type(path)
    resp = StreamingHttpResponse(FileWrapper(open(path, 'rb')), content_type=content_type)
    resp['Cache-Control'] = 'max-age=864000000000'
    return resp


def page_not_found(request, exception):
    return render(request, '404.html', status=404)


def permission_denied(request, exception):
    return render(request, '403.html', status=403)


def create_super_user():
    try:
        if User.objects.filter(is_superuser=True).exists() is False:
            User.objects.create_superuser('admin', 'elvis.shi@56yhz.com', 'admin')
    except:
        pass
