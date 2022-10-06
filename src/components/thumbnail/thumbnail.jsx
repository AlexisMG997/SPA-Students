import { NavLink } from "react-router-dom";
import "./thumbnail.scss";

const alumno = {
  status: 0,
  alumno: {
    matricula: "0319100123",
    nombreCompleto: "Armenta Beltrán Carlos David",
    foto: "https://localhost:8080/fotos/alumnos/0319100123.png",
    datosPersonales: {
      fechaDeNacimiento: "2003-04-23",
      edad: 19,
      lugarDeNacimiento: {
        ciudad: "Mazatlán",
        entidadFederativa: {
          id: "SIN",
          nombre: "Sinaloa",
        },
      },
      genero: {
        id: "GN-M",
        descripcion: "Masculino",
      },
      estadoCivil: {
        id: "EC-SLT",
        descripcion: "Soltero(a)",
      },
      domicilio: {
        calle: "Privade Los Robles",
        numero: "1234-A",
        colonia: "Jardines del Lago",
        municipio: {
          id: "MN-TJ",
          descripcion: "Tijuana",
        },
      },
      contacto: {
        correoElectronico: {
          personal: "carlos.armenta@gmail.com",
          institucional: "0319100123@uttijuana.edu.mx",
        },
        telefono: {
          casa: "6649374859",
          movil: "6649692607",
        },
      },
    },
    datosFamiliares: {
      padre: {
        nombre: "Carlos Armenta López",
        ocupación: "Empleado",
        teléfono: "6649584723",
      },
      madre: {
        nombre: "Gabriela Beltran",
        ocupación: "Ama de casa",
        teléfono: "6641628372",
      },
      conyuge: {
        nombre: "",
        ocupación: "",
        teléfono: "",
      },
      emergencia: {
        nombre: "Gabriela Beltran",
        parentezco: "Madre",
        teléfono: "6641628372",
      },
    },
    datosLaborales: {
      trabaja: true,
      estaRelacionadoEstudios: true,
      empresa: {
        nombre: "ACME S.A. DE C.V",
        domicilio: "Parque Industrial el Florido 1234-A",
        telefono: "6648271627",
        puesto: "Desarrollador Junior",
        departamento: "Sistemas",
      },
    },
    datosEconomicos: {
      viveCon: {
        id: "VC-AP",
        descripcion: "Ambos Padres",
      },
      vivienda: {
        id: "VD-RNT",
        descripcion: "Rentada",
      },
      transporte: {
        id: "TR-PBL",
        descripcion: "Público",
      },
      apoyoEconomico: {
        id: "AE-PDR",
        descripcion: "Padre",
      },
      ingresosFamiliares: {
        id: "IF-1015",
        descripcion: "$10,000 A $15,000",
      },
    },
    datosEscolares: {
      nombreBachillerato: "CBTIs 116",
      tipoBachillerato: {
        id: "TB-PBL",
        descripcion: "Escuela Pública (Oficial de Gobierno",
      },
      entidadFederativa: {
        id: "BC",
        nombre: "Baja California",
      },
    },
    promedios: {
      tsu: {
        bachillerato: 8.9,
        nivelIngles: "B2",
        puntosExamenIngreso: 872,
        porCuatrimestre: [8.9, 9.2, 8.7, 8.9, 9.1, 9.3],
        promedio: 9.0,
      },
      ingenieria: {
        porCuatrimestre: [9.4, 8.8],
        promedio: 9.1,
      },
    },
  },
};

const Thumbnail = () => {
  // var studentBox = document.getElementsByClassName('box');
  // if(studentBox.)

  var car1 = "Alexis";
  var car2 = "Cristian";
  return (
    <ul className="flex space-x-6 bg-[#1B2631] pt-2 pl-5 pb-0">
      <li className="flex flex-col items-center space-y-1">
        <NavLink
          className="bord block bg-white p-1 rounded-full"
          to={"/student/" + car1}
        >
          <img
            className="h-20 w-20 rounded-full"
            src="https://placekitten.com/75/75"
            alt="cute kitten"
          />
        </NavLink>
        <NavLink className="box text-white" to={"/student/" + car1}>
          Alexis
        </NavLink>
      </li>
      <li className="flex flex-col items-center space-y-1">
        <NavLink
          className="bord block bg-white p-1 rounded-full"
          to={"/student/" + car2}
        >
          <img
            className="h-20 w-20 rounded-full"
            src="https://placekitten.com/100/100"
            alt="cute kitten"
          />
        </NavLink>
        <NavLink className="text-white" to={"/student/" + car2}>
          Cristian
        </NavLink>
      </li>
      <li className="flex flex-col items-center space-y-1">
        <NavLink className="block bg-white p-1 rounded-full" href="#">
          <img
            className="h-20 w-20 rounded-full"
            src="https://placekitten.com/100/100"
            alt="cute kitten"
          />
        </NavLink>
        <a className="text-white" href="#">
          Kitty one
        </a>
      </li>
      <li className="flex flex-col items-center space-y-1">
        <a className="block bg-white p-1 rounded-full" href="#">
          <img
            className="h-20 w-20 rounded-full"
            src="https://placekitten.com/100/100"
            alt="cute kitten"
          />
        </a>
        <a className="text-white" href="#">
          Kitty one
        </a>
      </li>
    </ul>
  );
};
export default Thumbnail;
