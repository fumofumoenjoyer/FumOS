# FumOS
FumoFumo inspired Archlinux-based meme distro with [Ezarcher as its base](https://sourceforge.net/projects/ezarch/)

## Features
More private, hardened librewolf web browser thanks to [Vanguard Browser](https://github.com/Michael-Sebero/Vanguard-Browser)

Zsh as the default user shell

Fumos everywhere! Custom fastfetch with Fumos, Fumosay and Fumofetch preinstalled!

The [FumOS Repo](https://gitlab.com/fumofumoenjoyer/fumos-repo)

Custom theme included and enabled by default

## Downloads
FumOS 2025.1 "Cirno" is here!  

Standard ISO:

https://drive.google.com/file/d/1f_c3CnVZ49cXDq8x1mRbevMr0N9kLFuJ/view?usp=sharing

Nvidia ISO:
### Warning this ISO for newer GPUs (GTX1600's and RTX2000's series and newer) only, For Older models use the standard ISO and check the [Archwiki](https://wiki.archlinux.org/title/NVIDIA) to find the adequate packages for your machine.

https://drive.google.com/file/d/1rWzMc3odwHr2XLsyDPt8wy7cU07nrDWH/view?usp=sharing

## Build Instructions
Install the [Chaotic AUR repo](https://aur.chaotic.cx/), then clone this repo and run ```steps.sh``` as root on an archlinux compatible machine to build the ISO, it should appear in the ```out``` directory.

## Known issues
You should update and refresh your keyrings before you can install new packages, you can do that with this command:
```
sudo pacman-key --init && sudo pacman-key --populate && sudo pacman -Syyu
```
You should also reboot after doing this
## Screenshots
### Desktop
![2025-02-03_21-07](https://github.com/user-attachments/assets/218ca2dc-a63a-448c-93d3-e73084e038f1)
### Fastfetch
![2025-02-03_21-06](https://github.com/user-attachments/assets/94cc5a8c-87bf-4c7a-9c0c-d9a6efc4714d)
### Splash screen (After login)
![2025-02-03_21-09](https://github.com/user-attachments/assets/f3ffd74c-5d51-484d-9ad9-f9c65e00e060)





