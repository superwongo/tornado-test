#!/usr/bin/env python
# -*- coding:utf-8 -*-
"""
@author: wang_chao03
@project: tornado-test
@file: server.py
@time: 2020/04/15
"""

import os
import sys

from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
from tornado.options import define, options, parse_command_line


PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(PROJECT_DIR)

from backend.app import create_app
from backend.app.utils.logs import logger


def main():
    try:
        define("port", default=8000, help="run on the given port", type=int)
        parse_command_line()
        app = create_app()
        http_server = HTTPServer(app)
        http_server.listen(options.port)
        logger.info('>>>>>Tornado循环器开始启动')
        IOLoop.current().start()
    except KeyboardInterrupt:
        pass


if __name__ == '__main__':
    main()
