# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `functions` helpers."""

class PluginNotAvailableError(LookupError):
    """
    Raised when a cross-plugin call targets a plugin that is not loaded.
    
    [View Documentation](https://omniplayr.wokki20.nl/docs/plugins/building/backend/cross-plugin-functions.html#handling-unavailable-functions)
    """

class PluginFunctionNotFoundError(LookupError):
    """
    Raised when a loaded plugin does not expose the requested function.
    
    [View Documentation](https://omniplayr.wokki20.nl/docs/plugins/building/backend/cross-plugin-functions.html#handling-unavailable-functions)
    """

class PluginFunctions:
    """Plugin-scoped helper for exposing and calling cross-plugin functions."""

    def expose(self, function_name: str, function: Callable[..., Any] | None = ...) -> Any:
        """Expose a plugin-local callable for other backend plugins."""
        raise runtime_unavailable("expose")

    def call(self, plugin_key: str, function_name: str, *args: Any, **kwargs: Any) -> Any:
        """Call a function exposed by another backend plugin."""
        raise runtime_unavailable("call")

    def is_installed(self, plugin_key: str) -> bool:
        """Return whether another backend plugin has been loaded."""
        raise runtime_unavailable("is_installed")

    def has_function(self, plugin_key: str, function_name: str) -> bool:
        """Return whether another plugin exposes a named function."""
        raise runtime_unavailable("has_function")

def expose(plugin_key: str, function_name: str, function: Callable[..., Any]) -> None:
    """
    Expose a callable under a plugin key for cross-plugin calls.
    
    [View Documentation](https://omniplayr.wokki20.nl/docs/plugins/building/backend/cross-plugin-functions.html#exposing-a-function)
    """
    raise runtime_unavailable("expose")

def mark_plugin_loaded(plugin_key: str) -> None:
    """Mark a plugin as loaded in the in-memory cross-plugin registry."""
    raise runtime_unavailable("mark_plugin_loaded")

def remove_plugin(plugin_key: str) -> None:
    """Remove a plugin and its exposed functions from the registry."""
    raise runtime_unavailable("remove_plugin")

def is_installed(plugin_key: str) -> bool:
    """
    Return whether a plugin has been marked as loaded.
    
    [View Documentation](https://omniplayr.wokki20.nl/docs/plugins/building/backend/cross-plugin-functions.html#available-helpers)
    """
    raise runtime_unavailable("is_installed")

def has_function(plugin_key: str, function_name: str) -> bool:
    """
    Return whether a loaded plugin exposes a named function.
    
    [View Documentation](https://omniplayr.wokki20.nl/docs/plugins/building/backend/cross-plugin-functions.html#available-helpers)
    """
    raise runtime_unavailable("has_function")

def call(plugin_key: str, function_name: str, *args: Any, **kwargs: Any) -> Any:
    """
    Call a function exposed by another backend plugin.
    
    [View Documentation](https://omniplayr.wokki20.nl/docs/plugins/building/backend/cross-plugin-functions.html#discovering-and-calling-functions)
    """
    raise runtime_unavailable("call")

__all__ = ['PluginFunctionNotFoundError', 'PluginFunctions', 'PluginNotAvailableError', 'call', 'expose', 'has_function', 'is_installed', 'mark_plugin_loaded', 'remove_plugin']
