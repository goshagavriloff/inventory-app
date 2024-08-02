import type { ItemProps } from '@/types/item.ds'
import defaultItems from '@/utils/constants'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useInventoryStore = defineStore('inventory', () => {
  const inventory = ref<ItemProps[]>([])
  const watchedInventory = ref<ItemProps>()

  const inventoryInLocalStorage = localStorage.getItem('inventory')
  if (inventoryInLocalStorage) {
    inventory.value = JSON.parse(inventoryInLocalStorage)
  }

  const toggleWatched = (id: number) => {
    clearWatched()

    const idx = inventory.value.findIndex((el) => el.order === id)
    inventory.value[idx].isWatched = true
    watchedInventory.value = inventory.value[idx]
  }

  const clearWatched = () => {
    inventory.value.forEach((el) => (el.isWatched = false))
  }

  const deleteInventory = (count: number) => {
    if (watchedInventory.value && watchedInventory.value.slot) {
      watchedInventory.value.slot.count -= count
    }
  }
  const setDefault = () => {
    inventory.value = defaultItems
  }
  const swap = (from: number, to: number) => {
    ;[inventory.value[from], inventory.value[to]] = [inventory.value[to], inventory.value[from]]
    ;[from, to].forEach((el) => (inventory.value[el].order = el))
  }

  watch(
    inventory,
    (state) => {
      localStorage.setItem('inventory', JSON.stringify(state))
    },
    { deep: true }
  )

  return {
    inventory,
    watchedInventory,
    clearWatched,
    toggleWatched,
    deleteInventory,
    setDefault,
    swap
  }
})
