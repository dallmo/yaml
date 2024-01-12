// deno test methods
import { assertEquals } from "../deps.ts";

// the module to be tested
import { dallmo_yaml } from "../mod.ts";

/**
 * the config file, also located in the same directory as this test file,
 *  should be :
 * 
 * ok:
 *  ok1: 111     // number
 *  ok2: "abc"   // ascii string
 *  ok3: "abc def"   // ascii string with space
 *  ok4: 真係得？ // UTF-8 string
 * 
 */

// Compact form: name and function
Deno.test("test dallmo_yaml", async (t) => {

  // read and parse the config file
  const config_file: string = "./config.yaml";
  const config_obj: any = await dallmo_yaml( config_file );

  console.log( "config_obj : ", config_obj );

  //---------------------------------------------------------
  await t.step("step : test number", async () => {
    assertEquals( config_obj.ok.ok1, 111 );
  }); // step
  //................................
  await t.step("step : test ascii string, no space", async () => {
    assertEquals( config_obj.ok.ok2, "abc" );
  }); // step
  //................................
  await t.step("step : test ascii string, with space", async () => {
    assertEquals( config_obj.ok.ok3, "abc def" );
  }); // step
  //................................
  await t.step("step : test UTF-8 string", async () => {
    assertEquals( config_obj.ok.ok4, "真係得？" );
  }); // step
  //................................
  await t.step("step : test array", async () => {
    assertEquals( config_obj.array_1, [ 123, "abc"] );
  }); // step
  //---------------------------------------------------------

}); // deno test
