@echo off
:: Réduire la fenêtre actuelle
::powershell -command "(Get-Process -Id $pid).MainWindowHandle | ForEach-Object { (New-Object -ComObject Shell.Application).MinimizeAll() }"

:: Installer Deno si non installé
if not exist "%USERPROFILE%\.deno\bin\deno.exe" (
    echo Installing Deno...
    powershell -command "iwr https://deno.land/x/install/install.ps1 -useb | iex"
) else (
    echo Checking for Deno updates...
    deno upgrade
)

:: Ajouter Deno au PATH
set PATH=%USERPROFILE%\.deno\bin;%PATH%

:: Installer les dépendances
deno cache main.ts

:: Ouvrir une nouvelle fenêtre CMD
::cd main
deno run --allow-read --allow-write --allow-ffi --allow-net --allow-env --allow-run farm.ts 2> error.log