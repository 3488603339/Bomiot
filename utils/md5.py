import datetime, hashlib

def md5(data):
    ctime = str(datetime.datetime.now())
    m = hashlib.md5(bytes(data, encoding="utf-8"))
    m.update(bytes(ctime, encoding="utf-8"))
    return m.hexdigest()