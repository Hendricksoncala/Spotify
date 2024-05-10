import  {LitElement, html, css} from "lit";
class Myelement extends LitElement{
  static properties = {
    titule: {type: String}
  }
  constructor(){
    super();
    this.titule = "Money Machine"
    this.description = "21 pilots"
  }
//CSS DEL OSOCOCOCOCOCOCOSOSOSOSOSOSOSOSOSOSOS
  static styles = css`

  .my-element{
    background
  }

  .container{
    width:33vw;
    height: 224px;
    background: red;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  `

//HTML DEL COSOSOSOSOSOSOSOOCODOCOSOCSOCSOCSOSOSOS
  render(){
    return html`
      <div class="container">
        <div class="titule">
          <h3>${this.titule}<h3>
        </div>

        <div class="container__image">
          <img src="/src/assets/metroboom.png">
        </div>
          
        </div>
        <p>${this.description}</p>

    `
  }
  _mostrar(){
    this.name = e.target.value
  }
}
customElements.define("my-element", Myelement)