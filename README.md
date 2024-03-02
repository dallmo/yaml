# overview

- a simple yaml file reader
- re-written in typescript, migrated from nodejs to base only on deno standard libraries
- published to deno land in : https://deno.land/x/dallmo_util_yaml

## dependencies

all of deno standard library.

- `Deno.readTextFile`
- https://deno.land/std/yaml


## usage

```
// this assumes the latest version
import { dallmo_util_yaml } from "https://deno.land/x/dallmo_util_yaml/mod.ts";

const config_file = "config.yaml";
const config_obj = await dallmo_util_yaml( config_file );
  console.log( config_obj );
```


## test
to run test codes : 

either : 

1. stay in the project root folder, i.e. `[root]/` ;
1. run `deno task test` ; 

or : 

1. switch to the folder `[root]/test` ; 
1. run `deno test --allow-read` ; 



