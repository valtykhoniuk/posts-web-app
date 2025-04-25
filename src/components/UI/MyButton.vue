<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  color: white;
  background: rgb(71, 172, 70);
  border: none;
  border-radius: 10px;
}
</style>
