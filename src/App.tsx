import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import {IEvent} from "./types/types";
import Table from "./components/Table";

const MockData = [
    {
        date: '10.12.2022 10:00:15',
        importance: 'Важно',
        equipment: 'Вегас',
        message: 'Сервер Вегас недоступен',
        responsible: 'Смирнов В.А.'
    },
    {
        date: '10.12.2022 10:00:16',
        importance: 'Важно',
        equipment: 'Вегас',
        message: 'Сервер Вегас недоступен',
        responsible: 'Смирнов В.А.'
    },
    {
        date: '10.12.2022 10:00:17',
        importance: 'Важно',
        equipment: 'Вегас',
        message: 'Сервер Вегас недоступен',
        responsible: 'Смирнов В.А.'
    },
    {
        date: '10.12.2022 10:00:18',
        importance: 'Важно',
        equipment: 'Вегас',
        message: 'Сервер Вегас недоступенСервер Вегас недоступенСервер Вегас недоступенСервер Вегас недоступенСервер Вегас недоступенСервер Вегас недоступенСервер Вегас недоступенСервер Вегас недоступенСервер Вегас недоступенСервер Вегас недоступен',
        responsible: 'Смирнов В.А.'
    },
    {
        date: '10.12.2022 10:00:19',
        importance: 'Важно',
        equipment: 'Вегас',
        message: 'Сервер Вегас недоступен',
        responsible: 'Смирнов В.А.'
    },
    {
        date: '10.12.2022 10:00:20',
        importance: 'Важно',
        equipment: 'Вегас',
        message: 'Сервер Вегас недоступен',
        responsible: 'Смирнов В.А.'
    },
    {
        date: '10.12.2022 10:00:21',
        importance: 'Важно',
        equipment: 'Вегас',
        message: 'Сервер Вегас недоступен',
        responsible: 'Смирнов В.А.'
    }
]

function App() {
    const [events, setEvents] = useState<IEvent[]>(MockData)


    const options = ['Таблица', 'Карточки'];
    const [view, setView] = useState(options[0]);


    return (
        <div>
            <Navbar options={options} view={view} setView={setView}/>
            {view === 'Таблица' ?
                <Table events={events}/>
                :
                <Cards events={events}/>
            }
        </div>
    );
}

export default App;
