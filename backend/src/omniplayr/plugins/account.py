# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `account` helpers."""

def list_accounts() -> Any:
    """Return all accounts with password state and masked sensitive fields."""
    raise runtime_unavailable("list_accounts")

def list_account_summaries() -> Any:
    """Return account identity fields without loading large profile images."""
    raise runtime_unavailable("list_account_summaries")

def get_account_summary(account_id: int) -> Any:
    """Return identity fields without loading profile images or account tokens."""
    raise runtime_unavailable("get_account_summary")

def get_account(account_id: int) -> Any:
    """Return a full account record with masked account tokens, if it exists."""
    raise runtime_unavailable("get_account")

def create_account(name: str, role: str, avatar_b64: str | None) -> Any:
    """Create an account and return the inserted account record."""
    raise runtime_unavailable("create_account")

def update_account(account_id: int, name: str | None, role: str | None, avatar_b64: str | None, nickname: str | None = ..., about: str | None = ..., password: str | None = ..., old_password: str | None = ...) -> Any:
    """Update account profile fields, role, avatar, or password."""
    raise runtime_unavailable("update_account")

def delete_profile_picture(account_id: int) -> bool:
    """Remove the profile picture for an account."""
    raise runtime_unavailable("delete_profile_picture")

def delete_account(account_id: int, force: bool = ...) -> bool:
    """Delete an account, optionally bypassing last-admin protection."""
    raise runtime_unavailable("delete_account")

def verify_account_password(account_id: int, password: str) -> str:
    """Return the password verification status for an account."""
    raise runtime_unavailable("verify_account_password")

def create_account_token(account_id: int, password_protected: bool = ..., user_agent: str | None = ..., ip_address: str | None = ...) -> Any:
    """Create a persistent account token for an account."""
    raise runtime_unavailable("create_account_token")

def revoke_token(account_id: int, token: str | None, revoke_all: bool = ...) -> Any:
    """Revoke one account token or all active tokens for an account."""
    raise runtime_unavailable("revoke_token")

def delete_account_token(account_id: int, token: str) -> Any:
    """Permanently delete a revoked account token."""
    raise runtime_unavailable("delete_account_token")

def create_2fa_setup(account_id: int) -> Any:
    """Create a two-factor authentication secret, QR code, and backup codes."""
    raise runtime_unavailable("create_2fa_setup")

def verify_2fa_code(account_id: int, code: str, allow_enabled_bypass: bool = ..., backup_code: str | None = ...) -> Any:
    """Verify a two-factor authentication code or backup code for an account."""
    raise runtime_unavailable("verify_2fa_code")

def delete_2fa(account_id: int, code: str) -> Any:
    """Disable two-factor authentication for an account after code verification."""
    raise runtime_unavailable("delete_2fa")

def create_backup_codes(account_id: int) -> Any:
    """Create and store backup codes for account two-factor authentication."""
    raise runtime_unavailable("create_backup_codes")

def delete_backup_codes(account_id: int) -> Any:
    """Delete all backup codes for an account."""
    raise runtime_unavailable("delete_backup_codes")

def verify_backup_code(account_id: int, code: str) -> Any:
    """Verify and consume a two-factor authentication backup code."""
    raise runtime_unavailable("verify_backup_code")

def has_backup_codes(account_id: int) -> Any:
    """Return whether an account has any backup codes available."""
    raise runtime_unavailable("has_backup_codes")

__all__ = ['create_2fa_setup', 'create_account', 'create_account_token', 'create_backup_codes', 'delete_2fa', 'delete_account', 'delete_account_token', 'delete_backup_codes', 'delete_profile_picture', 'get_account', 'get_account_summary', 'has_backup_codes', 'list_account_summaries', 'list_accounts', 'revoke_token', 'update_account', 'verify_2fa_code', 'verify_account_password', 'verify_backup_code']
