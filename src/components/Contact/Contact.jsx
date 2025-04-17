import React from 'react'
import carImage from '../../assets/images/MaskGroup.png'
import Layout from '../Layout'
const Contact = () => {
  return (
      <Layout >
          <div className='container mx-auto py-16 sm:px-6 lg:px-8 max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4' id='contact'>
              {/* colonne 1 */}
              <div className='row-start-1 col-start-1 p-4'>
                <h1 className='text-1xl text-amber-500 uppercase font-bold '> high-quality all-terrain</h1>
                <h1 className='text-1xl text-amber-500 uppercase font-bold '>  vehicles with an emphasis </h1>
                <h1 className='text-1xl text-amber-500 uppercase font-bold'>  performance </h1>
                </div>
             
              {/* Colonne 2 : en haut à droite (colonne 2 dans ce cas = col-start-4 pour bien positionner à droite sur 4 colonnes) */}
              <div
                  className="row-start-1 col-start-4  ">
                  <h3 className='text-white text-lg leading-relaxed '>We provide cars for any obstacle you want to face, from arid </h3>
                  <h3 className='text-white text-lg leading-relaxed'>deserts to icy mountains. We are ready to prepare the best for you
                  </h3>
              </div>
              {/* colonne 3 */}
                <div className='row-start-2 col-start-1 p-4'>
                  <img src={carImage} alt="Voiture" className="w-76 h-80 p-3" />
            
              </div>
              {/* colonne 4 */}
                <div className='row-start-2 col-start-4 '>
                  <h1 className='text-2xl text-amber-600 uppercase font-bold'>  With the right vehicle you </h1>
                  <h1 className='text-2xl text-amber-600 uppercase font-bold'>  can explore and achieve your </h1>
                  <h1 className='text-2xl text-amber-600 uppercase font-bold'>  freedom where you want</h1>
                  <h3 className='text-white text-'> We provide Offroad car to rent. If you want to explore the world, get lost in
                      nature, ride deep into the desert or just want to drive like a maniac then our
                      off</h3>
                  </div>
          </div>
          
    </Layout>
  )
}

export default Contact