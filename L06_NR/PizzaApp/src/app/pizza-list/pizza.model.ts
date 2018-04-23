/**
 * Created by marius on 15/03/2017.
 */
export interface IPizza {
  name: string,
  price: number,
  weight: number,
  image: string,
  ingredients: string,
  reviews: Array<IReview>,
  canPurchase: boolean,
  soldOut: boolean
}

export interface IReview{
  stars?: number,
  body?: string,
  author?: string,
  createdOn?: number
}
