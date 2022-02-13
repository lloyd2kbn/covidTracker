import React from 'react'
import {FormControl, FormHelperText, InputLabel, NativeSelect} from '@material-ui/core'
export default function CountrySelector({value,handleOnchange,countries}) {
    return (
            <FormControl>
                <InputLabel htmlFor="country-selector" shrink>Quốc gia</InputLabel>
                <NativeSelect value={value}
                        onChange={handleOnchange}
                        inputProps={{
                            name:"country",
                            id:"country-selector"
                        }}
                       
                        
                >  
                {/* Item option */}
                    {countries.map(function(item,index){
                                return <option key={index} value={item.ISO2.toLowerCase()} >{item.Country}</option>
                    })}
                </NativeSelect>
                <FormHelperText>Lựa chọn quốc gia</FormHelperText>
            </FormControl>
    )
}
