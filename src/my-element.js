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


    this.imagen = "/src/assets/metroboom.png"
  }
//CSS DEL OSOCOCOCOCOCOCOSOSOSOSOSOSOSOSOSOSOS
  static styles = css`

  my-element{
    background: green
  }


  .container{
    
    display: grid;
    width:50vw;
    height:100vh;
    background: green;
    grid-template-columns:  1fr ;
    grid-template-rows: repeat(9, 1fr);
    grid-template-areas: 
    " titule "
    " container__image "
    " container__image "
    " container__image "
    " container__image "
    " song_name "
    " line_song "
    " change_song "
    " song_volumen "
  
  }
  

  /*TITULO DE NOW PLAYING ---------------------------------*/ 
  .titule{
    grid-area: titule;
    background: purple;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  /*IMAGEN DEL MEDIO PARA POER CONTROLARLA----------------*/
  .container__image{
    grid-area: container__image;
    background: red;
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
    width: 500px

    
  }

  /*PARTE DE NOMBRE SONG_NAME----------------------*/
  .song_name{
    grid-area: song_name;
    background: gray;
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
  }
  .song_name .titule_song{
    gap: 
  }


  .song_name i{
    width: vh;
    height:
  }

  .song_name .titule_song{
    color: white;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 

  }


  /*PARTE DE TIEMPO DE LA CANCION------------------------------------*/
  .line_song{
    background: brown;

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
          <img>
        </div>
        <div class="change_song">
          <img>
        </div>
        <div class="song_volumen">
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