export interface UserRP {
    success: boolean
    code: number
    data: User
  }
  
  export interface User {
    _id: string
    email: string
    username: string
    roles: string[]
    isActive: boolean
    createdAt: string
    updatedAt: string
    __v: number
  }
  