import re
import urllib.request
from http.cookiejar import CookieJar
 
loginurl = 'https://www.douban.com/accounts/login'
cookie =  CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor)
 
data = {}
data['form_email'] = '你的账号'
data['form_password'] = '你的密码'
data['source'] = 'index_nav'

response=opener.open(loginurl,urllib.parse.urlencode(data).encode('utf-8'))

if response.geturl() == "https://www.douban.com/accounts/login":
    html=response.read().decode()   
    imgurl=re.search('<img id="captcha_image" src="(.+?)" alt="captcha" class="captcha_image"/>', html)
    if imgurl:
        url=imgurl.group(1)
        res=urllib.request.urlretrieve(url, 'v.jpg')
        captcha=re.search('<input type="hidden" name="captcha-id" value="(.+?)"/>' ,html)
        if captcha:
            vcode=raw_input('请输入图片上的验证码：')
            data["captcha-solution"] = vcode
            data["captcha-id"] = captcha.group(1)
            data["user_login"] = "登录"
            response=opener.open(loginurl, urllib.parse.urlencode(data).encode('utf-8'))
            if response.geturl() == "http://www.douban.com/":
                print('login success !')
