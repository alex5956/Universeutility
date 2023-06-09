#!/bin/bash
php bin/console cache:clear
sshpass -p "M4ffFBUN8A7VQkP" rsync -a -v -z -u '.env' . bbzhivt@ssh.cluster031.hosting.ovh.net:www/SiteWebUniverseUtility
sshpass -p "M4ffFBUN8A7VQkP  ssh  -t bbzhivt@ssh.cluster031.hosting.ovh.net " cd www/SiteWebUniverseUtility  ; php bin/console cache:clear ;exit
