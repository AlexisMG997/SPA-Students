import "./student.scss";
import LoadingSpinner from "../loading/loading.jsx";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Student = () => {
  const { user } = useParams();
  const datt = parseInt(user);
  const [data, setData] = useState({});
  const [isBusy, setBusy] = useState(true);

  const getData = async () => {
    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/alumno/0" + datt
    );
    setData(data.data);
    console.log(data.data);
    setBusy(false);
  };

  useEffect(() => {
    setBusy(true);
    getData();
  }, [datt]);

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    console.log(index);
  };
  var image = "../images/user02.jpg";

  const fillData = () => {
    data.map((dat, index) => {
      console.log(dat);
    });
  };
  // var genero = toString(data.datosPersonales.genero.nombre);
  return (
    <>
      {isBusy ? (
        <LoadingSpinner />
      ) : (
        <div className="studentContent flex flex-row mt-10 ">
          <div className="gap-2 w-1/4 align-center bg-[#01063B] text-white">
            <div className="flex flex-col justify-items-center">
              <img
                className=" h-100 w-100 p-10"
                src={data?.foto}
                alt="cute kitten"
              />
              <p className="matricula plmt-2 font-sans text-2xl text-center">
                {data?.nombreCompleto}
              </p>
            </div>
          </div>
          <div className="ml-4  w-3/4 bg-gray-50 border-4">
            <div className="flex flex-col bg-gray-50">
              <p className="personalData text-3xl text-red-800 font-bold text-center mt-2">
                Datos Personales
              </p>
            </div>
            <div className="flex mt-10">
              <div className="flex flex-row justify-between w-1/2">
                <p className="bornDateLabel text-xl font-bold ml-[3%] ">
                  Fecha de nacimiento
                </p>
                <p className="bornDateText text-right text-xl mr-[3%]">
                  {data.datosPersonales.fechaDeNacimiento}
                </p>
              </div>
              <div className="flex flex-row w-1/2 justify-between">
                <p className="text-xl font-bold ml-[3%]">Edad</p>
                <p className="bornDate text-xl text-center mr-[3%]">
                  {data.datosPersonales.edad}
                </p>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="flex flex-row w-1/2 justify-between">
                <p className="bornStateLabel text-xl font-bold ml-[3%]">
                  Estado de origen
                </p>
                <p className="bornStateInfo text-xl  mr-[3%]">
                  {
                    data.datosPersonales.LugarDeNacimiento.entidadFederativa
                      .nombre
                  }
                </p>
              </div>
              <div className="flex flex-row w-1/2 justify-between ">
                <p className="bornCityLabel text-xl font-bold ml-[3%] ">
                  Ciudad de origen
                </p>
                <p className="bornCityInfo text-xl text-center mr-[3%]">
                  {data.datosPersonales.LugarDeNacimiento.ciudad}
                </p>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="flex flex-row w-1/2 justify-between">
                <p className="genreLabel text-xl font-bold ml-[3%]">Genero</p>
                <p className="genreInfo text-xl text-center mr-[3%]">
                  {data.datosPersonales.genero.nombre}
                </p>
              </div>
              <div className="flex flex-row w-1/2 justify-between ">
                <p className="civilLabel text-xl font-bold ml-[3%] ">
                  Estado Civil
                </p>
                <p className="civilInfo text-xl text-center  mr-[3%]">
                  {data.datosPersonales.estadoCivil.descripcion}
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-20">
              <p className="addressData text-3xl text-red-800 font-bold text-center ">
                Domicilio
              </p>
            </div>
            <div className="flex mt-10">
              <div className="flex flex-row w-1/3 ">
                <p className="streetLabel text-xl font-bold ml-[4%]">Calle</p>
                <p className="streetInfo text-xl text-center ml-3">
                  {data.datosPersonales.domicilio.calle}
                </p>
              </div>
              <div className="flex flex-row w-1/3  justify-center">
                <p className="numberLabel text-xl font-bold ml-[1%] ">Numero</p>
                <p className="numberInfo text-xl text-center  ml-3">
                  {data.datosPersonales.domicilio.numero}
                </p>
              </div>
              <div className="flex flex-row w-1/3 justify-end mr-[1%]">
                <p className="townLabel text-xl font-bold ml-[1%] ">Colonia</p>
                <p className="townInfo text-xl text-center  ml-3">
                  {data.datosPersonales.domicilio.colonia}
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-20">
              <p className="familyData text-3xl text-red-800 font-bold text-center ">
                Datos Familiares
              </p>
            </div>
            <div className="flex mt-10">
              <div className="flex flex-row w-1/3 ">
                <div className="flex flex-col ml-[1%]">
                  <p className="parentLabel text-xl font-bold text-center">
                    Madre
                  </p>
                  <div className="flex flex-row justify-between">
                    <p className="momNametLabel text-xl font-bold ml-3 mt-5">
                      Nombre
                    </p>
                    <p className="momNameInfo items-end text-xl  ml-3 mt-5">
                      {data.datosFamiliares.madre.nombre}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="momOccupationtLabel text-xl font-bold ml-3 mt-5">
                      Ocupacion
                    </p>
                    <p className="momNameInfo text-xl  ml-3 mt-5">
                      {data.datosFamiliares.madre.ocupacion}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="momPhonetLabel text-xl font-bold ml-3 mt-5">
                      Numero
                    </p>
                    <p className="momNameInfo text-xl  ml-3 mt-5">
                      {data.datosFamiliares.madre.telefono}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-1/3 justify-center ">
                <div className="flex flex-col ml-[1%]">
                  <p className="fatherLabel text-xl font-bold text-center">
                    Padre
                  </p>
                  <div className="flex flex-row ">
                    <p className="fatherNametLabel text-xl font-bold ml-3 mt-5">
                      Nombre
                    </p>
                    <p className="fatherNameInfo items-end text-xl  ml-3 mt-5">
                      {data.datosFamiliares.padre.nombre}
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <p className="fatherOccupationtLabel text-xl font-bold ml-3 mt-5">
                      Ocupacion
                    </p>
                    <p className="fatherNameInfo text-xl justify-end ml-3 mt-5">
                      {data.datosFamiliares.padre.ocupacion}
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <p className="fatherPhonetLabel text-xl font-bold ml-3 mt-5">
                      Numero
                    </p>
                    <p className="fatherNameInfo text-xl justify-end ml-3 mt-5">
                      {data.datosFamiliares.padre.telefono}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end w-1/3 ">
                <div className="flex flex-col ml-[1%]">
                  <p className="wifeLabel text-xl font-bold text-center">
                    Conyuge
                  </p>
                  <div className="flex flex-row ">
                    <p className="wifeNametLabel text-xl font-bold ml-3 mt-5">
                      Nombre
                    </p>
                    <p className="wifeNameInfo items-end text-xl  ml-3 mt-5">
                      {data.datosFamiliares.conyuge.nombre}
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <p className="wifeOccupationtLabel text-xl font-bold ml-3 mt-5">
                      Ocupacion
                    </p>
                    <p className="wifeNameInfo text-xl justify-end ml-3 mt-5">
                      {data.datosFamiliares.conyuge.ocupacion}
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <p className="wifePhonetLabel text-xl font-bold ml-3 mt-5">
                      Numero
                    </p>
                    <p className="wifeNameInfo text-xl justify-end ml-3 mt-5">
                      {data.datosFamiliares.conyuge.telefono}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-20">
              <p className="JobData text-3xl font-bold text-center text-red-800">
                Datos Laborales
              </p>
            </div>
            <div className="flex mt-10">
              <div className="flex flex-row w-1/3 ">
                <p className="jobNameLabel text-xl font-bold ml-[3%]">Nombre</p>
                <p className="jobNameInfo text-xl text-center ml-3">
                  {data.datosLaborales.empresa.nombre}
                </p>
              </div>
              <div className="flex flex-row w-1/3  justify-center">
                <p className="jobAddressLabel text-center text-xl font-bold ml-[1%] ">
                  Domicilio
                </p>
                <p className="jobAddressInfo text-xl text-center  ml-2">
                  {data.datosLaborales.empresa.domicilio}
                </p>
              </div>
              <div className="flex flex-row w-1/3 justify-end mr-[1%]">
                <p className="jobPhoneLabel text-xl font-bold ml-[1%] ">
                  Numero
                </p>
                <p className="jobPhoneInfo text-xl text-center  ml-3">
                  {data.datosLaborales.empresa.telefono}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Student;
