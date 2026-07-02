import { requireHostApi } from './host';

/** Repeat mode used by the OmniPlayr player.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#available-player-state)
 */
export type RepeatMode = 'off' | 'one' | 'all';

/** Callbacks a source plugin uses to report metadata, readiness, endings, and state changes back to OmniPlayr.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#playing-media)
 */
export interface SourcePluginCallbacks {
  /** Send metadata for the currently loaded track. */
  onMetadata: (meta: TrackMetadata) => void;
  /** Tell OmniPlayr the source is ready to play and loading can end. */
  onReady: () => void;
  /** Tell OmniPlayr playback ended so it can move to the next queued item. */
  onEnded: () => void;
  /** Tell OmniPlayr play/pause/time state changed and UI should refresh. */
  onStateChange: () => void;
}

/** Implement this when a frontend plugin controls playback for a custom source type.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#playing-media)
 */
export interface SourcePlugin {
  /** Start loading or playing a track for this source. Call the provided callbacks as state changes. */
  play(
    songId: string,
    extra: Record<string, unknown> | undefined,
    autoplay: boolean,
    callbacks: SourcePluginCallbacks
  ): Promise<void>;
  /** Pause playback for this source. */
  pause(): void;
  /** Resume playback for this source. */
  resume(): void;
  /** Seek to an absolute time in seconds. */
  seek(seconds: number): void;
  /** Current playback position in seconds. */
  getCurrentTime(): number;
  /** Total track duration in seconds. */
  getDuration(): number;
  /** Whether this source is currently playing. */
  isPlaying(): boolean;
  /** Clean up players, SDK instances, iframes, timers, or listeners owned by this source. */
  destroy(): void;
  /** Optional hook called when this source becomes the active player. */
  activate?(): void;
  /** Optional volume sync hook. Value is a 0-1 fraction. */
  setVolume?(fraction: number): void;
}

/** Metadata shown in the OmniPlayr player UI and media session.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#available-player-state)
 */
export interface TrackMetadata {
  /** Track title, if known. */
  title: string | null;
  /** Artist name, if known. */
  artist: string | null;
  /** Album name, if known. */
  album: string | null;
  /** Album art URL, data URL, or object URL, if known. */
  album_art: string | null;
  /** Duration in seconds, if known. */
  duration: number | null;
  /** Genre, if known. */
  genre: string | null;
  /** Release year, if known. */
  year: string | null;
  /** Original filename, if relevant. */
  filename: string | null;
}

/** A queued track reference.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#available-player-state)
 */
export interface QueueItem {
  /** Track id/path understood by the source type. */
  songId: string;
  /** Source type, usually matching your backend source_type. */
  sourceType: string;
  /** Optional plugin-defined data carried with the queue item. */
  extra?: Record<string, unknown>;
}

/** Playback history item.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#available-player-state)
 */
export interface HistoryItem extends QueueItem {
  /** Whether this item originally came from the next queue. */
  fromNextQueue: boolean;
}

/** Fires whenever general player state changes. Read the state from `player` inside the callback.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#subscribing-to-general-player-state)
 */
export type PlayerListener = () => void;

/** Fires when the current song id or source type changes.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#subscribing-to-track-changes)
 */
export type TrackChangeListener = (songId: string | null, sourceType: string | null) => void;

/** OmniPlayr's shared audio player API exposed to plugins.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#player-subscriptions)
 */
export interface Player {
  /** Whether the player is currently fetching or preparing a track. */
  isLoading: boolean;
  /** Current track id/path, or null when nothing is loaded. */
  currentSongId: string | null;
  /** Current source type, or null when nothing is loaded. */
  currentSourceType: string | null;
  /** Metadata for the current track, or null until loaded. */
  currentMetadata: TrackMetadata | null;
  /** Extra data attached to the current track, if any. */
  currentExtra: Record<string, unknown> | null;
  /** Whether shuffle is enabled. */
  shuffle: boolean;
  /** Current repeat mode. */
  repeat: RepeatMode;
  /** Whether audio is currently playing. */
  readonly isPlaying: boolean;
  /** Playback position in seconds. */
  readonly currentTime: number;
  /** Track duration in seconds. */
  readonly duration: number;
  /** Whether a track is loaded. */
  readonly hasTrack: boolean;
  /** Current raw gain value. Prefer `volumeFraction` for UI. */
  readonly volume: number;
  /** Current volume as a 0-1 fraction. */
  readonly volumeFraction: number;
  /** Name of the active next queue, if any. */
  readonly queueName: string | null;
  /** Snapshot of the priority queue. */
  readonly getPriorityQueue: QueueItem[];
  /** Snapshot of the next queue. */
  readonly getNextQueue: QueueItem[];
  /** Snapshot of playback history. */
  readonly getHistory: HistoryItem[];
  /** Whether there is a previous history item. */
  readonly hasPrev: boolean;
  /** Whether there is another queued item. */
  readonly hasNext: boolean;
  /** Subscribe to any player state change. Returns an unsubscribe function. */
  subscribe(cb: PlayerListener): () => void;
  /** Subscribe only to track id/source changes. Returns an unsubscribe function. */
  subscribeToTrackChange(cb: TrackChangeListener): () => void;
  /** Add a track to the priority queue and start playback if idle. */
  addToQueue(songId: string, sourceType: string, extra?: Record<string, unknown>): void;
  /** Replace the next queue with a named queue. */
  setNextQueue(name: string | null, items: QueueItem[]): void;
  /** Append items to the current next queue. */
  appendToNextQueue(items: QueueItem[]): void;
  /** Clear the next queue. */
  clearNextQueue(): void;
  /** Clear the priority queue. */
  clearPriorityQueue(): void;
  /** Toggle shuffle mode. */
  toggleShuffle(): void;
  /** Cycle repeat mode between off, all, and one. */
  cycleRepeat(): void;
  /** Play the next item if available. */
  next(): Promise<void>;
  /** Return to the previous item or restart the current one. */
  prev(): Promise<void>;
  /** Stop current playback and move to the next item. */
  skip(): void;
  /** Play a track by id and source type. */
  playSong(songId: string, sourceType: string, extra?: Record<string, unknown>, fromNextQueue?: boolean, autoplay?: boolean): Promise<void>;
  /** Toggle play/pause for the active source. */
  togglePlay(): void;
  /** Seek by fraction of duration, from 0 to 1. */
  seek(fraction: number): void;
  /** Set volume as a 0-1 fraction. */
  setVolume(fraction: number): void;
  /** Register or unregister a custom frontend source plugin. Pass null to unregister. */
  registerPlugin(sourceType: string, plugin: SourcePlugin | null): void;
}

/** Shared OmniPlayr player instance. This is provided by the host app at runtime.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#player-subscriptions)
 */
export const player: Player = new Proxy({} as Player, {
  get(_target, property) {
    const hostPlayer = requireHostApi('player') as unknown as Record<PropertyKey, unknown>;
    const value = hostPlayer[property];
    return typeof value === 'function' ? value.bind(hostPlayer) : value;
  },
  set(_target, property, value) {
    const hostPlayer = requireHostApi('player') as unknown as Record<PropertyKey, unknown>;
    hostPlayer[property] = value;
    return true;
  },
});

/** Return the Storage object OmniPlayr uses for volume persistence, or null when volume persistence is disabled.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#available-player-state)
 */
export function getVolumeStorage(): Storage | null {
  return requireHostApi('getVolumeStorage')();
}

/** Convenience wrapper for `player.playSong(songId, sourceType, extra)`.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#playing-media)
 */
export function playSong(songId: string, sourceType: string, extra?: Record<string, unknown>): Promise<void> {
  return player.playSong(songId, sourceType, extra);
}
