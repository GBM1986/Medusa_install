import { useProduct } from "medusa-react"
import './App.css'

function App() {
  const { product } = useProduct("prod_01HWAJDQQK3ZVQZM83FX74NCQB");

  console.log(product);

  return (
    <>
    <h1>Medusa Products</h1>
    </>
  );
}

export default App
