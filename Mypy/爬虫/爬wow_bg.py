from urllib import request
import os


def save_imgs(folder, img_addrs):
    for each in img_addrs:
        filename = each.split('/')[-1]
        with open(filename, 'wb') as f:
            img = url_open(each)
            f.write(img)


def find_imgs(url):
    html = url_open(url).decode('utf-8')
    img_addrs = []
    a = html.find('background-image')
    i = 0
    while a != -1:
        i += 1
        b = html.find('.jpg', a, a + 255)
        if b != -1:
            addr = html[a + 21:b + 4]
            if 'render-cn' not in addr and addr not in img_addrs:
                if addr.startswith('//'):
                    addr = 'https:' + addr
                else:
                    addr = addr[6:]
                    if addr.startswith('//'):
                        addr = 'https:' + addr
                img_addrs.append(addr)
                print(i, addr)
        else:
            b = a + 9
        a = html.find('background-image', b)
    return img_addrs


def url_open(url):
    req = request.Request(url)
    req.add_header('User-Agent',
                   'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36')
    '''proxies = ['119.6.144.70:81', '111.1.36.9:80', '203.144.144.162:8080']
    proxy = random.choice(proxies)
    proxy_support = urllib.request.ProxyHandler({'http':proxy})
    opener = urllib.request.build_opener(proxy_support)
    urllib.request.install_opener(opener)'''
    response = request.urlopen(url)
    html = response.read()
    return html


def download(folder="1"):
    os.chdir('/home/freyiz/图片')
    #os.mkdir(folder)
    os.chdir(folder)
    url = 'https://www.wowchina.com/zh-cn/story'
    img_addrs = find_imgs(url)
    save_imgs(folder, img_addrs)


if __name__ == '__main__':
    download()

