
import { dallmo_yaml } from "../mod.ts";

const config_file = "config.yaml";
const config_obj = await dallmo_yaml( config_file );
console.log( config_obj );
