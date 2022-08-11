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
   </Wrapper>
  </div>
</template>

<script setup>
/**
 * imports
 * */ 
import Wrapper from '../components/Layouts/Wrapper.vue'
import {useStoreNotes} from '../stores/notes'


/**
 * store
 * */ 
const noteStore = useStoreNotes()


</script>