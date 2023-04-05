import { registerGrid } from "@grapecity/wijmo.vue2.grid";
import { registerGridFilter } from "@grapecity/wijmo.vue2.grid.filter";
import { registerGridMultirow } from "@grapecity/wijmo.vue2.grid.multirow";
import "@grapecity/wijmo.styles/wijmo.css";
import "@grapecity/wijmo.vue2.nav";
import { registerInput } from "@grapecity/wijmo.vue2.input";
export default defineNuxtPlugin((nuxtApp) => {
  registerGrid(nuxtApp.vueApp);
  registerGridFilter(nuxtApp.vueApp);
  registerGridMultirow(nuxtApp.vueApp);
  registerInput(nuxtApp.vueApp);
});
