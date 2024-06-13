#!/bin/bash

# Path to the home directories, assuming a standard Linux setup.
HOME_DIRS_PATH="/home"

# Extensions to search for
EXTENSIONS=("*.tsx" "*.jsx" "*.js" "*.ts")

# Loop through each home directory
for user_dir in $HOME_DIRS_PATH/*; do
    echo "Searching in $user_dir..."
    
    # Loop through each file extension
    for ext in "${EXTENSIONS[@]}"; do
        echo "Files with $ext:"
        
        # Use the find command to search for files with the current extension
        # in the current user's home directory.
        find "$user_dir" -type f -name "$ext"
    done
done

echo "Search complete."
