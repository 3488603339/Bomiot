import os, json
from pathlib import Path
from configparser import ConfigParser, RawConfigParser
from django.core.management.utils import get_random_secret_key
from loguru import logger

BASE_DIR = Path(__file__).resolve().parent.parent

CONFIG_DIR = os.path.join(BASE_DIR, 'config')
CONFIG = ConfigParser()
CONFIG.read(os.path.join(CONFIG_DIR, 'config.ini'), encoding='utf-8')
SELECTIONS = CONFIG.sections()

LOG_DIR = os.path.join(BASE_DIR, 'log')

if os.path.exists(LOG_DIR) is False:
    os.makedirs(LOG_DIR)

logger.add(os.path.join(LOG_DIR, 'error.log'), rotation='1 days', retention='30 days', encoding='utf-8')

SECRET_KEY = get_random_secret_key()

DEBUG = CONFIG.getboolean('site', 'debug', fallback=False)

VERSIONS = '0.1.0'

ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'command',
    'crispy_forms',
    'corsheaders',
    'django_extensions',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_filters',
    'single_session',
    'silk'
]

APP_LIST = os.listdir(BASE_DIR)
for APP in APP_LIST:
    ADD_APP_DIR = os.path.join(os.path.join(BASE_DIR, APP), 'config.ini')
    if os.path.exists(ADD_APP_DIR):
        INSTALLED_APPS.append(APP)

print(INSTALLED_APPS)

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'silk.middleware.SilkyMiddleware',
]

ROOT_URLCONF = 'bomiot.urls'
SESSION_ENGINE = 'django.contrib.sessions.backends.db'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates']
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'bomiot.wsgi.application'
CSRF_COOKIE_SAMESITE = None

DATABASE_MAP = {
    'sqlite': 'django.db.backends.sqlite3',
    'mysql': 'django.db.backends.mysql',
    'postgresql': 'django.db.backends.postgresql_psycopg2',
    'oracle': 'django.db.backends.oracle',
}

db_engine = CONFIG.get('database', 'engine', fallback='sqlite')
if db_engine == 'sqlite':
    DATABASES = {
        'default': {
            'ENGINE': DATABASE_MAP[db_engine],
            'NAME': os.path.join(CONFIG_DIR, 'db.sqlite3'),
            'OPTIONS': {
                'timeout': 20,
            }
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': DATABASE_MAP[CONFIG['database']['engine']],
            'NAME': CONFIG['database']['name'],
            'USER': CONFIG['database']['user'],
            'PASSWORD': CONFIG['database']['password'],
            'HOST': CONFIG['database']['host'],
            'PORT': CONFIG['database']['port'],
        }
    }

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LOGIN_URL = 'login'

# LANGUAGE_CODE = CONFIG.get('locale', 'language', fallback='zh-hans')

TIME_ZONE = CONFIG.get('local', 'timezone', fallback='Asia/Shanghai')

USE_I18N = True

USE_L10N = True

USE_TZ = False

STATIC_URL = '/static/'
if DEBUG:
    STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static'), ]
    STATICFILES_DIR = os.path.join(BASE_DIR, 'static')
else:
    STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
if os.path.exists(MEDIA_ROOT) is False:
    os.mkdir(MEDIA_ROOT)

# LANGUAGES = (
#     ('zh-hans', ('中文简体')),
#     ('zh-hant', ('中文繁體')),
#     ('en', ('english')),
# )
#
# LOCALE_PATHS = (
#     os.path.join(BASE_DIR, 'locale'),
# )

ALLOWED_IMG = CONFIG.get("image_upload", "suffix_name", fallback="jpg,jpeg,gif,png,bmp,webp").split(",")

HAYSTACK_CONNECTIONS = {
    'default': {
        'ENGINE': 'app_doc.search.whoosh_cn_backend.WhooshEngine',
        'PATH': os.path.join(BASE_DIR, 'whoosh_index'),
    }
}

HAYSTACK_SEARCH_RESULTS_PER_PAGE = 10
HAYSTACK_SIGNAL_PROCESSOR = 'haystack.signals.RealtimeSignalProcessor'
HAYSTACK_CUSTOM_HIGHLIGHTER = "app_doc.search.highlight.MyHighLighter"

DATA_UPLOAD_MAX_MEMORY_SIZE = None

CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = True
CORS_ORIGIN_WHITELIST = ()

CORS_ALLOW_METHODS = (
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
    'VIEW',
)

CORS_ALLOW_HEADERS = (
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
    'token',
    'language',
    'operator',
    'device',
    'app-id',
    'event-sign'
)

LAZY_RENDERING = True
NATIVE_SCROLLBARS = True

SILKY_PYTHON_PROFILER = True

SILKY_PYTHON_PROFILER_BINARY = True
SILKY_PYTHON_PROFILER_RESULT_PATH = '/performance/'

INTERNAL_IPS = [
    '127.0.0.1',
    'localhost'
]
