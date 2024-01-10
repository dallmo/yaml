#!/usr/local/bin/zsh

# check the running time of the test app

echo "-------------------------------------"
echo "check running time with tests"
time deno test -A
echo

echo "-------------------------------------"
echo "check running time with app only"
time deno run -A test-time-app.ts
echo

