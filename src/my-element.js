import  {LitElement, html, css} from "lit";
class Myelement extends LitElement{
  static properties = {
    titule: {type: String}
  }
  constructor(){
    super();
    this.titule = "Now Playing"

    this.song = "Villians and Heroes"
    this.album = "heros and villians"

    this.plustime = "2:14"
    this.negativetime = " -1:15"


    this.imagen = "/src/assets/metroboom.png"
  }
//CSS DEL OSOCOCOCOCOCOCOSOSOSOSOSOSOSOSOSOSOS
  static styles = css`

  * {
    margin: 0;
    padding: 0
  }

  my-element{
    background: green;
    width: 100dvw
  }


  .container{
    
    display: grid;
    width:100% !important;
    height:100vh;
    background: white;
    grid-template-columns:  1fr  ;
    grid-template-rows: 0.3fr 3fr 0.8fr 0.6fr 1fr 0.5fr 0.3fr;   
    grid-template-areas: 
    " titule "
    " container__image "
    " song_name "
    " line_song "
    " change_song "
    " song_volumen "
    " dispositive "
  
  }
  

  /*TITULO DE NOW PLAYING ---------------------------------*/ 
  .titule{
    grid-area: titule;
    color: black;
    // background: purple;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  /*IMAGEN DEL MEDIO PARA POER CONTROLARLA----------------*/
  .container__image{
    grid-area: container__image;
    // background: red;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    height:100%;
    width:100%;

  }
  .container__image img{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 80%;


    
  }

  /*PARTE DE NOMBRE SONG_NAME----------------------*/
  .song_name{
    grid-area: song_name;
    color: #1DB954;
    // background: gray;
    display:flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    
    
  }

  .song_name .titule_song{
    
    color: black;
    display:flex;
    flex-direction: column;
    align-items: center;
    flex-direction: center;
 

  }


  /*PARTE DE TIEMPO DE LA CANCION------------------------------------*/
  .line_song{
    // background: brown;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: black
    


  }
  .time{
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }

  .line_song input[type="range"] {
  background-color: gray; /* Color de fondo del input */
  height: 5px; /* Altura del input */
  border-radius: 2px; /* Redondeamos los bordes */
  accent-color: #1DB954; /* Color del thumb (verde) */
}

.line_song input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; /* Quitamos la apariencia por defecto del thumb */
  width: 20px; /* Ancho del thumb */
  height: 20px; /* Alto del thumb */
  border-radius: 50%; /* Redondeamos el thumb */
  background-color: #00ff00; /* Color del thumb (verde) */
  cursor: pointer; /* Cambiamos el cursor a una mano */
}
  .line_song input{

    background: green;
    width: 80%

  }


  /*PARTE DE CAMBIAR LA CANCION CHANGE_SONG----------------------*/ 
  .change_song{
    grid-area: change_song;
    background: orange;
    display:flex;
    justify-content: row;
    flex-direction: space-between
  }
  /*PARTE DE VOLUMEN DEL DISPOSITIVO-----------------------------*/ 
  .song_volumen{
    grid-area: song_volumen;
    background: blue;
    display:flex;
    justify-content: row;
    flex-direction: space-between

  }

  /*DISPOSITIVE--------------------------------------------------*/
  .dispositive{
    grid-area: dispositive;
    background: cyan
  }
  
  `

//HTML DEL COSOSOSOSOSOSOSOOCODOCOSOCSOCSOCSOSOSOS
  render(){
    return html`
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>


      <div class="container">
        <div class="titule">
          <h3>${this.titule}<h3>
        </div>

        <div class="container__image">
          <img src=${this.imagen}>
        </div>

        <div  class="song_name">
        
          <div class="plus">
            <i class='bx bx-plus'></i>
          </div>

          <div class="titule_song">
            <h2>${this.song}</h2>
            <p>${this.album}</p>
          </div>

          <div class="like">
            <i class='bx bx-heart' ></i>
          </div>
        </div>

        <div class="line_song">
          <div class="time">
            <p>${this.plustime}</p>
            <p>${this.negativetime}</p>
          </div>
          <input type="range" name="slider" id="slide2">
        </div>
        <div class="change_song">
          <img>
        </div>
        <div class="song_volumen">
          <img>
        </div>
        <div class="dispositive">
          <img>
        </div>
      </div>
        

    `
  }
  _mostrar(){
    this.name = e.target.value
  }
}
customElements.define("my-element", Myelement)