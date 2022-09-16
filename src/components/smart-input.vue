<template>
  <div class="spring-calc__input__wrapper">
    <label class="inputs-label">{{ inputLabel }} <span v-if="req === true" class="calc-req">*</span></label>
    <div class="spring-calc__input" :class="{'spring-calc__input__error': error}">
      <input class="bg-transparent h-fit w-full px-3 py-2"
             :placeholder="customPlaceholder"
             type="number"
             min="0"
             :step="customStep"
             @keypress="isNumber($event)"
             :value="inputValue"
             @input="UpdateInput"
             @change="UpdateInput"
      >
      <div class="spring-calc__input__arrows-wrapper">
        <button class="spring-calc__input__arrow" @click="IncreaseValue()">
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 -4.80825e-07L10.2631 8.25L0.736861 8.25L5.5 -4.80825e-07Z" fill="#1D1F23"/>
          </svg>
        </button>
        <button class="spring-calc__input__arrow" @click="DecreaseValue()">
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 9L0.73686 0.750001L10.2631 0.75L5.5 9Z" fill="#1D1F23"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'smart-input',
  props: {
    error: Boolean,
    disable: Boolean,
    type: String,
    btnType: String,
    customPlaceholder: String,
    customStep: Number,
    inputValue: [Number, String],
    inputLabel: String,
    isEmpty: Boolean,
    req: Boolean
  },
  emits: ['update:inputValue'],
  setup (props, { emit }) {
    const CustomLabel = ref(props.inputLabel)
    const InputStep = ref(props.customStep)
    const isEmpty = ref(props.isEmpty)
    const CustomVal = ref(props.inputValue)
    const IncreaseValue = () => {
      if (!isNaN(CustomVal.value)) {
        CustomVal.value = parseFloat(props.inputValue) + InputStep.value
      } else {
        CustomVal.value = 0 + InputStep.value
      }
      emit('update:inputValue', CustomVal.value)
    }
    const DecreaseValue = () => {
      if (!isNaN(props.inputValue)) {
        if (props.inputValue - InputStep.value <= 0) {
          CustomVal.value = 0
        } else {
          CustomVal.value = parseFloat(props.inputValue) - InputStep.value
        }
      } else {
        CustomVal.value = 0
      }
      emit('update:inputValue', CustomVal.value)
    }
    const isNumber = (e) => {
      const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',']
      const keyPressed = e.key

      if (!keysAllowed.includes(keyPressed)) {
        e.preventDefault()
      }
    }
    const UpdateInput = (e) => {
      CustomVal.value = parseFloat(e.target.value.toString().replace(/^0[0+]/, ''))
      if (!isEmpty.value) {
        if (CustomVal.value < 0 || CustomVal.value === '' || CustomVal.value.length < 1 || isNaN(CustomVal.value)) {
          CustomVal.value = 0
        }
      } else {
        if (isNaN(CustomVal.value)) {
          CustomVal.value = ''
        }
      }
      emit('update:inputValue', CustomVal.value)
    }
    return {
      CustomVal,
      CustomLabel,
      IncreaseValue,
      DecreaseValue,
      isNumber,
      UpdateInput
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.spring-calc {
  &__input {
    @apply flex rounded w-full items-center font-semibold;
    border: 1px solid #E5E5E5;
    background: #F8F8F8;
    color: #5C5C5C;
    &__error{
      border: 1px solid crimson;
    }
    &__wrapper{
      @apply flex flex-col w-full items-start justify-between;
    }
    &__arrow{
      @apply rounded;
      padding: 6px 12px;
      background: #E5E5E5;
    }
    &__arrows-wrapper{
      @apply grid grid-cols-1;
      gap: 1px;
    }
  }
}
</style>
