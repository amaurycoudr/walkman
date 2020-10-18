from django.core.mail import send_mail
from api.settings import EMAIL_HOST_USER
def sign_mail(mail,OTP):
    """"""
    mail_message = "Your secret code is %s" % (OTP,)
    print(mail_message)
    send_mail(
        'Inscription WalkMan',
        mail_message,
        EMAIL_HOST_USER,
        [mail],
        fail_silently=False,
    )