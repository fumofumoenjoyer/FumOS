# FumOS
FumoFumo inspired Archlinux-based meme distro with [Ezarcher as its base](https://sourceforge.net/projects/ezarch/)

## Downloads
Sadly i dont have any other way to host this for now

https://drive.google.com/file/d/1OfpgbKrNSVagXR__cppQfgzDrpS85Inc/view?usp=sharing

## Build Instructions
Install the [Chaotic AUR repo](https://aur.chaotic.cx/), then clone this repo and run ```steps.sh``` as root on an archlinux compatible machine to build the ISO, it should appear in the ```out``` directory.

## Known issues
Sometimes on nvidia gpus it may take up to 5 minutes to load the live environment, i havent found a solution yet


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
