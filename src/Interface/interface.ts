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