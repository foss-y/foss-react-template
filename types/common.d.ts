import { TablePaginationConfig } from 'antd'

// 定义全局分页查询参数
export interface PageQueryParams {
  current: number
  size: number
}

export interface TableParams {
  pagination: TablePaginationConfig
  sortField?: string
  sortOrder?: string
  filters?: Record<string, FilterValue>
  total?: number
}
