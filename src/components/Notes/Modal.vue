<template>
<div class="modal is-active">
   <div class="modal-background"></div>
      <div class="modal-card">
         <header class="modal-card-head">
            <p class="modal-card-title">Are You Sure ?</p>
            <button class="delete" aria-label="close"></button>
         </header>
         <section class="modal-card-body">
            Do you really want to delete ?
         </section>
         <footer class="modal-card-foot is-justify-content-flex-end">
            <button
               @click="disableDelete" 
               class="button"
            >
               Cancel
            </button>
            <button 
               @click="deleteNote"
               class="button is-danger" 
            >
               Delete
            </button>
         </footer>
     </div>
</div>
</template>
<script setup>

import { useStoreNotes } from '../../stores/notes'

const storeNote = useStoreNotes();

const props = defineProps({
   modelValue: {
      type: String, 
   },
   id: {
      type: Number,
   }

})

const emit = defineEmits()


const disableDelete = () => {
   emit('update:modelValue' , false)
}

const deleteNote = () => {
   storeNote.deleteNote(props.id)
   emit('update:modelValue' , false)
}

</script>
