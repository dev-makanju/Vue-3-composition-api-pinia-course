<template>
<DarkWrapper>
   <div class="field is-horizontal">
      <div class="field-body">
         <div class="field">
            <div class="control">
               <label
                 v-if="label" 
                  class="label has-text-white">{{label}}</label>
               <textarea 
                  v-model="modelValue"
                  ref="textAreaRef"
                  @input="$emit('update:modelValue' , modelValue )"
                  class="textarea" 
                  :placeholder="placeholder"
               />
            </div>
         </div>
      </div>
      </div>
      <div class="field is-grouped is-grouped-right ">
      <p class="control">
         <slot name="buttons"/>
      </p>
   </div>
</DarkWrapper>
</template>

<script setup>
   import DarkWrapper from "@/components/Layouts/DarkWrapper.vue"
    import {ref} from 'vue' 

   const props = defineProps({
      modelValue: {
         type: String,
         required: true,
      },
      placeholder: {
         type: String,
         default: 'Enter a test'
      },
      label: {
         type: String,
      }
   })

   const textAreaRef = ref(null)

   /*
    focus 
   */ 
  //   we have to expose any method we want to access from parent component
  const focusTextArea = () => {
     textAreaRef.value.focus()
  }
  
  defineExpose({
     focusTextArea
  })
  
</script>

