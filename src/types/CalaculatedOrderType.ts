export interface CaclculatedOrderType {
  type: "product" | "discount",
  price: number | undefined,
  name: string
}