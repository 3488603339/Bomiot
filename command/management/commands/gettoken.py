from django.conf import settings
import os
import re


def validate_mail(email):
    if len(email) >= 7:
        email_check = re.match("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$", email)
        if email_check is not None:
            return True
        return False


def get_token(name):
    token_ini = os.path.join(settings.BASE_DIR, 'token.ini')
    with open(token_ini, "w") as f:
        f.write("[token]\n")
        f.write(f"email = {name}\n")
        f.write(f"token = {name}\n")
    f.close()
    return f"Success get developer's token, your token is {name}"
