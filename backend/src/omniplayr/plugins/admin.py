# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `admin` helpers."""

def verify_admin(auth = ..., x_account_token: str = ...) -> bool:
    """Verify if an account has admin access based on account token."""
    raise runtime_unavailable("verify_admin")

def get_admin_status(account_id: int) -> bool:
    """Return whether an account is an admin account based on account id."""
    raise runtime_unavailable("get_admin_status")

__all__ = ['get_admin_status', 'verify_admin']
