import { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Pais } from "./interfaces/paisInterface";
import { BiLoaderCircle } from "react-icons/bi";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes,Link} from "react-router-dom";
import ItemDetail from "./ItemDetail";

function App() {
  //Api : https://restcountries.com/
  const [paises, setPaises] = useState([]);

  const [inputPais, setInputPais] = useState("");
  const [region, setRegion] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (apiUrl: string) => {
    //Recibo la URL segun lo que quiero filtrar
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPaises(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (inputPais.length === 0) {
      fetchData("https://restcountries.com/v3.1/all");
      if (region !== "") {
        fetchData(`https://restcountries.com/v3.1/region/${region}`);
      }
    } else if (inputPais.length > 0) {
      fetchData(`https://restcountries.com/v3.1/name/${inputPais}`);
    }
    
  
   
  }, [inputPais, region,inputPais]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="mt-5 px-5 lg:px-24">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="md:flex items-center justify-between"
              >
                <div className="relative md:w-[400px]">
                  <input
                    type="text"
                    placeholder="Search for a country..."
                    className="w-full h-full py-3 shadow-lg shadow-gray-300 rounded-md indent-10 text-sm dark:bg-slate-900 dark:shadow-sm dark:text-white"
                    id="search"
                    onChange={(e) => setInputPais(e.target.value)}
                  />
                  <AiOutlineSearch
                    size={20}
                    className="absolute top-3 left-2 dark:fill-white"
                  />
                </div>
                <div className="w-2/4 mt-5 md:mt-0 md:w-[200px]">
                  <select
                    className="w-full shadow-md shadow-gray-300 p-2 rounded-sm dark:bg-slate-900 dark:shadow-sm dark:text-white"
                    id="regiones"
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option value="" disabled selected hidden>
                      Filter By Region
                    </option>{" "}
                    {/*Para que no aparezca como opcion*/}
                    <option value="africa">África</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                  </select>
                </div>
              </form>
              <div className="grid grid-cols-1 gap-10 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {isLoading ? (
                  <div className="w-full flex justify-center">
                    <BiLoaderCircle
                      size={50}
                      className="animate-spin dark:fill-white"
                    />
                  </div>
                ) : paises.length > 0 ? (
                  paises.slice(0, 50).map((pais: Pais) => (
                   <Link to={`/pais/${pais.name.common}`}   key={pais.name.common} onClick={() => setInputPais('')}>
                     <div
                    
                      className="flex flex-col border-b-2 rounded-md dark:bg-slate-900"
                    >
                      <img
                        src={pais.flags.png}
                        alt={pais.name.common}
                        className="w-full"
                      />
                      <div className="px-5 pb-5 mt-5">
                        <h2 className="uppercase font-extrabold text-lg dark:text-white">
                          {pais.name.common}
                        </h2>
                        <div>
                          <p className="dark:text-white">
                            <strong>Population: </strong>
                            {pais.population}
                          </p>
                          <p className="dark:text-white">
                            <strong>Region: </strong>
                            {pais.region}
                          </p>
                          <p className="dark:text-white">
                            <strong>Capital: </strong>
                            {pais.capital}
                          </p>
                        </div>
                      </div>
                    </div>
                   </Link>
                  ))
                ) : (
                  <p className="text-center text-lg font-extrabold text-red-950 dark:text-yellow-100">
                    No se encontraron resultados
                  </p>
                )}
              </div>
            </main>
          }
        />
        <Route path='/pais/:nombre' element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
