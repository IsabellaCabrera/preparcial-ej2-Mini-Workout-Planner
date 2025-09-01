
# 🏋️ Workout Manager (React)

App sencilla en **React** para manejar rutinas de ejercicios.

### 🔑 Funcionalidades

* **Crear workouts** con nombre, sets, reps y día.
* **Editar workouts** desde un formulario.
* **Eliminar workouts** de la lista.

### ⚙️ Hooks y eventos usados

* **Estados (`useState`)**:

  * `workOuts` → lista de workouts.
  * `form` → formulario de creación.
  * `editWorkOut` → id del workout en edición.
  * `editForm` → formulario de edición.

* **Eventos principales**:

  * `onChange` → actualizar inputs en formularios.
  * `onSubmit` → crear o guardar edición de workout.
  * `onClick` → botones de **Edit** y **Delete**.

* **useEffect** → debug, muestra el formulario en consola al cambiar.

### 🚀 Flujo

1. Crear workout → se agrega a la lista.
2. Editar workout → se muestra formulario editable.
3. Guardar cambios → actualiza en la lista.
4. Eliminar → se quita de la lista.
