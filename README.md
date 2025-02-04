# FumOS
FumoFumo inspired Archlinux-based meme distro with [Ezarcher as its base](https://sourceforge.net/projects/ezarch/)

## Features
More private, hardened librewolf web browser thanks to [Vanguard Browser](https://github.com/Michael-Sebero/Vanguard-Browser)

Zsh as the default user shell

Fumos on Fastfetch

Custom theme included and enabled by default

## Downloads
FumOS 2025.1 "Cirno" is here!  

Standard ISO:

https://drive.google.com/file/d/169IUJEiLu8PFpS1HUaB7nwguGHxDb81K/view?usp=sharing

Nvidia ISO:
### Warning this ISO for newer GPUs (GTX1600's and RTX2000's series and newer only) For Older models use the standard ISO and check the [Archwiki](https://wiki.archlinux.org/title/NVIDIA) to find the adequate packages for your machine.

https://drive.google.com/file/d/15tOmGvJ9Jbxh0JkIVy3dDROqCotKX_3e/view?usp=sharing


## Build Instructions
Install the [Chaotic AUR repo](https://aur.chaotic.cx/), then clone this repo and run ```steps.sh``` as root on an archlinux compatible machine to build the ISO, it should appear in the ```out``` directory.

## Known issues
You might need to update and/or refresh your keyrings before you can install new packages you can do that with this command:
```
sudo pacman-key --init && sudo pacman-key --populate && sudo pacman -Syyu
```
You should also reboot after doing this
## Screenshots
![2025-01-30_11-13](https://github.com/user-attachments/assets/4d209653-9ebf-472f-910b-c964e8dc6d9d)
![2025-01-30_11-14](https://github.com/user-attachments/assets/2c8ef704-bce4-4a16-8b03-306a7f916936)
![fumos](https://github.com/user-attachments/assets/bbb5b250-2dfe-4cbb-874e-88d516d2adc2)
