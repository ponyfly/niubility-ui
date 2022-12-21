import { VcTable } from "./components/table";
import { VcMenu } from "./components/menu";

const nbElePlusComponents = [
  VcMenu,
  VcTable
]

export const installer = (app) => {
  nbElePlusComponents.forEach(comp => app.use(comp))
}
