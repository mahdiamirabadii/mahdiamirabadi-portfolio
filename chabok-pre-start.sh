#!/bin/sh
set -e
# Always rebuild before start.
# A failed or skipped platform build can leave a stale .next from a previous
# deploy; rebuilding only when the folder is missing would keep serving old UI.
echo "[chabok] cleaning .next and rebuilding..."
rm -rf .next
npm run build
echo "[chabok] build complete"
