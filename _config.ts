import lume from "lume/mod.ts";
import bundler from "lume/plugins/bundler.ts";

const site = lume();

site.use(bundler({
  extensions: [".tsx", ".ts"],
}));

site.copy("index.html");
site.copy("styles.css");

export default site;
