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




}

export const artService = new ArtService()