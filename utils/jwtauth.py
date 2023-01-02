import jwt
import datetime
from jwt import exceptions
from django.conf import settings
JWT_SALT = "ds()udsjo@jlsdosjf)wjd_#(#)$"


def create_token(payload):
    headers = {
        "type": "jwt",
        "alg": "HS256"
    }
    payload['exp'] = datetime.datetime.utcnow() + datetime.timedelta(seconds=settings.BOMIOT_JWT_TIME)
    result = jwt.encode(payload=payload, key=JWT_SALT, algorithm="HS256", headers=headers).decode("utf-8")
    return result


def parse_payload(token):
    result = {"status": False, "data": None, "error": None}
    try:
        verified_payload = jwt.decode(token, JWT_SALT, True)
        result["status"] = True
        result['data'] = verified_payload
    except exceptions.ExpiredSignatureError:
        result['error'] = 'Token Expired'
    except jwt.DecodeError:
        result['error'] = 'Token Authentication Failed'
    except jwt.InvalidTokenError:
        result['error'] = 'Illegal Token'
    return result