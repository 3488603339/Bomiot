import datetime


def temp_time_datetime(data):
    format_time = datetime.datetime.fromtimestamp(data, tz=None)
    return format_time
