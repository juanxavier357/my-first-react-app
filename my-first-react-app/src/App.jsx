import './App.css'

function App() {

  return (
    <>

      <p className="titulo"><strong>404 NOT FOUND</strong></p>
      <div className="contenedor">
        <div className="imagen">
          <img src="src/assets/scarecrow.png" alt="Imagen de espantapájaros"/>
        </div>
        <div className="texto">
          <h1>I have bad news for you</h1>
          <div className="frase">
            <p>The page you are looking for might be removed or is temporarily unavailable</p>
          </div>
          <button className="boton">BACK TO HOMEPAGE</button>
        </div>
      </div>
      <div className="attribution">
        Coded by <a href="#">Juan Cabello</a>.
      </div>

    </>
  )
}

export default App
