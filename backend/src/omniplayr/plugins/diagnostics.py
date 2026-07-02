# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `diagnostics` helpers."""

def record_error(level: str) -> None:
    """Increment the diagnostic error counter for a severity level."""
    raise runtime_unavailable("record_error")

def get_error_counts() -> dict:
    """Return current diagnostic error counters."""
    raise runtime_unavailable("get_error_counts")

def get_uptime_seconds() -> float:
    """Return backend process uptime in seconds."""
    raise runtime_unavailable("get_uptime_seconds")

def reset_error_counts() -> None:
    """Reset all diagnostic error counters to zero."""
    raise runtime_unavailable("reset_error_counts")

def run_diagnostics() -> None:
    """Run one diagnostic pass over system health signals."""
    raise runtime_unavailable("run_diagnostics")

def start_diagnostics(interval_seconds: int = ...) -> None:
    """Start background diagnostic and event-loop lag monitors."""
    raise runtime_unavailable("start_diagnostics")

__all__ = ['get_error_counts', 'get_uptime_seconds', 'record_error', 'reset_error_counts', 'run_diagnostics', 'start_diagnostics']
