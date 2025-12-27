export interface CaclculatedOrderType {
  type: "product" | "order",
  price: number | undefined,
  name: string
}