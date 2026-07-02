"""Runtime placeholders for the generated OmniPlayr backend SDK."""

from __future__ import annotations


class OmniPlayrRuntimeUnavailableError(RuntimeError):
    """Raised when an OmniPlayr server-only API is used outside the runtime."""


def runtime_unavailable(name: str) -> OmniPlayrRuntimeUnavailableError:
    """Return an error for APIs that are only implemented by the server."""

    return OmniPlayrRuntimeUnavailableError(
        f"{name} is provided by the OmniPlayr backend runtime. "
        "The omniplayr-plugins package only supplies development-time typing, "
        "imports, docstrings, and autocomplete support."
    )
