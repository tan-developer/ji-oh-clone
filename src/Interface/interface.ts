export interface Product {
  title : string ; 
  color : string ; 
  price : number ;
  img : string[] ;
  detail : string ; 
  descripe : string;
  type : string;

  // ????????????
  state? : any;
}

export type TListProduct = Product[]

export type CartProduct = Product & {
  amount : number,
  id : string 
}

export interface Cart {
    product? : CartProduct[]
    total? : number,
    dispatch? : React.Dispatch<any> | null
}

export interface Post {
  banner : string , 
  date : string , 
  source : string , 
  content : string
}

export interface Collection {
  title : string , 
  banner : string ,
  id : string,
  content : number
}