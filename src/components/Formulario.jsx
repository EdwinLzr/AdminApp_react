

const Formulario = () => {
  return (
    <div className="w-1/2 lg:w-2/5">
      <h2 className=" font-black text-3xl text-center">Seguimiento</h2>

      <p className="text-lg mt-5 text-center">Agrega utilizando el <span className="text-red-500 font-bold">Formulario</span></p>
      <form action="" className="bg-white shadow-md rounded-lg py-10 px-7 mt-10 mb-10" >
        <div className="mb-5">
          <label className="block font-bold text-gray-700 uppercase " htmlFor="nombre">Paciente</label>
          <input id="nombre" className="w-full border-2 p-2 placeholder-gray-600 mt-2 rounded-md outline-none" type="text" 
                 placeholder="Nombre"
          />
        </div>

        <div className="mb-5">
          <label className="block font-bold text-gray-700 uppercase " htmlFor="propietario">Propietario</label>
          <input id="propietario" className="w-full border-2 p-2 placeholder-gray-600 mt-2 rounded-md outline-none" type="text" 
                 placeholder="Nombre"
          />
        </div>

        <div className="mb-5">
          <label className="block font-bold text-gray-700 uppercase " htmlFor="email">Email</label>
          <input id="email" className="w-full border-2 p-2 placeholder-gray-600 mt-2 rounded-md outline-none" type="email" 
                 placeholder="Nombre"
          />
        </div>

        <div className="mb-5">
          <label className="block font-bold text-gray-700 uppercase " htmlFor="fecha">Fecha de Ingreso</label>
          <input id="fecha" className="w-full border-2 p-2 placeholder-gray-600 mt-2 rounded-md outline-none" type="date" 
          
          />
        </div>

        <div className="mb-5">
          <label className="block font-bold text-gray-700 uppercase " htmlFor="sintomas">Sintomas</label>
        <textarea className="w-full border-2 p-2 placeholder-gray-600 mt-2 rounded-md outline-none" id="sintomas" placeholder="Sintomas"></textarea>
        </div>

        <input className="w-full bg-red-500 p-3 text-white uppercase font-bold rounded hover:bg-red-700 cursor-pointer transition-all" type="submit" value="Guardar" />
      </form>
    </div>
  )
}

export default Formulario