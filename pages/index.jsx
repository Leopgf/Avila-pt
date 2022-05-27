import {useEffect, useState} from "react";
import Link from "next/link";

import Container from "../components/Container";
import {useQuery} from "@apollo/client";
import {GET_PRODUCTS} from "../graphql/queries";

const  Home= () => {

    const {data, loading, error} = useQuery(GET_PRODUCTS, {fetchPolicy: 'network-only'})

  const [productos, setProductos] = useState()




  useEffect(() => {
      if(data && !loading && !error){
          setProductos(data.getProducts)
          console.log(data)
      }
  },[data, loading, error])


  const showProducts = () =>(
      productos.filter((p) => p.status).map(product =>(
        <>

                <Link href="product">
                    <a key={product.id} className="shadow-md rounded-md">
                        <p>{product.name}</p>
                        <p>{ "Precio " + product.price}</p>
                        <p>Estado del producto:</p>
                        <p>{product.productCondition? "Nuevo" : "Usado"}</p>
                        <br/>
                    </a>
                </Link>
        </>




      ))

  )

  return (
        <Container>
            <div className="w-full flex flex-row justify-center">
                <div className="w-4/5 flex flex-col ">

                    {productos && showProducts()}
                </div>
            </div>


        </Container>
  )
}

export default Home;