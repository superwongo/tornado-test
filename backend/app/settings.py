#!/usr/bin/env python
# -*- coding:utf-8 -*-
"""
@author: wang_chao03
@project: tornado-test
@file: settings.py
@time: 2020/04/15
"""

import os


SETTINGS = dict(
    static_path=os.path.join(os.path.dirname(__file__), "static"),
    cookie_secret="__TODO:_GENERATE_YOUR_OWN_RANDOM_VALUE_HERE__",
    login_url="/login",
    xsrf_cookies=True,
    debug=True,
    autoreload=False
)
