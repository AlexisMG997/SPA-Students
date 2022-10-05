import {useRef, useEffect} from 'react';
const logo = "https://uttijuana.edu.mx/wp-content/uploads/2021/10/Logo-UTT-1.png"
// https://calificaciones.uttijuana.edu.mx/portal-alumnos/_nuxt/img/logo_cherry.970f90f.png

const Header = () => {
  
  const ref = useRef(null);

  useEffect(() => {
    // 👇️ use a ref (best)
    const responsiveMenuBTN = ref.current;
    console.log(responsiveMenuBTN);

    // 👇️ use document.querySelector()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    const menu = document.querySelector('#responsive-menu')
    console.log(menu);
    responsiveMenuBTN.addEventListener('click', () => {
      console.log('clic')
      menu.classList.toggle('hidden')
    })
  }, []);

  return (
    // navbar here
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-8">

        <div className="flex justify-between">

          <div className="flex">
            <div>
              <a href="#" className="flex space-x-4 py-4 px-5 text-gray-700 hover:text-gray-900">
                <img className="md:w-15 md:h-12 w-15 h-10" src={logo} alt="logo"></img>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-4 px-4 text-gray-700 hover:text-gray-900 sm:font-normal font-semibold">Estudiantes</a>
              <a href="#" className="py-4 px-4 text-gray-700 hover:text-gray-900">Calificaciones</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 hover:text-yellow-800
             text-yellow-900 rounded shadow transition duration-300">Cerrar Sesión</a>
          </div>

          <div className="md:hidden flex items-center">
            <button ref={ref}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div id='responsive-menu' className="hidden md:hidden">
        <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Estudiantes</a>
        <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Calificaciones</a>
      </div>
    </nav>
    /*content
    <div className="py32">
      <h2 className="font-extrabold text-6xl">navbars in tailwind</h2>
    </div>*/
  );
};
export default Header;
