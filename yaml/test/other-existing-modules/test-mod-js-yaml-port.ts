
import { load, parse } from 'https://deno.land/x/js_yaml_port/js-yaml.js'

const config_file = "./config.yaml";
const file_content = await Deno.readTextFile( config_file );

const config_obj = await load( file_content );
  console.log( config_obj );
