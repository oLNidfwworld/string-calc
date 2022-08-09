<template class="container">
  <div class="spring-main__wrapper">
    <div>
       <div class="spring-inputs">
         <div class="flex w-full flex-col items-start justify-between">
           <label class="inputs-label">Материал:</label>
           <vSelect class="style-chooser" :options="Material" v-model="SelectedMaterial" :clearable="false" label="title">
             <template #search="{attributes, events}">
               <input v-bind="attributes" v-on="events"
                 disabled
                 class="vs__search hidden"
               />
             </template>
             <template #open-indicator="">
               <svg class="vs__open-indicator" width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 9L0.73686 0.750001L10.2631 0.75L5.5 9Z" fill="#1D1F23" data-v-51b579e6=""></path></svg>
             </template>
           </vSelect>
         </div>
         <div class="flex w-full flex-col items-start justify-between">
           <label class="inputs-label">Вариант оформления опорных витков:</label>
           <vSelect class="style-chooser" :options="VariantOfDesignOfSupportCoils" v-model="SelectedVariantOfDesignOfSupportCoils" :clearable="false" label="title">
             <template #search="{attributes, events}">
               <input v-bind="attributes" v-on="events"
                 disabled
                 class="vs__search hidden"
               />
             </template>
             <template #open-indicator="">
               <svg class="vs__open-indicator" width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 9L0.73686 0.750001L10.2631 0.75L5.5 9Z" fill="#1D1F23" data-v-51b579e6=""></path></svg>
             </template>
           </vSelect>
         </div>
         <smart-input inputLabel="Диаметр проволоки мм:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="WireDiameter" />
         <smart-input inputLabel="Наружний диаметр мм:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="OuterDiameter" />
         <smart-input inputLabel="Длина в свободном состоянии Lo:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="FreeLength" :error="ForceAtWorkingDeformation < 0 || ForceAtPreDeformation < 0" />
         <smart-input inputLabel="Рабочее число витков n:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="WorkNumberOfCoils" />
         <smart-input inputLabel="Полное число витков n1:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="TotalNumberOfCoils" />
         <smart-input inputLabel="Длина при предварительной деформации L1:" custom-placeholder="Введите число (дополнительно)"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="LengthAtPreDeformation" :error="ForceAtPreDeformation < 0" :isEmpty="true"/>
         <smart-input inputLabel="Длина при рабочей деформации L2:" custom-placeholder="Введите число (дополнительно)" :error="ForceAtWorkingDeformation < 0"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="LengthAtWorkingDeformation" :isEmpty="true"/>
         <div class="flex w-full flex-col items-start justify-between">
           <label class="inputs-label">Направление навивки:</label>
           <div class="flex">
             <button class="inputs-radio" :class="{'inputs-radio__selected': WindingDirection === 0}" @click="WindingDirection = 0">
               <span class="inputs-radio__marker"></span>
               Левое
             </button>
             <button class="inputs-radio" :class="{ 'inputs-radio__selected': WindingDirection === 1}" @click="WindingDirection = 1">
               <span class="inputs-radio__marker"></span>
               Правое
             </button>
           </div>
         </div>
         <smart-input inputLabel="Направление навивки:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="WindingDirection" />
         <div class="flex w-full flex-col items-start justify-between">
           <label class="inputs-label">Покрытие:</label>
           <vSelect class="style-chooser" :options="Covering" v-model="SelectedCovering" :clearable="false" :value="this.Covering[0]" :searchable="false" label="title">
             <template #search="{attributes, events}">
               <input v-bind="attributes" v-on="events"
                 disabled
                 class="vs__search hidden"
               />
             </template>
             <template #open-indicator="">
               <svg class="vs__open-indicator" width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 9L0.73686 0.750001L10.2631 0.75L5.5 9Z" fill="#1D1F23" data-v-51b579e6=""></path></svg>
             </template>
           </vSelect>
         </div>
         <smart-input inputLabel="Количество шт.:" custom-placeholder="Enter the number"
         btn-type="text" :custom-step="InputStep" v-model:inputValue="Quantity" />
      <!--   <smart-input inputLabel="Рабочее число витков n:" custom-placeholder="Enter the number"-->
      <!--   btn-type="text" :custom-step="InputStep" v-model:inputValue="KontrolnayaRabochayaVisota" />-->
       </div>
    </div>
    <div id="scheme-print" class="scheme-outer-wrapper">
      <div class="scheme-inner-wrapper">
        <div class="scheme-title grid items-center justify-center mt-3.5 print:mb-5 mb-24">
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
    <button class="calc-btn calc-btn__grey" @click="ToPrint">Распечатать</button>
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
      Material: [
        'ГОСТ 9389-75 Б-2',
        'ГОСТ 9389-75 А-1',
        '60С2А', '51ХФА',
        'нерж. EN 10270-3-1.4310 (AISI 302)'
      ],
      VariantOfDesignOfSupportCoils: [
        'Поджат, зашлифован',
        'Поджат, не шлифован',
        'Не поджат, не шлифован'
      ],
      WireDiameter: '14',
      OuterDiameter: '90',
      FreeLength: '147',
      WorkNumberOfCoils: '6.5',
      TotalNumberOfCoils: '8',
      LengthAtPreDeformation: '130',
      LengthAtWorkingDeformation: '120',
      WindingDirection: 1,
      Covering: [
        'Без покрытия',
        'Гальваническое радужное',
        'Гальваническое бесцветное',
        'Порошковое'
      ],
      SelectedCovering: null,
      SelectedVariantOfDesignOfSupportCoils: null,
      SelectedMaterial: null,
      Quantity: '100',
      InputStep: 1
    }
  },
  methods: {
    async ToPrint () {
      await this.$htmlToPaper('scheme-print')
    }
  },
  computed: {
    InnerDiameter: function () {
      return (parseFloat(this.OuterDiameter) - parseFloat(this.WireDiameter)) - parseFloat(this.WireDiameter)
    },
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
        InnerDiameter: {
          name: 'Внутренний диаметр',
          value: this.InnerDiameter,
          measure: 'мм',
          total: false
        },
        OuterDiameter: {
          name: 'Наружний диаметр',
          value: this.OuterDiameter,
          measure: 'мм',
          total: false
        },
        Material: {
          name: 'Материал',
          value: this.SelectedMaterial,
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
          value: this.WindingDirection === 0 ? 'левое' : 'правое',
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
          value: this.SelectedCovering,
          measure: '',
          total: true
        },
        ForceAtPreDeformation: {
          name: 'Сила при предварительной деформ. F1',
          value: this.ForceAtPreDeformation.toFixed(2),
          measure: 'Н',
          total: this.LengthAtPreDeformation > 0
        },
        ForceAtWorkingDeformation: {
          name: 'Сила при рабочей деформ. F2',
          value: this.ForceAtWorkingDeformation.toFixed(2),
          measure: 'Н',
          total: this.LengthAtWorkingDeformation > 0
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
  },
  mounted () {
    this.SelectedCovering = this.Covering[0]
    this.SelectedVariantOfDesignOfSupportCoils = this.VariantOfDesignOfSupportCoils[0]
    this.SelectedMaterial = this.Material[0]
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
    padding: unset;
  }
  .vs__selected-options{
    padding: unset;
  }
  .vs__selected {
    @apply bg-transparent h-fit w-full;
    padding: 0.5rem 0.75rem 0.5rem 0.75rem;
    margin: unset;
    color: #5C5C5C;
  }
}
  .inputs{
    &-label {
      @apply text-left font-bold;
    }
    &-radio {
      @apply flex items-center px-4 py-3 mx-2;
      background: #E5E5E5;
      border-radius: 3px;
      font-weight: 600;
      color: #1D1F23;
      &__marker {
        @apply bg-white rounded-full relative mr-2;
        height: 21px;
        width: 21px;
      }
      &__selected {
        background: #A3A3A3;
        color: #FFFF;
        .inputs-radio__marker::before {
          @apply rounded-full;
          content: "";
          background: #1D1F23;
          width: 13px;
          height: 13px;
          position: absolute;
          left: 4px;
          top: 4px;
        }
      }
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
        @apply py-6 px-7 h-fit;
        border: 1px solid #1D1F23;
      }
    }
    &-total
    {
      &__item{
        @apply flex border-solid border-t-2 border-black justify-between px-5 flex-col md:flex-row print:flex-row;
        & span:first-child {
          font-weight: 500;
        }
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
  .calc {
    &-btn {
      @apply flex items-center px-6 py-3 text-white w-fit;
      border: 1px solid #5C5C5C;
      border-radius: 3px;
      &__grey {
        background: #5C5C5C;
      }
      &__olive {
        background: #D0C649;
      }
    }
  }
</style>
