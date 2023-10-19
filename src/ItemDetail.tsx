import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { Pais } from './interfaces/paisInterface';
import {AiOutlineArrowLeft} from 'react-icons/ai';

const ItemDetail = () => {
  const { nombre } = useParams(); //aca llega el nombre del pais
  const [pais,setPais] = useState<Pais | undefined >();
  useEffect(() => {
     const fetchDataPais = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${nombre}`);
        const dataPais = await response.json();
         setPais(dataPais[0]);
     }
     fetchDataPais();
  },[nombre]);
  useEffect(() => {
    console.log(pais);
  },[pais]);

  function renderCurrencies(currencies:any) {
    if (!currencies) {
      return "No currency information available";
    }
  
    const currencyArray = Object.keys(currencies).map((code) => {
      const currency = currencies[code];
      return `${currency.name} (${code})`;
    });
  
    return currencyArray.join(", ");
  }
  function renderLanguages(languages:any) {
    if (!languages) {
      return "No language information available";
    }
  
    const languageArray = Object.entries(languages).map(([code, name]) => {
      return `${name} (${code})`;
    });
  
    return languageArray.join(", ");
  }
  return (
    <div className='px-5 lg:px-24'>
        <Link to='/' className='flex items-center gap-2 w-[200px] justify-center py-2 border-2 rounded-md border-slate-400 bg-white mt-10 mb-10'>
            <AiOutlineArrowLeft />
            <span className='font-extrabold'>Back</span>
        </Link>
        <div className='max-w-[1200px] grid lg:grid-cols-2 lg:gap-10'>
       {
        pais !== undefined && (
          <>
          <div className='w-[250px] lg:w-full lg:h-full object-cover bg-center'>
            <img src={pais.flags.png} alt={pais.name.common} className='w-full h-full object-cover bg-center' />
          </div>
          <div className='flex flex-col justify-center gap-10 mt-5 lg:mt-0 dark:text-white'> {/*Flex-col*/}
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-10'> {/*Flex-text*/}
            <div className='flex flex-col gap-5'>
            <h4 className='uppercase font-extrabold'>{pais.name.common}</h4>
              <p><strong>Population: </strong>{pais.population}</p>
              <p><strong>Region: </strong>{pais.region}</p>
              <p><strong>Subregion: </strong>{pais.subregion}</p>
              <p><strong>Capital: </strong>{pais.capital}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p><strong>Currencies: </strong>{renderCurrencies(pais.currencies)}</p>
              <p><strong>Languages: </strong>{renderLanguages(pais.languages)}</p>
            </div>
           
            </div>
            <div className='flex flex-col items-start lg:flex-row lg:items-center gap-2 lg:gap-5'>
              <h5 className='font-extrabold underline'>Border Countries:</h5>
              <div className='flex items-center flex-wrap gap-2'>
              {
                pais.borders?.map((border,index) => (
                 
                    <span key={index} className='font-semibold dark:text-slate-900 border-2 border-slate-500 rounded-sm px-5 py-1 bg-white'>{border}</span>
                
                ))
              }
              </div>
            </div>
          </div>
          </>
        )
       }
       </div>
       
    </div>
  )
}

export default ItemDetail


