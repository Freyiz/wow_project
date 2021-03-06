# coding=utf-8
from flask import jsonify
from . import api
from app.exceptions import ValidationError


def forbidden(message):
    response = jsonify({'error': '你，无权访问。', 'message': message})
    response.status_code = 403
    return response


def unauthorized(message):
    response = jsonify({'error': '你，没有被授权。', 'message': message})
    response.status_code = 401
    return response


def bad_request(message):
    response = jsonify({'error': '请求不可用。', 'message': message})
    response.status_code = 400
    return response


@api.errorhandler(ValidationError)
def validation_error(e):
    return bad_request(e.args[0])
