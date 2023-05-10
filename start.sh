#!/bin/bash
gnome-terminal \
--tab --working-directory="/home/user1/projects/chat7" --command="docker-compose -f docker-compose.dev.yml up nginx" \
--tab --working-directory="/home/user1/projects/chat7" --command="docker-compose -f docker-compose.dev.yml up coturn" \
--tab --working-directory="/home/user1/projects/chat7" --command="docker-compose -f docker-compose.dev.yml up certbot" \
--tab --working-directory="/home/user1/projects/chat7" --command="docker-compose -f docker-compose.dev.yml up ws" \
--tab --working-directory="/home/user1/projects/chat7" --command="docker-compose -f docker-compose.dev.yml up ui"
