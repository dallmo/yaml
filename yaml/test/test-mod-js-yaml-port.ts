
import { load, parse } from 'https://deno.land/x/js_yaml_port/js-yaml.js'

const config_file = "./config.yaml";
const config_obj = load( config_file );
  console.log( config_obj );
