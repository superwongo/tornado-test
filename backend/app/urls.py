#!/usr/bin/env python
# -*- coding:utf-8 -*-
"""
@author: wang_chao03
@project: tornado-test
@file: urls.py
@time: 2020/04/15
"""

from backend.app.views.test import TestRequestHandler
from backend.app.views.post import PostRequestHandler


URLS = (
    ('/test', TestRequestHandler),
    ('/post', PostRequestHandler)
)
