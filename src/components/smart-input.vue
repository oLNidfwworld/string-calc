<template>
  <div class="spring-calc__input__wrapper">
    <label class="inputs-label" @click="test">{{ inputLabel }}</label>
    <div class="spring-calc__input" :class="{'spring-calc__input__error': error}">
      <input class="bg-transparent h-fit w-full px-3 py-2" :placeholder="customPlaceholder" type="number" min="0" :step="customStep"
      v-model="CustomVal" @keypress="isNumber($event)" @input="$emit('update:inputValue', $event.target.value)">
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
import { ref, watch } from 'vue'

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
    isEmpty: Boolean
  },
  emits: ['update:inputValue'],
  setup (props, { emit }) {
    console.log(props)
    const CustomLabel = ref(props.inputLabel)
    const InputStep = ref(props.customStep)
    const isEmpty = ref(props.isEmpty)
    const CustomVal = ref(parseFloat(props.inputValue))
    const IncreaseValue = () => {
      if (!isNaN(CustomVal.value)) {
        CustomVal.value = parseFloat(CustomVal.value) + InputStep.value
      } else {
        CustomVal.value = 0 + InputStep.value
      }
      emit('update:inputValue', CustomVal.value)
    }
    const DecreaseValue = () => {
      if (!isNaN(CustomVal.value)) {
        if (CustomVal.value - InputStep.value <= 0) {
          CustomVal.value = 0
        } else {
          CustomVal.value = parseFloat(CustomVal.value) - InputStep.value
        }
      } else {
        CustomVal.value = 0
      }
      emit('update:inputValue', CustomVal.value)
    }
    const isNumber = (e) => {
      console.log(e)
      const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',']
      const keyPressed = e.key

      if (!keysAllowed.includes(keyPressed)) {
        e.preventDefault()
      }
    }
    const test = () => {
      console.log(props)
    }
    watch(() => props.inputValue, (cur, prev) => {
      console.log(cur, prev)
      CustomVal.value = cur
      if (!isEmpty.value) {
        if (cur < 0 || cur === '') {
          CustomVal.value = 0
        }
      }
      emit('update:inputValue', CustomVal.value)
    })
    return {
      CustomVal,
      CustomLabel,
      IncreaseValue,
      DecreaseValue,
      isNumber,
      test
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
