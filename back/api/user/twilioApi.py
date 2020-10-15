from twilio.rest import Client
from variable_env import AUTH_TOKEN,ACCOUNT_SID

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = ACCOUNT_SID

auth_token = AUTH_TOKEN

client = Client(account_sid, auth_token)


def twilioSMS(phone, OTP):
    phoneFinal='+'+phone
    print(phoneFinal)
    client.messages \
                    .create(
                         body="Your secret code is "+OTP,
                         from_='+18582615702',
                         to=phoneFinal
                     )


