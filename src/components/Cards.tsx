import React, {FC, useState} from 'react';
import {Card} from "primereact/card";
import {Avatar} from "primereact/avatar";
import {Paginator, PaginatorPageChangeEvent} from "primereact/paginator";
import {IEvent} from "../types/types";

interface CardsType{
    events:IEvent[]
}

const Cards:FC<CardsType> = ({events}) => {
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    return (
        <>
            <div className="flex justify-content-center">
            <div className="grid gap-3 ">
                {events.map((item) => (
                        <Card key={item.date+item.message} className='max-w-30rem flex justify-content-center'>
                            <div className='flex'>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Дата</td>
                                        <td>{item.date}</td>
                                    </tr>
                                    <tr>
                                        <td>Важность</td>
                                        <td>{item.importance}</td>
                                    </tr>
                                    <tr>
                                        <td>Оборудование</td>
                                        <td>{item.equipment}</td>
                                    </tr>
                                    <tr>
                                        <td>Сообщение</td>
                                        <td>{item.message}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <Avatar size="xlarge" shape="circle"/>
                                    <p>{item.responsible}</p>
                                </div>
                            </div>
                        </Card>
                ))}
            </div>
            </div>
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[3, 6, 30]}
                       onPageChange={onPageChange}/>
        </>
    );
};

export default Cards;