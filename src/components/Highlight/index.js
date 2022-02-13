import React from 'react'
import {Grid} from "@material-ui/core"
import HighlightCart from './HighlightCart';
export default function Highlight({report}) {
    // lay du lieu cuoi cung
    const data=report&&report.length?report[report.length-1]:["chan"];
  
    console.log(data)
   
    //so ca mac so ca khoi so ca tu vong lay tu bien report cuoi cung
    const summary=[
        {
            title:"Số ca nhiễm",
            count:data.Confirmed,
           type:"confirmed"
        },
        {
            title:"khỏi",
            count:data.Recovered,
           type:"recovered"
        },
        {
            title:"Tử vong",
            count:data.Deaths,
           type:"death"
        }

    ]

    
   
    // material Cart hien thi 3 UI
    return (
        <Grid container spacing={3}>
                {
                     
                    summary.map((item)=>                            
                            (
                                <Grid item sm={4} xs={12} key={item.title} >
                                    <HighlightCart title={item.title} count={item.count} type={item.type}/>
                                </Grid>
                            )
                    )
                }
        </Grid>
    )
}
