# reVCS Setup

Install **reVCS Alpha 0.55 Update 8** from your own Vice City Stories PS2 ISO or extracted disc folder. Setup 1.34 beta refreshes the Windows interface and moves downloads and update catalogs to GitHub.

[Website](https://dasistein20.github.io/reVCS_Installer/) · [Downloads and offline components](https://github.com/DasIstEin20/reVCS_Installer/releases/tag/v1.34.0-beta)

Download the bootstrap ZIP, extract it into a writable folder and run Setup. Windows 10 or 11, 64-bit, is required. Setup downloads and verifies the components it needs. For offline installation, place all 13 BIN components and `version.xml` beside the executable.

The editable update channel is [`manifests/version.xml`](manifests/version.xml). Artifacts are versioned release assets with sizes and SHA256 checksums. Old default Archive.org channels migrate automatically; custom mirrors remain available. Installer self-replacement is disabled by default.

Quick and Extended modes, save backups, launch options and optional user-supplied PCSX2 texture packs remain available. Setup 1.34 retains the qualified 1.33 game build and conversion recipes; it adds no gameplay update.

This distribution repository contains the website, catalogs and release instructions. The `site/` directory is deployed by the GitHub Pages workflow. Game disc images and full original game data are not included. Project-specific additions and third-party tools retain their notices in the installation kit.

Unofficial fan project, not affiliated with Rockstar Games or Take-Two Interactive. See [NOTICE.md](NOTICE.md).
