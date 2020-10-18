from twilio.rest import Client
import os

account_sid = os.environ.get('ACCOUNT_SID')

auth_token = os.environ.get('AUTH_TOKEN')

client = Client(account_sid, auth_token)


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
    print(phoneFinal)
    client.messages \
        .create(
        body="Your secret code is %s" % (OTP,),
        from_='+33644609917',
        to=phoneFinal
    )
