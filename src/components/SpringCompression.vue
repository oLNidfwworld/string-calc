<template class="container">
  <div class="spring-main__wrapper">
    <div>
       <div class="spring-inputs mb-5">
         <div class="flex w-full flex-col items-start justify-between">
           <label class="inputs-label" @click="test">Материал: <span class="calc-req">*</span></label>
           <vSelect class="style-chooser" :options="Material" v-model="SelectedMaterial" :clearable="false" label="title">
             <template #search="{attributes, events}">
               <input v-bind="attributes"
                      v-on="events"
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
           <label class="inputs-label" @click="test1">Вариант оформления опорных витков: <span class="calc-req">*</span></label>
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
         <smart-input inputLabel="Диаметр проволоки мм:" :req="true" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="WireDiameter" />
         <smart-input inputLabel="Наружний диаметр мм:" :req="true" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="OuterDiameter" />
         <smart-input inputLabel="Длина в свободном состоянии Lo:" :req="true" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="FreeLength" :error="Errors.FreeLength" />
         <smart-input inputLabel="Рабочее число витков n:" :req="true" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="WorkNumberOfCoils" @update:inputValue="ChangeTotalCoils"/>
         <smart-input inputLabel="Полное число витков n1:" custom-placeholder="Введите значение"
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
         <smart-input inputLabel="Количество шт.:" :req="true" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="Quantity" />
       </div>
      <div class="flex flex-wrap justify-between w-full items-center">
        <div class="grid grid-cols-1 sm:grid-cols-3 justify-items-center sm:justify-items-start gap-3 w-full sm:w-fit mb-4">
          <transition name="left-slide">
          <button v-if="CheckErrors.length === 0" class="calc-btn calc-btn__yellow cursor-pointer" @click="ShowModal = true; FormType = 'compression'">Заказать</button>
          </transition>
          <button class="calc-btn calc-btn__yellow" @click="usePFD('print')">Распечатать</button>
          <button class="calc-btn calc-btn__yellow" @click="usePFD('download')">Скачать</button>
        </div>
        <button class="calc-btn__reset w-fit mb-3" @click="resetValues">Перейти к новому расчету</button>
        <div>
          <p class="text-start mb-2">
            Расчетные данные калькулятора несут исключительно информационный характер
            <br>
            Если Вам нужен нестандартный вариант пружин - оставьте заявку нажав на кнопку ниже.
          </p>
          <span class="calc-btn calc-btn__yellow sm:w-fit w-full" @click="ShowModal = true; FormType = 'SpecialSpring'"> Оставить заявку </span>
        </div>
      </div>
    </div>
    <div id="scheme-print" ref="document" class="scheme-outer-wrapper">
      <div class="scheme-inner-wrapper">
        <div class="scheme-title grid items-center justify-center mt-3.5 print:mb-5 mb-10">
          <span class="scheme-watermark">https://wollter.ru</span>
          <span class="scheme-title">{{ SpringName }}</span>
        </div>
        <div class="scheme-spring px-3 px-3 xl:px-20 mb-5">
          <SchemeCompressionSpringPressedPolished v-if="SelectedVariantOfDesignOfSupportCoils === VariantOfDesignOfSupportCoils[0]" :SchemeData="SchemeData"/>
          <SchemeCompressionSpringPressedNotPolished v-if="SelectedVariantOfDesignOfSupportCoils === VariantOfDesignOfSupportCoils[1]" :SchemeData="SchemeData"/>
          <SchemeCompressionSpringNotPressedNotPolished v-if="SelectedVariantOfDesignOfSupportCoils === VariantOfDesignOfSupportCoils[2]" :SchemeData="SchemeData"/>
        </div>
        <div class="">
          <TotalTable :items="ForTotal"/>
        </div>
      </div>
      </div>
    <vue-final-modal v-model="ShowModal" classes="modal-container" content-class="modal-content">
      <button class="modal__close" @click="ShowModal = false">
        <i class="svg inline  svg-inline-" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1L1 13M1 1L13 13" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        </i>
      </button>
      <span class="modal__title mb-5">Заказать пружины</span>
      <p>{{ FormText }}</p>
      <div class="modal__content grid grid-cols-1 gap-3">
        <div class="flex flex-col">
          <label class="inputs-label mb-2">Имя</label>
          <div class="style-chooser">
            <input class="bg-transparent h-fit w-full px-3 py-2" type="text" v-model="Name"/>
          </div>
        </div>
        <div class="flex flex-col">
          <label class="inputs-label mb-2">Email</label>
          <div class="style-chooser">
            <input class="bg-transparent h-fit w-full px-3 py-2" type="text" v-model="Email">
          </div>
        </div>
        <div class="flex flex-col">
          <label class="inputs-label mb-2">Телефон<span class="calc-req">*</span></label>
          <div class="style-chooser" :class="{'spring-form__error': Errors.Phone}">
            <input v-maska="'+7 (###) ###-##-##'"
             class="bg-transparent h-fit w-full px-3 py-2" type="text" v-model="Phone">
          </div>
        </div>
        <div class="flex flex-col">
          <label class="inputs-label mb-2">Комментарий</label>
          <div class="style-chooser">
            <textarea class="bg-transparent h-fit w-full px-3 py-2" v-model="Comm">
            </textarea>
          </div>
        </div>
      </div>
      <div class="modal__action">
        <button v-if="sendBtnHide === false" class="calc-btn calc-btn__yellow" @click="SendForm">Отправить</button>
        <button class="calc-btn calc-btn__grey" @click="ShowModal = false">Закрыть</button>
      </div>
    </vue-final-modal>
    <vue-final-modal v-model="ShowSuccess" classes="modal-container" content-class="modal-content">
      <button class="modal__close" @click="ShowSuccess = false">
        <i class="svg inline  svg-inline-" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1L1 13M1 1L13 13" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        </i>
      </button>
      <span class="modal__title mb-5">{{ SuccessText }}</span>
        <button class="calc-btn calc-btn__grey" @click="ShowSuccess = false">Закрыть</button>
    </vue-final-modal>
    <svg xmlns="http://www.w3.org/2000/svg" transform="translate(120,60) rotate(0) scale(0.7)"><g><path fill="#231F20" d="M56.086,63.077H50.08l-6.784-22.372l-6.782,22.372h-6.007l-9.84-36.871h7.509l5.697,23.252l6.732-23.252    h5.387l6.729,23.252l5.749-23.252h7.51L56.086,63.077z"></path><path fill="#231F20" d="M97.563,59.349c-2.59,2.693-5.957,4.038-9.943,4.038c-3.989,0-7.407-1.397-9.995-4.038    c-3.884-3.989-3.624-10.1-3.624-14.189v-2.02c0-7.354,0.775-10.306,3.624-13.206c2.588-2.641,6.006-4.038,9.995-4.038    c3.934,0,7.353,1.397,9.943,4.038c2.588,2.642,3.676,6.164,3.676,12.118v2.59C101.24,49.923,101.5,55.257,97.563,59.349z     M92.23,34.284c-1.138-1.294-2.746-1.966-4.609-1.966c-1.865,0-3.523,0.672-4.661,1.966c-1.655,1.813-1.761,5.283-1.761,9.84    c0,4.505-0.208,8.906,1.761,10.875c1.243,1.242,2.796,1.966,4.661,1.966c1.863,0,3.471-0.672,4.609-1.966    c1.5-1.71,1.813-3.521,1.813-11.032C94.043,37.909,93.678,35.89,92.23,34.284z"></path><path fill="#231F20" d="M113.769,63.077V26.206h7.197v30.448h16.728v6.423H113.769z"></path><path fill="#231F20" d="M148.719,63.077V26.206h7.197v30.448h16.728v6.423H148.719z"></path><path fill="#231F20" d="M193.614,32.626v30.451h-7.197V32.626h-9.633v-6.42h26.463v6.42H193.614z"></path><path fill="#231F20" d="M214.275,63.077V26.206h24.287v6.42h-17.09v8.649h14.552v6.421h-14.552v8.958h17.09v6.423H214.275z"></path><path fill="#231F20" d="M270.354,63.077l-7.2-14.708h-5.176v14.708h-7.197V26.206h14.447c7.041,0,11.963,4.66,11.963,11.288    c0,3.004-1.038,5.489-3.108,7.458c-0.982,0.932-1.708,1.45-3.626,2.227l8.234,15.899H270.354z M264.763,42.362    c3.106,0,5.229-1.968,5.229-4.868c0-2.899-2.123-4.868-5.229-4.868h-6.784v9.736H264.763z"></path></g><g><path fill="#231F20" d="M212.193,93.946c1.191,0.454,2.532-0.143,2.987-1.336l6.685-17.48c0.458-1.194-0.14-2.533-1.336-2.991    c-1.197-0.457-2.535,0.141-2.988,1.337l-6.684,17.479C210.396,92.147,210.994,93.489,212.193,93.946z M218.254,74.149    c0-0.81,0.655-1.47,1.466-1.47c0.646,0,1.188,0.42,1.386,0.997c-0.299-0.282-0.701-0.457-1.141-0.457    c-0.818,0-1.495,0.583-1.643,1.354C218.279,74.438,218.254,74.299,218.254,74.149z"></path><path fill="#231F20" d="M206.168,93.946c1.198,0.454,2.536-0.143,2.991-1.336l6.685-17.48c0.459-1.194-0.14-2.533-1.336-2.991    c-1.195-0.457-2.533,0.141-2.988,1.337l-6.687,17.479C204.378,92.147,204.978,93.489,206.168,93.946z M212.23,74.149    c0-0.81,0.657-1.47,1.473-1.47c0.643,0,1.185,0.42,1.383,0.997c-0.301-0.282-0.7-0.457-1.143-0.457    c-0.815,0-1.493,0.583-1.642,1.354C212.26,74.438,212.23,74.299,212.23,74.149z"></path><path fill="#231F20" d="M200.148,93.946c1.196,0.454,2.533-0.143,2.988-1.336l6.686-17.48c0.457-1.194-0.141-2.533-1.333-2.991    c-1.196-0.457-2.533,0.141-2.991,1.337l-6.686,17.479C198.358,92.147,198.954,93.489,200.148,93.946z M206.211,74.149    c0-0.81,0.657-1.47,1.47-1.47c0.646,0,1.186,0.42,1.384,0.997c-0.298-0.282-0.698-0.457-1.142-0.457    c-0.816,0-1.492,0.583-1.643,1.354C206.238,74.438,206.211,74.299,206.211,74.149z"></path><path fill="#231F20" d="M194.13,93.946c1.195,0.454,2.532-0.143,2.988-1.336l6.684-17.48c0.458-1.194-0.14-2.533-1.332-2.991    c-1.195-0.457-2.536,0.141-2.991,1.337l-6.685,17.479C192.334,92.147,192.934,93.489,194.13,93.946z M200.191,74.149    c0-0.81,0.658-1.47,1.468-1.47c0.647,0,1.188,0.42,1.385,0.997c-0.299-0.282-0.701-0.457-1.143-0.457    c-0.812,0-1.492,0.583-1.643,1.354C200.219,74.438,200.191,74.299,200.191,74.149z"></path><path fill="#231F20" d="M188.11,93.946c1.19,0.454,2.53-0.143,2.986-1.336l6.688-17.48c0.456-1.194-0.145-2.533-1.337-2.991    c-1.196-0.457-2.536,0.141-2.991,1.337l-6.688,17.479C186.314,92.147,186.912,93.489,188.11,93.946z M194.169,74.149    c0-0.81,0.659-1.47,1.471-1.47c0.646,0,1.188,0.42,1.386,0.997c-0.303-0.282-0.7-0.457-1.146-0.457    c-0.815,0-1.49,0.583-1.64,1.354C194.2,74.438,194.169,74.299,194.169,74.149z"></path><path fill="#231F20" d="M182.086,93.946c1.195,0.454,2.533-0.143,2.994-1.336l6.684-17.48c0.456-1.194-0.143-2.533-1.338-2.991    c-1.195-0.457-2.533,0.141-2.991,1.337l-6.682,17.479C180.293,92.147,180.894,93.489,182.086,93.946z M188.147,74.149    c0-0.81,0.66-1.47,1.471-1.47c0.643,0,1.185,0.42,1.383,0.997c-0.295-0.282-0.698-0.457-1.143-0.457    c-0.815,0-1.49,0.583-1.638,1.354C188.178,74.438,188.147,74.299,188.147,74.149z"></path><path fill="#231F20" d="M176.064,93.946c1.195,0.454,2.536-0.143,2.99-1.336l6.688-17.48c0.458-1.194-0.14-2.533-1.336-2.991    c-1.194-0.457-2.535,0.141-2.991,1.337l-6.684,17.479C174.273,92.147,174.869,93.489,176.064,93.946z M182.129,74.149    c0-0.81,0.657-1.47,1.468-1.47c0.647,0,1.189,0.42,1.386,0.997c-0.299-0.282-0.701-0.457-1.144-0.457    c-0.812,0-1.49,0.583-1.643,1.354C182.158,74.438,182.129,74.299,182.129,74.149z"></path><path fill="#231F20" d="M170.045,93.946c1.195,0.454,2.534-0.143,2.993-1.336l6.683-17.48c0.459-1.194-0.14-2.533-1.336-2.991    c-1.195-0.457-2.533,0.141-2.991,1.337l-6.684,17.479C168.255,92.147,168.853,93.489,170.045,93.946z M176.106,74.149    c0-0.81,0.66-1.47,1.471-1.47c0.646,0,1.188,0.42,1.386,0.997c-0.301-0.282-0.7-0.457-1.143-0.457    c-0.815,0-1.493,0.583-1.646,1.354C176.137,74.438,176.106,74.299,176.106,74.149z"></path><path fill="#231F20" d="M164.025,93.946c1.193,0.454,2.53-0.143,2.991-1.336l6.685-17.48c0.455-1.194-0.141-2.533-1.335-2.991    c-1.198-0.457-2.536,0.141-2.994,1.337l-6.685,17.479C162.232,92.147,162.831,93.489,164.025,93.946z M170.088,74.149    c0-0.81,0.655-1.47,1.467-1.47c0.646,0,1.188,0.42,1.387,0.997c-0.298-0.282-0.701-0.457-1.144-0.457    c-0.815,0-1.493,0.583-1.643,1.354C170.115,74.438,170.088,74.299,170.088,74.149z"></path><path fill="#231F20" d="M158.004,93.946c1.198,0.454,2.535-0.143,2.991-1.336l6.684-17.48c0.461-1.194-0.14-2.533-1.337-2.991    c-1.193-0.457-2.534,0.141-2.988,1.337l-6.686,17.479C156.211,92.147,156.811,93.489,158.004,93.946z M164.066,74.149    c0-0.81,0.657-1.47,1.472-1.47c0.641,0,1.187,0.42,1.381,0.997c-0.298-0.282-0.697-0.457-1.141-0.457    c-0.814,0-1.495,0.583-1.643,1.354C164.096,74.438,164.066,74.299,164.066,74.149z"></path><path fill="#231F20" d="M151.985,93.946c1.192,0.454,2.533-0.143,2.989-1.336l6.687-17.48c0.458-1.194-0.143-2.533-1.338-2.991    c-1.193-0.457-2.531,0.141-2.988,1.337l-6.688,17.479C150.192,92.147,150.787,93.489,151.985,93.946z M158.044,74.149    c0-0.81,0.658-1.47,1.473-1.47c0.643,0,1.187,0.42,1.383,0.997c-0.3-0.282-0.697-0.457-1.143-0.457    c-0.814,0-1.493,0.583-1.641,1.354C158.074,74.438,158.044,74.299,158.044,74.149z"></path><path fill="#231F20" d="M145.875,93.946c1.193,0.454,2.533-0.143,2.988-1.336l6.684-17.48c0.458-1.194-0.14-2.533-1.335-2.991    c-1.193-0.457-2.533,0.141-2.988,1.337l-6.685,17.479C144.082,92.147,144.68,93.489,145.875,93.946z M151.937,74.149    c0-0.81,0.658-1.47,1.468-1.47c0.647,0,1.188,0.42,1.383,0.997c-0.298-0.282-0.697-0.457-1.141-0.457    c-0.815,0-1.493,0.583-1.643,1.354C151.964,74.438,151.937,74.299,151.937,74.149z"></path><path fill="#231F20" d="M139.854,93.946c1.195,0.454,2.533-0.143,2.991-1.336l6.684-17.48c0.458-1.194-0.138-2.533-1.335-2.991    c-1.195-0.457-2.533,0.141-2.991,1.337l-6.685,17.479C138.063,92.147,138.661,93.489,139.854,93.946z M145.916,74.149    c0-0.81,0.66-1.47,1.47-1.47c0.646,0,1.186,0.42,1.385,0.997c-0.302-0.282-0.7-0.457-1.145-0.457    c-0.813,0-1.491,0.583-1.643,1.354C145.943,74.438,145.916,74.299,145.916,74.149z"></path><path fill="#231F20" d="M133.834,93.946c1.193,0.454,2.531-0.143,2.989-1.336l6.687-17.48c0.455-1.194-0.143-2.533-1.338-2.991    c-1.195-0.457-2.533,0.141-2.991,1.337l-6.682,17.479C132.042,92.147,132.639,93.489,133.834,93.946z M139.894,74.149    c0-0.81,0.658-1.47,1.471-1.47c0.645,0,1.188,0.42,1.385,0.997c-0.3-0.282-0.7-0.457-1.143-0.457    c-0.815,0-1.493,0.583-1.644,1.354C139.924,74.438,139.894,74.299,139.894,74.149z"></path><path fill="#231F20" d="M127.812,93.946c1.195,0.454,2.533-0.143,2.991-1.336l6.685-17.48c0.455-1.194-0.14-2.533-1.338-2.991    c-1.193-0.457-2.533,0.141-2.988,1.337l-6.684,17.479C126.02,92.147,126.617,93.489,127.812,93.946z M133.875,74.149    c0-0.81,0.658-1.47,1.47-1.47c0.643,0,1.188,0.42,1.383,0.997c-0.298-0.282-0.701-0.457-1.141-0.457    c-0.815,0-1.496,0.583-1.643,1.354C133.904,74.438,133.875,74.299,133.875,74.149z"></path><path fill="#231F20" d="M121.791,93.946c1.195,0.454,2.533-0.143,2.99-1.336l6.688-17.48c0.455-1.194-0.143-2.533-1.338-2.991    c-1.195-0.457-2.533,0.141-2.991,1.337l-6.682,17.479C120,92.147,120.598,93.489,121.791,93.946z M127.853,74.149    c0-0.81,0.658-1.47,1.47-1.47c0.645,0,1.188,0.42,1.386,0.997c-0.3-0.282-0.7-0.457-1.143-0.457c-0.815,0-1.493,0.583-1.64,1.354    C127.883,74.438,127.853,74.299,127.853,74.149z"></path><path fill="#231F20" d="M115.771,93.946c1.195,0.454,2.536-0.143,2.991-1.336l6.685-17.48c0.458-1.194-0.14-2.533-1.337-2.991    c-1.193-0.457-2.531,0.141-2.986,1.337l-6.687,17.479C113.979,92.147,114.579,93.489,115.771,93.946z M121.833,74.149    c0-0.81,0.658-1.47,1.471-1.47c0.643,0,1.186,0.42,1.385,0.997c-0.3-0.282-0.7-0.457-1.143-0.457    c-0.817,0-1.493,0.583-1.643,1.354C121.861,74.438,121.833,74.299,121.833,74.149z"></path><path fill="#231F20" d="M109.752,93.946c1.193,0.454,2.533-0.143,2.988-1.336l6.687-17.48c0.458-1.194-0.143-2.533-1.338-2.991    c-1.193-0.457-2.533,0.141-2.988,1.337l-6.687,17.479C107.957,92.147,108.557,93.489,109.752,93.946z M115.814,74.149    c0-0.81,0.658-1.47,1.468-1.47c0.643,0,1.188,0.42,1.385,0.997c-0.3-0.282-0.701-0.457-1.143-0.457    c-0.815,0-1.493,0.583-1.641,1.354C115.839,74.438,115.814,74.299,115.814,74.149z"></path><path fill="#231F20" d="M103.73,93.946c1.195,0.454,2.533-0.143,2.991-1.336l6.685-17.48c0.458-1.194-0.143-2.533-1.336-2.991    c-1.195-0.457-2.535,0.141-2.991,1.337l-6.687,17.479C101.938,92.147,102.536,93.489,103.73,93.946z M109.792,74.149    c0-0.81,0.66-1.47,1.47-1.47c0.643,0,1.188,0.42,1.383,0.997c-0.3-0.282-0.698-0.457-1.143-0.457    c-0.813,0-1.491,0.583-1.641,1.354C109.82,74.438,109.792,74.299,109.792,74.149z"></path><path fill="#231F20" d="M97.711,93.946c1.193,0.454,2.531-0.143,2.989-1.336l6.687-17.48c0.455-1.194-0.143-2.533-1.338-2.991    c-1.195-0.457-2.534,0.141-2.991,1.337l-6.682,17.479C95.918,92.147,96.516,93.489,97.711,93.946z M103.771,74.149    c0-0.81,0.658-1.47,1.471-1.47c0.645,0,1.188,0.42,1.385,0.997c-0.3-0.282-0.7-0.457-1.143-0.457    c-0.815,0-1.491,0.583-1.644,1.354C103.801,74.438,103.771,74.299,103.771,74.149z"></path><path fill="#231F20" d="M91.689,93.946c1.195,0.454,2.534-0.143,2.991-1.336l6.685-17.48c0.455-1.194-0.14-2.533-1.335-2.991    c-1.195-0.457-2.536,0.141-2.991,1.337l-6.684,17.479C89.899,92.147,90.497,93.489,91.689,93.946z M97.751,74.149    c0-0.81,0.658-1.47,1.467-1.47c0.648,0,1.188,0.42,1.389,0.997c-0.3-0.282-0.703-0.457-1.144-0.457    c-0.815,0-1.492,0.583-1.645,1.354C97.781,74.438,97.751,74.299,97.751,74.149z"></path><path fill="#231F20" d="M85.67,93.946c1.193,0.454,2.533-0.143,2.991-1.336l6.685-17.48c0.458-1.194-0.14-2.533-1.338-2.991    c-1.195-0.457-2.536,0.141-2.991,1.337l-6.682,17.479C83.877,92.147,84.473,93.489,85.67,93.946z M91.729,74.149    c0-0.81,0.66-1.47,1.47-1.47c0.645,0,1.188,0.42,1.385,0.997c-0.302-0.282-0.7-0.457-1.143-0.457    c-0.815,0-1.493,0.583-1.643,1.354C91.759,74.438,91.729,74.299,91.729,74.149z"></path><path fill="#231F20" d="M217.462,90.104c1.925,2.131,4.711,3.468,7.812,3.468c5.814,0,10.525-4.715,10.525-10.528    c0-5.815-4.711-10.531-10.525-10.531c-0.375,0-0.742,0.02-1.107,0.06l-1.973,5.156c0.907-0.525,1.955-0.832,3.08-0.832    c3.391,0,6.146,2.753,6.146,6.147c0,3.394-2.756,6.146-6.146,6.146c-2.73,0-5.038-1.776-5.842-4.237L217.462,90.104z     M231.831,75.918c0,0-4.057-2.493-7.703-1.416l0.451-1.187C224.579,73.315,228.82,72.864,231.831,75.918z"></path><path fill="#231F20" d="M70.198,83.043c0,5.813,4.714,10.528,10.531,10.528c0.467,0,0.93-0.032,1.38-0.093    c0.042-0.337,0.123-0.673,0.248-1.004l1.616-4.218c-0.943,0.588-2.053,0.932-3.244,0.932c-3.399,0-6.15-2.752-6.15-6.146    c0-3.395,2.751-6.147,6.15-6.147c2.793,0,5.149,1.867,5.894,4.422l2.003-5.234c-1.928-2.188-4.751-3.571-7.897-3.571    C74.912,72.512,70.198,77.228,70.198,83.043z M80.454,73.354c4.281-0.242,7.127,2.937,7.127,2.937l-0.467,1.18    C85.132,74.227,80.454,73.354,80.454,73.354z"></path></g><g><path fill="#231F20" d="M79.956,77.813l3.331,9.756c2.208-1.193,3.301-3.834,2.46-6.288C84.91,78.829,82.429,77.408,79.956,77.813    z"></path><path fill="#231F20" d="M78.303,78.379c-2.206,1.194-3.296,3.836-2.458,6.288c0.84,2.451,3.319,3.873,5.792,3.467L78.303,78.379z"></path></g><g><path fill="#231F20" d="M224.384,77.928l3.333,9.755c2.205-1.194,3.299-3.835,2.461-6.288    C229.34,78.944,226.859,77.521,224.384,77.928z"></path><path fill="#231F20" d="M222.733,78.491c-2.206,1.194-3.299,3.834-2.459,6.286c0.838,2.454,3.316,3.874,5.79,3.469L222.733,78.491    z"></path></g><g><path fill="#231F20" d="M263.49,10.669v2.207h33.271v62.073h-53.961c0.445,0.548,1.088,1.402,1.503,2.207h54.664V10.669H263.49z"></path><path fill="#231F20" d="M8.305,12.875h34.202v-2.207H6.097v66.486h55.631c0.35-0.674,0.825-1.452,1.433-2.207H8.305V12.875z"></path></g><g><path fill="#231F20" d="M57.807,18.219V9.043h-4.917v9.176h-3.054V6.381h11.021v11.838H57.807z"></path><path fill="#231F20" d="M64.316,18.219V6.381h5.929c2.664,0,4.119,1.793,4.119,3.941c0,2.129-1.455,3.922-4.119,3.922H67.37v3.975    H64.316z M71.256,10.322c0-0.817-0.603-1.279-1.418-1.279H67.37v2.539h2.468C70.653,11.583,71.256,11.12,71.256,10.322z"></path><path fill="#231F20" d="M75.442,17.526l1.208-2.378c0.408,0.303,0.94,0.586,1.526,0.586c0.765,0,1.1-0.283,1.458-0.887    l-4.278-8.467h3.443l2.556,5.538l2.573-5.538h3.441l-4.806,9.513c-0.748,1.456-1.936,2.539-4.119,2.539    C77.305,18.433,76.17,18.113,75.442,17.526z"></path><path fill="#231F20" d="M88.344,18.219l4.844-6.3l-4.597-5.538h3.746l3.264,4.367V6.381h3.053v4.349l3.249-4.349h3.746    l-4.581,5.538l4.847,6.3h-3.744l-3.124-4.454l-0.393,0.497v3.957h-3.053v-3.922l-0.408-0.532l-3.124,4.454H88.344z"></path><path fill="#231F20" d="M108.129,18.219V6.381h3.051v6.976l4.794-6.976h3.158v11.838h-3.071v-7.312l-4.986,7.312H108.129z"></path><path fill="#231F20" d="M130.559,18.219v-4.756h-4.917v4.756h-3.053V6.381h3.053v4.42h4.917v-4.42h3.051v11.838H130.559z"></path><path fill="#231F20" d="M140.121,6.381v3.976h2.876c2.664,0,4.119,1.792,4.119,3.922c0,2.148-1.455,3.94-4.119,3.94h-5.927V6.381    H140.121z M140.121,13.02v2.538h2.468c0.815,0,1.418-0.461,1.418-1.278c0-0.798-0.603-1.26-1.418-1.26H140.121z M147.984,18.219    V6.381h3.053v11.838H147.984z"></path><path fill="#231F20" d="M168.335,18.219v-4.756h-4.915v4.756h-3.053V6.381h3.053v4.42h4.915v-4.42h3.056v11.838H168.335z"></path><path fill="#231F20" d="M182.886,18.219l-0.585-1.702h-4.666l-0.588,1.702h-3.458l4.453-11.838h3.834l4.474,11.838H182.886z     M179.958,9.4l-1.508,4.454h3.019L179.958,9.4z"></path><path fill="#231F20" d="M193.637,16.569l1.545-2.077c0.851,0.835,2.396,1.242,3.427,1.242c1.4,0,2.163-0.496,2.163-1.153    c0-0.674-0.586-0.994-2.288-0.994h-2.413v-2.68h2.413c1.261,0,2.094-0.302,2.094-0.922c0-0.746-0.938-1.083-2.164-1.083    c-1.085,0-2.308,0.391-3.144,1.136l-1.473-1.917c0.992-1.118,2.751-1.916,4.935-1.916c3.016,0,4.898,1.295,4.898,3.247    c0,1.384-1.188,2.432-2.591,2.662c1.258,0.124,2.786,1.101,2.786,2.804c0,2.076-2.148,3.515-5.111,3.515    C196.458,18.433,194.56,17.634,193.637,16.569z"></path><path fill="#231F20" d="M214.86,18.219l-0.585-1.702h-4.666l-0.588,1.702h-3.459l4.454-11.838h3.834l4.474,11.838H214.86z     M211.932,9.4l-1.505,4.454h3.017L211.932,9.4z"></path><path fill="#231F20" d="M227.478,18.219l-3.106-4.454l-0.798,0.993v3.461h-3.054V6.381h3.054v4.864l3.639-4.864h3.761    l-4.596,5.538l4.847,6.3H227.478z"></path><path fill="#231F20" d="M241.496,18.219l-0.586-1.702h-4.668l-0.586,1.702h-3.46l4.453-11.838h3.837l4.469,11.838H241.496z     M238.564,9.4l-1.508,4.454h3.02L238.564,9.4z"></path><path fill="#231F20" d="M246.302,16.569l1.547-2.077c0.85,0.835,2.396,1.242,3.425,1.242c1.4,0,2.163-0.496,2.163-1.153    c0-0.674-0.584-0.994-2.29-0.994h-2.413v-2.68h2.413c1.26,0,2.096-0.302,2.096-0.922c0-0.746-0.94-1.083-2.165-1.083    c-1.081,0-2.307,0.391-3.143,1.136l-1.472-1.917c0.995-1.118,2.751-1.916,4.931-1.916c3.019,0,4.899,1.295,4.899,3.247    c0,1.384-1.188,2.432-2.588,2.662c1.258,0.124,2.785,1.101,2.785,2.804c0,2.076-2.147,3.515-5.111,3.515    C249.126,18.433,247.228,17.634,246.302,16.569z"></path></g></svg>
  </div>
</template>

<script>
import SmartInput from '@/components/smart-input'
import SchemeCompressionSpringPressedPolished from '@/components/SchemeCompressionSpringPressedPolished'
import SchemeCompressionSpringPressedNotPolished from '@/components/SchemeCompressionSpringPressedNotPolished'
import SchemeCompressionSpringNotPressedNotPolished from '@/components/SchemeCompressionSpringNotPressedNotPolished'
import vSelect from 'vue-select'
import { VueFinalModal } from 'vue-final-modal'
import { maska } from 'maska'
import 'vue-select/dist/vue-select.css'
import {
  useFilterTotal,
  useFilterError,
  useFormText,
  toDataURL,
  ConvertToPDF
} from '@/plugins/functions'
import TotalTable from '@/components/TotalTable'

export default {
  name: 'SpringCompression',
  components: {
    TotalTable,
    SchemeCompressionSpringPressedPolished,
    SchemeCompressionSpringPressedNotPolished,
    SchemeCompressionSpringNotPressedNotPolished,
    SmartInput,
    vSelect,
    VueFinalModal
  },
  directives: { maska },
  props: {
    SpringName: String
  },
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
      WireDiameter: 0,
      OuterDiameter: 0,
      FreeLength: 0,
      WorkNumberOfCoils: 0,
      TotalNumberOfCoils: 0,
      LengthAtPreDeformation: '',
      LengthAtWorkingDeformation: '',
      WindingDirection: 1,
      Covering: [
        'Без покрытия',
        'Гальваническое радужное',
        'Цинк',
        'Порошковое'
      ],
      SelectedCovering: null,
      SelectedVariantOfDesignOfSupportCoils: null,
      SelectedMaterial: null,
      Quantity: 100,
      InputStep: 1,
      ShowModal: false,
      ShowSuccess: false,
      SuccessText: 'Заказ успешно отправлен, менеджер скоро свяжется с вами',
      Name: '',
      Email: '',
      Phone: '',
      Comm: '',
      sendBtnHide: false,
      FormType: 'compression',
      watermark: ''
    }
  },
  methods: {
    ToPrint () {
      this.$htmlToPaper('scheme-print', { specs: ['fullscreen=yes', 'titlebar=no', 'scrollbars=no'] })
    },
    ChangeTotalCoils () {
      this.TotalNumberOfCoils = parseFloat(this.WorkNumberOfCoils) + 2
    },
    async SendForm () {
      if (this.FormType === 'compression') {
        if (this.CheckErrors.length === 0 && this.Errors.Phone === false) {
          this.sendBtnHide = true
          const GeneratedPDF = await ConvertToPDF(this.$el.querySelector('.scheme-svg'), this.$el.querySelector('.scheme-spring'), this.watermark, this.ForTotal, this.SpringName)
          GeneratedPDF.getBase64((base64DataFile) => {
            const send = new FormData()
            send.append('key', 'v7WIMOidp9ueH3Lt')
            send.append('SpringType', this.FormType)
            send.append('InnerDiameter', parseFloat(this.InnerDiameter).toFixed(2))
            send.append('OuterDiameter', parseFloat(this.OuterDiameter).toFixed(2))
            send.append('Material', this.SelectedMaterial)
            send.append('SpringIndex', parseFloat(this.SpringIndex).toFixed(2))
            send.append('SpringStiffness', parseFloat(this.SpringStiffness).toFixed(2))
            send.append('FreeLength', parseFloat(this.FreeLength).toFixed(2))
            send.append('LengthOfTheDeployedSpring', parseFloat(this.LengthOfTheDeployedSpring).toFixed(2))
            send.append('LengthAtContactOfCoils', parseFloat(this.LengthAtContactOfCoils).toFixed(2))
            send.append('ForceAtMaxDeformations', parseFloat(this.ForceAtMaxDeformations).toFixed(2))
            send.append('WorkNumberOfCoils', parseFloat(this.WorkNumberOfCoils).toFixed(2))
            send.append('TotalNumberOfCoils', parseFloat(this.TotalNumberOfCoils).toFixed(2))
            send.append('Step', parseFloat(this.Step).toFixed(2))
            send.append('WindingDirection', this.WindingDirection === 0 ? 'левое' : 'правое')
            send.append('SpringMass', parseFloat(this.SpringMass).toFixed(2))
            send.append('SpringBatchWeight', parseFloat(this.SpringBatchWeight).toFixed(2))
            send.append('Covering', this.SelectedCovering)
            send.append('ForceAtPreDeformation', parseFloat(this.ForceAtPreDeformation).toFixed(2))
            send.append('ForceAtWorkingDeformation', parseFloat(this.ForceAtWorkingDeformation).toFixed(2))
            send.append('LengthAtPreDeformation', parseFloat(this.LengthAtPreDeformation).toFixed(2))
            send.append('LengthAtWorkingDeformation', parseFloat(this.LengthAtWorkingDeformation).toFixed(2))
            send.append('WireDiameter', parseFloat(this.WireDiameter).toFixed(2))
            send.append('Name', this.Name)
            send.append('Phone', this.Phone)
            send.append('Email', this.Email)
            send.append('Comm', this.Comm)
            send.append('files', base64DataFile)
            this.axios.post(document.location.href.split('?')[0] + 'ajax.php', send).then((response) => {
              if (response.data.status === 'success') {
                this.ShowModal = false
                this.sendBtnHide = false
                this.SuccessText = response.data.statusText
                this.ShowSuccess = true
                console.log(response.data)
              } else {
                this.sendBtnHide = false
              }
            })
          })
        }
      }
      if (this.FormType === 'SpecialSpring') {
        if (this.Errors.Phone === false) {
          this.sendBtnHide = true
          const send = new FormData()
          send.append('key', 'v7WIMOidp9ueH3Lt')
          send.append('SpringType', this.FormType)
          send.append('Name', this.Name)
          send.append('Phone', this.Phone)
          send.append('Email', this.Email)
          send.append('Comm', this.Comm)
          send.append('SpecialSpring', true)
          this.axios.post(document.location.href.split('?')[0] + 'ajax.php', send).then((response) => {
            if (response.data.status === 'success') {
              this.ShowModal = false
              this.sendBtnHide = false
              this.SuccessText = response.data.statusText
              this.ShowSuccess = true
            } else {
              this.sendBtnHide = false
            }
          })
        }
      }
    },
    /*
    * @param {string} what should to do with pdf
    * */
    async usePFD (action) {
      const pdf = await ConvertToPDF(this.$el.querySelector('.scheme-svg'), this.$el.querySelector('.scheme-spring'), undefined, this.ForTotal, this.SpringName)
      switch (action) {
        case 'download':
          pdf.download()
          break
        case 'print':
          pdf.print()
          break
      }
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
        Quantity: !isNaN(this.Quantity),
        Phone: true
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
          measure: '',
          total: true
        },
        SpringStiffness: {
          name: 'Жесткость пружины (с)',
          value: parseFloat(this.SpringStiffness).toFixed(2),
          measure: 'Н/мм',
          total: true
        },
        FreeLength: {
          name: 'длина в свободном состоянии L0',
          value: parseFloat(this.FreeLength).toFixed(2),
          measure: 'мм',
          total: false
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
          value: isNaN(this.ForceAtPreDeformation) ? '' : parseFloat(this.ForceAtPreDeformation).toFixed(2),
          measure: 'Н',
          total: this.LengthAtPreDeformation > 0
        },
        ForceAtWorkingDeformation: {
          name: 'Сила при рабочей деформ. F2',
          value: isNaN(this.ForceAtWorkingDeformation) ? '' : parseFloat(this.ForceAtWorkingDeformation).toFixed(2),
          measure: 'Н',
          total: this.LengthAtWorkingDeformation > 0
        },
        LengthAtPreDeformation: {
          name: 'L1',
          value: this.LengthAtPreDeformation.length === 0 ? '' : parseFloat(this.LengthAtPreDeformation).toFixed(2),
          measure: '',
          total: false
        },
        LengthAtWorkingDeformation: {
          name: 'L2',
          value: this.LengthAtWorkingDeformation.length === 0 ? '' : parseFloat(this.LengthAtWorkingDeformation).toFixed(2),
          measure: '',
          total: false
        },
        WireDiameter: {
          name: 'Диаметр проволоки',
          value: parseFloat(this.WireDiameter).toFixed(2),
          measure: 'мм',
          total: false
        },
        SprQuantity: {
          name: 'Количетсво',
          value: this.Quantity,
          measure: 'шт',
          total: true
        }
      }
    },
    ForTotal: function () {
      return useFilterTotal(this.SchemeData)
    },
    CheckErrors: function () {
      return useFilterError(this.SchemeData)
    },
    FormText: function () {
      return useFormText(this.FormType)
    }
  },
  watch: {
    Phone (cur) {
      this.Errors.Phone = cur.replace(/[^0-9]/g, '').length <= 10
    }
  },
  mounted () {
    this.SelectedCovering = this.Covering[0]
    this.SelectedVariantOfDesignOfSupportCoils = this.VariantOfDesignOfSupportCoils[0]
    this.SelectedMaterial = this.Material[0]
    toDataURL('https://wollter.ru/upload/img/watermarkbg.png',
      (dataUrl) => {
        this.watermark = dataUrl
      }
    )
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
.vs__dropdown-option::before{
  content: unset !important;
  display: none !important;
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
        background: #ffea3b;
        color: #000;
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
        @apply relative overflow-hidden;
        border: 3px solid #1D1F23;
      }
    }
    &-outer{
      &-wrapper{
        @apply md:py-6 md:px-7 h-fit overflow-hidden;
        border: 1px solid #1D1F23;
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
          grid-template-columns: 0.9fr 1fr;
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
      @apply flex items-center justify-center px-6 py-3 text-white w-full relative cursor-pointer;
      border: 0 solid #5C5C5C;
      border-radius: 3px;
      &__grey {
        background: #5C5C5C;
      }
      &__yellow {
        background: #ffea3b;
        color: #000;
        font-weight: 700;
      }
      &__reset {
        color: #4984DC;
        font-weight: 700;
      }
    }
    &-req{
      color: red;
    }
  }
  .CoilsVar{
    width: 20px;
    height: 20px;
  }
  .spring-form__error{
    border:1px solid red;
  }
</style>
<style scoped>
:deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  max-width: 480px;
  width: 100%;
}
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__action {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  padding: 1rem 0 0;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.left-slide-enter-active,
.left-slide-leave-active {
  transition: All 0.3s ease-in-out;
}
.left-slide-leave-to,.left-slide-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

@media screen and (min-width: 768px) and (max-width: 1023px), screen and (min-width: 1280px) {
  .spring-inputs > :nth-child(1){
    order: 1;
  }
  .spring-inputs > :nth-child(2){
    order: 3;
  }
  .spring-inputs > :nth-child(3){
    order: 5;
  }
  .spring-inputs > :nth-child(4){
    order: 7;
  }
  .spring-inputs > :nth-child(5){
    order: 9;
  }
  .spring-inputs > :nth-child(6){
    order: 11;
  }
  .spring-inputs > :nth-child(7){
    order: 2;
  }
  .spring-inputs > :nth-child(8){
    order: 4;
  }
  .spring-inputs > :nth-child(9){
    order: 6;
  }
  .spring-inputs > :nth-child(10){
    order: 8;
  }
  .spring-inputs > :nth-child(11){
    order: 10;
  }
  .spring-inputs > :nth-child(12){
    order: 12;
  }
}
</style>

<style scoped>
.dark-mode div:deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
