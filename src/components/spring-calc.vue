<template>
  <h3 class="font-bold">Тип пружин</h3>
  <button class="spring-calc__spring-type mb-5" @click="springType = 1">
    Cжатия
  </button>
  <div v-if="springType === 1">
    <compression-spring/>
  </div>
</template>

<script>
import CompressionSpring from '@/components/compression-spring'
export default {
  name: 'spring-calc',
  components: { CompressionSpring },
  data () {
    return {
      springType: 1
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.spring-calc {
  &__spring-type{
    @apply rounded;
    padding: 12px 10px;
    background: #A3A3A3;
    color: #FFFF;
  }
}

</style>
