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
      this.notes = this.notes.filter( (newKey) => { 
        return newKey.id !== id
      })
    },
    updateNote(id , update){
      let index = this.notes.findIndex( note => note.id === id)
      this.notes[index].note = update
    }
  },
  getters: {
    getSingleNoteById: (state) => {
      return (id) => {
        return state.notes.filter( note => { return note.id === id })[0].note
      }
    },
    totalNoteCount: (state) => {
      return state.notes.length
    },
    totalCharacterCount: (state) => {
      let count = 0
      state.notes.forEach( item => {
         count += item.note.length
      })
      return count
    }
  }
})
