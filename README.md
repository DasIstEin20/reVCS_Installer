# reVCS Setup

Install **reVCS Alpha 0.55** on Windows using your own Vice City Stories PS2 ISO or extracted disc folder.

[Download Setup 1.34.1 beta](https://github.com/DasIstEin20/reVCS_Installer/releases/download/v1.34.1-beta/reVCS-Setup-1.34.1-bootstrap.zip) · [All downloads](https://github.com/DasIstEin20/reVCS_Installer/releases/tag/v1.34.1-beta) · [Website](https://dasistein20.github.io/reVCS_Installer/)

**Setup 1.34.1** fixes installed-folder selection, adds readable release notes and download progress, and stages game updates without copying the full game. [Setup changelog](releases/CHANGELOG-1.34.1.md)

**Update 8.2** is available through Setup’s **Updates** page. [Changelog](releases/CHANGELOG-8.2.md) · [Update release](https://github.com/DasIstEin20/reVCS_Installer/releases/tag/v0.55-update8.2)

Requires **Windows 10 or 11, 64-bit**, and your own PS2 game files.

1. Download and extract the bootstrap ZIP into a writable folder.
2. Run `reVCS-Setup-1.34.1.exe`. Keep the included `tools` folder beside it.
3. Select your PS2 ISO or extracted disc folder and choose a new or empty installation folder.
4. Setup downloads the required components, verifies them and converts your game files.
5. Open **Updates → Check game updates → Apply available game updates** to install Update 8.2.

For **offline installation**, download all 13 BIN components from the same release and place them beside Setup and `version.xml`. Switch online access off before installing. See the [installation guide](releases/INSTALLATION-1.34.1.txt) for details.

Quick mode covers the essentials. Extended mode adds more control, including optional PCSX2 texture-pack import. Setup also provides save backups, launch options and update checks. Texture packs are supplied separately by the user.

Online access is enabled by default. Advanced → **Keep update backups** saves your choice immediately; disabling it removes temporary rollback files after successful game updates. Existing backups are preserved.

Downloads and updates come from GitHub. Custom mirrors and offline installation are supported. Setup checks for its own updates on every launch and automatically replaces its EXE after verification. Advanced provides persistent switches for startup checks and automatic installation. Download cache is cleaned after use. Earlier 1.34.1 builds need one manual EXE replacement to acquire these features.

Use the [SHA256 checksums](releases/SHA256SUMS-1.34.1.txt) to check downloaded files. Setup is a beta and reVCS is an alpha project; please include your source-disc edition, Setup version and relevant logs when [reporting an issue](https://github.com/DasIstEin20/reVCS_Installer/issues).

No PS2 disc image is included. This is an unofficial fan project, not affiliated with Rockstar Games or Take-Two Interactive. See [NOTICE.md](NOTICE.md).
