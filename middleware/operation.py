from django.utils.deprecation import MiddlewareMixin


class Recorder(MiddlewareMixin):
    def path_check(self, request):
        if str(request.path).startswith('/assets/'):
            return False
        elif str(request.path).startswith('/statics/'):
            return False
        elif str(request.path).startswith('/favicon'):
            return False
        else:
            return True

    def process_request(self, request):
        if self.path_check(request):
            pass
            print("md1  process_request 方法。", request.method)
