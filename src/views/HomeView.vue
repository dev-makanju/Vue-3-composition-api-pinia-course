<template>
  <div>
    <Modal 
      v-if="modal.deleteNote"
      v-model="modal.deleteNote"
      @delete-note="deleteNote"
      :id="idToDelete"
    />  
    <Wrapper>
        <Form />
        <Cards 
          :notes="storeNotes.notes"
          v-model="modal.deleteNote"
          @delete-note="setIdToDelete"
        />
    </Wrapper>
  </div>
</template>
<script setup>
  /*
    imports
  */ 
  import {reactive , ref } from 'vue'
  import {useStoreNotes} from '../stores/notes'
  import Wrapper from '../components/Layouts/Wrapper.vue'
  import Cards from '../components/Cards.vue'
  import Form from '../components/Form.vue'
  import Modal from '../components/Notes/Modal.vue'


  /*
   store
  */ 
  
  const idToDelete = ref()

  const modal = reactive({
    deleteNote: false
  })
  
  const storeNotes = useStoreNotes();
  
  const setIdToDelete = (id) => {
    idToDelete.value = id
  }
</script>