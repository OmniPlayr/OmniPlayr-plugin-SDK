# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `installer` helpers."""

def fetch_plugin_info(package_id: str) -> dict | None:
    """Fetch plugin registry metadata for a package id."""
    raise runtime_unavailable("fetch_plugin_info")

def install_local_plugin(source_path: str, target: str, package_id: str | None = ..., mode: str = ...) -> dict:
    """Register or link a local plugin during development mode."""
    raise runtime_unavailable("install_local_plugin")

def install_plugin(package_id: str, version: str | None, target: str | None) -> dict:
    """Download and install a plugin from the configured registry."""
    raise runtime_unavailable("install_plugin")

__all__ = ['fetch_plugin_info', 'install_local_plugin', 'install_plugin']
