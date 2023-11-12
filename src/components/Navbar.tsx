import React, {FC, useState} from 'react';
import {SelectButton} from "primereact/selectbutton";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

interface NavbarType{
    options:string[];
    view:string;
    setView: (view: string) => void
}

const Navbar:FC<NavbarType> = ({options,view,setView}) => {


    return (
        <div className='flex justify-content-between m-3'>
            <SelectButton value={view} onChange={(e) => setView(e.value)} options={options}/>
            <div>
               <span className="p-input-icon-left mr-2">
                <i className="pi pi-search"/>
                 <InputText/>
            </span>
                <Button label="Поиск"/>
            </div>
        </div>
    );
};

export default Navbar;
