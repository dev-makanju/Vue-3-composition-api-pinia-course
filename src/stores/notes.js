import { defineStore } from 'pinia'

export const useStoreNotes = defineStore( 'stoteNotes', {
  state: () => {
    return {
      notes: [
        {
          id:'1',
          note:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr  bfhd frjabnjkfwk jkjkfwmhhbf jnkqfe jknf kjn.k,f jjjjjjjjjjjjjjjjjjj jjjjjjjjkdndsnfnanslnwnddlnakjnlkmx calbnscbh'
        },
        {
          id:'2',
          note:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr'
        }
      ]
    }
  },
  actions: {
    addNote(newNoteValue){
      let newDate = new Date().getMonth()
      const id = newDate.toString()
      let note = {
        id,
        note: newNoteValue,
      }
      this.notes.unshift(note)
    },
    deleteNote(id){
      console.log(id , this.notes)
      this.notes = this.notes.filter( (newKey) => { 
        return newKey.id !== id
      })
    },
    editNote(id){
       console.log(id)
    }
  }
})
