<template class="container">
  <div class="spring-main__wrapper">
    <div>
       <div class="spring-inputs">
         <vSelect class="style-chooser" :options="Material" v-model="MaterialSelect" :clearable="false" label="title"/>
         <smart-input inputLabel="Материал:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="Material" />
         <smart-input inputLabel="Вариант оформления опорных витков:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="VariantOfDesignOfSupportCoils" />
         <smart-input inputLabel="Диаметр проволоки мм:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="WireDiameter" />
         <smart-input inputLabel="Наружний диаметр мм:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="OuterDiameter" />
         <smart-input inputLabel="Длина в свободном состоянии Lo:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="FreeLength" />
         <smart-input inputLabel="Рабочее число витков n:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="WorkNumberOfCoils" />
         <smart-input inputLabel="Полное число витков n1:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="TotalNumberOfCoils" />
         <smart-input inputLabel="Длина при предварительной деформации L1:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="LengthAtPreDeformation" />
         <smart-input inputLabel="Длина при рабочей деформации L2:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="LengthAtWorkingDeformation" />
         <smart-input inputLabel="Направление навивки:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="WindingDirection" />
         <smart-input inputLabel="Покрытие:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="Covering" />
         <smart-input inputLabel="Количество шт.:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="Quantity" />
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
          <scheme-spring :SchemeData="SchemeData"/>
        </div>
        <div class="">
          <div v-for="item in ForTotal" class="scheme-total__item" :key="item.id">
            <span>
              {{ item.name }}
            </span>
            <span>
              {{ item.value + ' ' + item.measure }}
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
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  name: 'compression-spring',
  components: { SchemeSpring, SmartInput, vSelect },
  data () {
    return {
      MaterialSelect: 'ГОСТ 9389-75 Б-2',
      Material: [
        'ГОСТ 9389-75 Б-2',
        'ГОСТ 9389-75 А-1',
        '60С2А', '51ХФА',
        'EN 10270-1',
        'EN 10270-2',
        'нерж. EN 10270-3-1.4310 (AISI 302)'
      ],
      VariantOfDesignOfSupportCoils: 'не поджат не шлиф',
      WireDiameter: '14',
      OuterDiameter: '90',
      FreeLength: '147',
      WorkNumberOfCoils: '6.5',
      TotalNumberOfCoils: '8',
      LengthAtPreDeformation: '130',
      LengthAtWorkingDeformation: '120',
      WindingDirection: 'Правое',
      Covering: [
        'Без покрытия',
        'Цинк-ламель',
        'Гальваническое цинкование радужное',
        'Гальваническое цинкование бесцветное',
        'Порошковое',
        'Грунт-эмаль',
        'Фосфатирование с промасливанием',
        'Промасливание'
      ],
      Quantity: '100',
      InputStep: 1
    }
  },
  computed: {
    SpringIndex: function () {
      return (parseFloat(this.OuterDiameter) - parseFloat(this.WireDiameter)) / parseFloat(this.WireDiameter)
    },
    SpringStiffness: function () {
      return (78500 * parseFloat(this.WireDiameter) / 8 / Math.pow(this.SpringIndex, 3)) / parseFloat(this.WorkNumberOfCoils)
    },
    LengthOfTheDeployedSpring: function () {
      return 3.14 * (parseFloat(this.OuterDiameter) - parseFloat(this.WireDiameter)) *
        parseFloat(this.TotalNumberOfCoils)
    },
    LengthAtContactOfCoils: function () {
      return (parseFloat(this.TotalNumberOfCoils) + 1 - 1.5) * parseFloat(this.WireDiameter)
    },
    ForceAtMaxDeformations: function () {
      return (78500 * parseFloat(this.WireDiameter) / 8 / Math.pow(this.SpringIndex, 3)) *
        (this.Step - parseFloat(this.WireDiameter))
    },
    Step: function () {
      return (parseFloat(this.FreeLength) - (1.5 * parseFloat(this.WireDiameter))) / parseFloat(this.WorkNumberOfCoils)
    },
    SpringMass: function () {
      return 3.14 * Math.pow(parseFloat(this.WireDiameter), 2) / 4 * this.LengthOfTheDeployedSpring * 7.85 /
        Math.pow(10, 6)
    },
    SpringBatchWeight: function () {
      return parseFloat(this.Quantity) * this.SpringMass
    },
    ForceAtPreDeformation: function () {
      return this.SpringStiffness * parseFloat(this.FreeLength) - this.SpringStiffness *
        parseFloat(this.LengthAtPreDeformation)
    },
    ForceAtWorkingDeformation: function () {
      return this.SpringStiffness * parseFloat(this.FreeLength) - this.SpringStiffness *
        parseFloat(this.LengthAtWorkingDeformation)
    },
    SchemeData: function () {
      return {
        Material: {
          name: 'Материал',
          value: this.MaterialSelect,
          measure: '',
          total: false
        },
        SpringIndex: {
          name: 'Индекс пружины i',
          value: this.SpringIndex.toFixed(2),
          measure: 'Н/мм',
          total: true
        },
        SpringStiffness: {
          name: 'Жесткость пружины (с)',
          value: this.SpringStiffness.toFixed(2),
          measure: 'мм',
          total: true
        },
        LengthOfTheDeployedSpring: {
          name: 'Длина развернутой пружины Lразв',
          value: this.LengthOfTheDeployedSpring.toFixed(2),
          measure: 'мм',
          total: true
        },
        LengthAtContactOfCoils: {
          name: 'Длина при соприкосновении витков (L³)',
          value: this.LengthAtContactOfCoils.toFixed(2),
          measure: 'мм',
          total: true
        },
        ForceAtMaxDeformations: {
          name: 'Сила при макс. деформации F3',
          value: this.ForceAtMaxDeformations.toFixed(2),
          measure: 'Н',
          total: true
        },
        WorkNumberOfCoils: {
          name: 'Рабочее число витков n',
          value: this.WorkNumberOfCoils,
          measure: '',
          total: true
        },
        TotalNumberOfCoils: {
          name: 'Полное число витков n1',
          value: this.TotalNumberOfCoils,
          measure: '',
          total: true
        },
        Step: {
          name: 'Шаг (t)',
          value: this.Step.toFixed(2),
          measure: 'мм',
          total: true
        },
        WindingDirection: {
          name: 'Направление навивки',
          value: this.WindingDirection,
          measure: '',
          total: true
        },
        SpringMass: {
          name: 'Масса пружины (m1)',
          value: this.SpringMass.toFixed(2),
          measure: 'кг',
          total: true
        },
        SpringBatchWeight: {
          name: 'Вес партии пружин (m2)',
          value: this.SpringBatchWeight.toFixed(2),
          measure: 'кг',
          total: true
        },
        Covering: {
          name: 'Покрытие',
          value: this.Covering,
          measure: '',
          total: true
        },
        ForceAtPreDeformation: {
          name: 'Сила при предварительной деформ. F1',
          value: this.ForceAtPreDeformation.toFixed(2),
          measure: 'Н',
          total: true
        },
        ForceAtWorkingDeformation: {
          name: 'Сила при рабочей деформ. F2',
          value: this.ForceAtWorkingDeformation.toFixed(2),
          measure: 'Н',
          total: true
        },
        LengthAtPreDeformation: {
          name: 'L1',
          value: this.LengthAtPreDeformation,
          measure: '',
          total: false
        },
        LengthAtWorkingDeformation: {
          name: 'L2',
          value: this.LengthAtWorkingDeformation,
          measure: '',
          total: false
        }
      }
    },
    ForTotal: function () {
      const items = this.SchemeData
      return Object.keys(items)
        .map(key => items[key])
        .filter(item => item.total === true)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet">
.style-chooser {
  --vs-border-width: 0;
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 0.25rem;
  font-weight: 600;
  border: 1px solid #E5E5E5;
  background: #F8F8F8;
  color: #5C5C5C;
  .vs__dropdown-toggle {
    width: 100%;
    border-radius: 3px;
  }
}
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
