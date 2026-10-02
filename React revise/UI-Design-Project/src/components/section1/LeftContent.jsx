import { ArrowUpRight } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
      <div className='p-5'>
        <h3 className='mb-7  text-7xl font-bold'>Prospective <br /> <span>customer</span> <br /> Segmentation </h3>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias beatae reiciendis ad pariatur maxime possimus molestiae consequuntur. </p>
      </div>
      <div><ArrowUpRight size={64}/></div>
    </div>
  )
}

export default LeftContent
