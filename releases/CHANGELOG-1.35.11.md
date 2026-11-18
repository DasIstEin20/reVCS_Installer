reVCS Manager 1.35.11

- Remove running-game process checks from online/local game updates and runtime
  repair and maintenance/recovery actions, as requested. OS file-access errors
  still trigger the existing atomic-update rollback.
- Read historical installation metadata declaring the UTF-8 alias "utf8"
  without changing its version, source identity or saved update history.
- Add local update diagnostics with EXE/worker identities, action history and
  full error details; open the logs from Extended > Advanced.
- Fix "Invalid DXVK option" when a newer Manager is used beside an older
  installer manifest. Matching converter components are selected and verified
  together; missing components can be downloaded automatically.
- Add native Direct3D 11 (x64, recommended) and Direct3D 9 (x86 compatibility)
  choices during installation, with optional DXVK/Vulkan for x86.
- Clear and disable incompatible Vulkan options when switching to native
  Direct3D. Keep DXVK D3D9 DLLs out of the x64 Direct3D 11 installation.
- Save the selected backend's architecture for Play and installed shortcuts.
- Refresh conversion components to install Alpha Update 8.6 directly from
  a supported user-supplied PS2 disc image or extracted disc folder.

Validation: two focused WSL2 update/OS-error rollback checks, plus scoped
x64 Manager/worker and package checks. No additional
gameplay runs or full disc reconversion; full installation testing is manual.
