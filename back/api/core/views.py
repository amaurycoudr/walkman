from rest_framework.views import APIView
from rest_framework.response import Response
# just for the fake api endpoint
import json
class TestView(APIView):
    def get(self,request):

        return Response({1:'test',2:'ceci est un test'})