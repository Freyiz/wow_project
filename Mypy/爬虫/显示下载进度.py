import urllib.request
import re

def schedule(a,b,c):
    per = 100.0*a*b/c
    if per > 100:
        per = 100
    print('%.2f%%' % per)

def open_url(url):
    req = urllib.request.Request(url)
    req.add_header('User-Agent','Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0')
    response = urllib.request.urlopen(req)
    html = response.read()
    return html

def get_img(html):
    html = html.decode('utf-8')
    p = r'(?<=<img class="BDE_Image" src=")[^\s]+\.jpg'
    img_addrs = re.findall(p,html)
    for each in img_addrs[2:5]:
        filename = re.search(r'(?<=/)[^/]+jpg\b',each).group()
        urllib.request.urlretrieve(each,filename,schedule)
        
def main(folder = 'nvshenba'):
    url = "https://tieba.baidu.com/p/5016315346?pn=3"
    get_img(open_url(url))

if __name__ == '__main__':
    main()
