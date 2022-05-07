import type { IncomingMessage, ServerResponse } from "http";
import * as url from "url";
export default async (req: IncomingMessage, res: ServerResponse) => {
  let data;
  data = await $fetch("");
  res.write(data);
  res.end();
};
