<template>
  <div>  
   <Wrapper>
      <table class="table is-fullwidth">
         <thead>
            <tr>
               <th>Stat</th>
               <th>Value</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Number of notes</td>
               <td>{{ noteStore.totalNoteCount }}</td>
            </tr>
            <tr>
               <td>Number of characters (of all notes)</td>
               <td>{{ noteStore.totalCharacterCount }}</td>
            </tr>
         </tbody>
      </table>
      <input 
         class="input"
         type="text"
         v-model="loveBoteBalls"
         placeholder="do you love noteballs"
         maxlength="100"
         v-autofocus
      >
   </Wrapper>
  </div>
</template>

<script setup>
/**
 * imports
 * */ 
import { ref } from 'vue'
import Wrapper from '../components/Layouts/Wrapper.vue'
import { useStoreNotes } from '../stores/notes'
import { vAutofocus } from '../directives/vAutofocus'
import { useWatchCharacter } from '../use/useWatchCharacter'


const loveBoteBalls = ref('')

/**
* store
* */


const noteStore = useStoreNotes()

useWatchCharacter(loveBoteBalls)

</script>