import { transpile,bundle } from "jsr:@deno/emit";

const result = await bundle(
  new URL("./main/farm.ts", import.meta.url),
);

const { code } = result;

const result2 = await transpile(code);
console.log(result2.keys());


