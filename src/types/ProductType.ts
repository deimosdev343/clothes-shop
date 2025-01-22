export interface Product {
  id: string,
  image: string,
  name: string,
  price: number,
  colors: Array<string>,
  sizes: Array<string>

}

export interface CartProduct {
  id: string,
  image: string,
  title: string,
  price: number,
  color: string,
  size: string,
  amount: number
}


