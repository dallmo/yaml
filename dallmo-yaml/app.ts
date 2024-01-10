
import { yaml_parse } from "./deps.ts";

////////////////////////////////////////////////////////////////////////////////
async function dallmo_yaml( config_file: string ){
  
  // read file content from config file
  const file_content = await Deno.readTextFile( config_file );

  // parse the yaml file content as json
  const config_obj = await yaml_parse( file_content );

    return config_obj;

}; // function dallmo_yaml
////////////////////////////////////////////////////////////////////////////////
export {
  
  dallmo_yaml

}; // export

