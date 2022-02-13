import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import {useEffect,useState} from "react"
import { sortBy } from "lodash";
import { Typography } from "@material-ui/core";


function App() {
  const [countries,setCountries]=useState([])
  const [selectedId,setSelectedId]=useState("")
  const [report,setReport]=useState([])
  // lay danh sanh cac country
  useEffect(() => {
    getCountries()
    .then(res=>{
      // sap xep alphab
      const countries=sortBy(res.data,"Country")
      setCountries(countries)
      setSelectedId("vn")
    })
   
  }, [])
  // Xu li hien thi chart 
  const handleOnchange=(e)=>{
    setSelectedId(e.target.value)
    console.log(e.target.value)
  
  }

  useEffect(() => {
       // /call api
      
    if(selectedId){
       const {Slug}=countries.find((country)=>
         country.ISO2.toLowerCase()===selectedId
  )
      // Truyền vào API
      console.log(Slug)
      getReportByCountry(Slug)
      .then(res=>{
           // xoa di phan tu cuoi cung trong array
          //  console log cai res data kh dc vay
        res.data.pop()
        setReport(res.data)
      })
     }
     
  },[selectedId])
console.log(report)
  return <>
    
      <CountrySelector countries={countries} handleOnchange={handleOnchange} value={selectedId}/>
      <Highlight report={report}/>
      <Summary report={report} selectedId={selectedId}/>
  </>
}

export default App;
