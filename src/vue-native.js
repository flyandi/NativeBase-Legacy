import { StyleProvider } from "native-base-shoutem-theme";
import Drawer from "./basic/Drawer";

const VueNativeBasePlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue, options) {
    Vue.component("nb-drawer", Drawer);
  }
};

export default VueNativeBasePlugin;
