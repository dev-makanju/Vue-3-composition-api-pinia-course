<template>
   <div class="container is-max-desktop px-2 py-4">
       <AddEditNote
         v-model="newNote"
         ref="addNewNote"
         :label="'Edit Note'"
       > 
         <template #buttons>
            <RouterLink to="/" 
               class="button is-link is-light mr-2">
                  Cancel
            </RouterLink>
            <button 
               @click="addNote"
               :disabled="!newNote"
               class="button is-primary has-backgroung-success">
                  Edit Notes
            </button>
         </template>
       </AddEditNote>
   </div>
</template>
<script setup>
/*
imports
*/
   import { ref } from 'vue'
   import { useRoute } from 'vue-router'
   import AddEditNote from '@/components/Notes/AddEditNote.vue' 
   import DarkWrapper from "../components/Layouts/DarkWrapper.vue"
   import { useStoreNotes } from '../stores/notes.js'

   /*
     data
   */  

   const route = useRoute();


   const newNote = ref('')
   const addNewNote = ref(null)

   /*
     store
   */

   const storeNote = useStoreNotes();
   
   const editText = storeNote.getSingleNoteById(route.params.id)
   newNote.value = editText
   /*
     methods
   */
   const addNote = () => {
      storeNote.addNote(newNote.value);
      newNote.value = ''
      addNewNote.value.focusTextArea()
   }

</script>