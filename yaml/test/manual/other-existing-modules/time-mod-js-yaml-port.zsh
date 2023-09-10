#!/usr/local/bin/zsh

target_ts="test-mod-js-yaml-port.ts"

time deno run --allow-read "$target_ts"
