
import { YamlLoader as yaml_loader } from "https://deno.land/x/yaml_loader/mod.ts";
const yamlLoader = new yaml_loader();

const config_file = "./config.yaml";
const config_obj = await yamlLoader.parseFile( config_file );

console.log( config_obj );
