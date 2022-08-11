<template>
  <h3 class="flex w-fit font-bold mb-5">Тип пружин</h3>
  <div class="grid grid-cols-2 gap-3 mb-5 w-fit">
    <button class="inputs-radio" :class="{'inputs-radio__selected': springType === 0}" @click="springType = 0">
      <span class="inputs-radio__marker"></span>
      Cжатие
    </button>
<!--    <button class="inputs-radio" :class="{ 'inputs-radio__selected': springType === 1}" @click="springType = 1">-->
<!--      <span class="inputs-radio__marker"></span>-->
<!--      Растяжение-->
<!--    </button>-->
  </div>
  <div v-if="springType === 0">
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
      springType: 0
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.spring-calc {
  &__spring-type{
    @apply rounded;
    padding: 12px 10px;
    background: #A3A3A3;
    color: #FFFF;
  }
}
.scheme-svg{
  max-height: 500px;
}
.scheme-spring {
  &__value {
    @apply text-lg italic font-semibold;
    fill: #4984DC;
  }
}

</style>
