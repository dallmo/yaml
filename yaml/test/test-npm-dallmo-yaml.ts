
import { dallmo_yaml } from "npm:dallmo-yaml@latest";

const config_file = "config.yaml";
const config_obj = await dallmo_yaml( config_file );
console.log( config_obj );
