import { ActionType } from "./SelfControlledAcordion";

export const TOOGLE = "TOOGLE-COLAPSED";

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TOOGLE:
      return {...state, collapsed: !state.collapsed};
    default:
      throw new Error("Bad action type");
  }
};
