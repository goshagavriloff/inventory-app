export type ItemSlot = {
  count: number
  title: String
}
export interface ItemProps {
  order: number
  slot?: ItemSlot
  isWatched: boolean
}
