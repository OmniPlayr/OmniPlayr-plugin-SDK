# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `config` helpers."""

def get_plugin_config(plugin_key: str, key_path: str, default = ...) -> Any:
    """Return a plugin configuration value by dotted key path."""
    raise runtime_unavailable("get_plugin_config")

def reload_plugin_config(plugin_key: str) -> Any:
    """Clear and reload cached configuration for a plugin."""
    raise runtime_unavailable("reload_plugin_config")

def flatten_plugin_configs(plugin_key: str) -> Any:
    """Return flattened plugin config metadata for UI rendering."""
    raise runtime_unavailable("flatten_plugin_configs")

__all__ = ['flatten_plugin_configs', 'get_plugin_config', 'reload_plugin_config']
