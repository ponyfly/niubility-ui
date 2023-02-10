import DefaultTheme from 'vitepress/theme'
import '../../public/css/custom-style.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import VcComponents from '@much-more/vc-element-plus'
// import { globals } from '@/.vitepress/components'
import NbButton from "../components/NbButton.vue";
import VcTable from '../../../packages/element-plus/components/table'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    // app.use(VcComponents)

    // globals.forEach((comp) => {
    //   app.component(comp.name, comp)
    // })
    app.component('NbButton', NbButton)
    app.use(VcTable)
  }
}
