<template>
  <div>  
    <Wrapper>
        <Form />
        <Cards 
          :notes="storeNotes.notes"
        />
    </Wrapper>
  </div>
</template>
<script setup>
  /*
    imports
  */ 
  import {ref} from 'vue'
  import {useStoreNotes} from '../stores/notes'
  import Wrapper from '../components/Layouts/Wrapper.vue'
  import Cards from '../components/Cards.vue'
  import Form from '../components/Form.vue'


  /*
     data
  */ 

  // const notes = ref([
  //   {
  //     id:'1',
  //     note:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr'
  //   },
  //   {
  //     id:'2',
  //     note:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr'
  //   }
  // ])

  /*
   store
  */ 
  
  const storeNotes = useStoreNotes();
  

</script>