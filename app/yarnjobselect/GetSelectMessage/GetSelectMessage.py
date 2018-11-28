import requests
import os
import configparser

class select_obj(object):
    def __init__(self):
        '''
        BASE_PATH: 获取配置文件目录
        conf_file: 组装配置文件绝对路径
        '''
        BASE_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        conf_file = os.path.join(BASE_PATH,"conf","select.ini")
        self.conf = configparser.ConfigParser()
        self.conf.read(conf_file,encoding="utf-8")
        self.log_dir = self.conf["LogDir"]["SelectLogDir"]


    def read_conf(self,env):
        '''
        :param env: 传入 环境配置
        :return: 返回 环境访问地址 的 IP
        '''
        if env == "Dev":
            resc_ip = self.conf["EnvIP"]["Dev"]
            resc_port = self.conf["EnvPort"]["Dev"]
            return  resc_ip,resc_port
        elif env == "Pro":
            resc_ip = self.conf["EnvIP"]["Por"]
            resc_port = self.conf["EnvPort"]["Pro"]
            return  resc_ip,resc_port
        elif env == "Qa":
            resc_ip = self.conf["EnvIP"]["Qa"]
            resc_port = self.conf["EnvPort"]["Qa"]
            return  resc_ip,resc_port
        else:
            return "404"

    def filter_msg(self,app_list):
        '''
        :param app_list: 传入 Yarn ResourceManager REST 接口返回的信息
        :return: 返回挑选后的 Yarn Application 信息
        '''
        result_list = []

        for msg in app_list:
            tmp_dict = {}
            tmp_dict["id"] = msg["id"]
            tmp_dict["user"] = msg["user"]
            tmp_dict["name"] = msg["name"]
            tmp_dict["state"] = msg["state"]
            tmp_dict["finalStatus"] = msg["finalStatus"]
            tmp_dict["applicationType"] = msg["applicationType"]
            tmp_dict["elapsedTime"] = msg["elapsedTime"]
            tmp_dict["allocatedMB"] = msg["allocatedMB"]
            result_list.append(tmp_dict)

        return result_list

    def get_rest(self,resc):
        '''
        :param resc_ip: 传入 访问地址 IP
        :return:
        '''
        ip,port = resc
        try:
            url = "http://%s:%s/ws/v1/cluster/apps"%(ip,port)
            r = requests.get(url)
            str_json= self.filter_msg(r.json()["apps"]["app"])
            return str_json
        except:
            print("[ ERROR ]ResourceManager IP is error [ %s ]"%ip)
            return  "404"


def select_main(env):
    slct = select_obj()
    resc = slct.read_conf(env)
    if resc == "404":
        return resc
    else:
        call_web = slct.get_rest(resc)
        return call_web

