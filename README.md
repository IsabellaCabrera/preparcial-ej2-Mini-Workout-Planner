
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

---

¿Quieres que te lo escriba ya en formato **README.md** listo para pegar en GitHub, con títulos y bullets?






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
