<template>
  <input 
    id="inputComponent" 
    :type="type" 
    :placeholder="placeholder" 
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  props: {
    placeholder: String,
    type: String
  }
}
</script>

<style scoped>
  #inputComponent {
    background-color: var(--inputs);

    border: 1.5px solid var(--line-inputs);
    border-radius: 8px;

    font-size: 1.125rem;

    width: 100%;
    height: 3.75rem;
    padding: 1.3125rem 1.5rem
  }
</style>