import { registerGrid } from "@grapecity/wijmo.vue2.grid";
import { registerGridFilter } from "@grapecity/wijmo.vue2.grid.filter";
import { registerGridMultirow } from "@grapecity/wijmo.vue2.grid.multirow";
import "@grapecity/wijmo.styles/wijmo.css";
import * as wjcCore from "@grapecity/wijmo";
wjcCore.setLicenseKey(
  "363221939297954#B0XzzWYmpjIyNHZisnOiwmbBJye0ICRiwiI34zZpxGaUl7NGdEa4UEeqd4TsJ7QHB5d8p4Kqx6M5k4K7NUNpdTOQJXdx9WVJRmaPhUOrVWQspWaSRjMRNERKRENtZHavsWNuRUYndTTKJUcMdWdNlGOSZ5LPNUcwlnV0hURyADODdUZjFHUQFUOiplQ6N4bZFnTHZjezdXUohVcxJEe83EMwllZPZUNCNmRjdUO5tidH5WNSNkQhhkbaVTMl5GaPRGaxJ6M9IXW8ZjYvJnaw46auZ4RPNkUuZkMxAXazcnWMZXVV3GeClUYLdmewZUQjZXdp34R4ZlbvR4Mjd5Z5UmeihWNjt4KhN4RDh7TNhlNzclMUZ4Yzl4ctFTY6IUVwYmZnZXOBpWa5RmQkVkMwUmQUZncjtySFpmSUVmc63iZ6YmMKRlbwMGT5g6UNpnUl3maudXSrpGe8VFc8EHclNTe78Ge8NmR7syZZ9EWSVlWVRlI0IyUiwiI8QjR7YURFVjI0ICSiwSM5kzN5YDM5YTM0IicfJye&Qf35VfikEMyIlI0IyQiwiIu3Waz9WZ4hXRgACdlVGaThXZsZEIv5mapdlI0IiTisHL3JSNJ9UUiojIDJCLi86bpNnblRHeFBCIyV6dllmV4J7bwVmUg2Wbql6ViojIOJyes4nILdDOIJiOiMkIsIibvl6cuVGd8VEIgc7bSlGdsVXTg2Wbql6ViojIOJyes4nI4YkNEJiOiMkIsIibvl6cuVGd8VEIgAVQM3EIg2Wbql6ViojIOJyes4nIzMEMCJiOiMkIsISZy36Qg2Wbql6ViojIOJyes4nIVhzNBJiOiMkIsIibvl6cuVGd8VEIgQnchh6QsFWaj9WYulmRg2Wbql6ViojIOJyebpjIkJHUiwiI8MTOycDMgUTM8AjMyAjMiojI4J7QiwiIx8CMuAjL7ITMiojIz5GRiwiI+S09ayL9Pyb9qCq9jK88GO887K88XO882O88sO88wK88iojIh94QiwiI4UTO7kjM9MTOxIjMzYzMiojIklkIs4XXbpjInxmZiwiIyYnMyAjMiojIyVmWiDS"
);
export default defineNuxtPlugin((nuxtApp) => {
  registerGrid(nuxtApp.vueApp);
  registerGridFilter(nuxtApp.vueApp);
  registerGridMultirow(nuxtApp.vueApp);
});