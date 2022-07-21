<template class="container">
  <div class="spring-main__wrapper">
    <div>
       <div class="spring-inputs">
         <smart-input inputLabel="Материал:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="MaterialPlaceholder" />
         <smart-input inputLabel="Модуль сдвига:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="ModuleSdviga" />
         <smart-input inputLabel="ф проволоки" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="Fprovoloki" />
         <smart-input inputLabel="наружний ф" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="NaruzhniyF" />
         <smart-input inputLabel="высота в свободном состоянии" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="VisotaVSvobodnomSostoyanii" />
         <smart-input inputLabel="количество рабочих витков" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="RabocheeChisloVetkov" />
         <smart-input inputLabel="контрольная(предварительная) высота" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="KontrolnayaVisota" />
         <smart-input inputLabel="контрольная рабочая высота" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="ControlRabochayaVisota" />
         <smart-input inputLabel="Количество пружин в партии:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="KolichestvoPartii" />
      <!--   <smart-input inputLabel="Рабочее число витков n:" custom-placeholder="Enter the number"-->
      <!--   btn-type="text" :custom-step="InputStep" v-model:inputValue="KontrolnayaRabochayaVisota" />-->
       </div>
    </div>
    <div class="scheme-outer-wrapper">
      <div class="scheme-inner-wrapper">
        <div class="grid items-center justify-center mt-3.5 mb-24">
          <span class="scheme-watermark">https://wollter.ru</span>
          <span class="scheme-title">Расчет пружин сжатия</span>
        </div>
        <div class="scheme-spring px-3 xl:px-20 mb-5">
          <scheme-spring v-if="SpringType === 'szhatie'" :SchemeData="SchemeData"/>
        </div>
        <div class="">
          <div v-for="item in SchemeData" class="scheme-total__item" :key="item.id">
            <span>
              {{ item.name }}
            </span>
            <span>
              {{ item.value }}
            </span>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import SmartInput from '@/components/smart-input'
import SchemeSpring from '@/components/scheme-spring'
export default {
  name: 'compression-spring',
  components: { SchemeSpring, SmartInput },
  data () {
    return {
      ModuleSdviga: '78500',
      Fprovoloki: '6',
      NaruzhniyF: '53',
      VisotaVSvobodnomSostoyanii: '90',
      RabocheeChisloVetkov: '5',
      KontrolnayaVisota: '80',
      ControlRabochayaVisota: '70',
      KolichestvoPartii: '100',
      DlinaRazvernutoyPruzhini: '7',
      MaterialPlaceholder: 'mat',
      DlinaL2: '4',
      InputStep: 1
    }
  },
  computed: {
    DiametrSredniy: function () {
      return (parseInt(this.NaruzhniyF) - parseInt(this.Fprovoloki)).toFixed(2)
    },
    DiametrVnutrenniy: function () {
      return (this.DiametrSredniy - parseInt(this.Fprovoloki)).toFixed(2)
    },
    KolichestvoVitkovPolnoe: function () {
      return (parseFloat(this.RabocheeChisloVetkov) + 2).toFixed(2)
    },
    PredvaritelnayaNagruzka: function () {
      return (parseInt(this.ZhestkostPruzhiny) * parseInt(this.VisotaVSvobodnomSostoyanii) - parseInt(this.ZhestkostPruzhiny) * parseInt(this.KontrolnayaVisota)).toFixed(2)
    },
    RabochayaNagruzka: function () {
      return (parseInt(this.ZhestkostPruzhiny) * parseInt(this.VisotaVSvobodnomSostoyanii) - parseInt(this.ZhestkostPruzhiny) * parseInt(this.ControlRabochayaVisota)).toFixed(2)
    },
    MaximalnayaNagruzka: function () {
      return (parseFloat(this.ZhestkostOdnogoVitkaPruzhiny) * parseFloat(this.MaximalnayaDeformaciyaOdnogoVitka)).toFixed(2)
    },
    DlinaPriSoprikosnovenii: function () {
      return (parseInt(this.RabocheeChisloVetkov) * parseFloat(this.Fprovoloki) + parseFloat(this.Fprovoloki)).toFixed(2)
    },
    ZhestkostOdnogoVitkaPruzhiny: function () {
      return (parseInt(this.ModuleSdviga) * Math.pow(parseInt(this.Fprovoloki), 4) / (8 * Math.pow(parseInt(this.NaruzhniyF) - parseInt(this.Fprovoloki), 3))).toFixed(2)
    },
    ZhestkostPruzhiny: function () {
      return (parseInt(this.ZhestkostOdnogoVitkaPruzhiny) / parseInt(this.RabocheeChisloVetkov)).toFixed(2)
    },
    Shag: function () {
      return ((parseInt(this.VisotaVSvobodnomSostoyanii) - (1.5 * parseInt(this.Fprovoloki))) / parseInt(this.RabocheeChisloVetkov)).toFixed(2)
    },
    RazvertkaPruzhiny: function () {
      return (3.14 * parseInt(this.DiametrSredniy) * parseInt(this.KolichestvoVitkovPolnoe)).toFixed(2)
    },
    MaximalnayaDeformaciyaOdnogoVitka: function () {
      return (parseInt(this.Shag) - parseInt(this.Fprovoloki)).toFixed(2)
    },
    MassaPruzhiny: function () {
      return (((Math.pow(parseInt(this.Fprovoloki), 2) * 3.14 * parseInt(this.RazvertkaPruzhiny)) / 4000 * 7.85) / 1000).toFixed(2)
    },
    VesPartiiPruzhin: function () {
      return (parseFloat(this.MassaPruzhiny) * parseFloat(this.KolichestvoPartii)).toFixed(2)
    },
    SchemeData: function () {
      return {
        AverageDiameter: {
          name: 'Диаметр средний (D ср.)',
          value: this.DiametrSredniy
        },
        InnerDiameter: {
          name: 'Диаметр внутренний (D вн.)',
          value: this.DiametrVnutrenniy
        },
        CoilsQuantityFull: {
          name: 'Количество витков полное (n1)',
          value: this.KolichestvoVitkovPolnoe
        },
        Preload: {
          name: 'Предварительная нагрузка (F¹)',
          value: this.PredvaritelnayaNagruzka
        },
        WorkLoad: {
          name: 'Рабочая нагрузка (F²)',
          value: this.RabochayaNagruzka
        },
        MaxLoad: {
          name: 'Максимальная нагрузка (F³)',
          value: this.MaximalnayaNagruzka
        },
        CoilsLength: {
          name: 'Длина при соприкосновении витков (L³)',
          value: this.DlinaPriSoprikosnovenii
        },
        CoilRigidity: {
          name: 'жесткость одного витка пружины (с1)',
          value: this.ZhestkostOdnogoVitkaPruzhiny
        },
        SpringRigidity: {
          name: 'Жесткость пружины (с)',
          value: this.ZhestkostPruzhiny
        },
        Step: {
          name: 'Шаг (t)',
          value: this.Shag
        },
        SpringSweep: {
          name: 'Развертка пружины',
          value: this.RazvertkaPruzhiny
        },
        MaxDeformationOfOneCoil: {
          name: 'максимальная деформация одного витка',
          value: this.MaximalnayaDeformaciyaOdnogoVitka
        },
        Weight: {
          name: 'Масса пружины (m1)',
          value: this.MassaPruzhiny
        },
        TotalWeight: {
          name: 'Вес партии пружин (m2)',
          value: this.VesPartiiPruzhin
        }
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet" scoped>
  .spring {
    &-main {
      &__wrapper {
        @apply grid;
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }
    &-inputs{
      @apply grid gap-x-5 gap-y-8 justify-items-center;
      grid-template-columns: repeat(auto-fill,minmax(260px, 1fr));
    }
  }
  .scheme {
    &-inner {
      &-wrapper {
        border: 3px solid #1D1F23;
      }
    }
    &-outer{
      &-wrapper{
        @apply py-6 px-7;
        border: 1px solid #1D1F23;
      }
    }
    &-total
    {
      &__item{
        @apply flex border-solid border-t-2 border-black justify-between px-5;
      }
    }
    &-watermark{
      @apply font-semibold;
      color:#1D1F23;
    }
    &-title{
      @apply font-bold text-xl;
      color:#1D1F23;
    }
  }
  @media screen and (min-width: 1024px){
    .spring {
      &-main {
        &__wrapper {
          @apply grid;
          grid-template-columns: 0.6fr 1fr;
          gap: 20px;
        }
      }
      &-inputs{
        @apply grid gap-x-5 gap-y-8 justify-items-start;
        grid-template-columns: repeat(auto-fill,minmax(260px, 1fr));
      }
    }
  }
</style>
