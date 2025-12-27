export interface Product {
  _id: string,
  image: string,
  name: string,
  price: number,
  description: string,
  colors: Array<string>,
  sizes: Array<string>,
  extraImages: Array<string>,
  discountId?: string | null,

}

export interface CartProduct {
  id: string,
  image: string,
  name: string,
  price: number,
  color: string,
  size: string,
  amount: number,
  discountId?: string | null
}


