#!/usr/bin/env bash
# Creates the G&A Foundation board Shared Drive with a standard nonprofit folder tree.
# Requires GAM7 installed and authenticated (see scripts/README-drive.md).
set -euo pipefail
export PATH="$HOME/bin/gam7:$PATH"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ADMIN="${GAF_ADMIN:-dejon@gandafoundation.org}"
DRIVE_NAME="GAF Board"
ID_FILE="$ROOT/.gaf_board_drive_id"

# --- Create the shared drive (admin-managed restrictions: only managers can change sharing) ---
DRIVE_ID=$(gam create shareddrive "$DRIVE_NAME" adminmanagedrestrictions true 2>&1 | grep -oE '[A-Za-z0-9_-]{15,}' | tail -1)
echo "Shared Drive created: $DRIVE_NAME ($DRIVE_ID)"

# --- Lock down external sharing on this drive ---
gam update shareddrive "$DRIVE_ID" restrictions domainusersonly true drivemembersonly true

# --- Folder tree ---
FOLDERS=(
  "00 Board Handbook & Onboarding"
  "01 Governance (Bylaws, Articles, IRS Determination, COI Policy)"
  "02 Board Meetings (Agendas & Minutes)"
  "03 Finance (Budgets, 990s, Statements, Audits)"
  "04 Legal & Compliance (State Filings, Insurance)"
  "05 Fundraising & Donors"
  "06 Programs & Grants"
  "07 Communications & Brand"
  "08 Archive"
)
for f in "${FOLDERS[@]}"; do
  gam user "$ADMIN" create drivefile drivefilename "$f" mimetype gfolder parentid "$DRIVE_ID"
done

# Year subfolders for meetings and finance
for y in 2025 2026; do
  for parent in "02 Board Meetings (Agendas & Minutes)" "03 Finance (Budgets, 990s, Statements, Audits)"; do
    PID=$(gam user "$ADMIN" show filelist query "name='$parent' and mimeType='application/vnd.google-apps.folder'" corpora drive driveid "$DRIVE_ID" fields id | tail -n +2 | cut -d, -f2 | tr -d '"')
    gam user "$ADMIN" create drivefile drivefilename "$y" mimetype gfolder parentid "$PID"
  done
done

echo "$DRIVE_ID" > "$ID_FILE"
echo "Done. Drive ID saved to $ID_FILE"
