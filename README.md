# reVCS Setup

Install **reVCS Alpha 0.55** on Windows using your own Vice City Stories PS2 ISO or extracted disc folder.

[Download Setup 1.34.2 beta](https://github.com/DasIstEin20/reVCS_Installer/releases/download/v1.34.2-beta/reVCS-Setup-1.34.2-bootstrap.zip) · [All downloads](https://github.com/DasIstEin20/reVCS_Installer/releases/tag/v1.34.2-beta) · [Website](https://dasistein20.github.io/reVCS_Installer/)

**Setup 1.34.2** adds manual update confirmation, current changelogs in both modes and emergency installation identification. It retains readable release notes, download progress and updates without a full-game backup. [Setup changelog](releases/CHANGELOG-1.34.2.md)

**Update 8.2** is available through Setup’s **Updates** page. [Changelog](releases/CHANGELOG-8.2.md) · [Update release](https://github.com/DasIstEin20/reVCS_Installer/releases/tag/v0.55-update8.2)

Requires **Windows 10 or 11, 64-bit**, and your own PS2 game files.

1. Download and extract the bootstrap ZIP into a writable folder.
2. Run `reVCS-Setup-1.34.2.exe`. Keep the included `tools` folder beside it.
3. Select your PS2 ISO or extracted disc folder and choose a new or empty installation folder.
4. Setup downloads the required components, verifies them and converts your game files.
5. Choose **Welcome → Check Game Updates → Install Update** to install Update 8.2.

For **offline installation**, download all 13 BIN components from the same release and place them beside Setup and `version.xml`. Switch online access off before installing. See the [installation guide](releases/INSTALLATION-1.34.2.txt) for details.

Quick mode covers the essentials. Extended mode adds more control, including optional PCSX2 texture-pack import. Setup also provides save backups, launch options and update checks. Texture packs are supplied separately by the user.

Online access is enabled by default. Advanced → **Keep update backups** saves your choice immediately; disabling it removes temporary rollback files after successful game updates. Existing backups are preserved.

Downloads and updates come from GitHub. Custom mirrors and offline installation are supported. Use **Check Setup Updates** on Welcome, then confirm download and verified EXE replacement. Update checks are manual; startup auto-updates and BitTorrent fallback are disabled by default. Quick and Extended show current game and Setup changelogs. Download cache is cleaned after use. Extended → Advanced provides emergency identification for an existing installation with missing or damaged metadata.

Use the [SHA256 checksums](releases/SHA256SUMS-1.34.2.txt) to check downloaded files. Setup is a beta and reVCS is an alpha project; please include your source-disc edition, Setup version and relevant logs when [reporting an issue](https://github.com/DasIstEin20/reVCS_Installer/issues).

No PS2 disc image is included. This is an unofficial fan project, not affiliated with Rockstar Games or Take-Two Interactive. See [NOTICE.md](NOTICE.md).
