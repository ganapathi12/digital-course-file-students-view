import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = ({ name, imgsrc, isCompName, compName, visit, btnname }) => {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>{name}</h1>
                  <h1>
                    {isCompName ? (
                      <strong className='brand-name'> {compName}</strong>
                    ) : (
                      ''
                    )}
                  </h1>
                  <h2 className='my-3'>
                    You need a FolderId or an Assignment Link to view the
                    Students Portal !
                  </h2>
                  <div className='mt-3'>
                    <a href={visit} className='btn-get-started '>
                      {btnname}
                    </a>
                  </div>
                </div>

                <div className='col-lg-6 order-1 order-lg-2 header-image'>
                  <img
                    src={imgsrc}
                    className='img-fluid animated'
                    alt='Home Img'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common
