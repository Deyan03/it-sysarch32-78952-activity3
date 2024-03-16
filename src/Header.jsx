import Pokeball from '../public/pokeball.png'

function Header() {
  return (
    <>
      <img className="pokeball" src={Pokeball} />
      <h1 id="title">Pokedex</h1>
    </> 
  )
}

export default Header
