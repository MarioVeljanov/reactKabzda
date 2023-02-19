import { reducer, StateType } from "./reducer"

test('reducer should chage to opposite value', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: "TOOGLECOLAPSED"})
    }).toThrowError()
    const newState = reducer(state, {type: "TOOGLE-COLAPSED"})

    expect(newState.collapsed).toBe(false)
    
})

export {}
 
