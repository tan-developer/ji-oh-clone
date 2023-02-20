import { Product, TListProduct } from "../Interface/interface"

export enum ACTION {
  FILTER = 'FILTER',
  SORT = "SORT",
  SET = "SET"
}

export enum SORT {
  LOWTOHIGH = 'lth',
  HIGHTOLOW = 'htl',
  RECENT = 'recent',
  SET = ''

}


interface TypeAction {
  type: ACTION,
  details: SORT,
  state?: any
}


export const ShopFilterReducer = (State: any, Action: TypeAction): TListProduct => {
  switch (Action.type) {
    case ACTION.SET:
      return Action.state

    case ACTION.SORT:
      return sortFunc(Action.details, State)

    default:
      return State
  }
}

const sortFunc = (type: string, state: TListProduct): TListProduct => {

  switch (type) {
    case SORT.LOWTOHIGH:
      // Sort state by price in ascending order:
      return state.sort(function (a: Product, b: Product) {
        return a.price - b.price;
      });

    case SORT.HIGHTOLOW:

      // ort state by price in ascending order and reverse it:
      return state.sort(function (a: Product, b: Product) {
        return a.price - b.price;
      }).reverse();

    case SORT.RECENT:
      return state

    default:
      console.log(type)
      return state
  }

  console.log('asdads')
}