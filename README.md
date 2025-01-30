# FumOS
FumoFumo inspired Archlinux-based meme distro with [Ezarcher as its base](https://sourceforge.net/projects/ezarch/)

## Downloads
I havent made a relase yet, tho if you wanna test it follow the build instructions.


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
![2025-01-29_14-19](https://github.com/user-attachments/assets/3f35fd19-0652-40b0-946e-54db09a74902)
![2025-01-29_14-20](https://github.com/user-attachments/assets/df8cee8a-331c-47a9-be40-414e41e1681e)
![2025-01-29_12-47](https://github.com/user-attachments/assets/ade87e34-5d2c-48a1-bc27-4fe0f47dbe11)
![2025-01-29_13-41](https://github.com/user-attachments/assets/2c4dfc32-9cd8-46a9-a74b-f8a5d66a3b0a)
