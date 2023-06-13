export interface Root {
    success: boolean
    code: number
    total: number
    data: ItemCard[]
  }
  
  export interface ItemCard {
    _id: string
    name: string
    description: string
    image: string
  }
  