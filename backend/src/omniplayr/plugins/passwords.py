# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `passwords` helpers."""

def password_hash(password: str) -> str:
    """Hash a plaintext password for storage."""
    raise runtime_unavailable("password_hash")

def password_check(password: str, hash: str) -> bool:
    """Return whether a plaintext password matches a stored password hash."""
    raise runtime_unavailable("password_check")

__all__ = ['password_check', 'password_hash']
