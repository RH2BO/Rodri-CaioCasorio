# Rodri & Caio Wedding Site

This repository contains the wedding site as one static website:

- `index.html` is the homepage and information section.
- `save-the-date/` contains the multilingual 2027 save-the-date.
- `RSVP/` contains the RSVP flow.
- `Gifts/` contains the gifts flow.
- `assets/homepage/` contains homepage images and audio.
- `assets/site.css` provides the shared phone-friendly viewport layout.
- `assets/site.js` shares the music toggle and mute preference across pages.

Press Start on the homepage to begin the intro animation and music, then choose
a language. The choice is kept for the current browser tab and automatically
used across the site's pages; a new visit asks for a language again.
If someone opens a subpage before choosing, they are sent to the homepage first
and returned to their requested page after choosing.
Music is enabled by default after Start, and the mute choice is remembered
across pages.

To publish with GitHub Pages, publish the repository root from the `main` branch.
The RSVP integration and gifts payment configuration are unchanged from their
original pages and should be checked before the site goes live.
