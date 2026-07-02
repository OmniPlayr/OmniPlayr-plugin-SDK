"""Public backend development SDK for OmniPlayr plugins."""

from __future__ import annotations

from typing import Any, Callable

from ._runtime import OmniPlayrRuntimeUnavailableError
from ._runtime import runtime_unavailable
from .account import *
from .api import *
from .backend_config import *
from .config import *
from .db import *
from .diagnostics import *
from .functions import *
from .health import *
from .installer import *
from .logging import *
from .notifications import *
from .passwords import *
from .runtime import *
from .server import *
from .updater import *

BackendPlugin = PluginBase
call_plugin_function = call
is_plugin_available = is_installed
is_plugin_function_available = has_function

def expose_function(function_name: str, function: Callable[..., Any] | None = None) -> Any:
    """Expose a callable for the current backend plugin."""
    raise runtime_unavailable("expose_function")

__all__ = ['BACKEND_PRESERVED', 'BOLD', 'BackendPlugin', 'DIM', 'FRONTEND_PRESERVED', 'HealthResponse', 'INITIAL_NOTIFICATIONS', 'LEVEL_COLORS', 'LEVEL_LABELS', 'NotificationManager', 'OmniPlayrRuntimeUnavailableError', 'PROTECTED_TABLES', 'PluginApi', 'PluginBase', 'PluginDB', 'PluginFunctionNotFoundError', 'PluginFunctions', 'PluginNotAvailableError', 'ProtectionLevel', 'RESET', 'ROOT_PRESERVED', 'RouteDecorator', 'RouteHandler', 'ServiceStatus', 'api', 'apply_update', 'call', 'call_plugin_function', 'check_for_updates', 'create_2fa_setup', 'create_access_token', 'create_account', 'create_account_token', 'create_backup_codes', 'delete_2fa', 'delete_account', 'delete_account_token', 'delete_backup_codes', 'delete_notification', 'delete_profile_picture', 'expose', 'expose_function', 'fetch_plugin_info', 'flatten_configs', 'flatten_frontend_configs', 'flatten_plugin_configs', 'get_account', 'get_account_summary', 'get_backend_plugin_dir', 'get_config', 'get_error_counts', 'get_logs', 'get_notifications', 'get_plugin', 'get_plugin_config', 'get_plugin_router', 'get_token_user', 'get_unread_count', 'get_uptime_seconds', 'has_backup_codes', 'has_function', 'health', 'install_local_plugin', 'install_plugin', 'is_installed', 'is_plugin_available', 'is_plugin_function_available', 'list_account_summaries', 'list_accounts', 'load_configs', 'load_plugins', 'log', 'log_exception', 'mark_plugin_loaded', 'mark_read', 'match_account', 'notify', 'notify_once', 'notify_once_sync', 'notify_sync', 'parse_interval', 'password_check', 'password_hash', 'record_error', 'register', 'reload_plugin_config', 'remove_plugin', 'remove_table_protection', 'request_db_access', 'reset_error_counts', 'revoke_token', 'run_diagnostics', 'set_main_loop', 'set_table_protection', 'setup_asyncio_exception_handler', 'setup_exception_hook', 'setup_thread_exception_hook', 'start_diagnostics', 'update_account', 'verify_2fa_code', 'verify_account_password', 'verify_auth', 'verify_backup_code', 'verify_token']
