// deno test methods
import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";

// the module to be tested
import { dallmo_yaml } from "../mod.ts";

/**
 * the config file, also located in the same directory as this test file,
 *  should be :
 * 
 * ok:
 *  ok1: 111
 *  ok2: 222
 *  ok3: 333
 * 
 */

// Compact form: name and function
Deno.test("#1 read config", async () => {

  // read and parse the config file
  const config_file: any = "./config.yaml";
  const config_obj: any = await dallmo_yaml( config_file );

  assertEquals( config_obj.ok.ok1, 111 );
  assertEquals( config_obj.ok.ok2, 222 );
  assertEquals( config_obj.ok.ok3, 333 );
  
}); // deno test
