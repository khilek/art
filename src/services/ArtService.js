import { AppState } from "../AppState.js"
import { Art } from "../models/Art.js"
import { api } from "./AxiosService.js"

class ArtService {

async getArt(){
const response = await api.get('api/artworks')
console.log ('Service Getting Artwork', response.data)
const myArt = response.data.artworks.map(art => new Art(art))
AppState.myArtwork = myArt

}

async changePage(pageNumber){
  const response = await api.get(`api/artworks?page=${pageNumber}`)
  console.log ('📃', response.data);
  const myArt = response.data.artworks.map(art => new Art(art))
  AppState.myArtwork = myArt
  AppState.currentPage = response.data.page
  AppState.Pages = response.data.pages
}

 /**
   * Description
   * @param {Art} artworkId
   * @returns {Promise<void>}
   */
async admireArt(artworkId){
  const response = await api.post(`api/artworks/${artworkId}/admire`)
  console.log('🖼️', response.data)
 const admirerToUpdate = AppState.admirers.findIndex(art => artworkId.id == artworkId.id)
 AppState.admirers.splice(admirerToUpdate, 1)
 AppState.admirers.push(new Art(response.data))
// const art = new Art(response.data)
// AppState.admirers.splice(art.id, 1)
// AppState.admirers.push(art)
}



}

export const artService = new ArtService()