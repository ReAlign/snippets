export const STATUS = {
  DRAFT: 0,
  PUBLISHED: 1,
  ARCHIVED: 2,
} as const
export type T_STATUS_KEYS = keyof typeof STATUS
export type T_STATUS = (typeof STATUS)[keyof typeof STATUS]
