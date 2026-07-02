# This file is generated from the OmniPlayr server backend.
from __future__ import annotations

from typing import Any, Callable, Literal

from ._runtime import runtime_unavailable

"""Generated SDK stubs for OmniPlayr backend `notifications` helpers."""

INITIAL_NOTIFICATIONS: list[dict] = [{'key': 'welcome_docs', 'icon': 'BookOpenText', 'title': 'Need some help?', 'text': 'You can always read the documentation for OmniPlayr on our website.', 'action_type': 'external', 'action_url': 'https://omniplayr.wokki20.nl/docs/'}, {'key': 'welcome_message', 'icon': 'PartyPopper', 'title': 'Welcome to OmniPlayr', 'text': 'Thanks for using OmniPlayr <link href="https://omniplayr.wokki20.nl">{version}</link>!', 'action_type': None, 'action_url': None}]

class NotificationManager:
    """Manage active notification websocket connections by account."""

    async def connect(self, account_id: int, ws: WebSocket) -> Any:
        """Accept and register a websocket connection for an account."""
        raise runtime_unavailable("connect")

    def disconnect(self, account_id: int, ws: WebSocket) -> Any:
        """Remove a websocket connection for an account."""
        raise runtime_unavailable("disconnect")

    async def send_to_user(self, account_id: int, data: dict) -> Any:
        """Send a JSON payload to every active websocket for an account."""
        raise runtime_unavailable("send_to_user")

def get_notifications(account_id: int) -> list[dict]:
    """Return notifications for an account ordered from newest to oldest."""
    raise runtime_unavailable("get_notifications")

def get_unread_count(account_id: int) -> int:
    """Return the unread notification count for an account."""
    raise runtime_unavailable("get_unread_count")

def mark_read(notification_id: int, account_id: int) -> bool:
    """Mark one notification as read for an account."""
    raise runtime_unavailable("mark_read")

def delete_notification(notification_id: int, account_id: int) -> bool:
    """Delete one notification for an account."""
    raise runtime_unavailable("delete_notification")

async def notify(account_id: int, icon: str, title: str, text: str, action_type: str | None = ..., action_url: str | None = ...) -> dict:
    """Create a notification and push it to active account websockets."""
    raise runtime_unavailable("notify")

async def notify_once(account_id: int, notification_key: str, icon: str, title: str, text: str, action_type: str | None = ..., action_url: str | None = ...) -> dict | None:
    """Create a keyed notification only if it has not been sent before."""
    raise runtime_unavailable("notify_once")

def set_main_loop(loop: asyncio.AbstractEventLoop) -> None:
    """Store the main asyncio event loop for synchronous notification helpers."""
    raise runtime_unavailable("set_main_loop")

def notify_sync(account_id: int, icon: str, title: str, text: str, action_type: str | None = ..., action_url: str | None = ...) -> None:
    """Schedule or run notification delivery from synchronous code."""
    raise runtime_unavailable("notify_sync")

def notify_once_sync(account_id: int, notification_key: str, icon: str, title: str, text: str, action_type: str | None = ..., action_url: str | None = ...) -> None:
    """Schedule or run keyed notification delivery from synchronous code."""
    raise runtime_unavailable("notify_once_sync")

__all__ = ['INITIAL_NOTIFICATIONS', 'NotificationManager', 'delete_notification', 'get_notifications', 'get_unread_count', 'mark_read', 'notify', 'notify_once', 'notify_once_sync', 'notify_sync', 'set_main_loop']
