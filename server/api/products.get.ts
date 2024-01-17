import products from '@/server/api/products.json';

export default defineEventHandler(async () => {
   return new Promise<any>((resolve) => {
    setTimeout(() => {
        resolve({data: products})
    }, 2000)
   })
})