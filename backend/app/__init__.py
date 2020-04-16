#!/usr/bin/env python
# -*- coding:utf-8 -*-
"""
@author: wang_chao03
@project: tornado-test
@file: __init__.py.py
@time: 2020/04/15
"""

from tornado.web import Application

from backend.app.urls import URLS
from backend.app.settings import SETTINGS


def create_app():
    app = Application(URLS, default_host='localhost', **SETTINGS)
    return app
