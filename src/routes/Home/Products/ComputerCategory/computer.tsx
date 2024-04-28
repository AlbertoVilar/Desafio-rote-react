import "./styles.css";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../../ProductsList";

export default function ComputerCategory() {
  const params = useParams();
  const product = getProduct(Number(params.computerId));

  return (
    product && (
      <main className="container ">
        
            <section className="box-products">
                
                <div className="box-produc-name">
                    <h2>Produtos: {product.name}</h2>
                </div>
                
                <div className="box-products-details">
                    
                    { product.prod.map((item, index) => (
                        <p key={ index }>{ item }</p>
                    
                    ))}
                  
                </div>
        
            </section>
      </main>
    )
  );
}
