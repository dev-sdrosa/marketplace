
export interface ItemCategoryData {
    success: boolean
    code: number
    total: number
    data: ItemCategory[]
}

export interface ItemCategory {
    _id: string
    name: string
    isActive: boolean
    __v: number
}


export interface ItemFavoritesRP {
    success: boolean
    code: number
    total: number
    data: ItemFavorite[]
  }
  
  export interface ItemFavorite {
    _id: string
    name: string
    description: string
    image: string
  }
  