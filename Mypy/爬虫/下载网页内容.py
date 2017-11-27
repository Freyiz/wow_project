import urllib.request
import chardet

def main():
    x = 1
    
    with open('urls.txt','w') as f:
        f.write('http://www.fishc.com\nhttp://www.baidu.com\nhttp://www.douban.com\nhttp://www.zhihu.com\nhttp://www.taobao.com')
        
    with open('urls.txt') as f:
        for each in f:
            html = urllib.request.urlopen(each).read()
            encode = chardet.detect(html)['encoding']
            encode = 'GBK' if encode == 'GB2312' else encode
            with open('url_%d.txt' % x,'w',encoding = encode) as f:
                f.write(html.decode(encode,'ignore'))
            x += 1

if __name__ == '__main__':
    main()

        


    
