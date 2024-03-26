import React, { useEffect, startTransition, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Senin = React.lazy(() => import("../components/Mapel/Senin"));
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"));
const Rabu = React.lazy(() => import("../components/Mapel/Rabu"));
const Kamis = React.lazy(() => import("../components/Mapel/Kamis"));
const Jumat = React.lazy(() => import("../components/Mapel/Jumat"));
const Sabtu = React.lazy(() => import("../components/Mapel/Sabtu"));


const Schedule = () => {
  const daysOfWeek = [
    "Minggu",
    "Senin A",
    "Selasa A",
    "Rabu A",
    "Kamis A",
    "Jumat A",
    "Sabtu A",
  ];
  const currentDay = daysOfWeek[new Date().getDay()];
  const currentWeek = Math.floor((new Date().getDate() - 1) / 7) + 1;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let piketGroup = [];

 
  if (currentWeek === 1 || currentWeek === 5) {
    piketGroup = [
      ["Feby", "Elsa", "Farih", "Gita", "Husni", "Iin"],
      ["Alfina", "Karisa", "Dimas", "Dinar", "Eka", "Arifah"],
      ["Evelyn", "Januar", "Akmal", "Nasyabella", "Suci", "Safira"],
      ["Mutia", "Triana", "Nurul", "Oliv", "Luthfi", "Diah"],
      ["Jeslin", "Fitria", "Asih", "Ratna", "Syariana"],
      ["Neysya", "Dea", "Nayla", "Ajeng", "Alfin", "Farhan"],
    ];
  } else if (currentWeek === 2 || currentWeek === 6) {
    piketGroup = [
      ["Feby", "Elsa", "Farih", "Gita", "Husni", "Iin"],
      ["Alfina", "Karisa", "Dimas", "Dinar", "Eka", "Arifah"],
      ["Evelyn", "Januar", "Akmal", "Nasyabella", "Suci", "Safira"],
      ["Mutia", "Triana", "Nurul", "Oliv", "Luthfi", "Diah"],
      ["Jeslin", "Fitria", "Asih", "Ratna", "Syariana"],
      ["Neysya", "Dea", "Nayla", "Ajeng", "Alfin", "Farhan"],
    ];
  }

  const dayComponents = [
    null, 
    Senin,
    Selasa,
    Rabu,
    Kamis,
    Jumat,
    Sabtu,
  ];

  const TodayComponent = dayComponents[new Date().getDay()];
  const currentPiketNames = piketGroup[new Date().getDay() - 1];

  return (
    <>
      {/* Jadwal Mapel */}
      <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16 ">
        <div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
          <div
            className="text-2xl font-medium mb-5"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {currentDay}
          </div>
          <div data-aos="fade-up" data-aos-duration="400">
            {TodayComponent ? (
              <React.Suspense fallback={<p>Loading...</p>}>
                <TodayComponent />
              </React.Suspense>
            ) : (
              <p className="opacity-50">Tidak ada jadwal yang tersedia. selamat beristirahat</p>
            )}
          </div>
        </div>
      </div>

      {/* Jadwal Piket */}
      <div className="text-white flex flex-col justify-center items-center mt-8 lg:mt-0 overflow-y-hidden">
        <div
          className="text-2xl font-medium mb-5 text-center"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Piket
        </div>
        {currentPiketNames && currentPiketNames.length > 0 ? (
          currentPiketNames.map((piketName, index) => (
            <div
              key={index}
              className={` border-t-2 border-white flex justify-center py-[0.50rem] w-72 px-3 ${
                index === currentPiketNames.length - 1 ? "border-b-2" : ""
              }`}
              data-aos="fade-up"
              data-aos-duration={600 + index * 100}
            >
              <div className="text-base font-medium">{piketName}</div>
            </div>
          ))
        ) : (
          <p className="opacity-50">Tidak ada jadwal yang tersedia. selamat beristirahat</p>
        )}
      </div>
    </>
  );
};

export default Schedule;
