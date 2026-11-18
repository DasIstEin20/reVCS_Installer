reVCS 0.55 Alpha Update 8.7

- Bind menu and HUD sprites with their own texture filtering and addressing settings, preventing inherited sampler state from affecting UI images.
- Clamp frontend font atlases and bind the font face from the batch being rendered.
- Include x86 and x64 builds for both Direct3D 9 and Direct3D 11, with separate launchers for compatibility troubleshooting.
- Add texture platform, format and size details to the existing local menu diagnostics.
- Fix a decoder lifetime race during asynchronous audio seeking/refilling, which could crash after mission cutscenes.

The reported hardware-specific white-menu issue could not be reproduced locally. Both x64 renderer paths receive a short menu check; x86 builds receive packaging checks only. If one renderer still has problems, use the other renderer's launcher and retain native-scene.log for diagnosis.
