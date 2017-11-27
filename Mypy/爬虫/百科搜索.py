import re
import urllib.parse
import urllib.request
from bs4 import BeautifulSoup

def run(soup):
    for each in soup.find_all(href=re.compile('view')):
        content = ''.join(each.text)
        url2 = ''.join(['http://baike.baidu.com',each['href']])
        response2 = urllib.request.urlopen(url2)
        html2 = response2.read()
        soup2 = BeautifulSoup(html2,'html.parser')
        if soup2.h2:
            content += soup2.h2.text
        content += '-->' + url2
        yield content

def summary(soup):
    word = soup.h1.text
    if soup.h2:
        word += soup.h2.text
    print(word)
    if soup.find(class_='lemma-summary'):
        print(soup.find(class_='lemma-summary').text)
    print('下面打印相关链接：')
        
    
def main():
    keyword = input('请输入关键字：')
    keyword = urllib.parse.urlencode({'word':keyword})
    url = 'http://baike.baidu.com/search/word?%s' % keyword
    response = urllib.request.urlopen(url)
    html = response.read()
    soup = BeautifulSoup(html,'html.parser')
    if soup.find(text=re.compile('百度百科尚未收录词条')):
        print('百度百科尚未收录词条')
    else:   
        summary(soup)
        each = run(soup)
        while 1:
            try:
                for i in range(10):
                    print(next(each))
            except StopIteration:
                print('没有更多了。')
                break
            if input('输入任意键继续，输入q退出：') == 'q':
                    break
            else:
                continue

if __name__ == '__main__':
    main()
