import { products } from '../data/products'

export const randomChoice = (cantidad) => {
    const nuevoArray = []

    while (nuevoArray.length < cantidad) {
        const indexRandom = Math.floor(Math.random() * products.length);

        if(!nuevoArray.length){
            nuevoArray.push(products[indexRandom]);
        }

        const productOld = nuevoArray.find((newProduct) =>{
          return newProduct.id === products[indexRandom].id
        })

        if(!productOld){
            nuevoArray.push(products[indexRandom])
        }


    }
    return nuevoArray;

}

