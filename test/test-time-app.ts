
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

interface Conf_inner {
  ok1: string;
  ok2: string;
  ok3: string;
};

interface Conf {
  ok: Conf_inner;
};

  // read and parse the config file
  const config_file: string = "./config.yaml";
  const config_obj: any = await dallmo_yaml( config_file );

  console.log("config_obj : ", config_obj );

