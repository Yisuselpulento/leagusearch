import { useState } from "preact/hooks"
import { Alert } from "./Alert"

const FormRegister = () => {
    const [formData, setFormData] = useState({
        usuario: '',
        password: '',
        repeatPassword: '',
        email: ''
      })
      const [alert, setAlert] = useState({})
  
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
          ...formData,
          [name]: value
        })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const errors = {}
    

        for (const key in formData) {
          if (formData[key] === '') {
            setAlert({
              msg: 'Todos los campos son obligatorios ',
              error: true
            })
    
            return
          }
        }
    

        if (formData.usuario.length > 10 || formData.usuario.length < 4) {
          setAlert({
            msg: 'Usuario no puede tener más de 10 caracteres o menos de 4',
            error: true
          })
          return
        }
    

        if (formData.password !== formData.repeatPassword) {
          setAlert({
            msg: 'Las contraseñas no coinciden',
            error: true
          })
          return
        }
        if (formData.password.length > 20 || formData.password.length < 4) {
          setAlert({
            msg: 'La contraseña no puede tener más de 20 caracteres o menos de 4',
            error: true
          })
          return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
          setAlert({
            msg: 'Email no es válido',
            error: true
          })
          return
        }
    

        if (Object.keys(errors).length === 0) {
          setAlert({
            msg: 'Registro exitoso',
            error: false
          })
        }
      }
 
     const inputClassname = "dark:bg-black dark:bg-opacity-20 dark:text-white bg-white text-black p-2 w-full border border-[#383864]" 
  return (
    <form
    className='  flex flex-col gap-8 shadow-lg  '
    onSubmit={handleSubmit}
  >
    <div className='dark:text-indigo-100 text-gray-500'>
      <label className='block   pb-2'>Usuario</label>
      <input
        className={inputClassname}
        type='text'
        name='usuario'
        placeholder='Usuario'
        value={formData.usuario}
        onChange={handleChange}

      />
    </div>
    <div>
      <label className='block pb-2'>Password</label>
      <input
       className={inputClassname}
        type='password'
        name='password'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}

      />
    </div>
    <div>
      <label className='block pb-2'>Repetir Password</label>
      <input
         className={inputClassname}
        type='password'
        name='repeatPassword'
        value={formData.repeatPassword}
        placeholder='Password'
        onChange={handleChange}

      />
    </div>
    <div>
      <label className='block pb-2'>Email</label>
      <input
        className={inputClassname}
        type='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='Email'

      />
    </div>
    <button
      className='dark:bg-blue-700 dark:bg-opacity-20 bg-blue-950  rounded hover:bg-opacity-90 dark:hover:bg-opacity-60  uppercase p-4 w-full font-bold text-lg text-white'
    >Registrar
    </button>
    {alert.msg && <Alert alert={alert} />}  
   
  </form>
  )
}

export default FormRegister