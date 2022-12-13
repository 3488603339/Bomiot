import os
from pathlib import Path
from configparser import ConfigParser
from django.utils.deprecation import MiddlewareMixin

BASE_DIR = Path(__file__).resolve().parent.parent

class ConfigMiddleware(MiddlewareMixin):
    def process_request(self, request):
        CONFIG_DIR = os.path.join(BASE_DIR, 'config')
        CONFIG = ConfigParser()
        CONFIG.read(os.path.join(CONFIG_DIR, 'config.ini'), encoding='utf-8')
        SELECTIONS = CONFIG.sections()
        APP_LIST = []
        print(CONFIG.get(SELECTIONS[0], CONFIG.options(SELECTIONS[0])[0]))

    def process_response(self, request, response):
        return response