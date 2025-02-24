@echo off
:: Réduire la fenêtre actuelle
powershell -command "(Get-Process -Id $pid).MainWindowHandle | ForEach-Object { (New-Object -ComObject Shell.Application).MinimizeAll() }"

:: Installer Deno si non installé
if not exist "%USERPROFILE%\.deno\bin\deno.exe" (
    echo Installing Deno...
    powershell -command "iwr https://deno.land/x/install/install.ps1 -useb | iex"
)

:: Ajouter Deno au PATH
set PATH=%USERPROFILE%\.deno\bin;%PATH%

:: Installer les dépendances
deno cache main.ts

:: Ouvrir une nouvelle fenêtre CMD
cd C:\Users\LA TOUR MSI DU TURFU\Desktop\github\farmeur
deno run --allow-read --allow-ffi --allow-net --allow-env --allow-run farm.ts