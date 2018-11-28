# Create your views here.
from django.http import HttpResponse
from GetSelectMessage import GetSelectMessage


def selectApp(request):
    env = request.GET["env"]

    env_list = ["Pro","Dev","Qa"]

    if env in env_list:

        msg = GetSelectMessage.select_main(env)
        return  HttpResponse(msg)
    else:
        print("[ ERROR ] 出错的参数 %s"%env)
        return  HttpResponse("[ 404 ] 传入参数有问题")


