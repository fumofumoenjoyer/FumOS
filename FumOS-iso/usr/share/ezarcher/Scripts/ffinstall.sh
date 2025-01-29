#!/bin/bash

# ffinstall.sh
# Revision 2024.12.25 -- by eznix (https://sourceforge.net/projects/ezarch/)
# (GNU/General Public License version 3.0)

# Script to download and install Firefox Latest into user's home folder under /Programs/Browsers/Mozilla/firefox
# and create a launher in the ~/.local/share/applications folder for inclusion in the menu

# RUN AS USER, NOT ROOT!!! 

# make the directory
mkdir -p ~/Programs/Browsers/Mozilla/

# download the firefox-latest tar package
wget -O ~/Programs/Browsers/Mozilla/FirefoxSetup.tar.bz2 "https://download.mozilla.org/?product=firefox-latest&os=linux64&lang=en-US"

# extract the tar package
tar xjf ~/Programs/Browsers/Mozilla/FirefoxSetup.tar.bz2 -C ~/Programs/Browsers/Mozilla/

# delete the tar file
rm ~/Programs/Browsers/Mozilla/FirefoxSetup.tar.bz2

# make the ~/.local/share/applications/ directory
mkdir -p ~/.local/share/applications/

# create the launcher
echo "[Desktop Entry]
Encoding=UTF-8
Version=1.0
Type=Application
Categories=Network;WebBrowser;
MimeType=text/html;text/xml;application/xhtml+xml;application/xml;application/vnd.mozilla.xul+xml;application/rss+xml;application/rdf+xml;image/gif;image/jpeg;image/png;x-scheme-handler/http;x-scheme-handler/https;
NoDisplay=true
Exec=/home/$USER/Programs/Browsers/Mozilla/firefox/firefox-bin %u
Name=Firefox-Latest
Icon=firefox
Comment=Firefox-Latest" > /home/$USER/.local/share/applications/Firefox-Latest.desktop

# create link on Desktop
ln -s /home/$USER/.local/share/applications/Firefox-Latest.desktop /home/$USER/Desktop/Firefox-Latest.desktop

# Disclaimer:

# THIS SOFTWARE IS PROVIDED BY EZNIX “AS IS” AND ANY EXPRESS OR IMPLIED
# WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
# EVENT SHALL EZNIX BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
# EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
# PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
# BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
# IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
# ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
# POSSIBILITY OF SUCH DAMAGE.
