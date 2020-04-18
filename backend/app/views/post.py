#!/usr/bin/env python
# -*- coding:utf-8 -*-
"""
@author: wang_chao03
@project: tornado-test
@file: post.py
@time: 2020/04/16
"""

import json
from typing import Optional, Awaitable, List, Dict

from tornado.web import RequestHandler


class PostRequestHandler(RequestHandler):
    def set_default_headers(self):
        # 后面的*可以换成ip地址，意为允许访问的地址
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', 'x-requested-with')
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE')

    def data_received(self, chunk: bytes) -> Optional[Awaitable[None]]:
        pass

    def get(self):
        self.set_header("Content-Type", "application/json; charset=UTF-8")
        data: List[Dict] = [
            {
                'title': 'Docker部署Mongodb副本集集群',
                'calendar': '2019-12-23',
                'categories': ['数据库', 'mongo', 'docker'],
                'content': 'Mongodb简介目前常用的数据库主要分为两种：关系型数据库、非关系型数据库。其中关系型数据库常见的包括：'
                           'Oracle、Mysql、PostgreSQL、SqlSever等，其主要特点就是大多数都遵循SQL（结构化查询语言，'
                           'StructuredQuery Language）标准，针对结构化的数据支 ...'
            },
            {
                'title': 'Docker部署Mongodb副本集集群',
                'calendar': '2019-12-23',
                'categories': ['数据库', 'mongo', 'docker'],
                'content': 'Mongodb简介目前常用的数据库主要分为两种：关系型数据库、非关系型数据库。其中关系型数据库常见的包括：'
                           'Oracle、Mysql、PostgreSQL、SqlSever等，其主要特点就是大多数都遵循SQL（结构化查询语言，'
                           'StructuredQuery Language）标准，针对结构化的数据支 ...'
            },
            {
                'title': 'Docker部署Mongodb副本集集群',
                'calendar': '2019-12-23',
                'categories': ['数据库', 'mongo', 'docker'],
                'content': 'Mongodb简介目前常用的数据库主要分为两种：关系型数据库、非关系型数据库。其中关系型数据库常见的包括：'
                           'Oracle、Mysql、PostgreSQL、SqlSever等，其主要特点就是大多数都遵循SQL（结构化查询语言，'
                           'StructuredQuery Language）标准，针对结构化的数据支 ...'
            }
        ]
        self.write(json.dumps(data))
