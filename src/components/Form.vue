<template>
<DarkWrapper>
<div class="field is-horizontal">
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea 
            v-model.trim="newNote"
            ref="addNewNote"
            class="textarea" 
            placeholder="Add a new note..."
            max-length="100"
            v-autofocus
         />
      </div>
    </div>
  </div>
</div>

<div class="field is-grouped is-grouped-right ">
  <p class="control">
    <button 
      @click="addNote"
      :disabled="!newNote"
      class="button is-primary has-backgroung-success">
         Add New Note
    </button>
  </p>
</div>
</DarkWrapper>
</template>

<script setup>
   /*
    imports
    */ 
    import {onMounted, ref} from 'vue'
    import DarkWrapper from "../components/Layouts/DarkWrapper.vue"
    import { useStoreNotes } from '../stores/notes'
    import { vAutofocus } from '../directives/vAutofocus'
    import { useWatchCharacter } from '../use/useWatchCharacter'

    /*
     data
    */  
    const newNote = ref('')
    const addNewNote = ref(null)

    /*
     store
    */ 
    const storeNote = useStoreNotes();

    /*
     methods
    */

    const addNote = () => {
      storeNote.addNote(newNote.value);
      newNote.value = ''
      addNewNote.value.focus()
    } 

    /**
     * composables
     * */ 
    useWatchCharacter(newNote)

</script>