from functools import wraps
from flask import flash, redirect, url_for
from flask_login import current_user
from .models import Permission


def permission_required(permission):
    def decorator(f):
        @wraps(f)
        def decorator_function(*args, **kwargs):
            if not current_user.can(permission):
                flash('权限不足！请完成晋升之后再进行尝试。')
                return redirect(url_for('.index'))
            return f(*args, **kwargs)
        return decorator_function
    return decorator


def admin_required(f):
    return permission_required(Permission.ADMINISTER)(f)


def confirmed_required():
    def decorator(f):
        @wraps(f)
        def decorator_function():
            if not current_user.confirmed:
                return redirect(url_for('auth.unconfirmed'))
            return f()
        return decorator_function
    return decorator
