# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `health` helpers."""

class ServiceStatus:
    """Health model describing one backend-related service or container."""
    name: str
    id: str
    status: str
    running: bool
    healthy: bool

class HealthResponse:
    """Health response model returned by the backend health endpoint."""
    status: str
    uptime_seconds: float
    minor_health_error: int
    normal_health_error: int
    critical_health_error: int
    services: list[ServiceStatus]

def health() -> HealthResponse:
    """Return overall backend health, uptime, diagnostics, and service status."""
    raise runtime_unavailable("health")

__all__ = ['HealthResponse', 'ServiceStatus', 'health']
