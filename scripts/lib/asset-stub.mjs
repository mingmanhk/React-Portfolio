// Lets Node scripts import src/data/profile.js, whose image imports only
// resolve under Vite: any non-JS asset becomes a string export of its path.
import { register } from "node:module";
register("data:text/javascript," + encodeURIComponent(`
  export async function load(url, context, next) {
    if (/\\.(webp|png|jpe?g|gif|svg|css)$/.test(url)) {
      return { format: "module", shortCircuit: true, source: "export default " + JSON.stringify(url) };
    }
    return next(url, context);
  }
`));
