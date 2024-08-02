<script setup lang="ts">
import { useInventoryStore } from '@/stores/inventory'
import Stub from './Stub.vue'
import { useModalStore } from '@/stores/modal'
import { useSubModalStore } from '@/stores/submodal'
import { storeToRefs } from 'pinia'

const modalStore = useModalStore()
const submodalStore = useSubModalStore()
const inventoryStore = useInventoryStore()
const { clearWatched } = inventoryStore
const { watchedInventory } = storeToRefs(inventoryStore)
const { isSubModal } = storeToRefs(submodalStore)

const closeModal = (event: MouseEvent) => {
  modalStore.close()
  clearWatched()
}
const openSubModal = (event: MouseEvent) => {
  submodalStore.open()
}

const closeSubModal = () => {
  submodalStore.close()
}

const deleteItem = (event: Event) => {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const count = Number(formData.get('inventory-count'))
  inventoryStore.deleteInventory(count)
  closeSubModal()
}
</script>

<template>
  <div id="inventory-modal">
    <div id="inventory-modal_container">
      <div id="inventory-modal_header">
        <img
          :src="'/inventory-app/src/img/'.concat(`${watchedInventory?.slot?.title}.png`)"
          alt=""
          srcset=""
        />
      </div>

      <div id="inventory-modal_descr">
        <Stub className="stub-title rounded-lg" />
        <div>
          <Stub className="stub-row rounded" />
          <Stub className="stub-row rounded " />
          <Stub className="stub-row rounded " />
          <Stub className="stub-row rounded w-180" />
          <Stub className="stub-row rounded w-80" />
        </div>
      </div>

      <div id="inventory-modal_footer">
        <button class="btn_box-delete" @click="openSubModal">Удалить предмет</button>
      </div>
      <button class="btn_box-close" @click="closeModal"></button>

      <form id="inventory-submodal" v-if="isSubModal" @submit.prevent="deleteItem">
        <input
          name="inventory-count"
          type="number"
          placeholder="Введите количество"
          required
          min="0"
          :max="watchedInventory?.slot?.count"
        />
        <div id="inventory-submodal_actions">
          <button class="btn_box-cancel" @click="closeSubModal">Отмена</button>
          <button class="btn_box-delete" type="submit">Подтвердить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
