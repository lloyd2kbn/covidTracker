import React from 'react'
import {Grid,Card,CardContent,Typography} from "@material-ui/core"
import LineChart from "../Charts/Linechart"
import {useEffect,useState} from "react"
import HighMap from '../Charts/HighMaps'
export default function Summary({report,selectedId}) {
  const [mapData,setMapData]=useState({})
  // map data
  useEffect(() => {//vn us
      if(selectedId){
     import(`@highcharts/map-collection/countries/${selectedId}/${selectedId}-all.geo.json`)
       .then(res=>setMapData(res))   
      };
  }, [selectedId])
    return (
      <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
            <LineChart data={report}/>
            </Grid >
            <Grid item sm={4} xs={12}>
              <HighMap mapData={mapData}/>
            </Grid >
      </Grid>
    )
}
