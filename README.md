# reVCS Manager

<img src="site/assets/revcs-logo.png" alt="reVCS - Vice City Stories" width="420">

Install **reVCS Alpha 0.55** on Windows using your own Vice City Stories PS2 ISO or extracted disc folder.

[Download Manager 1.35.0](https://github.com/DasIstEin20/reVCS_Installer/releases/download/v1.35.0/reVCS-Manager-1.35.0-bootstrap.zip) · [All downloads](https://github.com/DasIstEin20/reVCS_Installer/releases/tag/v1.35.0) · [Website](https://dasistein20.github.io/reVCS_Installer/)

**Manager 1.35.0** is the production release. Its language selector stays visible in the title bar beside Quick/Extended. Manage multiple PCSX2 packs, per-texture selections and priorities, saves, game settings, renderer options, offline ZIP updates and rollback backups. [Changelog](releases/CHANGELOG-1.35.0.md)

**Update 8.5** updates **8, 8.1, 8.2, 8.3 or 8.4** directly. Adds adaptive streaming, mip support, road GPS, a pack overview and Extras controls, with earlier runtime fixes. [Changelog](releases/CHANGELOG-8.5.md) · [Update release](https://github.com/DasIstEin20/reVCS_Installer/releases/tag/v0.55-update8.5)

Requires **Windows 10 or 11, 64-bit**, and your own PS2 game files.

1. Download and extract the bootstrap ZIP into a writable folder.
2. Run `reVCS Manager.exe`. Keep the included `tools` folder beside it.
3. Select your PS2 ISO or extracted disc folder and a new or empty installation folder.
4. Manager downloads and verifies components, then converts your game files directly to Update 8.5.
5. Existing installations use **Check Game Updates** for the cumulative package. Update Manager first for current texture-pack support.

For **offline installation**, download all 13 BIN files from the same release and place them beside Manager and `version.xml`. Your original ISO, saves and supplied texture archives remain unchanged. Texture packs are supplied separately.

Startup checks offer Manager updates first. Downloads and installation require confirmation. Choose your interface language in the title bar; technical diagnostics and some extended explanations retain English fallback. Online access, cache cleanup and backup preferences remain configurable.

Play reVCS defaults to x86 for new preferences; choose x64 in Launch Options for the current extended features. DXVK is optional. After changing packs, restart the game. Apply unchanged selections to upgrade older imported textures to full offline mip chains.

[Installation guide](releases/INSTALLATION-1.35.0.txt) · [SHA256 checksums](releases/SHA256SUMS-1.35.0.txt) · [Report an issue](https://github.com/DasIstEin20/reVCS_Installer/issues)

No PS2 disc image or third-party replacement pack is included. reVCS is an alpha fan project, free and unaffiliated with Rockstar Games or Take-Two Interactive. See [NOTICE.md](NOTICE.md).
