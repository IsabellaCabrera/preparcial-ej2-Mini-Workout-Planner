import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // Estado inicial del formulario para crear/editar workouts
  const inicialStateForm = {
    id: crypto.randomUUID(),
    workOutName: '',
    workOutSets: '',
    workOutReps: '',
    workOutDays: 'lunes'
  }

  // ===================== ESTADOS ===================== 
  
  const [workOuts, setWorOuts] = useState([])
  const [form, setForm] = useState(inicialStateForm)
  const [editWorkOut, setEditWorkOut] = useState(null)
  const [editForm, setEditForm] = useState(inicialStateForm)


  // ===================== CREACIÓN =====================

  // Manejador de cambios en los inputs del formulario de creación con esto veo el valor que en usario escribe
  const handleOnChangeForm = (e) => {
    const { name, value } = e.target
    setForm({
      ...form, // copiamos el estado actual
      [name]: value // actualizamos solo el campo que cambió
    })
  }


  // Crear un nuevo workout y agregarlo a la lista
  const handleOnSubmit = (e) => {
    e.preventDefault(); // prevenimos que se recargue la página

    // agregamos el nuevo workout a la lista, generando un nuevo id
    setWorOuts([
      ...workOuts,
      { ...form, id: crypto.randomUUID() }
    ])
    // reiniciamos el formulario
    setForm(inicialStateForm)
  }

  // ===================== EDICIÓN =====================

  // Llenar el formulario de edición con los datos del workout seleccionado
  const handleEdit = (workOut) => {
    setEditForm({ ...workOut }) // seteo los datos en el form de edicion
    setEditWorkOut(workOut.id) // seteo el id en el workout que edite
  }

  // Manejar cambios en los inputs del formulario de edición
  const handleOnChangeEditForm = (e) => {
    const { name, value } = e.target
    setEditForm({
      ...editForm,
      [name]: value
    })
  }

  // Guardar los cambios realizados en el workout editado
  const saveEditWorkOut = (e) => {
    e.preventDefault();

    // recorremos la lista de workouts y actualizamos solo el que se está editando
    setWorOuts(workOuts.map((workOut) =>
      workOut.id === editWorkOut ? { ...editForm } : workOut
    ))

    // reseteamos los estados de edición
    setEditWorkOut(null)
    setEditForm(inicialStateForm)
  }

  // ===================== ELIMINACIÓN =====================

  // Eliminar un workout filtrando la lista por id
  const handleDelete = (id) => {
    setWorOuts(workOuts.filter(workOut => workOut.id !== id))
  }

  useEffect(() => {
    console.log(form);
  }, [form])


  // ===================== RENDER =====================
  return (
    <>
      <h1>Workout Manager</h1>

      {/* ===== Formulario para CREAR workouts ===== */}

      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder='Workout Name'
          name='workOutName'
          value={form.workOutName}
          onChange={handleOnChangeForm}
        />
        <input
          type="number"
          name="workOutSets"
          placeholder='Sets'
          value={form.workOutSets}
          onChange={handleOnChangeForm}
        />
        <input
          type="number"
          name='workOutReps'
          placeholder='Reps'
          value={form.workOutReps}
          onChange={handleOnChangeForm}
        />

        <select
          name='workOutDays'
          value={form.workOutDays}
          onChange={handleOnChangeForm}
        >
          <option value="lunes">Lunes</option>
          <option value="martes">Martes</option>
          <option value="miercoles">Miercoles</option>
          <option value="jueves">Jueves</option>
          <option value="viernes">Viernes</option>
          <option value="sabado">Sabado</option>
          <option value="domingo">Domingo</option>
        </select>

        <button>Create WorkOut</button>
      </form>

      {/* ===== Lista de workouts aca estan las cards que se crean ===== */}

      <section>
        {workOuts.length > 0 ? workOuts.map((workOut) => (
          <article
            key={workOut.id}
            style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}
          >

            {/* Si el workout está en edición mostramos el formulario de edición */}

            {editWorkOut === workOut.id ? (
              <form onSubmit={saveEditWorkOut}>

                {/* Inputs de edición (idénticos al de creación, pero con editForm) */}
                <input
                  type="text"
                  placeholder='Workout Name'
                  name='workOutName'
                  value={editForm.workOutName}
                  onChange={handleOnChangeEditForm}
                />
                <input
                  type="number"
                  name="workOutSets"
                  placeholder='Sets'
                  value={editForm.workOutSets}
                  onChange={handleOnChangeEditForm}
                />
                <input
                  type="number"
                  name='workOutReps'
                  placeholder='Reps'
                  value={editForm.workOutReps}
                  onChange={handleOnChangeEditForm}
                />
                <select
                  name='workOutDays'
                  value={editForm.workOutDays}
                  onChange={handleOnChangeEditForm}
                >
                  <option value="lunes">Lunes</option>
                  <option value="martes">Martes</option>
                  <option value="miercoles">Miercoles</option>
                  <option value="jueves">Jueves</option>
                  <option value="viernes">Viernes</option>
                  <option value="sabado">Sabado</option>
                  <option value="domingo">Domingo</option>
                </select>

                <button>Save Workout</button>
              </form>

            ) : ( // Si no está en edición mostramos la vista normal

              <div>
                {/* Información del workout */}
                <h2>{workOut.workOutName}</h2>
                <p>Sets: {workOut.workOutSets}</p>
                <p>Reps: {workOut.workOutReps}</p>
                <p>Day: {workOut.workOutDays}</p>

                {/* Botones de acción: Editar / Eliminar */}
                <button onClick={() => handleEdit(workOut)}>Edit</button>
                <button onClick={() => handleDelete(workOut.id)}>Delete</button>
              </div>
            )}
          </article>
        )) : <p>No workouts created yet.</p>}
      </section>
    </>
  )
}

export default App
