#!/bin/bash

echo "========================================"
echo "  JS-LAB.UK — SITE HELPER"
echo "========================================"
echo ""
echo "📁 LOCATION"
echo "  /opt/js-lab-web/"
echo "  Files: index.html, js-lab-logo-round.png"
echo ""
echo "🚀 DEPLOY WORKFLOW"
echo "  1. Edit index.html via python3 replace"
echo "  2. git add index.html && git commit -m 'msg' && git push"
echo "  3. Cloudflare Pages auto-deploys on push"
echo "  4. Live at: https://js-lab.uk"
echo ""
echo "========================================"
echo "  CURRENT HTML STRUCTURE"
echo "========================================"
echo ""
echo "── STATUS BAR (top fixed bar)"
grep -o 'SYSTEMS ONLINE\|JS-LAB.UK\|SECURE · DEPLOY · MONITOR' index.html | head -3
echo ""
echo "── HERO SECTION"
echo "  Logo: $(grep -o 'src="[^"]*"' index.html | head -1)"
echo "  Logo size: $(grep -o 'width: [0-9]*px; height: [0-9]*px' index.html | head -1)"
echo "  Title: JS-LAB"
echo "  Subtitle: INFRASTRUCTURE LAB"
echo "  Pills: SECURE · DEPLOY · MONITOR"
echo ""
echo "── WHOAMI TERMINAL (// ABOUT)"
echo "  Keys present:"
grep -o 't-key">[^<]*' index.html | sed 's/t-key">/  · /'
echo ""
echo "── TECH STACK (// TECH STACK)"
echo "  Cards present:"
grep -o 'stack-name">[^<]*' index.html | sed 's/stack-name">/  · /'
echo ""
echo "── WRITING (// WRITING)"
grep -A1 'contact-btn' index.html | grep -o 'href="https://[^"]*"' | sed 's/href="//' | sed 's/"//' | sed 's/^/  · /'
echo ""
echo "── CONNECT (// CONNECT)"

echo ""
echo "── FOOTER"
grep -o '© [^<]*' index.html
echo ""
echo "========================================"
echo "  EDIT PATTERNS"
echo "========================================"
echo ""
echo "PYTHON REPLACE TEMPLATE:"
echo '  cd /opt/js-lab-web && python3 << PYEOF'
echo '  content = open("index.html").read()'
echo '  content = content.replace('
echo '      "OLD STRING",'
echo '      "NEW STRING"'
echo '  )'
echo '  open("index.html", "w").write(content)'
echo '  print("Done")'
echo '  PYEOF'
echo '  git add index.html && git commit -m "msg" && git push'
echo ""
echo "LOGO BG REMOVAL TEMPLATE:"
echo '  python3 -c "'
echo '  from PIL import Image; import numpy as np'
echo '  img = Image.open(\"js-lab-logo-round.png\").convert(\"RGBA\")'
echo '  data = np.array(img)'
echo '  r,g,b,a = data[:,:,0],data[:,:,1],data[:,:,2],data[:,:,3]'
echo '  mask = (r < THRESHOLD) & (g < THRESHOLD) & (b < THRESHOLD)'
echo '  data[mask,3] = 0'
echo '  Image.fromarray(data).save(\"js-lab-logo-round.png\")'
echo '  "'
echo ""
echo "========================================"
echo "  GIT STATUS"
echo "========================================"
git status
echo ""
git log --oneline -5
echo ""
