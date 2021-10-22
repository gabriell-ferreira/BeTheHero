<template>
  <input 
    id="buttonComponent"
    type="button" 
    :value="value" 
    @click="$emit('click')"
    :style="'width:'+width"
  >
</template>

<script>
export default {
  props: {
    value: String,
    width: {
      type: String,
      default: '100%'
    }
  }
}
</script>

<style scoped>
  #buttonComponent {
    height: 3.75rem;
    
    border-radius: 8px;
    border: 0;

    font-weight: 700;
    font-size: 1.125rem;

    background-color: var(--red);
    color: var(--inputs);
    cursor: pointer;
  }
</style>