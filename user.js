// Override Firefox's own render scale, independent of system/monitor scale.
// -1 = auto (follows Hyprland's monitor scale). 1 = OS pixel grid 1:1.
//
// Both displays are 1920x1080, but the laptop panel (eDP-2, 14") is ~157 DPI
// while the external ASUS VG249 (HDMI-A-1, 24") is ~92 DPI, so 1:1 renders
// ~1.7x physically larger on the external monitor. Hence < 1 while docked.
//
// Tune live in about:config (applies instantly, no restart), then mirror the
// value here so it survives a restart -- user.js overrides prefs.js at startup.
user_pref("layout.css.devPixelsPerPx", "0.80");
