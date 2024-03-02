
/**
 * --------------------------
 * for deno modules
 * --------------------------
 * this file will be symlinked / copied as deps.ts when publishing to 
 * deno.land/x ; when this is used for publishing to jsr,
 * it will cause errors.
 * 
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 */

////////////////////////////////////////////////////////////////////////////////
// the main yaml parse module from deno standard library
export { 
  
  parse as yaml_parse 

} from "https://deno.land/std/yaml/mod.ts";
////////////////////////////////////////////////////////////////////////////////
// for testing
export { 

  assertEquals 

} from "https://deno.land/std/assert/mod.ts";
////////////////////////////////////////////////////////////////////////////////

