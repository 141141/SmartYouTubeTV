/*
Description: Common routines
*/

console.log("Scripts::Running script constants.js");

var DefaultKeys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    ENTER: 13,
    ESC: 27
};

var DefaultEvents = {
    PLAYER_DATA_LOADED: 'loadeddata',
    PLAYER_START_LOADING: 'loadstart',
    PLAYER_PLAYING: 'playing',
    KEY_UP: 'keyup',
    KEY_DOWN: 'keydown',
    HASH_CHANGE: 'hashchange',
    PLAYER_PLAY: 'play'
};

var YouTubeConstants = {
    // CSS Selectors
    APP_EVENTS_RECEIVER_SELECTOR: '#leanback', // div that receives keys events for app
    DIALOG_WINDOW_SELECTOR: '#dialog-stage',
    DIALOG_CANCEL_BUTTON_SELECTOR: '#dialog-cancel-button',
    DIALOG_OK_BUTTON_SELECTOR: '#dialog-ok-button',
    APP_CONTAINER_SELECTOR: '#leanback', // div that receives keys events for app,
    SEARCH_FIELD_SELECTOR: '#search-input',
    PLAYER_EVENTS_RECEIVER_SELECTOR: '#watch', // div that receives keys events for player (note: some events don't reach upper levels)
    PLAYER_WRAPPER_SELECTOR: '.html5-video-container', // parent element of the 'video' tag
    PLAYER_MORE_BUTTON_SELECTOR: '#transport-more-button',
    PLAYER_PLAY_BUTTON_SELECTOR: '.icon-player-play',
    SURFACE_CONTENT_SELECTOR: '#surface-content', // holds all right area content
    OPTIONS_APP_KEY_SELECTOR: '.app-version-key',
    OPTIONS_APP_VALUE_SELECTOR: '.app-version-value',
    // CSS Classes
    ELEMENT_IS_FOCUSED_CLASS: 'focused',
    PLAYER_CONTAINER_CLASS: 'watch',
    MODEL_LOADED_CLASS: 'loaded',
    // DOM Events
    MODEL_CHANGED_EVENT: 'model:changed',
    // Other
    PLAYER_URL_KEY: 'watch',
    OPTIONS_VERSION_TITLE: 'Version',
    OPTIONS_DEVICE_TITLE: 'Device'
};

/**
 * YouTube checks next types through the {@link window.MediaSource.isTypeSupported} method
 */
var YouTubeMediaTypes = [
    'video/webm; codecs="vp9"',
    'video/webm; codecs="vp9"; width=640',
    'video/webm; codecs="vp9"; width=99999',
    'video/webm; codecs="vp9"; height=360',
    'video/webm; codecs="vp9"; height=99999',
    'video/webm; codecs="vp9"; framerate=30',
    'video/webm; codecs="vp9"; framerate=9999',
    'video/webm; codecs="vp9"; width=3840; height=2160; bitrate=2000000',
    'video/webm; codecs="vp9"; width=3840; height=2160; bitrate=20000000',
    'video/webm; codecs="vp9"; bitrate=300000',
    'video/webm; codecs="vp9"; bitrate=2000000000',
    'video/webm; codecs="vp9"; eotf=bt709',
    'video/webm; codecs="vp9"; eotf=catavision',
    'video/webm; codecs="vp09.02.51.10.01.09.16.09"',
    'video/webm; codecs="vp09.02.51.10.01.09.99.99"',
    'video/mp4; codecs="avc1.4d4015"',
    'video/mp4; codecs="avc1.4d401e"',
    'video/mp4; codecs="avc1.4d401f"',
    'video/mp4; codecs="avc1.640028"',
    'video/mp4; codecs="avc1.4d400c"',
    'video/mp4; codecs="avc1.42001E"',
    'audio/webm; codecs="opus"',
    'audio/webm; codecs="opus"; channels=2',
    'audio/webm; codecs="opus"; channels=99',
    'audio/webm; codecs="vorbis"',
    'audio/mp4; codecs="mp4a.40.2"'
];