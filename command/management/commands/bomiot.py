from django.core.management.base import BaseCommand
from .createapp import get_app_name
from .gettoken import get_token, validate_mail


class Command(BaseCommand):
    help = "Bomiot Function"

    def add_arguments(self, parser):
        parser.add_argument('bomiot', nargs='+')

    def handle(self, *args, **options):
        function_data = options.get('bomiot')
        if 'createapp' in options.get('bomiot'):
            if len(function_data) >= 2:
                function_create = get_app_name(function_data[1:])
                print(function_create)
            else:
                print('Please Enter The APP Name')
        elif 'gettoken' in options.get('bomiot'):
            if len(function_data) == 2:
                email_check = validate_mail(function_data[1])
                if email_check:
                    function_create = get_token(function_data[1])
                    print(function_create)
                else:
                    print('Please enter correct e-mail address')
            else:
                print('Please enter your e-mail address')
