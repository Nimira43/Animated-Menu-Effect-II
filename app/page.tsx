import { BiSolidCat } from 'react-icons/bi'

export default function Home() {
  return (
    <div className='bg-dark p-8'>
      <div className='flex'>
        <BiSolidCat  className='text-3xl text-light mr-1'/>
        <h1 className='text-support logo text-4xl'>Solus</h1>
      </div>
    </div>
  )
}