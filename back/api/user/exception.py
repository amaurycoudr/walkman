from rest_framework.exceptions import APIException

class WrongCode(APIException):
    status_code = 400
    default_detail = {'error':1}
    default_code = 'service_unavailable'

class AlreadyUsed(APIException):
    status_code = 400
    default_detail = {'error':2}
    default_code = 'service_unavailable'

class NotFound(APIException):
    status_code = 400
    default_detail = {'error':3}
    default_code = 'service_unavailable'

class ToSoon(APIException):

    status_code = 400
    default_detail = {'error':4}
    default_code = 'service_unavailable'