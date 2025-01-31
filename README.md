# FumOS
FumoFumo inspired Archlinux-based meme distro with [Ezarcher as its base](https://sourceforge.net/projects/ezarch/)

## Features
More private, hardened librewolf web browser thanks to [Vanguard Browser](https://github.com/Michael-Sebero/Vanguard-Browser)

Zsh as the default user shell

Fumos on Fastfetch

Custom theme included (not enabled by default, see the known issues section)

## Downloads
FumOS 2025.1 "Cirno" is here!  

Sadly i dont have any other way to host this for now

https://drive.google.com/file/d/1UVxWFUszL4XVmPXj56frMX6LHkxH76CN/view?usp=sharing

wtf is signature checking, if it doesnt work download it again or build it from source lewl

## Build Instructions
Install the [Chaotic AUR repo](https://aur.chaotic.cx/), then clone this repo and run ```steps.sh``` as root on an archlinux compatible machine to build the ISO, it should appear in the ```out``` directory.

## Known issues
Sometimes on nvidia gpus it may take up to 5 minutes to load the live environment, i havent found a solution yet

Sadly i cant find a way to enable the custom theme by default, so for the full FumOS experience, once you install FumOS select one of the "ChromeOS" global themes (yes thats the theme i modified), its not required, but its there if u want it, cirno pops up when you login.

## Recommendations After install
[Install the CachyOS repos](https://wiki.cachyos.org/features/optimized_repos/)

[Use my .zshrc](https://github.com/fumofumoenjoyer/dotfiles/blob/master/.zshrc) for the custom prompt and fastfetch on startup.

If you use an nvidia GPU install your drivers
```
yay -Syyu nvidia-dkms nvidia-settings nvidia-utils lib32-nvidia-utils
```

## Screenshots
![2025-01-30_11-13](https://github.com/user-attachments/assets/4d209653-9ebf-472f-910b-c964e8dc6d9d)
![2025-01-30_11-14](https://github.com/user-attachments/assets/2c8ef704-bce4-4a16-8b03-306a7f916936)
![fumos](https://github.com/user-attachments/assets/bbb5b250-2dfe-4cbb-874e-88d516d2adc2)
