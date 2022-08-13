<template>
<h1 class="is-size-4 is-family-monospace py-2 pb-2">Notes</h1>
<div 
  v-for="note in notes"
  :key="note.id"
  class="card mb-4"
>
   <div class="card-content">
      <div class="content">
           {{note.note}}
         <div class="ha-text-right has-text-grey-light mt-2">
           <small>{{ characterCount(note.note) }} Character(s)</small>
         </div>
      </div>
   </div>
   <footer class="card-footer">
      <RouterLink 
         :to="{ name:'editName' , params:{ id: note.id } }" 
         class="card-footer-item"
      >
         Edit
      </RouterLink>
      <a
         @click.prevent="deleteSingleNote(note.id)"
         href="#" 
         class="card-footer-item"
      >
         Delete
      </a>
   </footer>
</div>
</template>

<script setup>
   /*
    imports
   */ 
   import { computed } from 'vue'
   import { useStoreNotes } from '../stores/notes'
   import { characterCount } from '.././helpers/utils'

   /*
   props
   */
   const props = defineProps({
      notes:{
        type: Array,
        required: true,
      },
      modelValue: {
         type: Boolean,
      } 
   })

   const emit = defineEmits()


   /*
     store
   */ 
   const storeNote = useStoreNotes();  
 
   /*
    computed property
   */ 

   const characterLenght = computed(() => {
      //return props
   })  
   
   const deleteSingleNote = (id) => {
      emit('delete-note' , id )
      emit('update:modelValue' , true)
   }
   
</script>