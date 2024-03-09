import { useEffect, useState } from "react"
import TeamSection12 from "../../../Components/Cards"
import SearchComponent from "../../../Components/Inputs/Search"
import SelectOneInput from "../../../Components/Inputs/Select"
import Loader from "../../../Components/Loader"
import { getAllCountriesByName, getAllCountriesByRegion, getAllCountriesWithParams } from "../../../Data/slices/countries"
import useAuthGuard, { useAppDispatch, useAppSelector } from "../../../Utils/hooks"

export default function CountriesPage(){

  useAuthGuard()
   //Here we are selecting values from store 📕
  const {loading,data}=useAppSelector(state=>state.countries)

  //Here we are dispatching actions 🕹️
  const dispatch=useAppDispatch()

  useEffect(()=>{
    dispatch(getAllCountriesWithParams({fields:'name,capital,region,flags,population'}))
  },[dispatch])

  const [searchValue,setSearchValue]=useState<string | null>(null)
  const [regionValue,setRegionValue]=useState<string | null>(null)

  const handleChangeSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTimeout(()=>{
      setSearchValue(e.target.value)
    },1000)
  }
  
  const handleChangeSelect  =(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setTimeout(()=>{
      setRegionValue(e.target.value)
      setSearchValue('')
      },1000) 
   }
  
  useEffect(()=>{
      if(searchValue){
           dispatch(getAllCountriesByName({name:searchValue}))
      }
  },[searchValue])

  useEffect(()=>{
    if(regionValue){
         dispatch(getAllCountriesByRegion({region:regionValue}))
    }
  },[regionValue])

    return (
        <>
           <main className='m-20'>
            <form className="px-4 flex justify-between">
            <SearchComponent onChange={(e) => handleChangeSearch(e)} />
            <SelectOneInput  onChange={(e) => handleChangeSelect(e)}/>
            </form>
             {loading ? (
               <Loader isLoading={true}/>
             ) : ( 
               <TeamSection12 content={data}/>
            )}
          </main>
        </>
    )
}