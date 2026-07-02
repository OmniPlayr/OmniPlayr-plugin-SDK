# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `logging` helpers."""

LEVEL_COLORS = {'debug': '\x1b[38;5;244m', 'info': '\x1b[38;5;117m', 'success': '\x1b[38;5;82m', 'warning': '\x1b[38;5;214m', 'warn': '\x1b[38;5;214m', 'error': '\x1b[38;5;196m', 'critical': '\x1b[38;5;201m', 'diag': '\x1b[38;5;51m', 'warning_diagnostic': '\x1b[38;5;220m', 'error_diagnostic': '\x1b[38;5;208m', 'critical_diagnostic': '\x1b[38;5;199m'}

RESET = '\x1b[0m'

BOLD = '\x1b[1m'

DIM = '\x1b[2m'

LEVEL_LABELS = {'debug': 'DBG', 'info': 'INF', 'success': 'SUC', 'warning': 'WRN', 'warn': 'WRN', 'error': 'ERR', 'critical': 'CRT', 'diag': 'DIG', 'warning_diagnostic': 'WDG', 'error_diagnostic': 'EDG', 'critical_diagnostic': 'CDG'}

def log(message: str, level: str = ..., source: str | None = ...) -> None:
    """Write a structured OmniPlayr log message to console and log files."""
    raise runtime_unavailable("log")

def log_exception(exc: Exception, message: str = ..., source: str | None = ...) -> None:
    """Log an exception with optional context and traceback information."""
    raise runtime_unavailable("log_exception")

def setup_exception_hook() -> None:
    """Install a process-wide hook for uncaught exceptions."""
    raise runtime_unavailable("setup_exception_hook")

def setup_thread_exception_hook() -> None:
    """Install a hook for uncaught exceptions in Python threads."""
    raise runtime_unavailable("setup_thread_exception_hook")

def setup_asyncio_exception_handler(loop: asyncio.AbstractEventLoop) -> None:
    """Install an asyncio exception handler on an event loop."""
    raise runtime_unavailable("setup_asyncio_exception_handler")

def get_logs(since_hours: int = ..., limit: int = ..., before: str | None = ..., since: str | None = ...) -> dict:
    """Return recent parsed log entries with basic pagination support."""
    raise runtime_unavailable("get_logs")

__all__ = ['BOLD', 'DIM', 'LEVEL_COLORS', 'LEVEL_LABELS', 'RESET', 'get_logs', 'log', 'log_exception', 'setup_asyncio_exception_handler', 'setup_exception_hook', 'setup_thread_exception_hook']
