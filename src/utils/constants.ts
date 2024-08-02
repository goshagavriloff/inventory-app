import type { ItemProps } from '@/types/item.ds'

const defaultItems = Array.from(
  Array(35),
  (_, index) => ({ order: index, isWatched: false }) as ItemProps
) as ItemProps[]
defaultItems[0].slot = { count: 4, title: 'item_0' }
defaultItems[1].slot = { count: 2, title: 'item_1' }
defaultItems[2].slot = { count: 5, title: 'item_2' }

export default defaultItems
