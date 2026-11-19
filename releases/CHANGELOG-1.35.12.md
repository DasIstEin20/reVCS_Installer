reVCS Manager 1.35.12

- Import PCSX2 texture replacements at their source resolution when native
  texture budgets allow, preserving complete mip chains.
- Rebuild older cached imports from retained PNG/DDS originals when applying
  the current selection, and report actual output sizes and reduction reasons.
- Expand Texture Packs with review filters and clearer replacement information.
- Add a native save editor for money, health and weapon loadouts.
- Add the -nointro launch option while retaining the required notice screen.
- Refresh desktop game settings and bound retained diagnostic logs.
- Refresh the converter and matching components for Alpha Update 8.8, with
  native x64 Direct3D 11 and x86 Direct3D 9 defaults.

Existing saves, preferences and texture-pack selections are retained. Texture
detail already lost in a BC3-only import requires reimporting the original pack.
A fresh installation still requires your own supported PS2 game disc image or
extracted disc folder. Missing matching components can be downloaded in online mode.
