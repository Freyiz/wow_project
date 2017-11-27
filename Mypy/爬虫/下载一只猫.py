import urllib.request
import easygui as g


def load(width,length):
    url = 'http://www.placekitten.com/g/%s/%s' % (width,length)
    response = urllib.request.urlopen(url)
    cat = response.read()
    file = g.filesavebox('请选择存放喵的文件夹','浏览文件夹')
    if file:
        with open('%s.jpg' % file,'wb') as f:
            f.write(cat)

def main():  
    size = g.multenterbox('请填写喵的尺寸','下载一直喵',('宽','高'))
    if size:
        if (size[0] + ' ').isspace() and (size[1] + ' ').isspace():
            size = [400,600]   
        load(size[0],size[1])

if __name__ == '__main__':
    main()
