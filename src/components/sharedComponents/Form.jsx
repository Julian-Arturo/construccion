import {  useForm } from '@formspree/react';
import  { Toaster, toast} from 'react-hot-toast';
import React, { useRef } from 'react';


const Form = () => {
  const [state, handleSubmit] = useForm('xbjeaall');
 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      toast.success('Gracias por tu solicitud, nos pondremos en contacto contigo pronto.');
      formRef.current.reset(); // resetear los valores del formulario

    } else {
      toast.error('Hubo un error al enviar la solicitud, por favor inténtalo de nuevo más tarde.');
    }
  };
  const formRef = useRef(null);


  return (
 
      <form ref={formRef} action="https://formspree.io/f/xbjeaall" method="POST" onSubmit={handleFormSubmit} className="lg:w-[700px] gotham ">
        <label className="block  font-bold mb-2  " htmlFor="name">
          Nombre o nombre de la empresa <span className='text-red-600'>*</span>
        </label>
        <input type="text" name='name' id='' placeholder='Escriba su nombre o el de la empresa' required />
        <label className="block  font-bold mb-2" htmlFor="email">
          E-mail <span className='text-red-600'>*</span>
        </label>
        
        <input type="email" name='email' id='' placeholder='Escriba el correo electrónico' required />
        <label className="block  font-bold mb-2" htmlFor="ciudad">
          Ciudad <span className='text-red-600'>*</span>
        </label>
        <input type="text" name='ciudad' id='' placeholder='Selecciona en donde está ubicado' required />
        <label  className="block  font-bold mb-2" htmlFor="servicio">
          ¿Que servicio desea? <span className='text-red-600'>*</span>
        </label>
        <select name="servicio" id="servicio" className='p-2' required>
          <option value="" selected disabled>Elige el Servicio</option>
          <option value="servicio1">Servicio 1</option>
          <option value="servicio2">Servicio 2</option>
          <option value="servicio3">Servicio 3</option>
        </select>
        <div className='flex'>
          <label htmlFor="rango" className="mr-16 block  font-bold mb-2">
            Rango de presupuesto<span className='text-red-600'>*</span>
          </label>
          <label htmlFor="entrega" className='block  font-bold mb-2'>
            Entrega estimada
          </label>
        </div>
        <div className='flex'>
          <select name="rango" id="rango" className='mr-10 p-2 flex justify-center items-center' required>
            <option value="" selected disabled>Establecer rango</option>
            <option value="10.000.000 - 15.000.000">10.000.000 - 15.000.000</option>
            <option value="20.000.000 - 25.000.000">20.000.000 - 25.000.000</option>
            <option value="30.000.000 - 35.000.000">30.000.000 - 35.000.000</option>
          </select>
          <select name="entrega" id="entrega" className='p-2'>
            <option value="" selected disabled>Elige la fecha</option>
            <option value="10 días">10 días</option>
            <option value="20 días">20 días</option>
            <option value="50 días">50 días</option>
          </select>
        </div>
        <label className="block font-bold mb-2" htmlFor="message">
          Mensaje
        </label>
        <textarea name='message' id='message' cols={50} rows={4} placeholder='Escribe más detalles...'  />
        <button type='submit' className='w-full bg-[#E7193F] text-white font-bold p-2 mt-5 rounded-md' disabled={state.submitting}>Enviar cotización</button>
       <Toaster position='top-center' toastOptions={{duration: 5000}}  />
      </form>
  
  )
}

export default Form;
