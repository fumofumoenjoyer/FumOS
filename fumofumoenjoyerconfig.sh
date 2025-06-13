#!/bin/bash

cd


sudo pacman-key --init && sudo pacman-key --populate

curl https://mirror.cachyos.org/cachyos-repo.tar.xz -o cachyos-repo.tar.xz
tar xvf cachyos-repo.tar.xz && cd cachyos-repo
sudo ./cachyos-repo.sh

yay -Syyu alsa-plugins flatpak  giflib   glfw   gst-plugins-base-libs lib32-alsa-plugins   lib32-giflib   lib32-gst-plugins-base-libs   lib32-gtk3   lib32-libjpeg-turbo   lib32-libva   lib32-mpg123   lib32-ocl-icd   lib32-opencl-icd-loader   lib32-openal   libjpeg-turbo   libva   libxslt   mpg123   opencl-icd-loader   openal   wine-staging winetricks   protontricks   ttf-liberation   giflib lib32-giflib libpng lib32-libpng libldap lib32-libldap gnutls lib32-gnutls mpg123 lib32-mpg123 openal lib32-openal v4l-utils lib32-v4l-utils libpulse lib32-libpulse alsa-plugins lib32-alsa-plugins alsa-lib lib32-alsa-lib libjpeg-turbo lib32-libjpeg-turbo libxcomposite lib32-libxcomposite libxinerama lib32-libxinerama ncurses lib32-ncurses opencl-icd-loader lib32-opencl-icd-loader libxslt lib32-libxslt libva lib32-libva gtk3 lib32-gtk3 gst-plugins-base-libs lib32-gst-plugins-base-libs vulkan-icd-loader lib32-vulkan-icd-loader cups samba dosbox   wine-gecko   wine-mono   winetricks   vulkan-tools proton-ge-custom-bin steam-native-runtime steam heroic-games-launcher-bin visual-studio-code-bin resources brave-bin librewolf-bin timeshift timeshift-autosnap timeshift-systemd-timer emacs ollama-rocm rustup docker podman distrobox helm kubectl llvm clang linux-cachyos linux-cachyos-headers cachyos-hello base-devel git github-cli gamemode lib32-gamemode cachyos-gaming-applications cachyos-gaming-meta



cd

sudo usermod -a -G gamemode $(whoami)


sudo grub-mkconfig -o /boot/grub/grub.cfg

cd

flatpak install sober
flatpak install vesktop
flatpak install stremio
flatpak install flatseal

cd

cd Downloads
git clone https://github.com/fumofumoenjoyer/HyDE-config.git
git clone https://github.com/fumofumoenjoyer/dotfiles.git

cd

sudo systemctl daemon-reload
sudo systemctl enable timeshift-boot.timer
sudo systemctl enable timeshift-hourly.timer
sudo systemctl enable docker
sudo systemctl enable podman



cd

git clone --depth 1 https://github.com/doomemacs/doomemacs ~/.config/emacs
~/.config/emacs/bin/doom install

cd



cd

yay -Syyu


