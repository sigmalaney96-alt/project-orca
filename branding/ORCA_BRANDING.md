Orca Rebrand Notes

This file contains notes for the initial rebrand work for the Chromium fork to "Orca".

Goals in this branch:
- Keep changes additive and reviewable (avoid large-scale in-place replaces that break build/tests)
- Provide prototype assets and UI scaffolds for the New Tab Page (NTP) and Settings
- Prepare for stepwise replacement of visible product strings and internal schemes

Files added in this commit:
- branding/orca-logo.svg — placeholder SVG logo
- ui/new_tab/orca_ntp.html, .css, .js — prototype NTP with dynamic gradient, search bar, Add Widget button, and simple widget system
- ui/settings/orca_settings.html — prototype settings page scaffold

Recommended follow-ups:
1. Provide official Orca logos and color palette. Replace the placeholder SVG in branding/.
2. Run a repository-wide scan for visible strings (README, About dialogs, menus) to prepare safe replacements of "Chrome" → "Orca". Avoid touching code-internal identifiers that may break tests.
3. Begin adding orca:// scheme handling in a dedicated CL. Start by adding redirects from chrome:// to orca:// for user-visible pages while keeping chrome:// as fallback.
4. Integrate the NTP prototype into the browser's resource routing only after a design review.

Legal note: Ensure you have the rights to rebrand and distribute under "Orca" given Chromium's trademarks and dependencies. This file is not legal advice.
