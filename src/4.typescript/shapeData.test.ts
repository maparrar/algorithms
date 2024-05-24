import { shapeData } from './shapeData'

describe('test cases Typescript', () => {
  describe('Shape data', () => {
    it('Shape data: reshape the data of an object', () => {
      interface Product {
        name: string;
        price: number;
        inStock: boolean;
      }
      
      const templateProduct: Product = {
        name: '',
        price: 0,
        inStock: true,
      }
      
      const productData = { name: 'T-Shirt', price: 25, inStock: true, color: 'red' } 

      expect(shapeData(productData, templateProduct)).toEqual({
        name: 'T-Shirt',
        price: 25,
        inStock: true
      })
    })
  })
})
