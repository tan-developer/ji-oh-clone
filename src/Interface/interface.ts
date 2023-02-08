export interface Product {
  title : string ; 
  color : string ; 
  price : number ;
  img : string[] ;
  detail : string ; 
  descripe : string;
  type : string
}

export type TListProduct = Product[]