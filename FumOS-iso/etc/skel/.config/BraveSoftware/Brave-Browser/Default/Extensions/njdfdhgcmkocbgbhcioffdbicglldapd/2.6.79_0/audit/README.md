### Introduction
This script makes it possible for any user and extension reviewer to verify the integrity of the resources bundled. It compares all libraries with their original sources. Optionally, a local Tor proxy can be used. In total, there are over 1000 files in LocalCDN. This process can take between 5 and 15 minutes.

### Prerequisites
* GNU/Linux (Debian, Ubuntu,...)
* Bash >= 4.4
* LocalCDN >= v2.6.3
* Local Tor SOCKS5 Proxy (optional, but recommended)

### Tor Proxy
* Install Tor Proxy
  * `sudo apt install tor`
  * e.g. https://linuxconfig.org/install-tor-proxy-on-ubuntu-20-04-linux
* Check Tor
  * `systemctl status tor@default.service`
  * `systemctl status tor.service`

### How to start
Open up a terminal and `cd` into this directory. However you run the script, the output can be redirected to a file with ` > output.txt`
```
Usage:
           bash audit.sh [options]
           bash audit.sh [options] -d [resource]

Example:
           bash audit.sh
           bash audit.sh -tfr
           bash audit.sh -tfrd jquery

Options:
  -t       Use local Tor proxy (torsocks)
  -f       Create THIRD_PARTY.txt file with all contacted URLs
  -r       Replace in case of hash mismatch
  -l       List all resources
  -d       Check only ONE resource, e.g. jquery
           'bash audit.sh -d jquery'
```
#### Examples
* Check all files:
  * `bash audit.sh`
  * `bash audit.sh > output.txt`
* Check only one library. Choose the folder name from `/resources/`, e.g. `jquery`:
  * `bash audit.sh -d jquery`
  * `bash audit.sh -d jquery > output.txt`
* Check all files and replace in case of hash mismatch:
  * `bash audit.sh -r`
  * `bash audit.sh -r > output.txt`
* Check only one library files and replace in case of hash mismatch. Choose the folder name from `/resources/`, e.g. `jquery`:
  * `bash audit.sh -rd jquery`
  * `bash audit.sh -rd jquery > output.txt`

#### Required time
* direct without Tor proxy: ~5 minutes
* Tor proxy: ~15 minutes
