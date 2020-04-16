#!/usr/bin/env python
# -*- coding:utf-8 -*-
"""
@author: wang_chao03
@project: tornado-test
@file: test.py
@time: 2020/04/15
"""
from typing import Optional, Awaitable

from tornado.web import RequestHandler
from tornado.httpclient import AsyncHTTPClient
from tornado.log import gen_log


class TestRequestHandler(RequestHandler):
    def data_received(self, chunk: bytes) -> Optional[Awaitable[None]]:
        pass

    async def get(self):
        urls = self.get_arguments('url')
        http_client = AsyncHTTPClient()
        for url in urls:
            try:
                gen_log.info(f'>>>>>准备请求url: {url}')
                response = await http_client.fetch(url)
                gen_log.info(f'>>>>>已获取请求结果')
            except Exception as e:
                msg = "Error: %s" % e
                gen_log.exception(msg)
                self.write(msg)
            else:
                gen_log.info(response.body)
                self.write(response.body)
