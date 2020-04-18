#!/usr/bin/env python
# -*- coding:utf-8 -*-
"""
@author: wang_chao03
@project: tornado-test
@file: settings.py
@time: 2020/04/15
"""

import os


PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOG_DIR = os.path.join(PROJECT_DIR, 'logs')

SETTINGS = dict(
    static_path=os.path.join(PROJECT_DIR, "app", "static"),
    cookie_secret="__TODO:_GENERATE_YOUR_OWN_RANDOM_VALUE_HERE__",
    login_url="/login",
    xsrf_cookies=True,
    debug=True,
    autoreload=False
)

try:
    if not os.path.exists(LOG_DIR):
        os.mkdir(LOG_DIR)
except IOError:
    pass

LOGGER_CONF = dict(
    # 日志是否采用标准输出
    log_to_stderr=False,
    # 日志文件路径
    log_file_prefix=os.path.join(PROJECT_DIR, 'logs', 'tornado-test.log'),
    # 日志级别：debug|info|warning|error|none
    logging='info',
    # 日志文件最大大小，默认100M
    log_file_max_size=100 * 1000 * 1000,
    # 日志文件保留个数
    log_file_num_backups=10,
    # 时间间隔类型：'S', 'M', 'H', 'D', 'W0'-'W6'
    log_rotate_when='midnight',
    # 轮训时间间隔数值
    log_rotate_interval=1,
    # 轮训方式：size, time
    log_rotate_mode='size'
)
