import { NavLink } from "react-router-dom";
import "./thumbnail.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Thumbnail = () => {
  // var studentBox = document.getElementsByClassName('box');
  // if(studentBox.)

  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/api/alumno");
    setData(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  var car1 = "Alexis";
  var car2 = "Cristian";
  return (
    <>
      <ul className="flex flex-row overflow-x-scroll space-x-6 bg-[#1B2631] pt-2 pl-5 pb-0">
        {data.map((dat, index) => {
          var name = dat.nombreCompleto;
          var nameSplitted = name.trim().split(/\s+/);
          var matricula = dat.matricula;
          var matriculaString = matricula.toString();
          return (
            <li className="flex flex-col items-center space-y-1">
              <NavLink
                className="bord block bg-white p-1 rounded-full"
                to={"/student/" + matriculaString}
              >
                <img
                  className=" h-20 w-20  rounded-full"
                  src={dat.foto}
                  alt="cute kitten"
                />
              </NavLink>
            
              <NavLink
                className="box text-white"
                to={"/student/" + matriculaString}
              >
                {nameSplitted[0] + " " + nameSplitted[1]}
              </NavLink>

            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Thumbnail;