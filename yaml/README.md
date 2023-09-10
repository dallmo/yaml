# dallmo-yaml

- a simple yaml file reader
- re-written to base only on deno standard libraries

## dependencies

- `Deno.readTextFile`
- https://deno.land/std@0.201.0/yaml/mod.ts

## usage

```
import { dallmo_yaml } from "[path to]/mod.ts";

const config_file = "config.yaml";
const config_obj = await dallmo_yaml( config_file );
  console.log( config_obj );
```
