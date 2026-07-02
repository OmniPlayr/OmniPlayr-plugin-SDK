# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `server` helpers."""

def parse_interval(interval_str: str) -> relativedelta:
    """Parse a human interval string into a timedelta or relativedelta."""
    raise runtime_unavailable("parse_interval")

def verify_token(access_token: str) -> Any:
    """Validate an access token and return the stored token value."""
    raise runtime_unavailable("verify_token")

def verify_auth(creds: HTTPAuthorizationCredentials = ...) -> Any:
    """Validate FastAPI bearer credentials for an authenticated request."""
    raise runtime_unavailable("verify_auth")

def match_account(account_id: int, account_token: str, allow_admin_force: bool = ...) -> bool:
    """Return whether an account token belongs to an account or allowed admin."""
    raise runtime_unavailable("match_account")

def get_token_user(token: str) -> Any:
    """Return the account id associated with an active account token."""
    raise runtime_unavailable("get_token_user")

async def create_access_token(password_protected: bool, cur: object, only_access_token: bool = ...) -> dict:
    """Create access and refresh tokens using configured token lifetimes."""
    raise runtime_unavailable("create_access_token")

__all__ = ['create_access_token', 'get_token_user', 'match_account', 'parse_interval', 'verify_auth', 'verify_token']
