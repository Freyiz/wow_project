from flask import render_template
from . import qianduan


@qianduan.route('/baidu')
def baidu():
    return render_template("qianduan/baidu.html")


@qianduan.route('/demo12-19')
def demo12_19():
    return render_template("qianduan/demo12-19.html")


@qianduan.route('/doraemon')
def doraemon():
    return render_template("qianduan/doraemon.html")


@qianduan.route('/taiji')
def taiji():
    return render_template("qianduan/taiji.html")
