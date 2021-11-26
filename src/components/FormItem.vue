<template>
  <div class="item">
    <label :for="formItem.nome">
      {{ formItem.nome }}
      <span v-if="formItem.required == true"> *</span>
    </label>
    <input :id="formItem.nome" type="text" />
  </div>
</template>

<script>
export default {
  name: "FormItem",
  props: {
    formItem: Object,
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;

  padding: 1rem;
}

span {
  color: #e8806d;
}
</style>