import os
list = []
for each in os.listdir():
    list.append(os.path.splitext(each)[1])
print('该文件夹下共有类型为【.txt】的文件%d个' % list.count('.txt'))
print('该文件夹下共有类型为【.png】的文件%d个' % list.count('.png'))
print('该文件夹下共有类型为【.py】的文件%d个' % list.count('.py'))
print('该文件夹下共有类型为【.docx】的文件%d个' % list.count('.docx'))
print('该文件夹下共有类型为文件夹的文件%d个' % list.count(''))
