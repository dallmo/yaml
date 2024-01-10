#!/usr/local/bin/zsh

set -e

#////////////////////////////////////////////////////
function time_the_test
{
  target_ts="$1"

  echo "timing $target_ts ..."
  time deno run --allow-read "$target_ts"
  echo

}
#////////////////////////////////////////////////////

time_the_test "test-mod-js-yaml-port.ts"
time_the_test "test-mod-yaml-loader.ts"
time_the_test "test-npm-dallmo-yaml.ts"
time_the_test "test-std-yaml.ts"

