import { Product } from "./types/Product";


export  const ProductsList: Product[] = [
  
  {id: 1, 
  name: "Computadores",
  prod: ["Pc Gamer ", "Pc Dell Vostro", "Notebook Inspirion"]
  },

  {id: 2, 
  name: "Eletrônicos",
  prod: ["Smartphome S24", " Smart tv 4K 42", "Smart watch"] 
  },
  
  {id: 3, 
  name: "Livros",
  prod: ["Brevidade da vida", "Senhor dos aneis", " Meditações"]
  }
];

export function getProducts() {
  return ProductsList;
}

export function getProduct(number: number) {
  return ProductsList.find((product) => product.id === number);
}

