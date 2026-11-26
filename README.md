# reVCS Manager

<img src="site/assets/revcs-logo.png" alt="reVCS - Vice City Stories" width="420">

Install **reVCS Alpha 0.55** using your own Vice City Stories PS2 ISO or extracted disc folder.

[Download Manager 1.35.16](https://github.com/DasIstEin20/reVCS_Installer/releases/download/v1.35.16/reVCS-Manager-1.35.16-bootstrap.zip) · [Manager offline update](https://github.com/DasIstEin20/reVCS_Installer/releases/download/v1.35.16/reVCS-Manager-1.35.16-CopyPaste.zip) · [All Manager downloads](https://github.com/DasIstEin20/reVCS_Installer/releases/tag/v1.35.16) · [Website](https://dasistein20.github.io/reVCS_Installer/)

**Manager 1.35.16** — [Release notes](releases/CHANGELOG-1.35.16.md)

**Update 9** — [Release notes](releases/CHANGELOG-9.md) · [Game update](https://github.com/DasIstEin20/reVCS_Installer/releases/tag/v0.55-update9)

Requires **Windows 10 or 11, 64-bit**, and your own PS2 game files.

1. Download and extract the bootstrap ZIP into a writable folder.
2. Run `reVCS Manager.exe` and keep its included `tools` folder beside it.
3. Choose your PS2 ISO or extracted disc folder and a new or empty destination.
4. Fresh conversion uses the existing Update 8.10 converter. Use Check Game Updates to apply Update 8.11, then Update 9.
5. Launch native x64 Direct3D 11, or choose an available compatibility renderer.

For an **existing installation**, update Manager to 1.35.16 first. The CopyPaste ZIP includes Manager and its matching tools component for offline updating. Apply Update 8.11 before Update 9; the feed retains both steps. Older 8/8.0-8.10 installations can reach 8.11 through its existing cumulative update.

The current release does not contain a new complete offline converter kit. The [previous 1.35.14 Full kit](https://github.com/DasIstEin20/reVCS_Installer/releases/tag/v1.35.14) remains available as an older conversion base; update Manager and apply the game update chain afterwards. A CopyPaste ZIP updates an existing installation and is not a complete fresh-install kit.

Update 9 resets game settings to defaults in the new revcs.set format. Existing saves and progress are unaffected. Selected texture packs and primary language are preserved.

Saves Manager now imports supported PS2 raw, PSU, CBS, MAX, NPO, PSV and ZIP saves and exports raw saves for compatible PCSX2 folder memory cards. Installation repair supports reviewed file recovery; failed operations provide local diagnostic ZIPs through Show logs.

Texture Packs accepts original ZIP/7z/RAR archives. Local crash reports are enabled by default; debug logging is independent. Reports are not uploaded automatically.

[Installation guide](releases/INSTALLATION-1.35.16.txt) · [SHA256 checksums](releases/SHA256SUMS-1.35.16.txt) · [Report an issue](https://github.com/DasIstEin20/reVCS_Installer/issues)

No PS2 disc image, complete original game resources or third-party replacement pack is included. reVCS is an alpha fan project, free and unaffiliated with Rockstar Games or Take-Two Interactive. See [NOTICE.md](NOTICE.md).
