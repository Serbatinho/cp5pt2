import { Link } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos"
import "./Produtos.css";
import { AiFillEdit as Editar } from "react-icons/ai";
import { MdDeleteForever as Excluir } from "react-icons/md";
import { MdOutlineAdd as Adicionar } from "react-icons/md";

import styleTd from "./Produtos.module.css" 
import { useEffect, useState } from "react";

export default function Produtos() {

  document.title = "Lista de Produtos";

  //Estilos da Tabela
  const tbEstilos = {
    textAlign: "center",
    letterSpacing: "2px",
    color: "#0000ff",
    textDecoration: "none"
  }


  const [counter, setCounter] = useState(0);

  const[counter2, setCounter2] = useState(0);

  const [produtos, setProdutos] = useState([{}]);

  useEffect (() => {
    console.log('useEffect será renderizado sempre que o componente for atualizado ou qualquer objeto for atualizado')
  })
  useEffect (() => {
    console.log('useEffect será renderizado apenas uma vez')

    fetch("http://localhost:3000/produtos")
      .then((lista)=> lista.json())
      .then((listaProdutos) => {
        
      })

  }, [])

  useEffect (() => {
    console.log('useEffect será renderizado apenas se um objeto/variavel/const que estiver no array de dependencias sofrer uma atualização')
  }, [counter2])


  return (
    <div>
      <h1>Produtos</h1>

      <div>
        <button onClick={()=> setCounter(counter + 1)}>Counter - {counter}</button>
        <button onClick={()=> setCounter2(counter2 + 1)}>Counter 2 - {counter2} </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>PREÇO</th>
            <th>EDITAR / EXCLUIR</th>
          </tr>
        </thead>
        <tbody>
          {ListaProdutos.map((produto, indice) => (
            <tr key={indice} style={tbEstilos}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td className={''}><Link to={`/editar/produtos/${produto.id}`}> <Editar /> </Link> | <Link to={`/excluir/produtos/${produto.id}`}> <Excluir /> </Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} style={{ textAlign: "center" }}><Link to={`/adicionar/produtos`}>INSERIR PRODUTO <Adicionar /></Link></td>
          </tr>
        </tfoot>
      </table>

    </div>
  )
}
