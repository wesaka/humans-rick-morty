# Rick y Morty: Identificador de Humanos - Frontend

El frontend es la cara visible de nuestra herramienta para identificar humanos en el universo de Rick y Morty.

## Características:

- **Next.js**: Se utiliza este marco moderno de React para una generación optimizada y un enrutamiento limpio.
- **Material-UI**: Se asegura una interfaz de usuario atractiva y coherente.
- **Paginación**: La aplicación no carga todos los personajes a la vez; en su lugar, utiliza un sistema de paginación para una navegación más eficiente.
- **Integración con backend personalizado**: Se conecta con nuestro [backend específico](#enlace-al-repositorio-del-backend) para obtener los datos de los personajes.
- **TypeScript**: Proporciona tipos estáticos para evitar errores en tiempo de ejecución y mejorar la calidad del código.
- **Imagen optimizada**: Utiliza `next/image` para una carga de imagen más eficiente y una mejor experiencia del usuario.

## Estructura del código:

### Componentes:

- **Home**: Es el componente principal que muestra la lista de personajes humanos. Utiliza el hook `useRouter` para la navegación y el hook `useState` para el manejo del estado local de la página actual.

### Funciones:

- **getServerSideProps**: Esta función asincrónica se encarga de obtener datos del backend antes de que se renderice la página, asegurando que el frontend siempre tenga datos frescos para mostrar.

## Cómo ejecutar el proyecto:

1. Clona el repositorio de GitHub.
2. Navega hasta el directorio del frontend.
3. Instala las dependencias con `npm install` o `yarn install`.
4. Ejecuta el frontend con `npm run dev` o el comando equivalente que hayas configurado (o si prefieras `npm run build` y en seguida `npm run start`).
5. Asegúrate de que el [backend](#enlace-al-repositorio-del-backend) esté funcionando en *localhost*, puerta *4000* para obtener los datos de los personajes.

## Enlace al repositorio del backend