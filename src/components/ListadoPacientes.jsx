

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:ml-5 " >
      <h2 className="font-black text-3xl text-center">Listado</h2>
      <p className="text-xl mt-5 text-center mb-10" >
       Administra y {' '}
        <span className="text-red-500">Edita</span>
      </p>
      <div className=" mt-5 bg-red-500 text-white p-5 rounded font-bold shadow-md">
        <p className="text-xl text-black">
          Nombre:{' '}
          <span className="font-normal text-white"> Edwin Loaiza</span>
        </p>

        <p className="text-xl mb-2 text-black">
          Propietario:{' '}
          <span className="font-normal text-white"> albert</span>
        </p>

        <p className="text-xl mb-2 text-black">
          Email:{' '}
          <span className="font-normal text-white"> albert@gmail.com</span>
        </p>

        <p className="text-xl mb-2">
          Fecha de Ingreso:{' '}
          <span className="font-normal"> 12/03/24</span>
        </p>

        <p className="text-xl">
          Sintomas:{' '}
          <span className="font-normal"> No come ni duerme</span>
        </p>

        <div className="flex justify-between mt-5">
          <a href="" className="bg-indigo-700 p-2 rounded hover:bg-indigo-900 font-xl">Editar</a>
          <a href="" className="bg-red-700 p-2 rounded hover:bg-red-900">Eliminar</a>
        </div>
      </div>
      </div>
  )
}

export default ListadoPacientes