import { reactive } from 'vue'
import { Art } from "./models/Art.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/ 
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

/**@type {Art[]} */
  myArtwork: [],


currentPage: 1,

Pages: 35,

/**@type {{admirers}[]} */
admirers: []

})
