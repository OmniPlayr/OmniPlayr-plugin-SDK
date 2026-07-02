"""Typed route decorators for OmniPlayr backend plugin API routes."""

from __future__ import annotations

from typing import Any, Callable


RouteHandler = Callable[..., Any]
RouteDecorator = Callable[[RouteHandler], RouteHandler]


class PluginApi:
    """Development-time facade for OmniPlayr backend plugin routes.

    [View Documentation](https://omniplayr.wokki20.nl/docs/plugins/building/backend/routes.html#registering-routes)
    """

    def route(self, method: str, path: str, **kwargs: Any) -> RouteDecorator:
        """Create a typed route decorator."""

        def decorator(handler: RouteHandler) -> RouteHandler:
            return handler

        return decorator

    def get(self, path: str, **kwargs: Any) -> RouteDecorator:
        """Decorate a GET route for a backend plugin."""

        return self.route("GET", path, **kwargs)

    def post(self, path: str, **kwargs: Any) -> RouteDecorator:
        """Decorate a POST route for a backend plugin."""

        return self.route("POST", path, **kwargs)

    def put(self, path: str, **kwargs: Any) -> RouteDecorator:
        """Decorate a PUT route for a backend plugin."""

        return self.route("PUT", path, **kwargs)

    def patch(self, path: str, **kwargs: Any) -> RouteDecorator:
        """Decorate a PATCH route for a backend plugin."""

        return self.route("PATCH", path, **kwargs)

    def delete(self, path: str, **kwargs: Any) -> RouteDecorator:
        """Decorate a DELETE route for a backend plugin."""

        return self.route("DELETE", path, **kwargs)


api = PluginApi()

__all__ = ["PluginApi", "RouteDecorator", "RouteHandler", "api"]
