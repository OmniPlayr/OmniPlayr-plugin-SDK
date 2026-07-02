# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `db` helpers."""

ProtectionLevel = Literal['read', 'write']

PROTECTED_TABLES: dict[str, ProtectionLevel] = {'accounts': 'write', 'server': 'read', 'setup_state': 'read', 'access_tokens': 'read', 'account_tokens': 'read', 'notifications': 'write', 'initial_notifications_sent': 'read', 'update_cache': 'read', 'backup_codes': 'read'}

def set_table_protection(table: str, level: ProtectionLevel) -> None:
    """Set the plugin access protection level for a database table."""
    raise runtime_unavailable("set_table_protection")

def remove_table_protection(table: str) -> None:
    """Remove plugin access protection from a database table."""
    raise runtime_unavailable("remove_table_protection")

class PluginDB:
    """Plugin-scoped database helper enforcing table grants and protections."""

    def fetch(self, table: str, where: dict[str, Any] | None = ..., columns: list[str] | None = ..., order_by: str | None = ..., limit: int | None = ...) -> list[dict]:
        """Fetch rows from an accessible table with optional filtering and ordering."""
        raise runtime_unavailable("fetch")

    def fetch_one(self, table: str, where: dict[str, Any], columns: list[str] | None = ...) -> dict | None:
        """Fetch the first row matching a table filter."""
        raise runtime_unavailable("fetch_one")

    def insert(self, table: str, data: dict[str, Any]) -> dict:
        """Insert a row into a writable table and return the inserted row."""
        raise runtime_unavailable("insert")

    def update(self, table: str, data: dict[str, Any], where: dict[str, Any]) -> int:
        """Update rows in a writable table and return the affected row count."""
        raise runtime_unavailable("update")

    def delete(self, table: str, where: dict[str, Any]) -> int:
        """Delete rows from a writable table and return the affected row count."""
        raise runtime_unavailable("delete")

    def count(self, table: str, where: dict[str, Any] | None = ...) -> int:
        """Count rows in an accessible table with an optional filter."""
        raise runtime_unavailable("count")

    @property
    def accessible_tables(self) -> dict[str, str]:
        """Return the table grants available to this plugin."""
        raise runtime_unavailable("accessible_tables")

def request_db_access(plugin_key: str, *, own: dict[str, dict[str, str]] | None = ..., read: list[str] | None = ..., readwrite: list[str] | None = ...) -> PluginDB:
    """Request database table grants for a backend plugin."""
    raise runtime_unavailable("request_db_access")

__all__ = ['PROTECTED_TABLES', 'PluginDB', 'ProtectionLevel', 'remove_table_protection', 'request_db_access', 'set_table_protection']
