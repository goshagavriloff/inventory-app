<script setup lang="ts">
import ItemBox from '@/components/ItemBox.vue'
import { useInventoryStore } from '@/stores/inventory'
import { storeToRefs } from 'pinia'
const inventoryStore = useInventoryStore()
const { inventory } = storeToRefs(inventoryStore)
const { setDefault } = inventoryStore
if (inventory.value?.length == 0) {
  setDefault()
}
</script>

<template>
  <div id="inventory-items">
    <ItemBox
      v-for="(item, index) in inventory"
      :key="index"
      :order="item.order"
      :isWatched="item.isWatched"
      :slot="item.slot"
    />
  </div>
</template>

<style scoped></style>
