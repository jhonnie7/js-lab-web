#!/bin/bash


# INFRA NOTE (2026-06-30): Caddy trusted_proxies is a GLOBAL-ONLY directive.
# Lives in /etc/caddy/Caddyfile under the global options block:
#   { servers { trusted_proxies static <CF ranges> } }
# It is NOT a per-site importable snippet/macro — `import cloudflare_trust`
# in a vhost block fails validation ("unrecognized directive"). Fixed after
# caddy-proxmox jail banned a Cloudflare edge IP (172.70.153.176) instead of
# the real client IP, because client_ip in JSON logs wasn't resolving from
# X-Forwarded-For/Cf-Connecting-Ip without trusted_proxies configured.
SITE_DIR="/opt/js-lab-web"
cd "$SITE_DIR" || exit 1

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

status() {

echo
echo "========================================"
echo " JS-LAB WEBSITE STATUS"
echo "========================================"
echo

echo -e "${BLUE}Location:${NC} $SITE_DIR"
echo

echo -e "${BLUE}Files${NC}"
ls -lh

echo

echo -e "${BLUE}Git${NC}"
git status --short
echo

echo "Branch : $(git branch --show-current)"
echo "Commit : $(git rev-parse --short HEAD)"

echo

echo -e "${BLUE}Last commits${NC}"
git log --oneline -5

echo

echo -e "${BLUE}HTML${NC}"

python3 <<'PYEOF'
from pathlib import Path
import re

html = Path("index.html").read_text()

print("Sections :", html.count("<section"))
print("Images   :", html.count("<img"))
print("Links    :", html.count("<a "))
print("Size     :", len(html), "bytes")
PYEOF

echo

echo -e "${BLUE}Required files${NC}"

for f in index.html js-lab-logo-round.png site-helper.sh
do
    if [[ -f "$f" ]]; then
        echo -e "${GREEN}✓${NC} $f"
    else
        echo -e "${RED}✗${NC} $f"
    fi
done

echo
}

backup() {

mkdir -p backups

FILE="backups/index-$(date +%F-%H%M%S).html"

cp index.html "$FILE"

echo -e "${GREEN}Backup created:${NC}"
echo "$FILE"

}

deploy() {

git add .

git commit -m "${1:-Website update}"

git push

}

replace() {

python3 <<PYEOF
from pathlib import Path

old = """$1"""
new = """$2"""

p = Path("index.html")

html = p.read_text()

count = html.count(old)

html = html.replace(old,new)

p.write_text(html)

print(f"Replaced {count} occurrence(s).")
PYEOF

}


mobile()

{

echo "Applying mobile optimization..."

# backup first
mkdir -p backups
cp index.html "backups/index-mobile-$(date +%F-%H%M%S).html"

python3 <<'PY'
from pathlib import Path

html = Path("index.html").read_text()

# inject mobile CSS if not exists
if "MOBILE-FIX" not in html:
    fix = """
<style id="MOBILE-FIX">
@media (max-width: 768px), (pointer: coarse) {
    * {
        animation: none !important;
        transition: none !important;
    }

    .hero, .container {
        transform: none !important;
        filter: none !important;
    }
}
</style>
"""
    html = html.replace("</head>", fix + "\n</head>")

Path("index.html").write_text(html)

print("Mobile patch applied")
PY
}


help_menu() {

echo
echo "JS-LAB Helper"
echo
echo "Usage:"
echo
echo "./site-helper.sh status"
echo "./site-helper.sh backup"
echo "./site-helper.sh deploy \"message\""
echo "./site-helper.sh replace \"OLD\" \"NEW\""
echo

}

case "$1" in

status)
status
;;

backup)
backup
;;

deploy)
shift
deploy "$*"
;;

replace)
replace "$2" "$3"
;;

mobile)
mobile
;;

*)
help_menu
;;

esac
