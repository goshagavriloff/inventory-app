<script setup lang="ts">
import MessageBox from '@/components/MessageBox.vue'
import NavBar from '@/components/NavBar.vue'
import Items from './Items.vue'
import ModalBox from '@/components/ModalBox.vue'
import { useModalStore } from '@/stores/modal'
import { storeToRefs } from 'pinia'

const modalStore = useModalStore()
const { isModal, get } = storeToRefs(modalStore)
</script>

<template>
  <div id="inventory">
    <NavBar />
    <Items />
    <MessageBox />
    <ModalBox v-if="isModal" />
  </div>
</template>

<style scoped></style>
