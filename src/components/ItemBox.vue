<script setup lang="ts">
import { useInventoryStore } from '@/stores/inventory'
import { useModalStore } from '@/stores/modal'
import type { ItemProps } from '@/types/item.ds'

const props = defineProps<ItemProps>()
const modalStore = useModalStore()
const inventoryStore = useInventoryStore()

const openModal = (event: MouseEvent) => {
  if (modalStore.isModal) {
    modalStore.close()
    inventoryStore.clearWatched()
  }
  if (props.slot) {
    modalStore.open()
    inventoryStore.toggleWatched(props.order)
  }
}
const onDragStart = (e: DragEvent, from: number) => {
  const target = e.target as HTMLElement
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('from', from.toString())
    target.classList.add('active')
  }
}

const onDrop = (e: DragEvent, to: number) => {
  if (e.dataTransfer) {
    const from = Number(e.dataTransfer.getData('from'))
    inventoryStore.swap(from, to)
  }
}
</script>

<template>
  <div
    class="inventory-item"
    :data-order="order"
    :data-watch="isWatched"
    @click="openModal"
    @dragstart="onDragStart($event, order)"
    @drop.prevent="onDrop($event, order)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div class="inventory-item_slot" v-if="slot">
      <img :src="'/src/assets/img/'.concat(`${slot?.title}.png`)" alt="" srcset="" />
      <div class="inventory-item_count">
        {{ slot?.count }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
