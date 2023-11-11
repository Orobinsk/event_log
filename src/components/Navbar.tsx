import React, {useState} from 'react';
import {SelectButton} from "primereact/selectbutton";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

const Navbar = () => {
    const options = ['Таблица', 'Карточка'];
    const [value, setValue] = useState(options[0]);
    return (
        <div>
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options}/>

            <span className="p-input-icon-left">
                <i className="pi pi-search"/>
                 <InputText />
            </span>
            <Button label="Поиск" />
        </div>
    );
};

export default Navbar;
