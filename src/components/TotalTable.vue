<template>
  <div v-for="item in items" class="scheme-total__item my-1" :key="item.id">
    <span>
      {{ item.name }}
    </span>
    <span>
      {{ item.value }} {{ item.measure !== false ? item.measure : '' }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TotalTable',
  props: {
    items: [Array, Object]
  }
}
</script>

<style lang="scss" rel="stylesheet" scoped>
.scheme {
  &-total
  {
    &__item{
      @apply flex border-solid border-t-2 border-black justify-between px-5 flex-col md:flex-row print:flex-row;
      & span:first-child {
        font-weight: 500;
      }
    }
  }
}
</style>
