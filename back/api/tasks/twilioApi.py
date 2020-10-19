from twilio.rest import Client
import os
from api import settings
from celery import shared_task
account_sid = settings.ACCOUNT_SID

auth_token = settings.AUTH_TOKEN
client = Client(account_sid, auth_token)

@shared_task
def twilio_sms_sign(phone, OTP):
    """
    Parameters
    ----------
    phone : str
        the phone number without the +
    OTP : str
        the code to send at the user
    """
    phoneFinal = '+%s' % (phone,)

    client.messages \
        .create(
        body="Your secret code is %s" % (OTP,),
        from_='+33644609917',
        to=phoneFinal
    )
