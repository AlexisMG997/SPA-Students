import "./student.scss";
import { useState } from "react";
import { useParams } from "react-router";

const Student = () => {
  const { username } = useParams();
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    console.log(index);
  };
  var image = "../images/user02.jpg";

  return (
    <div className="studentContent flex flex-row mt-10  h-screen">
      <div className="gap-2 w-1/4 align-center bg-[#01063B] text-white">
        <div className="grid justify-items-center">
          <img
            className=""
            src="https://i.imgur.com/Z6UKVIq.jpg"
            alt="cute kitten"
          />
          <p className="matricula mt-2 font-sans text-2xl text-center">
            0311011011
          </p>
          <p className="nombre mt-2 font-sans text-2xl text-center">
            Jose Alfonso
          </p>
          <p className="edad mt-2 font-sans text-2xl text-center">20 años</p>
          <p className="genero mt-2 font-sans text-2xl text-center">
            Masculino
          </p>
          <p className="estadoCivil mt-2 font-sans text-2xl text-center">
            Casado
          </p>
          <p className="correo mt-2 font-sans text-2xl text-center">
            aaaa@gmail.com
          </p>
          <p className="telefono mt-2 font-sans text-2xl text-center">
            6665455453463
          </p>
        </div>
      </div>
      <div className="ml-4 rounded-lg border-solid border-black border-2 w-3/4 bg-white ">
        {/* <div className="flex flex-row">
          <p className="text-3xl font-bold">{username} Profile</p>
          <p className="text-3xl font-bold  text-center">{username} Profile</p>
        </div> */}
        <div className="flex flex-col ">
          <p className="text-4xl font-bold ml-[1%] mt-3">{username} Profile</p>
          <p className="personalData text-3xl font-bold text-center mt-10">
            Datos Personales
          </p>
        </div>
        <div className="flex mt-5">
          <div className="flex flex-row items-center w-1/2">
            <p className="bornDateLabel text-2xl font-bold ml-[1%] ">
              Fecha de nacimiento
            </p>
            <p className="bornDateText text-2xl ml-3">PLACEHOLDER</p>
          </div>
          <div className="flex flex-row w-1/2 justify-end mr-[1%]">
            <p className="text-2xl font-bold ml-[1%]">Edad</p>
            <p className="bornDate text-2xl text-center ml-3">PLACEHOLDER</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="flex flex-row w-1/2 ">
            <p className="bornStateLabel text-2xl font-bold ml-[1%]">
              Estado de origen
            </p>
            <p className="bornStateInfo text-2xl text-center ml-3">
              PLACEHOLDER
            </p>
          </div>
          <div className="flex flex-row w-1/2 justify-end mr-[1%]">
            <p className="bornCityLabel text-2xl font-bold ml-[1%] ">
              Entidad de origen
            </p>
            <p className="bornCityInfo text-2xl text-center  ml-3">
              PLACEHOLDER
            </p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="flex flex-row w-1/2 ">
            <p className="genreLabel text-2xl font-bold ml-[1%]">Genero</p>
            <p className="genreInfo text-2xl text-center ml-3">PLACEHOLDER</p>
          </div>
          <div className="flex flex-row w-1/2 justify-end mr-[1%]">
            <p className="civilLabel text-2xl font-bold ml-[1%] ">
              Estado Civil
            </p>
            <p className="civilInfo text-2xl text-center  ml-3">PLACEHOLDER</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="addressData text-3xl font-bold text-center mt-14">
            Domicilio
          </p>
        </div>
        <div className="flex mt-5">
          <div className="flex flex-row w-1/3 ">
            <p className="streetLabel text-2xl font-bold ml-[1%]">Calle</p>
            <p className="streetInfo text-2xl text-center ml-3">PLACEHOLDER</p>
          </div>
          <div className="flex flex-row w-1/3  justify-center">
            <p className="numberLabel text-2xl font-bold ml-[1%] ">Numero</p>
            <p className="numberInfo text-2xl text-center  ml-3">PLACEHOLDER</p>
          </div>
          <div className="flex flex-row w-1/3 justify-end mr-[1%]">
            <p className="townLabel text-2xl font-bold ml-[1%] ">Colonia</p>
            <p className="townInfo text-2xl text-center  ml-3">PLACEHOLDER</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="familyData text-3xl font-bold text-center mt-6">
            Datos Familiares
          </p>
        </div>
        {/* <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                className={
                  "inline-block p-4 rounded-t-lg border-b-2 activeTab" +
                    toggleState ===
                  1
                    ? "activeTab"
                    : "inactiveTab"
                }
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="true"
                onClick={() => toggleTab(1)}
              >
                Profile
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                className={
                  "inline-block p-4 rounded-t-lg border-b-2 inactiveTab " +
                    toggleState ===
                  2
                    ? "activeTab"
                    : "inactiveTab"
                }
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
                onClick={() => toggleTab(2)}
              >
                Dashboard
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                className={
                  "inline-block p-4 rounded-t-lg border-b-2 inactiveTab" +
                    toggleState ===
                  3
                    ? "activeTab"
                    : "inactiveTab"
                }
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
                onClick={() => toggleTab(3)}
              >
                Settings
              </button>
            </li>
            <li role="presentation">
              <button
                className={
                  "inline-block p-4 rounded-t-lg border-b-2 inactiveTab" +
                    toggleState ===
                  4
                    ? "activeTab"
                    : "inactiveTab"
                }
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
                onClick={() => toggleTab(4)}
              >
                Contacts
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Student;
