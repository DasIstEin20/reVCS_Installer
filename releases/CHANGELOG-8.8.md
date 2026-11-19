reVCS 0.55 Alpha Update 8.8

- Improve Bullet vehicle balance, suspension response and steering, and correct
  NPC throttle/braking and scripted driving behaviour.
- Improve boat steering response and turn control.
- Fix Bullet collision damage needed to progress Accidents Will Happen.
- Restore missing safehouse garage resources and correct rotating-door behaviour.
- Fix the duplicate player during cutscenes and NPCs getting stuck after leaving
  scripted vehicles.
- Correct riding poses on Biker's Angel, Wintergreen and VCPD Wintergreen,
  including seat height and hand/foot placement.
- Fix the excessive body lean during unarmed and melee combat.
- Restore bicycle pedalling response, bicycle tyre puncture immunity and
  original NPC passenger SMG burst timing.
- Restore Molotov flight flames and correct emergency ambulance dispatch gating.
- Restore maximum health when loading newly created safehouse saves.
- Improve loading-screen progress and keep menu music playing while loading.
- Reorganize settings, add menu transitions and option descriptions, and fix
  mouse dragging on sliders and clickable option arrows.
- Move language and fullscreen controls into settings; retain Alt+Enter.
- Add separate anti-aliasing mode and quality selectors for MSAA and FXAA.
  FXAA is available on Direct3D 11.
- Add an optional PS2-style building-lighting mode and a PSP-inspired colour
  preset. Existing lighting remains the default.
- Improve menu font coverage and Polish, German, French and Spanish labels.
- Restore original PS2 radar trace colours and add Empire business details
  to the pause map.
- Correct the reported street-corner geometry gap and missing scripted props.
- Restore the Laser Sniper's original red aiming dot.
- Expand debug vehicle spawning with search and vehicle-type filters, remove
  the clear-space restriction, and add waypoint/island teleports and no-reload.
- Preserve additional native statistics and radio-listening history across saves.

Includes x86 and x64 builds for Direct3D 9 and Direct3D 11. This cumulative
update supports the first public Alpha Update 8 / 8.0 installer and later
8.x installations through 8.7, without installing intermediate updates.

Validation reuses the existing focused x64 Direct3D 11 checks. All four
variants were rebuilt; this release preparation adds package, version and
overlay-integrity checks rather than a full gameplay regression run.
