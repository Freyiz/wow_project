import urllib.request
import re

def get_url(url):
    req = urllib.request.Request(url)
    req.add_header('User-Agent','Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0')
    html = urllib.request.urlopen(req).read().decode('utf-8')
    return html

def main():
    url = 'http://www.youdaili.net/Daili/guonei/'
    addrs_nums = re.findall(r'guonei/(\d{5}).html',get_url(url))
    for each_num in addrs_nums:
        each_url = 'http://www.youdaili.net/Daili/guonei/%s.html' % each_num        
        proxies = re.findall(r'<p>([^<>]+)@',get_url(each_url))
        with open('get_ip.txt','a') as f:
            f.write('\n换页：')
            f.write(str(proxies))

if __name__ == '__main__':
    main()
