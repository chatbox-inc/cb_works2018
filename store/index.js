import {listItems,serviceItems} from "json-loader!yaml-loader!~/contents/index.yml"

export const state = () => ({
  listItems,serviceItems
})
