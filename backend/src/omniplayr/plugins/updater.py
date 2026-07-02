# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `updater` helpers."""

ROOT_PRESERVED = {'backend', 'frontend', '.git', '.github', '.gitignore', '.gitattributes', 'README.md', 'docker-compose.yml', 'db', 'logs', 'user_storage', '.env'}

BACKEND_PRESERVED = {'plugins', 'config', 'config.local.json', 'logs', '.safe_mode'}

FRONTEND_PRESERVED = {}

def check_for_updates(force: bool = ...) -> dict:
    """Check GitHub for available backend or frontend updates."""
    raise runtime_unavailable("check_for_updates")

def apply_update() -> dict:
    """Download and apply the latest available OmniPlayr update."""
    raise runtime_unavailable("apply_update")

__all__ = ['BACKEND_PRESERVED', 'FRONTEND_PRESERVED', 'ROOT_PRESERVED', 'apply_update', 'check_for_updates']
