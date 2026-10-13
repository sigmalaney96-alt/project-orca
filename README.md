# Orca (rebrand prototype)

This branch contains the initial, non-destructive prototype changes for rebranding the Chromium fork to "Orca".

What I added in rebrand/orca:

- branding/orca-logo.svg — placeholder Orca logo (SVG)
- branding/ORCA_BRANDING.md — notes and instructions for further rebrand steps
- ui/new_tab/orca_ntp.html, .css, .js — prototype New Tab Page (dynamic blue→black gradient, centered search bar, Add Widget button and simple widget system)
- ui/settings/orca_settings.html — prototype modern Settings scaffold

These files are intentionally additive and do not modify existing Chromium source files. They provide a reviewable foundation for migrating components and integrating orca:// pages and settings UI in later, targeted patches.

Next steps I will take after you review these additions:
- Run a repo-wide search and prepare safe replacements for visible "Chrome" → "Orca" occurrences (non-code/test assets first)
- Begin plumbing for internal scheme orca:// with safe redirects
- Iterate on the New Tab Page widget API and Settings UI styles

If you want me to land these on a different branch name, or include more assets, tell me and I will adjust.
