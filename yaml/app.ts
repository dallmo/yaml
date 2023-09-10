// only use the standard module library maintained by the deno team
import { parse as yaml_parse } from "https://deno.land/std@0.201.0/yaml/mod.ts";

////////////////////////////////////////////////////////////////////////////////
async function dallmo_yaml( config_file ){
  
  // read file content from config file
  const file_content = await Deno.readTextFile( config_file );

  // parse the yaml file content as json
  const config_obj = await yaml_parse( file_content );

    return config_obj;

}; // function dallmo_yaml
////////////////////////////////////////////////////////////////////////////////
export {
  
  dallmo_yaml

};
