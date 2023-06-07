<template class="container">
  <div class="spring-main__wrapper">
    <div>
       <div class="spring-inputs mb-5">
         <div class="flex w-full flex-col items-start justify-between">
           <label class="inputs-label">Материал: <span class="calc-req">*</span></label>
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
           <label class="inputs-label">Тип зацепа: <span class="calc-req">*</span></label>
           <vSelect class="style-chooser" :options="TypeOfHook" v-model="SelectedTypeOfHook" :clearable="false" label="title">
             <template v-slot:option="TypeOfHook">
               <div class="flex flex-col items-center py-1">
                 <svg v-if="TypeOfHook.ico === 1" xmlns="http://www.w3.org/2000/svg" width="73" height="127" viewBox="0 0 73 128" fill="none">
                   <rect x="1.04855" y="-0.948973" width="19.0569" height="121.931" rx="9.52846" transform="matrix(0.99876 0.0497869 0.0497869 -0.99876 39.0495 124.139)" fill="black" stroke="black" stroke-width="2"/>
                   <path d="M64.2637 11.9347L71.5241 64.9505L52.328 64.9505L45.3849 14.5346C44.667 9.32135 48.3111 4.5132 53.5243 3.79525C58.7376 3.07732 63.5457 6.72146 64.2637 11.9347Z" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="60.5943" y="124.203" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 60.5943 124.203)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="1.04855" y="-0.948973" width="19.0569" height="121.931" rx="9.52846" transform="matrix(0.99876 0.0497869 0.0497869 -0.99876 0.0485468 124.139)" fill="black" stroke="black" stroke-width="2"/>
                   <circle cx="11.4393" cy="116.518" r="9.52846" transform="rotate(180 11.4393 116.518)" fill="white" stroke="black" stroke-width="2"/>
                   <path d="M9.05209 126.568L8.30762 125.824L20.2192 113.912L20.9637 114.657L9.05209 126.568Z" fill="black"/>
                   <path d="M4.58525 123.59L3.84077 122.846L17.2413 109.445L17.9858 110.19L4.58525 123.59Z" fill="black"/>
                   <path d="M1.60735 119.123L0.862875 118.379L12.7745 106.467L13.5189 107.212L1.60735 119.123Z" fill="black"/>
                   <rect x="41.5943" y="124.203" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 41.5943 124.203)" fill="white" stroke="black" stroke-width="2"/>
                 </svg>
                 <svg v-if="TypeOfHook.ico === 2" xmlns="http://www.w3.org/2000/svg" width="188" height="127" viewBox="0 0 188 127" fill="none">
                   <path d="M73.9691 79.5903L73.9707 79.6382L73.977 79.6858L78.4507 113.774C79.1355 118.991 75.4608 123.776 70.2432 124.461C65.0255 125.146 60.2406 121.471 59.5558 116.253L55.0822 82.1664C54.9841 81.4188 54.9754 80.6814 55.0475 79.9645L55.0551 79.8889L55.0512 79.813C54.8954 76.7912 55.2784 73.7611 56.187 70.8655C57.2656 67.4283 59.0602 64.2585 61.4526 61.5652C63.8451 58.8718 66.7811 56.716 70.0672 55.2396C73.2069 53.829 76.5983 53.0693 80.0364 53.0045L80.2697 53.0001L80.432 53.0001L80.4352 53.0001L80.5173 53.0001L176.518 53.0001C181.764 53.0001 186.018 57.2534 186.018 62.5001C186.018 67.7468 181.764 72.0001 176.518 72.0001L80.0178 72.0001C80.0177 72.0001 80.0176 72.0001 80.0176 72.0001C79.6028 72.0001 79.0755 72.1326 78.7241 72.2321C78.3559 72.3363 77.984 72.4628 77.8351 72.5297C76.9916 72.9086 76.238 73.462 75.6239 74.1533C75.0099 74.8446 74.5492 75.6582 74.2724 76.5404C74.0261 77.3253 73.9383 78.7029 73.9691 79.5903Z" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="60.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 60.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="1.04855" y="-0.948973" width="19.0569" height="121.931" rx="9.52846" transform="matrix(0.99876 0.0497869 0.0497869 -0.99876 0.0475702 123.229)" fill="black" stroke="black" stroke-width="2"/>
                   <circle cx="11.4383" cy="115.607" r="9.52846" transform="rotate(180 11.4383 115.607)" fill="white" stroke="black" stroke-width="2"/>
                   <path d="M9.05111 125.658L8.30664 124.913L20.2182 113.002L20.9627 113.746L9.05111 125.658Z" fill="black"/>
                   <path d="M4.58427 122.68L3.8398 121.935L17.2403 108.535L17.9848 109.279L4.58427 122.68Z" fill="black"/>
                   <path d="M1.60637 118.213L0.861898 117.468L12.7735 105.557L13.518 106.301L1.60637 118.213Z" fill="black"/>
                   <rect x="41.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 41.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                 </svg>
                 <svg v-if="TypeOfHook.ico === 3" xmlns="http://www.w3.org/2000/svg" width="138" height="127" viewBox="0 0 138 127" fill="none">
                   <path d="M73.9691 79.5903L73.9707 79.6382L73.977 79.6858L78.4507 113.774C79.1355 118.991 75.4608 123.776 70.2432 124.461C65.0255 125.146 60.2406 121.471 59.5558 116.253L55.0822 82.1664C54.9841 81.4188 54.9754 80.6814 55.0475 79.9645L55.0551 79.8889L55.0512 79.813C54.8954 76.7912 55.2784 73.7611 56.187 70.8655C57.2656 67.4283 59.0602 64.2585 61.4526 61.5652C63.8451 58.8718 66.7811 56.716 70.0672 55.2396C73.2069 53.829 76.5983 53.0693 80.0364 53.0045L80.2697 53.0001L80.432 53.0001L80.4352 53.0001L80.5173 53.0001L126.518 53.0001C131.764 53.0001 136.018 57.2534 136.018 62.5001C136.018 67.7468 131.764 72.0001 126.518 72.0001L80.0178 72.0001C80.0177 72.0001 80.0176 72.0001 80.0176 72.0001C79.6028 72.0001 79.0755 72.1326 78.7241 72.2321C78.3559 72.3363 77.984 72.4628 77.8351 72.5297C76.9916 72.9086 76.238 73.462 75.6239 74.1533C75.0099 74.8446 74.5492 75.6582 74.2724 76.5404C74.0261 77.3253 73.9383 78.7029 73.9691 79.5903Z" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="60.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 60.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="1.04855" y="-0.948973" width="19.0569" height="121.931" rx="9.52846" transform="matrix(0.99876 0.0497869 0.0497869 -0.99876 0.0475702 123.229)" fill="black" stroke="black" stroke-width="2"/>
                   <circle cx="11.4383" cy="115.607" r="9.52846" transform="rotate(180 11.4383 115.607)" fill="white" stroke="black" stroke-width="2"/>
                   <path d="M9.05111 125.658L8.30664 124.913L20.2182 113.002L20.9627 113.746L9.05111 125.658Z" fill="black"/>
                   <path d="M4.58427 122.68L3.8398 121.935L17.2403 108.535L17.9848 109.279L4.58427 122.68Z" fill="black"/>
                   <path d="M1.60637 118.213L0.861898 117.468L12.7735 105.557L13.518 106.301L1.60637 118.213Z" fill="black"/>
                   <rect x="41.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 41.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                 </svg>
                 <svg v-if="TypeOfHook.ico === 4" xmlns="http://www.w3.org/2000/svg" width="192" height="127" viewBox="0 0 192 127" fill="none">
                   <path d="M78.4433 13.3445L78.443 13.2766L78.4518 13.2092C79.1366 7.99156 75.4619 3.20665 70.2442 2.52188C65.0485 1.83998 60.2819 5.48096 59.5658 10.6638L60.0013 94.9948L60.0016 95.0627L59.9928 95.1301C59.8947 95.8776 59.886 96.615 59.9581 97.3319L59.9657 97.4076L59.9618 97.4834C59.806 100.505 60.189 103.535 61.0976 106.431C62.1762 109.868 63.9708 113.038 66.3632 115.731C68.7557 118.425 71.6917 120.58 74.9777 122.057C78.1175 123.467 81.5089 124.227 84.947 124.292L85.1803 124.296L85.3426 124.296L85.3458 124.296L85.4279 124.296L181.428 124.296C186.675 124.296 190.928 120.043 190.928 114.796C190.928 109.55 186.675 105.296 181.428 105.296L84.9284 105.296C84.9283 105.296 84.9282 105.296 84.9282 105.296C84.5134 105.296 83.9861 105.164 83.6347 105.064C83.2665 104.96 82.8946 104.834 82.7457 104.767C81.9022 104.388 81.1486 103.834 80.5345 103.143C79.9205 102.452 79.4598 101.638 79.183 100.756C78.9386 99.9772 78.8503 98.6146 78.879 97.7267L78.4433 13.3445Z" fill="black" stroke="black" stroke-width="2"/>
                   <rect x="-1.12547" y="0.856334" width="19.0569" height="123.289" rx="9.52846" transform="matrix(-0.990904 -0.13457 -0.13457 0.990904 59.5943 2.68995)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="-1.12547" y="0.856334" width="19.0569" height="123.289" rx="9.52846" transform="matrix(-0.990904 -0.13457 -0.13457 0.990904 78.5943 2.68983)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="1.04757" y="2.75415" width="19.0569" height="121.931" rx="9.52846" transform="rotate(-2.85376 1.04757 2.75415)" fill="black" stroke="black" stroke-width="2"/>
                   <circle r="9.52846" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 11.4383 11.3754)" fill="white" stroke="black" stroke-width="2"/>
                   <path d="M9.05111 1.32504L8.30664 2.06951L20.2182 13.9811L20.9627 13.2366L9.05111 1.32504Z" fill="black"/>
                   <path d="M4.58427 4.30294L3.8398 5.04741L17.2403 18.4479L17.9848 17.7035L4.58427 4.30294Z" fill="black"/>
                   <path d="M1.60637 8.76978L0.861898 9.51426L12.7735 21.4258L13.518 20.6814L1.60637 8.76978Z" fill="black"/>
                   <rect x="-1.12547" y="0.856334" width="19.0569" height="123.289" rx="9.52846" transform="matrix(-0.990904 -0.13457 -0.13457 0.990904 40.5933 2.68995)" fill="white" stroke="black" stroke-width="2"/>
                 </svg>
                 <svg v-if="TypeOfHook.ico === 5" xmlns="http://www.w3.org/2000/svg" width="257" height="127" viewBox="0 0 257 127" fill="none">
                   <path d="M78.4506 113.772L78.4507 113.774C79.1355 118.991 75.4608 123.776 70.2432 124.461C65.0255 125.146 60.2406 121.471 59.5558 116.253L54.0823 74.1675L54.0822 74.1664C53.9841 73.4188 53.9754 72.6814 54.0475 71.9645L54.0551 71.8889L54.0512 71.813C53.8954 68.7912 54.2784 65.7611 55.187 62.8655C56.2656 59.4283 58.0602 56.2585 60.4526 53.5652C62.8451 50.8718 65.7811 48.716 69.0672 47.2396C72.2069 45.829 75.5983 45.0693 79.0364 45.0045L79.2697 45.0001L79.432 45.0001L79.4352 45.0001L79.5173 45.0001L245.518 45.0001C250.764 45.0001 255.018 49.2534 255.018 54.5001C255.018 59.7468 250.764 64.0001 245.518 64.0001L79.0178 64.0001C79.0177 64.0001 79.0176 64.0001 79.0176 64.0001C78.6028 64.0001 78.0755 64.1326 77.7241 64.2321C77.3559 64.3363 76.984 64.4628 76.8351 64.5297C75.9916 64.9086 75.238 65.462 74.6239 66.1533C74.0099 66.8446 73.5492 67.6582 73.2724 68.5404C73.0261 69.3253 72.9383 70.7029 72.9691 71.5903L72.9707 71.6376L72.9768 71.6846L78.4506 113.772Z" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="60.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 60.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="1.04855" y="-0.948973" width="19.0569" height="121.931" rx="9.52846" transform="matrix(0.99876 0.0497869 0.0497869 -0.99876 0.0465937 123.229)" fill="black" stroke="black" stroke-width="2"/>
                   <circle cx="11.4383" cy="115.607" r="9.52846" transform="rotate(180 11.4383 115.607)" fill="white" stroke="black" stroke-width="2"/>
                   <path d="M9.05111 125.658L8.30664 124.913L20.2182 113.002L20.9627 113.746L9.05111 125.658Z" fill="black"/>
                   <path d="M4.58427 122.68L3.8398 121.935L17.2403 108.535L17.9848 109.279L4.58427 122.68Z" fill="black"/>
                   <path d="M1.60637 118.213L0.861898 117.468L12.7735 105.557L13.518 106.301L1.60637 118.213Z" fill="black"/>
                   <rect x="41.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 41.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                 </svg>
                 <svg v-if="TypeOfHook.ico === 6" width="188" height="127" viewBox="0 0 188 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M73.9691 79.5903L73.9707 79.6382L73.977 79.6858L78.4507 113.774C79.1355 118.991 75.4608 123.776 70.2432 124.461C65.0255 125.146 60.2406 121.471 59.5558 116.253L55.0822 82.1664C54.9841 81.4188 54.9754 80.6814 55.0475 79.9645L55.0551 79.8889L55.0512 79.813C54.8954 76.7912 55.2784 73.7611 56.187 70.8655C57.2656 67.4283 59.0602 64.2585 61.4526 61.5652C63.8451 58.8718 66.7811 56.716 70.0672 55.2396C73.2069 53.829 76.5983 53.0693 80.0364 53.0045L80.2697 53.0001L80.432 53.0001L80.4352 53.0001L80.5173 53.0001L176.518 53.0001C181.764 53.0001 186.018 57.2534 186.018 62.5001C186.018 67.7468 181.764 72.0001 176.518 72.0001L80.0178 72.0001C80.0177 72.0001 80.0176 72.0001 80.0176 72.0001C79.6028 72.0001 79.0755 72.1326 78.7241 72.2321C78.3559 72.3363 77.984 72.4628 77.8351 72.5297C76.9916 72.9086 76.238 73.462 75.6239 74.1533C75.0099 74.8446 74.5492 75.6582 74.2724 76.5404C74.0261 77.3253 73.9383 78.7029 73.9691 79.5903Z" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="60.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 60.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="1.04855" y="-0.948973" width="19.0569" height="121.931" rx="9.52846" transform="matrix(0.99876 0.0497869 0.0497869 -0.99876 0.0465937 123.229)" fill="black" stroke="black" stroke-width="2"/>
                   <circle cx="11.4383" cy="115.607" r="9.52846" transform="rotate(180 11.4383 115.607)" fill="white" stroke="black" stroke-width="2"/>
                   <path d="M9.05111 125.658L8.30664 124.913L20.2182 113.002L20.9627 113.746L9.05111 125.658Z" fill="black"/>
                   <path d="M4.58427 122.68L3.8398 121.935L17.2403 108.535L17.9848 109.279L4.58427 122.68Z" fill="black"/>
                   <path d="M1.60637 118.213L0.861898 117.468L12.7735 105.557L13.518 106.301L1.60637 118.213Z" fill="black"/>
                   <rect x="41.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 41.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                 </svg>
                 <svg v-if="TypeOfHook.ico === 7 " width="188" height="127" viewBox="0 0 188 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M73.9691 79.5903L73.9707 79.6382L73.977 79.6858L78.4507 113.774C79.1355 118.991 75.4608 123.776 70.2432 124.461C65.0255 125.146 60.2406 121.471 59.5558 116.253L55.0822 82.1664C54.9841 81.4188 54.9754 80.6814 55.0475 79.9645L55.0551 79.8889L55.0512 79.813C54.8954 76.7912 55.2784 73.7611 56.187 70.8655C57.2656 67.4283 59.0602 64.2585 61.4526 61.5652C63.8451 58.8718 66.7811 56.716 70.0672 55.2396C73.2069 53.829 76.5983 53.0693 80.0364 53.0045L80.2697 53.0001L80.432 53.0001L80.4352 53.0001L80.5173 53.0001L176.518 53.0001C181.764 53.0001 186.018 57.2534 186.018 62.5001C186.018 67.7468 181.764 72.0001 176.518 72.0001L80.0178 72.0001C80.0177 72.0001 80.0176 72.0001 80.0176 72.0001C79.6028 72.0001 79.0755 72.1326 78.7241 72.2321C78.3559 72.3363 77.984 72.4628 77.8351 72.5297C76.9916 72.9086 76.238 73.462 75.6239 74.1533C75.0099 74.8446 74.5492 75.6582 74.2724 76.5404C74.0261 77.3253 73.9383 78.7029 73.9691 79.5903Z" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="60.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 60.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="1.04855" y="-0.948973" width="19.0569" height="121.931" rx="9.52846" transform="matrix(0.99876 0.0497869 0.0497869 -0.99876 0.0465937 123.229)" fill="black" stroke="black" stroke-width="2"/>
                   <circle cx="11.4383" cy="115.607" r="9.52846" transform="rotate(180 11.4383 115.607)" fill="white" stroke="black" stroke-width="2"/>
                   <path d="M9.05111 125.658L8.30664 124.913L20.2182 113.002L20.9627 113.746L9.05111 125.658Z" fill="black"/>
                   <path d="M4.58427 122.68L3.8398 121.935L17.2403 108.535L17.9848 109.279L4.58427 122.68Z" fill="black"/>
                   <path d="M1.60637 118.213L0.861898 117.468L12.7735 105.557L13.518 106.301L1.60637 118.213Z" fill="black"/>
                   <rect x="41.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 41.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                 </svg>
                 <svg v-if="TypeOfHook.ico === 8 " width="223" height="127" viewBox="0 0 223 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M40.0133 114.573C39.7238 120.38 44.197 125.323 50.0045 125.612C55.812 125.902 60.7546 121.429 61.0441 115.621L62.7659 81.081C63.5374 77.4844 65.9796 73.0084 71.4732 73.0001L156.988 73.0001C162.787 73.0001 167.488 68.299 167.488 62.5001C167.488 56.7011 162.787 52.0001 156.988 52.0001L59.9881 52.0001C55.8139 52.0001 52.2086 54.4358 50.516 57.9635C46.0331 58.9868 42.5898 62.8867 42.3496 67.7052L40.0133 114.573Z" fill="black"/>
                   <path d="M143.5 72.0001C138.253 72.0001 134 67.7468 134 62.5001C134 57.2534 138.253 53.0001 143.5 53.0001L212.5 53.0001C217.747 53.0001 222 57.2534 222 62.5001C222 67.7468 217.747 72.0001 212.5 72.0001L143.5 72.0001Z" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="60.5952" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 60.5952 123.293)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="1.04855" y="-0.948973" width="19.0569" height="121.931" rx="9.52846" transform="matrix(0.99876 0.0497869 0.0497869 -0.99876 0.0485468 123.229)" fill="black" stroke="black" stroke-width="2"/>
                   <circle cx="11.4403" cy="115.607" r="9.52846" transform="rotate(180 11.4403 115.607)" fill="white" stroke="black" stroke-width="2"/>
                   <path d="M9.05307 125.658L8.30859 124.913L20.2202 113.002L20.9647 113.746L9.05307 125.658Z" fill="black"/>
                   <path d="M4.58622 122.68L3.84175 121.935L17.2423 108.535L17.9868 109.279L4.58622 122.68Z" fill="black"/>
                   <path d="M1.60833 118.213L0.863851 117.468L12.7754 105.557L13.5199 106.301L1.60833 118.213Z" fill="black"/>
                   <rect x="41.5952" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 41.5952 123.293)" fill="white" stroke="black" stroke-width="2"/>
                 </svg>
                 <svg v-if="TypeOfHook.ico === 9 " width="257" height="127" viewBox="0 0 257 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M78.4506 113.772L78.4507 113.774C79.1355 118.991 75.4608 123.776 70.2432 124.461C65.0255 125.146 60.2406 121.471 59.5558 116.253L54.0823 74.1675L54.0822 74.1664C53.9841 73.4188 53.9754 72.6814 54.0475 71.9645L54.0551 71.8889L54.0512 71.813C53.8954 68.7912 54.2784 65.7611 55.187 62.8655C56.2656 59.4283 58.0602 56.2585 60.4526 53.5652C62.8451 50.8718 65.7811 48.716 69.0672 47.2396C72.2069 45.829 75.5983 45.0693 79.0364 45.0045L79.2697 45.0001L79.432 45.0001L79.4352 45.0001L79.5173 45.0001L245.518 45.0001C250.764 45.0001 255.018 49.2534 255.018 54.5001C255.018 59.7468 250.764 64.0001 245.518 64.0001L79.0178 64.0001C79.0177 64.0001 79.0176 64.0001 79.0176 64.0001C78.6028 64.0001 78.0755 64.1326 77.7241 64.2321C77.3559 64.3363 76.984 64.4628 76.8351 64.5297C75.9916 64.9086 75.238 65.462 74.6239 66.1533C74.0099 66.8446 73.5492 67.6582 73.2724 68.5404C73.0261 69.3253 72.9383 70.7029 72.9691 71.5903L72.9707 71.6376L72.9768 71.6846L78.4506 113.772Z" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="60.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 60.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="1.04855" y="-0.948973" width="19.0569" height="121.931" rx="9.52846" transform="matrix(0.99876 0.0497869 0.0497869 -0.99876 0.0465937 123.229)" fill="black" stroke="black" stroke-width="2"/>
                   <circle cx="11.4383" cy="115.607" r="9.52846" transform="rotate(180 11.4383 115.607)" fill="white" stroke="black" stroke-width="2"/>
                   <path d="M9.05111 125.658L8.30664 124.913L20.2182 113.002L20.9627 113.746L9.05111 125.658Z" fill="black"/>
                   <path d="M4.58427 122.68L3.8398 121.935L17.2403 108.535L17.9848 109.279L4.58427 122.68Z" fill="black"/>
                   <path d="M1.60637 118.213L0.861898 117.468L12.7735 105.557L13.518 106.301L1.60637 118.213Z" fill="black"/>
                   <rect x="41.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 41.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                 </svg>
                 <svg v-if="TypeOfHook.ico === 10 "  width="138" height="127" viewBox="0 0 138 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M73.9691 79.5903L73.9707 79.6382L73.977 79.6858L78.4507 113.774C79.1355 118.991 75.4608 123.776 70.2432 124.461C65.0255 125.146 60.2406 121.471 59.5558 116.253L55.0822 82.1664C54.9841 81.4188 54.9754 80.6814 55.0475 79.9645L55.0551 79.8889L55.0512 79.813C54.8954 76.7912 55.2784 73.7611 56.187 70.8655C57.2656 67.4283 59.0602 64.2585 61.4526 61.5652C63.8451 58.8718 66.7811 56.716 70.0672 55.2396C73.2069 53.829 76.5983 53.0693 80.0364 53.0045L80.2697 53.0001L80.432 53.0001L80.4352 53.0001L80.5173 53.0001L126.518 53.0001C131.764 53.0001 136.018 57.2534 136.018 62.5001C136.018 67.7468 131.764 72.0001 126.518 72.0001L80.0178 72.0001C80.0177 72.0001 80.0176 72.0001 80.0176 72.0001C79.6028 72.0001 79.0755 72.1326 78.7241 72.2321C78.3559 72.3363 77.984 72.4628 77.8351 72.5297C76.9916 72.9086 76.238 73.462 75.6239 74.1533C75.0099 74.8446 74.5492 75.6582 74.2724 76.5404C74.0261 77.3253 73.9383 78.7029 73.9691 79.5903Z" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="60.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 60.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="1.04855" y="-0.948973" width="19.0569" height="121.931" rx="9.52846" transform="matrix(0.99876 0.0497869 0.0497869 -0.99876 0.0465937 123.229)" fill="black" stroke="black" stroke-width="2"/>
                   <circle cx="11.4383" cy="115.607" r="9.52846" transform="rotate(180 11.4383 115.607)" fill="white" stroke="black" stroke-width="2"/>
                   <path d="M9.05111 125.658L8.30664 124.913L20.2182 113.002L20.9627 113.746L9.05111 125.658Z" fill="black"/>
                   <path d="M4.58427 122.68L3.8398 121.935L17.2403 108.535L17.9848 109.279L4.58427 122.68Z" fill="black"/>
                   <path d="M1.60637 118.213L0.861898 117.468L12.7735 105.557L13.518 106.301L1.60637 118.213Z" fill="black"/>
                   <rect x="41.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 41.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                 </svg>
                 <svg v-if="TypeOfHook.ico === 11 "  width="138" height="127" viewBox="0 0 138 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M73.9691 79.5903L73.9707 79.6382L73.977 79.6858L78.4507 113.774C79.1355 118.991 75.4608 123.776 70.2432 124.461C65.0255 125.146 60.2406 121.471 59.5558 116.253L55.0822 82.1664C54.9841 81.4188 54.9754 80.6814 55.0475 79.9645L55.0551 79.8889L55.0512 79.813C54.8954 76.7912 55.2784 73.7611 56.187 70.8655C57.2656 67.4283 59.0602 64.2585 61.4526 61.5652C63.8451 58.8718 66.7811 56.716 70.0672 55.2396C73.2069 53.829 76.5983 53.0693 80.0364 53.0045L80.2697 53.0001L80.432 53.0001L80.4352 53.0001L80.5173 53.0001L126.518 53.0001C131.764 53.0001 136.018 57.2534 136.018 62.5001C136.018 67.7468 131.764 72.0001 126.518 72.0001L80.0178 72.0001C80.0177 72.0001 80.0176 72.0001 80.0176 72.0001C79.6028 72.0001 79.0755 72.1326 78.7241 72.2321C78.3559 72.3363 77.984 72.4628 77.8351 72.5297C76.9916 72.9086 76.238 73.462 75.6239 74.1533C75.0099 74.8446 74.5492 75.6582 74.2724 76.5404C74.0261 77.3253 73.9383 78.7029 73.9691 79.5903Z" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="60.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 60.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                   <rect x="1.04855" y="-0.948973" width="19.0569" height="121.931" rx="9.52846" transform="matrix(0.99876 0.0497869 0.0497869 -0.99876 0.0465937 123.229)" fill="black" stroke="black" stroke-width="2"/>
                   <circle cx="11.4383" cy="115.607" r="9.52846" transform="rotate(180 11.4383 115.607)" fill="white" stroke="black" stroke-width="2"/>
                   <path d="M9.05111 125.658L8.30664 124.913L20.2182 113.002L20.9627 113.746L9.05111 125.658Z" fill="black"/>
                   <path d="M4.58427 122.68L3.8398 121.935L17.2403 108.535L17.9848 109.279L4.58427 122.68Z" fill="black"/>
                   <path d="M1.60637 118.213L0.861898 117.468L12.7735 105.557L13.518 106.301L1.60637 118.213Z" fill="black"/>
                   <rect x="41.5933" y="123.293" width="19.0569" height="123.289" rx="9.52846" transform="rotate(172.266 41.5933 123.293)" fill="white" stroke="black" stroke-width="2"/>
                 </svg>
                 <span class="whitespace-normal">{{ TypeOfHook.title }}</span>
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
         <smart-input inputLabel="Диаметр проволоки (прутка) d" :req="true" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="WireDiameter" />
         <smart-input inputLabel="Наружний диаметр мм:" :req="true" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="OuterDiameter" />
         <smart-input inputLabel="Длина пружины по телу (без зацепов) Lo:" :req="true" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="SpringBodyLength" :error="Errors.SpringBodyLength" />
         <smart-input inputLabel="Длина по зацепам" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="SpringFullLength" :error="Errors.SpringFullLength" />
         <smart-input inputLabel="Предварительное растяжение s1:" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="PreTension" :isEmpty="true"/>
         <smart-input inputLabel="Рабочее растяжение s2:" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="WorkingTension" :isEmpty="true" />
         <smart-input inputLabel="Максимальное растяжение s3:" custom-placeholder="Введите значение"
         btn-type="number" :custom-step="InputStep" v-model:inputValue="MaxTension" :error="Errors.MaxTension" :isEmpty="true"/>
         <smart-input inputLabel="Количество шт.:" :req="true" custom-placeholder="Введите значение"
                      btn-type="number" :custom-step="InputStep" v-model:inputValue="Quantity" />
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
       </div>
      <div class="flex flex-wrap justify-between w-full items-center">
        <div class="grid grid-cols-1 sm:grid-cols-3 justify-items-center sm:justify-items-start gap-3 w-full sm:w-fit mb-4">
          <transition name="left-slide">
          <button v-if="CheckErrors.length === 0" class="calc-btn calc-btn__yellow cursor-pointer" @click="ShowModal = true; FormType = 'tension'">Заказать</button>
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
        <div class="scheme-spring px-3 xl:px-20 mb-5">
          <SchemeTensionDefault v-if="SelectedTypeOfHook === TypeOfHook[0]" :SchemeData="SchemeData"/>
          <SchemeTensionCenteredFullLoop v-if="SelectedTypeOfHook === TypeOfHook[5]" :SchemeData="SchemeData"/>
          <SchemeTensionCenteredHalfLoop  v-if="SelectedTypeOfHook === TypeOfHook[1]" :SchemeData="SchemeData"/>
          <SchemeTensionTangent v-if="SelectedTypeOfHook === TypeOfHook[6]" :SchemeData="SchemeData" />
          <SchemeTensionExtendedHook v-if="SelectedTypeOfHook === TypeOfHook[4]" :SchemeData="SchemeData"/>
          <SchemeTensionCenteredFullLoopZeroDeg v-if="SelectedTypeOfHook === TypeOfHook[5]" :SchemeData="SchemeData"/>
          <SchemeTensionCenteredFullLoopRazvertDeg v-if="SelectedTypeOfHook === TypeOfHook[6]" :SchemeData="SchemeData"/>
          <SchemeTensionExtendedHookRightDeg v-if="SelectedTypeOfHook === TypeOfHook[7]" :SchemeData="SchemeData"/>
          <SchemeTensionExtendedHookRazvertDeg v-if="SelectedTypeOfHook === TypeOfHook[8]" :SchemeData="SchemeData"/>
          <SchemeTensionCenteredHalfLoopRazvertDeg v-if="SelectedTypeOfHook === TypeOfHook[9]" :SchemeData="SchemeData"/>
          <SchemeTensionCenteredHalfLoopZeroDeg v-if="SelectedTypeOfHook === TypeOfHook[10]" :SchemeData="SchemeData"/>
        </div>
        <div ref="test" class="">
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
  </div>
</template>

<script>
import SmartInput from '@/components/smart-input'
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
import SchemeTensionCenteredFullLoop from '@/components/SchemeTensionCentredFullLoop'
import SchemeTensionCenteredHalfLoop from '@/components/SchemeTensionCentredHalfLoop'
import SchemeTensionTangent from '@/components/SchemeTensionTangent'
import SchemeTensionExtendedHook from '@/components/SchemeTensionExtendedHook'
import SchemeTensionDefault from '@/components/SchemeTensionDefault'
import SchemeTensionCenteredFullLoopZeroDeg from '@/components/SchemeTensionCentredFullLoopZeroDeg.vue'
import SchemeTensionCenteredFullLoopRazvertDeg from '@/components/SchemeTensionCenteredFullLoopRazvertDeg'
import SchemeTensionExtendedHookRightDeg from '@/components/SchemeTensionExtendedHookRightDeg'
import SchemeTensionExtendedHookRazvertDeg from '@/components/SchemeTensionExtendedHookRazvertDeg'
import SchemeTensionCenteredHalfLoopRazvertDeg from '@/components/SchemeTensionCenteredHalfLoopRazvertDeg'
import SchemeTensionCenteredHalfLoopZeroDeg from '@/components/SchemeTensionCenteredHalfLoopZeroDeg'

export default {
  name: 'SpringTension',
  components: {
    SchemeTensionCenteredHalfLoopZeroDeg,
    SchemeTensionCenteredHalfLoopRazvertDeg,
    SchemeTensionExtendedHookRazvertDeg,
    SchemeTensionExtendedHookRightDeg,
    SchemeTensionCenteredFullLoopZeroDeg,
    SchemeTensionDefault,
    SchemeTensionExtendedHook,
    SchemeTensionTangent,
    SchemeTensionCenteredHalfLoop,
    SchemeTensionCenteredFullLoop,
    SchemeTensionCenteredFullLoopRazvertDeg,
    TotalTable,
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
      TypeOfHook: [
        { title: '1. Без зацепа', ico: 1 },
        { title: '2. Из полного витка выведенный на центр 0 градусов', ico: 6 },
        { title: '3. Из полного витка выведенный на центр 90 градусов', ico: 2 },
        { title: '4. Из полного витка выведенный на центр 180 градусов', ico: 7 },
        { title: '5. Вытянутый зацеп (крючкового типа) 0 градусов', ico: 5 },
        { title: '6. Вытянутый зацеп (крючкового типа) 90 градусов', ico: 8 },
        { title: '7. Вытянутый зацеп (крючкового типа) 180 градусов', ico: 9 },
        { title: '8. Из половины витка выведенный на центр 0 градусов', ico: 11 },
        { title: '9. Из половины витка выведенный на центр 90 градусов', ico: 3 },
        { title: '10. Из половины витка выведенный на центр 180 градусов', ico: 10 },
        { title: '11. Из полного витка по касательной (под 90°)', ico: 4 }
      ],
      WireDiameter: 0,
      OuterDiameter: 0,
      SpringBodyLength: 0,
      SpringFullLength: '',
      PreTension: '',
      WorkingTension: '',
      MaxTension: '',
      WindingDirection: 1,
      Covering: [
        'Без покрытия',
        'Гальваническое радужное',
        'Цинк',
        'Порошковое'
      ],
      SelectedCovering: null,
      SelectedTypeOfHook: null,
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
      FormType: 'tension',
      doc: null
    }
  },
  methods: {
    ToPrint () {
      this.$htmlToPaper('scheme-print', { specs: ['fullscreen=yes', 'titlebar=no', 'scrollbars=no'] })
    },
    async SendForm () {
      if (this.FormType === 'tension') {
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
            send.append('SpringBodyLength', parseFloat(this.SpringBodyLength).toFixed(2))
            send.append('SpringFullLength', parseFloat(this.SpringFullLength).toFixed(2))
            send.append('LengthOfTheDeployedSpring', parseFloat(this.LengthOfTheDeployedSpring).toFixed(2))
            send.append('LengthAtMaxTension', parseFloat(this.LengthAtMaxTension).toFixed(2))
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
            send.append('LengthAtPreTension', parseFloat(this.LengthAtPreTension).toFixed(2))
            send.append('LengthAtWorkingTension', parseFloat(this.LengthAtWorkingTension).toFixed(2))
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
              console.log(response.data)
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
      const pdf = await ConvertToPDF(this.$el.querySelector('.scheme-svg'), this.$el.querySelector('.scheme-spring'), this.watermark, this.ForTotal, this.SpringName)
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
      this.SpringBodyLength = 0
      this.PreTension = 0
      this.MaxTension = 0
      this.SpringFullLength = 0
      this.WorkingTension = 0
      this.WindingDirection = 1
      this.SelectedCovering = this.Covering[0]
      this.SelectedTypeOfHook = this.TypeOfHook[0]
      this.SelectedMaterial = this.Material[0]
      this.Quantity = 100
    }
  },
  computed: {
    SpringIndex: function () {
      return (parseFloat(this.OuterDiameter) - parseFloat(this.WireDiameter)) / parseFloat(this.WireDiameter)
    },
    SpringStiffness: function () {
      return (78500 * parseFloat(this.WireDiameter) / 8 / Math.pow(this.SpringIndex, 3)) / parseFloat(this.TotalNumberOfCoils)
    },
    LengthOfTheDeployedSpring: function () {
      return 3.14 * (parseFloat(this.OuterDiameter) - parseFloat(this.WireDiameter)) * (parseFloat(this.SpringBodyLength) / parseFloat(this.WireDiameter) + 2)
    },
    LengthAtPreTension: function () {
      return (parseFloat(this.SpringFullLength) + parseFloat(this.PreTension))
    },
    LengthAtWorkingTension: function () {
      return (parseFloat(this.SpringFullLength) + parseFloat(this.WorkingTension))
    },
    LengthAtMaxTension: function () {
      return parseFloat(this.SpringFullLength) + parseFloat(this.MaxTension)
    },
    ForceAtPreDeformation: function () {
      return this.SpringStiffness * parseFloat(this.LengthAtPreTension) - parseFloat(this.SpringFullLength) * parseFloat(this.SpringStiffness)
    },
    ForceAtWorkingDeformation: function () {
      return this.SpringStiffness * parseFloat(this.LengthAtWorkingTension) - this.SpringStiffness * parseFloat(this.SpringFullLength)
    },
    ForceAtMaxDeformations: function () {
      return this.SpringStiffness * this.LengthAtMaxTension - this.SpringStiffness * parseFloat(this.SpringFullLength)
    },
    WorkNumberOfCoils: function () {
      return parseFloat(this.SpringBodyLength) / parseFloat(this.WireDiameter) - 1
    },
    TotalNumberOfCoils: function () {
      return parseFloat(this.SpringBodyLength) / parseFloat(this.WireDiameter) + 1
    },
    Step: function () {
      return (parseFloat(this.SpringBodyLength) - (1.5 * parseFloat(this.WireDiameter))) / parseFloat(this.WorkNumberOfCoils)
    },
    SpringMass: function () {
      return ((Math.pow(parseFloat(this.WireDiameter), 2) * 3.14 * this.LengthOfTheDeployedSpring) / 4000 * 7.85) / 1000
    },
    SpringBatchWeight: function () {
      return parseFloat(this.Quantity) * this.SpringMass
    },
    InnerDiameter: function () {
      return (parseFloat(this.OuterDiameter) - parseFloat(this.WireDiameter)) - parseFloat(this.WireDiameter)
    },
    Errors: function () {
      return {
        WireDiameter: !isNaN(this.WireDiameter),
        OuterDiameter: !isNaN(this.OuterDiameter),
        SpringBodyLength: this.ForceAtWorkingDeformation < 0 || this.ForceAtPreDeformation < 0,
        WorkNumberOfCoils: !isNaN(this.WorkNumberOfCoils),
        TotalNumberOfCoils: !isNaN(this.TotalNumberOfCoils),
        LengthAtPreTension: this.ForceAtPreDeformation < 0,
        LengthAtWorkingTension: this.ForceAtWorkingDeformation < 0,
        WindingDirection: false,
        SelectedCovering: false,
        SelectedTypeOfHook: false,
        SelectedMaterial: false,
        Quantity: !isNaN(this.Quantity),
        Phone: true
      }
    },
    SchemeData: function () {
      return {
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
        LengthOfTheDeployedSpring: {
          name: 'Длина развернутой пружины Lразв',
          value: parseFloat(this.LengthOfTheDeployedSpring).toFixed(2),
          measure: 'мм',
          total: true
        },
        LengthAtPreTension: {
          name: 'Длина при предварительном растяжении L1',
          value: this.PreTension.length === 0 ? '' : parseFloat(this.LengthAtPreTension).toFixed(2),
          measure: '',
          total: this.PreTension > 0
        },
        LengthAtWorkingTension: {
          name: 'Длина при рабочем растяжении L2',
          value: this.WorkingTension.length === 0 ? '' : parseFloat(this.LengthAtWorkingTension).toFixed(2),
          measure: '',
          total: this.WorkingTension > 0
        },
        LengthAtMaxTension: {
          name: 'Длина при максимальном растяжении (L³)',
          value: this.MaxTension.length === 0 ? '' : parseFloat(this.LengthAtMaxTension).toFixed(2),
          measure: '',
          total: this.MaxTension > 0
        },
        ForceAtPreDeformation: {
          name: 'Сила при предварительной деформ. F1',
          value: isNaN(this.ForceAtPreDeformation) ? '' : parseFloat(this.ForceAtPreDeformation).toFixed(2),
          measure: 'Н',
          total: this.LengthAtPreTension > 0
        },
        ForceAtWorkingDeformation: {
          name: 'Сила при рабочей деформ. F2',
          value: isNaN(this.ForceAtWorkingDeformation) ? '' : parseFloat(this.ForceAtWorkingDeformation).toFixed(2),
          measure: 'Н',
          total: this.LengthAtWorkingTension > 0
        },
        ForceAtMaxDeformations: {
          name: 'Сила при макс. деформации F3',
          value: isNaN(this.ForceAtMaxDeformations) ? '' : parseFloat(this.ForceAtMaxDeformations).toFixed(2),
          measure: 'Н',
          total: this.LengthAtMaxTension > 0
        },
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
        SpringBodyLength: {
          name: 'Длина пружины по телу (без зацепов) L0',
          value: parseFloat(this.SpringBodyLength).toFixed(2),
          measure: 'мм',
          total: false
        },
        SpringFullLength: {
          name: 'Длина по зацепам',
          value: this.SpringFullLength.length === 0 ? '' : parseFloat(this.SpringFullLength).toFixed(2),
          measure: 'мм',
          total: false
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
          total: false
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
        WireDiameter: {
          name: 'Диаметр проволоки (прутка)',
          value: parseFloat(this.WireDiameter).toFixed(2),
          measure: 'мм',
          total: false
        },
        PreTension: {
          name: 'Предварительное растяжение s1:',
          value: this.PreTension.length === 0 ? '' : parseFloat(this.PreTension).toFixed(2),
          measure: false,
          total: false
        },
        SprQuantity: {
          name: 'Количетсво',
          value: this.Quantity,
          measure: 'шт',
          total: true
        },
        WritableDat: {
          name: 'Дата',
          value: '',
          measure: false,
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
    this.SelectedTypeOfHook = this.TypeOfHook[0]
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
