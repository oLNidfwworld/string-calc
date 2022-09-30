<template>
  <h3 class="flex w-fit font-bold mb-5">Тип пружин</h3>
  <div class="flex flex-wrap mb-5 w-fit">
    <button class="inputs-radio mb-3 mr-3" :class="{'inputs-radio__selected': springType === 0}" @click="springType = 0">
      <span class="inputs-radio__marker"></span>
      Cжатие
    </button>
    <button class="inputs-radio mb-3 mr-3" :class="{ 'inputs-radio__selected': springType === 1}" @click="springType = 1">
      <span class="inputs-radio__marker"></span>
      Растяжение
    </button>
  </div>
  <div>
    <SpringCompression v-if="springType === 0" SpringName="Расчет пружин сжатия"/>
    <SpringTension v-if="springType === 1" SpringName="Расчет пружин растяжения"/>
  </div>
</template>

<script>
import SpringCompression from '@/components/SpringCompression'
import SpringTension from '@/components/SpringTension'
import * as pdfMake from 'pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
export default {
  name: 'SpringCalc',
  // eslint-disable-next-line vue/no-unused-components
  components: { SpringCompression, SpringTension },
  data () {
    return {
      springType: 0
    }
  },
  mounted () {
    // eslint-disable-next-line no-import-assign
    pdfMake.vfs = pdfFonts.pdfMake.vfs
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@page {
  size: auto;
  margin: 0;
}
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
