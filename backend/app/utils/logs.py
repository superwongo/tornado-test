#!/usr/bin/env python
# -*- coding:utf-8 -*-
"""
@author: wang_chao03
@project: tornado-test
@file: logs.py
@time: 2020/04/17
"""
import logging
from dataclasses import dataclass

from tornado.log import enable_pretty_logging

from backend.app.settings import LOGGER_CONF

__all__ = ('logger', )


@dataclass
class LoggerConfig:
    log_to_stderr: bool
    log_file_prefix: str
    logging: str = 'info'
    log_file_max_size: int = 100 * 1000 * 1000
    log_file_num_backups: int = 10
    log_rotate_when: str = 'midnight'
    log_rotate_interval: int = 1
    log_rotate_mode: str = 'size'


logger_config = LoggerConfig(**LOGGER_CONF)
logger = logging.getLogger()
enable_pretty_logging(logger_config, logger)
