# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `runtime` helpers."""

class PluginBase:
    """Base class for backend playback source plugins."""
    source_type: str = ''

    def get_stream(self, song_id: str, account_id: int) -> Any:
        """Return a stream or file-like object for a song and account."""
        raise runtime_unavailable("get_stream")

    def get_content_type(self, song_id: str, account_id: int) -> str:
        """Return the MIME type for a song stream."""
        raise runtime_unavailable("get_content_type")

    def get_file_size(self, song_id: str, account_id: int) -> int | None:
        """Return the byte size for a song stream, if known."""
        raise runtime_unavailable("get_file_size")

    def get_metadata(self, song_id: str, account_id: int) -> dict:
        """Return metadata for a song visible to the given account."""
        raise runtime_unavailable("get_metadata")

    def check_ownership(self, song_id: str, account_id: int) -> bool:
        """Return whether the given account may access the song."""
        raise runtime_unavailable("check_ownership")

def register(plugin: PluginBase) -> Any:
    """Register a backend playback source plugin instance."""
    raise runtime_unavailable("register")

def get_plugin(source_type: str) -> PluginBase | None:
    """Return the registered plugin for a source type, if any."""
    raise runtime_unavailable("get_plugin")

def get_plugin_router() -> APIRouter:
    """Return the shared FastAPI router used for plugin routes."""
    raise runtime_unavailable("get_plugin_router")

def get_backend_plugin_dir(plugin_key: str, plugin_spec: Any = ...) -> Path:
    """Return the filesystem directory for a backend plugin key."""
    raise runtime_unavailable("get_backend_plugin_dir")

def load_plugins() -> Any:
    """Load configured backend plugins into the current server process."""
    raise runtime_unavailable("load_plugins")

__all__ = ['PluginBase', 'get_backend_plugin_dir', 'get_plugin', 'get_plugin_router', 'load_plugins', 'register']
