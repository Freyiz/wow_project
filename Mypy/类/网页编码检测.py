import urllib.request
import chardet

def tran(u):
    response = urllib.request.urlopen(u).read()
    dict = chardet.detect(response)
    print('该网页使用的编码是：{}'.format(dict['encoding']) )

u = input('请输入URL：')
tran(u)
