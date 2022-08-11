<template class="container">
  <div class="spring-main__wrapper">
    <div>
       <div class="spring-inputs mb-5">
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
             <template v-slot:option="VariantOfDesignOfSupportCoils">
               <div class="flex flex-col items-center py-1">
               <svg v-if="VariantOfDesignOfSupportCoils.ico === 1" xmlns="http://www.w3.org/2000/svg" width="97" height="127" viewBox="0 0 83 127" fill="none">
                 <path d="M6.23821 116.415C5.89811 118.92 4.61459 121.064 2.79248 122.539V11.972C2.89132 11.8065 2.99343 11.6347 3.0987 11.4575C4.1222 9.73524 5.44455 7.51006 6.96422 5.66009C7.83808 4.5963 8.73798 3.70698 9.63484 3.12225C10.5282 2.53979 11.3462 2.30465 12.1052 2.40773C17.3197 3.11589 20.9729 7.91721 20.2647 13.1318L6.23821 116.415Z" fill="white" stroke="black" stroke-width="2"/>
                 <path d="M5.52489 113.851C5.943 116.93 4.84099 119.866 2.79248 121.9V93.7309L5.52489 113.851Z" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="-1.12547" y="0.856334" width="19.0569" height="123.289" rx="9.52846" transform="matrix(-0.990904 -0.13457 -0.13457 0.990904 51.0796 2.68995)" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="1.86522" y="3.68995" width="19.0569" height="123.289" rx="9.52846" transform="rotate(-7.73377 1.86522 3.68995)" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="-1.12547" y="0.856334" width="19.0569" height="123.289" rx="9.52846" transform="matrix(-0.990904 -0.13457 -0.13457 0.990904 80.5591 2.68998)" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="31.3447" y="3.68998" width="19.0569" height="123.289" rx="9.52846" transform="rotate(-7.73377 31.3447 3.68998)" fill="white" stroke="black" stroke-width="2"/>
                 <circle cx="71.2804" cy="11.3755" r="9.52846" fill="white" stroke="black" stroke-width="2"/>
                 <path d="M73.6681 1.32504L74.4126 2.06951L62.501 13.9811L61.7565 13.2366L73.6681 1.32504Z" fill="black"/>
                 <path d="M78.135 4.30294L78.8794 5.04741L65.4789 18.4479L64.7344 17.7035L78.135 4.30294Z" fill="black"/>
                 <path d="M81.1129 8.76978L81.8573 9.51426L69.9458 21.4258L69.2013 20.6814L81.1129 8.76978Z" fill="black"/>
               </svg>
               <svg v-if="VariantOfDesignOfSupportCoils.ico === 2" xmlns="http://www.w3.org/2000/svg" width="97" height="127" viewBox="0 0 97 127" fill="none">
                 <rect x="-1.12547" y="0.856334" width="19.0569" height="123.289" rx="9.52846" transform="matrix(-0.990904 -0.13457 -0.13457 0.990904 35.6001 2.68995)" fill="white" stroke="black" stroke-width="2"/>
                 <path d="M2.26172 114.85L2.26977 64.0894H21.3267L21.3186 114.853C21.3178 120.115 17.0511 124.381 11.7887 124.38C6.52624 124.379 2.26089 120.112 2.26172 114.85Z" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="-1.12547" y="0.856334" width="19.0569" height="123.289" rx="9.52846" transform="matrix(-0.990904 -0.13457 -0.13457 0.990904 65.3399 2.68995)" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="16.1255" y="3.68995" width="19.0569" height="123.289" rx="9.52846" transform="rotate(-7.73377 16.1255 3.68995)" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="-1.12547" y="0.856334" width="19.0569" height="123.289" rx="9.52846" transform="matrix(-0.990904 -0.13457 -0.13457 0.990904 94.8194 2.68998)" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="45.605" y="3.68998" width="19.0569" height="123.289" rx="9.52846" transform="rotate(-7.73377 45.605 3.68998)" fill="white" stroke="black" stroke-width="2"/>
                 <circle cx="85.5407" cy="11.3755" r="9.52846" fill="white" stroke="black" stroke-width="2"/>
                 <path d="M87.9284 1.32507L88.6729 2.06955L76.7613 13.9811L76.0168 13.2367L87.9284 1.32507Z" fill="black"/>
                 <path d="M92.3952 4.30297L93.1397 5.04744L79.7392 18.448L78.9947 17.7035L92.3952 4.30297Z" fill="black"/>
                 <path d="M95.3731 8.76981L96.1176 9.51429L84.206 21.4259L83.4615 20.6814L95.3731 8.76981Z" fill="black"/>
               </svg>
               <svg v-if="VariantOfDesignOfSupportCoils.ico === 3" xmlns="http://www.w3.org/2000/svg" width="104" height="127" viewBox="0 0 104 127" fill="none">
                 <rect x="-1.12547" y="0.856334" width="19.0569" height="123.289" rx="9.52846" transform="matrix(-0.990904 -0.13457 -0.13457 0.990904 41.8892 2.68995)" fill="white" stroke="black" stroke-width="2"/>
                 <path d="M8.45606 115.959L1.1956 62.9427L20.3917 62.9427L27.3348 113.359C28.0527 118.572 24.4086 123.38 19.1954 124.098C13.9822 124.816 9.174 121.172 8.45606 115.959Z" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="-1.12547" y="0.856334" width="19.0569" height="123.289" rx="9.52846" transform="matrix(-0.990904 -0.13457 -0.13457 0.990904 71.6289 2.68995)" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="22.4145" y="3.68995" width="19.0569" height="123.289" rx="9.52846" transform="rotate(-7.73377 22.4145 3.68995)" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="-1.12547" y="0.856334" width="19.0569" height="123.289" rx="9.52846" transform="matrix(-0.990904 -0.13457 -0.13457 0.990904 101.109 2.68998)" fill="white" stroke="black" stroke-width="2"/>
                 <rect x="51.8945" y="3.68998" width="19.0569" height="123.289" rx="9.52846" transform="rotate(-7.73377 51.8945 3.68998)" fill="white" stroke="black" stroke-width="2"/>
                 <circle cx="91.8297" cy="11.3755" r="9.52846" fill="white" stroke="black" stroke-width="2"/>
                 <path d="M94.2174 1.32507L94.9619 2.06955L83.0503 13.9811L82.3059 13.2367L94.2174 1.32507Z" fill="black"/>
                 <path d="M98.6843 4.30297L99.4288 5.04744L86.0282 18.448L85.2837 17.7035L98.6843 4.30297Z" fill="black"/>
                 <path d="M101.662 8.76981L102.407 9.51429L90.4951 21.4259L89.7506 20.6814L101.662 8.76981Z" fill="black"/>
               </svg>
               {{ VariantOfDesignOfSupportCoils.title }}
               </div>
             </template>
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
         btn-type="number" :custom-step="InputStep" v-model:inputValue="WireDiameter" />
         <smart-input inputLabel="Наружний диаметр мм:" custom-placeholder="Enter the number"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="OuterDiameter" />
         <smart-input inputLabel="Длина в свободном состоянии Lo:" custom-placeholder="Enter the number"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="FreeLength" :error="Errors.FreeLength" />
         <smart-input inputLabel="Рабочее число витков n:" custom-placeholder="Enter the number"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="WorkNumberOfCoils" />
         <smart-input inputLabel="Полное число витков n1:" custom-placeholder="Enter the number"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="TotalNumberOfCoils" />
         <smart-input inputLabel="Длина при предварительной деформации L1:" custom-placeholder="Введите число (дополнительно)"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="LengthAtPreDeformation" :error="Errors.LengthAtPreDeformation" :isEmpty="true"/>
         <smart-input inputLabel="Длина при рабочей деформации L2:" custom-placeholder="Введите число (дополнительно)" :error="Errors.LengthAtWorkingDeformation"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="LengthAtWorkingDeformation" :isEmpty="true"/>
         <div class="flex w-full flex-col items-start justify-between">
           <label class="inputs-label">Направление навивки:</label>
           <div class="grid grid-cols-2 gap-3">
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
         btn-type="number" :custom-step="InputStep" v-model:inputValue="Quantity" />
      <!--   <smart-input inputLabel="Рабочее число витков n:" custom-placeholder="Enter the number"-->
      <!--   btn-type="text" :custom-step="InputStep" v-model:inputValue="KontrolnayaRabochayaVisota" />-->
       </div>
      <div class="flex flex-wrap justify-between w-full items-center">
        <div class="grid grid-cols-1 sm:grid-cols-3 justify-items-center sm:justify-items-start gap-3 w-full sm:w-fit mb-4">
          <button class="calc-btn calc-btn__yellow" @click="OpenForm">Заказать</button>
          <button class="calc-btn calc-btn__grey" @click="ToPrint">Распечатать</button>
          <button class="calc-btn calc-btn__grey" @click="exportToPDF">Скачать</button>
        </div>
        <button class="calc-btn__reset w-fit mb-3" @click="resetValues">Перейти к новому расчету</button>
      </div>
    </div>
    <div id="scheme-print" ref="document" class="scheme-outer-wrapper">
      <div class="scheme-inner-wrapper">
        <div class="scheme-title grid items-center justify-center mt-3.5 print:mb-5 mb-10">
          <span class="scheme-watermark">https://wollter.ru</span>
          <span class="scheme-title">Расчет пружин сжатия</span>
        </div>
        <div class="scheme-spring px-3 xl:px-20 mb-5">
          <SchemeCompressionSpringPressedPolished v-if="SelectedVariantOfDesignOfSupportCoils === VariantOfDesignOfSupportCoils[0]" :SchemeData="SchemeData"/>
          <SchemeCompressionSpringPressedNotPolished v-if="SelectedVariantOfDesignOfSupportCoils === VariantOfDesignOfSupportCoils[1]" :SchemeData="SchemeData"/>
          <SchemeCompressionSpringNotPressedNotPolished v-if="SelectedVariantOfDesignOfSupportCoils === VariantOfDesignOfSupportCoils[2]" :SchemeData="SchemeData"/>
        </div>
        <div class="">
          <div v-for="item in ForTotal" class="scheme-total__item my-1" :key="item.id">
            <span>
              {{ item.name }}
            </span>
            <span>
              {{ item.value }} {{ item.measure !== false ? item.measure : '' }}
            </span>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import SmartInput from '@/components/smart-input'
import SchemeCompressionSpringPressedPolished from '@/components/SchemeCompressionSpringPressedPolished'
import SchemeCompressionSpringPressedNotPolished from '@/components/SchemeCompressionSpringPressedNotPolished'
import SchemeCompressionSpringNotPressedNotPolished from '@/components/SchemeCompressionSpringNotPressedNotPolished'
import vSelect from 'vue-select'
import html2pdf from 'html2pdf.js'
import 'vue-select/dist/vue-select.css'

export default {
  name: 'compression-spring',
  components: { SchemeCompressionSpringPressedPolished, SchemeCompressionSpringPressedNotPolished, SchemeCompressionSpringNotPressedNotPolished, SmartInput, vSelect },
  data () {
    return {
      Material: [
        'ГОСТ 9389-75 Б-2',
        'ГОСТ 9389-75 А-1',
        '60С2А', '51ХФА',
        'нерж. EN 10270-3-1.4310 (AISI 302)'
      ],
      VariantOfDesignOfSupportCoils: [
        { title: 'Поджат, зашлифован', ico: 1 },
        { title: 'Поджат, не шлифован', ico: 2 },
        { title: 'Не поджат, не шлифован', ico: 3 }
      ],
      WireDiameter: 14,
      OuterDiameter: 90,
      FreeLength: 147,
      WorkNumberOfCoils: 6.5,
      TotalNumberOfCoils: 8,
      LengthAtPreDeformation: 130,
      LengthAtWorkingDeformation: 120,
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
      Quantity: 100,
      InputStep: 1
    }
  },
  methods: {
    async ToPrint () {
      await this.$htmlToPaper('scheme-print')
    },
    async OpenForm () {
      console.log(window.href)
      if (this.CheckErrors.length === 0) {
        // todo: отправка ajax запроса
        await this.axios.post(document.location.href.split('?')[0], this.SchemeData).then((response) => {
          if (response.data.status === 'success') {
            console.log(response.data)
          }
        })
        console.log(this.SchemeData)
      }
    },
    async exportToPDF () {
      const curRes = window.innerWidth
      window.innerWidth = 1600
      await html2pdf(this.$refs.document, {
        margin: 0,
        filename: 'чертеж_пружины.pdf',
        image: { type: 'jpeg', quality: 2 },
        jsPDF: { units: 'pt', format: 'A4', orientation: 'p', putOnlyUsedFonts: true, floatPrecision: 20 }
      })
      console.log(window.innerWidth)
      window.innerWidth = curRes
    },
    resetValues () {
      this.WireDiameter = 0
      this.OuterDiameter = 0
      this.FreeLength = 0
      this.WorkNumberOfCoils = 0
      this.TotalNumberOfCoils = 0
      this.LengthAtPreDeformation = 0
      this.LengthAtWorkingDeformation = 0
      this.WindingDirection = 1
      this.SelectedCovering = this.Covering[0]
      this.SelectedVariantOfDesignOfSupportCoils = this.VariantOfDesignOfSupportCoils[0]
      this.SelectedMaterial = this.Material[0]
      this.Quantity = 100
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
    Errors: function () {
      return {
        WireDiameter: !isNaN(this.WireDiameter),
        OuterDiameter: !isNaN(this.OuterDiameter),
        FreeLength: this.ForceAtWorkingDeformation < 0 || this.ForceAtPreDeformation < 0,
        WorkNumberOfCoils: !isNaN(this.WorkNumberOfCoils),
        TotalNumberOfCoils: !isNaN(this.TotalNumberOfCoils),
        LengthAtPreDeformation: this.ForceAtPreDeformation < 0,
        LengthAtWorkingDeformation: this.ForceAtWorkingDeformation < 0,
        WindingDirection: false,
        SelectedCovering: false,
        SelectedVariantOfDesignOfSupportCoils: false,
        SelectedMaterial: false,
        Quantity: !isNaN(this.Quantity)
      }
    },
    SchemeData: function () {
      return {
        InnerDiameter: {
          name: 'Внутренний диаметр',
          value: parseFloat(this.InnerDiameter).toFixed(2),
          measure: 'мм',
          total: false
        },
        OuterDiameter: {
          name: 'Наружний диаметр',
          value: parseFloat(this.OuterDiameter).toFixed(2),
          measure: 'мм',
          total: false
        },
        Material: {
          name: 'Материал',
          value: this.SelectedMaterial,
          measure: false,
          total: false
        },
        SpringIndex: {
          name: 'Индекс пружины i',
          value: parseFloat(this.SpringIndex).toFixed(2),
          measure: 'Н/мм',
          total: true
        },
        SpringStiffness: {
          name: 'Жесткость пружины (с)',
          value: parseFloat(this.SpringStiffness).toFixed(2),
          measure: 'мм',
          total: true
        },
        LengthOfTheDeployedSpring: {
          name: 'Длина развернутой пружины Lразв',
          value: parseFloat(this.LengthOfTheDeployedSpring).toFixed(2),
          measure: 'мм',
          total: true
        },
        LengthAtContactOfCoils: {
          name: 'Длина при соприкосновении витков (L³)',
          value: parseFloat(this.LengthAtContactOfCoils).toFixed(2),
          measure: 'мм',
          total: true
        },
        ForceAtMaxDeformations: {
          name: 'Сила при макс. деформации F3',
          value: parseFloat(this.ForceAtMaxDeformations).toFixed(2),
          measure: 'Н',
          total: true
        },
        WorkNumberOfCoils: {
          name: 'Рабочее число витков n',
          value: parseFloat(this.WorkNumberOfCoils).toFixed(2),
          measure: '',
          total: true
        },
        TotalNumberOfCoils: {
          name: 'Полное число витков n1',
          value: parseFloat(this.TotalNumberOfCoils).toFixed(2),
          measure: '',
          total: true
        },
        Step: {
          name: 'Шаг (t)',
          value: parseFloat(this.Step).toFixed(2),
          measure: 'мм',
          total: true
        },
        WindingDirection: {
          name: 'Направление навивки',
          value: this.WindingDirection === 0 ? 'левое' : 'правое',
          measure: false,
          total: true
        },
        SpringMass: {
          name: 'Масса пружины (m1)',
          value: parseFloat(this.SpringMass).toFixed(2),
          measure: 'кг',
          total: true
        },
        SpringBatchWeight: {
          name: 'Вес партии пружин (m2)',
          value: parseFloat(this.SpringBatchWeight).toFixed(2),
          measure: 'кг',
          total: true
        },
        Covering: {
          name: 'Покрытие',
          value: this.SelectedCovering,
          measure: false,
          total: true
        },
        ForceAtPreDeformation: {
          name: 'Сила при предварительной деформ. F1',
          value: parseFloat(this.ForceAtPreDeformation).toFixed(2),
          measure: 'Н',
          total: this.LengthAtPreDeformation > 0
        },
        ForceAtWorkingDeformation: {
          name: 'Сила при рабочей деформ. F2',
          value: parseFloat(this.ForceAtWorkingDeformation).toFixed(2),
          measure: 'Н',
          total: this.LengthAtWorkingDeformation > 0
        },
        LengthAtPreDeformation: {
          name: 'L1',
          value: parseFloat(this.LengthAtPreDeformation).toFixed(2),
          measure: '',
          total: false
        },
        LengthAtWorkingDeformation: {
          name: 'L2',
          value: parseFloat(this.LengthAtWorkingDeformation).toFixed(2),
          measure: '',
          total: false
        },
        WireDiameter: {
          name: 'Диаметр проволоки',
          value: parseFloat(this.WireDiameter).toFixed(2),
          measure: 'мм',
          total: false
        }
      }
    },
    ForTotal: function () {
      const items = this.SchemeData
      return Object.keys(items)
        .map(key => items[key])
        .filter(item => item.total === true)
    },
    CheckErrors: function () {
      const items = this.SchemeData
      return Object.keys(items)
        .map(key => items[key])
        .filter(item => item.measure !== false && (isNaN(item.value) || parseFloat(item.value) < 0))
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
  --vs-border-width: 0px;
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
    overflow: hidden;
    white-space: nowrap;
  }
  .vs__selected {
    @apply bg-transparent h-fit w-full;
    padding: 0.5rem 0.75rem 0.5rem 0.75rem;
    margin: unset;
    position: unset !important;
    color: #5C5C5C;
  }
}
  .inputs{
    &-label {
      @apply text-left font-bold;
    }
    &-radio {
      @apply flex items-center px-4 py-3;
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
        @apply md:py-6 md:px-7 h-fit;
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
          grid-template-columns: 0.8fr 1fr;
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
      @apply flex items-center justify-center px-6 py-3 text-white w-full;
      border: 0px solid #5C5C5C;
      border-radius: 3px;
      &__grey {
        background: #5C5C5C;
      }
      &__yellow {
        background: #ecd93c;
      }
      &__reset {
        color: #4984DC;
        font-weight: 700;
      }
    }
  }
  .CoilsVar{
    width: 20px;
    height: 20px;
  }
</style>
