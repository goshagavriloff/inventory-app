<script setup lang="ts">
import Stub from './Stub.vue'
</script>

<template>
  <div id="inventory-bar">
    <div id="inventory-bar_header"></div>
    <div id="inventory-bar_descr">
      <Stub className="stub-title rounded-lg" />
      <div>
        <Stub className="stub-row rounded w-155" />
        <Stub className="stub-row rounded " />
        <Stub className="stub-row rounded w-170" />
        <Stub className="stub-row rounded w-160" />
        <Stub className="stub-row rounded w-140" />
        <Stub className="stub-row rounded w-80" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#inventory-bar_header {
  position: relative;
  background: url('/inventory-app/src/img/Nav.png');
  background-size: cover;
  border-radius: 6px;
  width: 208px;
  height: 240px;
  transition: 0.5s;
}

#inventory-bar_header::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6px);
  pointer-events: none;
  border-radius: 8px;
}
#inventory-bar_header:hover::after {
  backdrop-filter: none;
}

#inventory-bar_descr {
  display: block;
  margin: 20px auto 0 auto;
  width: 190px;
}
</style>
