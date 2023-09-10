
// only use the standard module library maintained by the deno team
// in this test 
import { readLines } from "https://deno.land/std@0.201.0/io/read_lines.ts";
import { join as path_join } from "https://deno.land/std@0.201.0/path/mod.ts";
import { parse as yaml_parse } from "https://deno.land/std@0.201.0/yaml/mod.ts";

////////////////////////////////////////////////////////////////////////////////
async function dallmo_yaml( config_file ){
  
  const file_fullpath = path_join( Deno.cwd(), config_file );
  let file_reader = await Deno.open( file_fullpath );
  
  // read the config file and join the lines
  // for parsing later on
  let file_content: string = "";
  for await (let line of readLines(file_reader)) {
    file_content += ( line + "\n" );
  }; // for, reading file line by line
  
  // parse the file content read above
  const config_obj = await yaml_parse( file_content );

  //console.log("file content : ", file_content);

    return config_obj;

}; // function dallmo_yaml
////////////////////////////////////////////////////////////////////////////////

const config_file = "config.yaml";
const config_obj = await dallmo_yaml( config_file );

console.log( "config_obj : ", config_obj );
// console.log( config_obj.ok.ok1 );
