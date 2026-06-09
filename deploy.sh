#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/HEAD.lock .git/index.lock
git add -A
git commit -m "${1:-Update site}"
git push
