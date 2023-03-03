import React from 'react'
import _ from 'lodash'
import { motion } from "framer-motion"

const product: any[] = [
  {
    id: 1,
    name: 'Blue denim shirt',
    img: 'https://i.postimg.cc/3rsv30mv/pngegg.png',
    category: 'shirt',
    color: 'blue',
    size: 'm',
    qty: 1,
    price: 17.99
  },
  {
    id: 2,
    name: 'Red hoodie',
    img: 'https://i.postimg.cc/tJQ4GPwR/pngegg-1.png',
    category: 'hoodie',
    color: 'red',
    size: 'm',
    qty: 1,
    price: 35.99
  },
  {
    id: 3,
    name: 'Green hoodie',
    img: 'https://i.postimg.cc/3xgybRcs/kisspng-team-bride-udesign-demo-t-shirt-design-softw-5bad82e341e742-23003079153809789127.png',
    category: 'hoodie',
    color: 'green',
    size: 'm',
    qty: 1,
    price: 15.99
  },
  {
    id: 4,
    name: 'Yellow hoodie',
    img: 'https://i.postimg.cc/CKsqd1CG/kisspng-hoodie-yellow-sleeve-bluza-clothing-topshop-5b15b719c3f949-4104582615281497858027.png',
    category: 'hoodie',
    color: 'yellow',
    size: 'm',
    qty: 1,
    price: 25.99
  },
  {
    id: 5,
    name: 'Purple hoodie',
    img: 'https://i.postimg.cc/TPVrmQxW/kisspng-hoodie-amazon-com-t-shirt-crew-neck-sw-eater-5b49b5c5694275-9420422415315573174312.png',
    category: 'hoodie',
    color: 'purple',
    size: 'm',
    qty: 1,
    price: 34.99
  },
  {
    id: 6,
    name: 'Black hoodie',
    img: 'https://i.postimg.cc/wBx7NnNN/pngwing-com.png',
    category: 'hoodie',
    color: 'black',
    size: 'm',
    qty: 1,
    price: 30.05
  },
  {
    id: 7,
    name: 'Purple hoodie',
    img: 'https://i.postimg.cc/TPVrmQxW/kisspng-hoodie-amazon-com-t-shirt-crew-neck-sw-eater-5b49b5c5694275-9420422415315573174312.png',
    category: 'hoodie',
    color: 'purple',
    size: 'm',
    qty: 1,
    price: 34.99
  },
  {
    id: 8,
    name: 'Black hoodie',
    img: 'https://i.postimg.cc/wBx7NnNN/pngwing-com.png',
    category: 'hoodie',
    color: 'black',
    size: 'm',
    qty: 1,
    price: 30.05
  },
]

const Product = () => {
  return (
    <div className='w-full min-h-[10rem]'>
      <h1 className='text-center uppercase my-8'>product</h1>
      <div className='flex flex-wrap justify-center w-full gap-8 mb-8'>
        {_.map(product, (index: any, key: number) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: (0.2 * key) }} key={key} className='w-52 new-shadow rounded-md bg-white'>
            <div className="w-full h-40 bg-blue-200 p-8">
              <img src={index.img} alt="" className="w-full h-full object-contain" />
            </div>
            <div className='flex flex-col p-4'>
              <h2>{index.name ?? 'Title'}</h2>
              <p>${index.price ?? 0}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Product