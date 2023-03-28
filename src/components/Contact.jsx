import React from 'react'
import contact from '../assets/img/contact.png'
import ContactBox from './sharedComponents/ContactBox'
import Form from './sharedComponents/Form'
const Contact = () => {
  return (
    <div className=' max-[500px]:mx-15 max-[500px]:w-[500px]  flex flex-col md:flex-row lg:mx-[5%]  pt-24  justify-center ' id='contact'>
        <ContactBox text={ "Cuéntanos en el formulario que servicio deseas adquirir con nosotros o envíanos un correo electrónico."} titulo={"Cotiza Aquí"} servicio={contact} />
        <div className=' md:w-[50%]  mx-10 md:px-5 h-[600px]  mt-10 md:m-0 lg:mt-0 md:ml-10  flex justify-center' >
          <Form/>
        </div>
    </div>
  )
}

export default Contact