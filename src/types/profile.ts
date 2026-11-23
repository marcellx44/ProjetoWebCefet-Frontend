export type ProfileRole = 'ADMIN' | 'INSTRUCTOR' | 'STUDENT'

export type ProfileStatus = 'ACTIVE' | 'INACTIVE'

export interface Profile {
    id: number
    name: string
    role: ProfileRole
    description: string
    status: ProfileStatus
    createdAt: string
    updatedAt: string
    deletedAt: string | null
}

export interface PaginationMeta {
    total: number
    page: number
    limit: number
    totalPages: number
}

export interface PaginatedProfiles {
    data: Profile[]
    meta: PaginationMeta
}
