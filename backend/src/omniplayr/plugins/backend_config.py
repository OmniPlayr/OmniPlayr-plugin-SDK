# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `backend_config` helpers."""

def load_configs() -> Any:
    """Load and validate backend configuration files from disk."""
    raise runtime_unavailable("load_configs")

def get_config(key_path, default = ...) -> Any:
    """Return a backend configuration value by dotted key path."""
    raise runtime_unavailable("get_config")

def flatten_configs() -> Any:
    """Return flattened backend config metadata for UI rendering."""
    raise runtime_unavailable("flatten_configs")

def flatten_frontend_configs() -> Any:
    """Return flattened frontend config metadata for UI rendering."""
    raise runtime_unavailable("flatten_frontend_configs")

__all__ = ['flatten_configs', 'flatten_frontend_configs', 'get_config', 'load_configs']
