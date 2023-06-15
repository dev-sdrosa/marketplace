

export interface ItemCardData {
  success: boolean
  code: number
  total: number
  data: ItemCard[]
}

export interface ItemCard {
  _id?: string
  name: string
  description: string
  image: string
  createdBy?: CreatedBy,
  price?: number
}


export interface ItemDetailData {
  success: boolean
  code: number
  data: ItemDetail
}

export interface ItemDetail {
  _id: string
  name: string
  content: string
  description: string
  image: string
  createdBy: CreatedBy
  isActive: boolean
  createdAt: string
  updatedAt: string
  __v: number
  ownedBy?: OwnedBy
}

export interface CreatedBy {
  _id: string
  email: string
  username: string
}

export interface OwnedBy {
  _id: string
  email: string
  username: string
}




export interface CreatedBy {
  _id: string
  email: string
  username: string
}

export interface OwnedBy {
  _id: string
  email: string
  username: string
}


export interface ItemHistoryRP {
  success: boolean
  code: number
  total: number
  data: History[]
}

export interface History {
  item: string
  user: string
  createdAt: string
}
