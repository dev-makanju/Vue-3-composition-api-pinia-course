/**
* imports
* */ 

import { watch } from 'vue'

/**
 * to set up a composable we just need to 
 * export a function with our file name
*/

export function useWatchCharacter(valueToWatch){
   watch( valueToWatch , (newValue) => {
      if(newValue.length === 100)
         alert('Oops , only 100 characters are allowed!')
         return; 
   })
}