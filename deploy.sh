#!/bin/bash
# Deploy static files to Bunny.net Storage
# Usage: ./deploy.sh
# Requires: BUNNY_API_KEY and BUNNY_STORAGE_ZONE set in .env or environment

set -e

# Load .env if it exists
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Validate required vars
if [ -z "$BUNNY_API_KEY" ] || [ -z "$BUNNY_STORAGE_ZONE" ]; then
  echo "Error: BUNNY_API_KEY and BUNNY_STORAGE_ZONE must be set (in .env or environment)"
  exit 1
fi

BUNNY_REGION="${BUNNY_REGION:-de}"  # Default: Frankfurt
STORAGE_BASE="https://storage.bunnycdn.com/${BUNNY_STORAGE_ZONE}"

echo "Deploying to Bunny.net storage zone: $BUNNY_STORAGE_ZONE (region: $BUNNY_REGION)"

# Upload all HTML, CSS, JS files
find . -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -name "*.ico" -o -name "*.png" -o -name "*.jpg" -o -name "*.svg" \) \
  ! -path "./.git/*" \
  ! -path "./node_modules/*" | while read file; do
    # Strip leading ./
    remote_path="${file#./}"
    echo "  Uploading: $remote_path"
    curl -s -o /dev/null -w "  → %{http_code} $remote_path\n" \
      -X PUT \
      -H "AccessKey: $BUNNY_API_KEY" \
      -T "$file" \
      "${STORAGE_BASE}/${remote_path}"
done

echo ""
echo "Done. Purge CDN cache if needed:"
echo "  curl -X POST \"https://api.bunny.net/pullzone/<PULL_ZONE_ID>/purgeCache\" -H \"AccessKey: \$BUNNY_API_KEY\""
