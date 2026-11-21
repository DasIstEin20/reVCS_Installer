New in this resumed slice:
- Preserve Farewell to Arms attached gunner camera/state through control resets
  and target-button input; use the existing large centered first-person sight.
- Add the supplied PC/XInput control glyphs for configured bindings, live help
  and current Xbox mode diagrams, including unknown and empty-binding artwork.
- Keep texture ownership in the frontend and text layout in CFont; cache five
  atlases and retain localized-text fallback when optional artwork is absent.

Previously qualified private changes retained in this build:
- Turkish language: 6888 keys, 86 mission dictionaries, six extra Unicode font
  cells, PC options/help and persistent language choice; previous fonts retained.
- Truck restitution/command precedence, route policy and road-prop avoidance.
- Hovercraft support, fan-assisted yaw, Ogstra damping and vehicle-engine audio.
- Vehicle final-pose shadows and cached-shadow capacity corrections.
- Original queued vehicle-explosion delay and scoped NPC knife/fist follow-ups.
- Existing Ferris floor/save, garage collisions, sniper audio and other fixes
  already present in the verification demo are retained.