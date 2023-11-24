import React from 'react'

const Infos = () => {
  return (
    <>
      <div
  className='flex m-auto justify-around gap-6 relative rounded-3xl py-24'
  style={{ 
    backgroundImage: 'url("https://img.myloview.com.br/posters/fresh-acai-berries-and-green-leaves-on-pink-background-flat-lay-space-for-text-700-222307374.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className='absolute inset-0 bg-violet-600 opacity-30 rounded-3xl'></div>

  <div className='text-center text-violet-50 relative z-10'>
    <h1 className='font-bold lg:text-2xl text-lg'>20 anos</h1>
    <p>realizando sonhos</p>
  </div>

  <div className='text-center text-white relative z-10'>
    <h1 className='font-bold lg:text-2xl text-lg'>20 anos</h1>
    <p>realizando sonhos</p>
  </div>

  <div className='text-center text-violet-50 relative z-10'>
    <h1 className='font-bold lg:text-2xl text-lg'>20 anos</h1>
    <p>realizando sonhos</p>
  </div>
</div>


    </>
  )
}

export default Infos;