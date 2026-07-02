# omniplayr-plugins

Backend development SDK for OmniPlayr plugins.

Install it in a plugin development environment:

```powershell
pip install omniplayr-plugins
```

Plugin authors can import the public backend SDK from one namespace:

```python
from omniplayr.plugins import BackendPlugin, api, register
```

This package is intentionally lightweight. It provides type hints, typed
placeholders, protocols, docstrings, and IDE autocomplete support for backend
plugin development. The actual runtime implementation is provided by the
OmniPlayr server and Docker runtime when a plugin is loaded.

## Documentation

Read the full backend plugin documentation:

https://omniplayr.wokki20.nl/docs/plugins/building/backend/#backend-plugin-overview

## API Map

- `BackendPlugin`, `PluginBase`, `register`, `get_plugin`, `get_backend_plugin_dir`,
  `get_plugin_router`, `load_plugins`
  [View Documentation](https://omniplayr.wokki20.nl/docs/plugins/building/backend/#the-setup-function)

- `api`, `PluginApi`, `RouteHandler`, `RouteDecorator`
  [View Documentation](https://omniplayr.wokki20.nl/docs/plugins/building/backend/routes.html#registering-routes)

- `PluginFunctions`, `expose`, `expose_function`, `call`, `call_plugin_function`,
  `is_installed`, `is_plugin_available`, `has_function`,
  `is_plugin_function_available`, `mark_plugin_loaded`, `remove_plugin`,
  `PluginNotAvailableError`,
  `PluginFunctionNotFoundError`
  [View Documentation](https://omniplayr.wokki20.nl/docs/plugins/building/backend/cross-plugin-functions.html#available-helpers)

- `get_plugin_config`, `reload_plugin_config`, `flatten_plugin_configs`,
  `get_config`, `load_configs`, `flatten_configs`, `flatten_frontend_configs`,
  `TomlValue`, `FlatConfigItem`, `deep_merge`, `sync_config`,
  `start_config_watcher`, `ConfigChangeHandler`

- `request_db_access`, `PluginDB`, `ProtectionLevel`, `get_conn`,
  `is_safe_sql_identifier`, `parse_column_type`, `can_convert_column`,
  `init_db`, `init_db_when_ready`

- `verify_auth`, `verify_admin`, `verify_token`, `get_admin_status`,
  `match_account`, `get_token_user`, `create_access_token`, `parse_interval`

- `list_accounts`, `get_account`, `create_account`, `update_account`,
  `delete_account`, account tokens, password verification, and two-factor
  helpers

- `notify`, `notify_once`, `notify_sync`, `notify_once_sync`,
  `get_notifications`, `get_unread_count`, `mark_read`,
  `delete_notification`, `NotificationManager`

- `log`, `log_exception`, `get_logs`, exception hook setup helpers,
  diagnostics helpers, `health`, `ServiceStatus`, `HealthResponse`

- `fetch_plugin_info`, `install_plugin`, `install_local_plugin`,
  `check_for_updates`, `apply_update`, `start_https_proxy`, `user_warn`

## Local Testing

From this package:

```powershell
python -m pip install -e .
python - <<'PY'
from omniplayr.plugins import BackendPlugin, api, register

class MyPlugin(BackendPlugin):
    source_type = "example"

register(MyPlugin())

@api.get("/health")
def health() -> dict[str, str]:
    return {"ok": "true"}

print("omniplayr.plugins import OK")
PY
```

The SDK exports a PEP 561 `py.typed` marker so type checkers such as Pylance,
Pyright, and mypy can understand the package.

## Deprecation Policy

Backend SDK APIs should be deprecated before they are removed. When an API is
being replaced, the OmniPlayr server should keep a compatibility wrapper with
metadata at the top of the docstring:

```python
def old_helper() -> None:
    """@deprecated=true
    Use `new_helper` instead.
    """
```

The SDK generator records the first backend version where the marker appears in
`backend/deprecations.json`, then renders the SDK docstring as a normal
deprecation notice. You can also pin the version manually:

```python
def old_helper() -> None:
    """@deprecated=true
    @deprecated_since=2026.7.2
    Use `new_helper` instead.
    """
```

Deprecated APIs remain exported by this SDK for at least one year. They are only
removed during an annual major compatibility cleanup, so plugin authors have a
full yearly release window to migrate.
