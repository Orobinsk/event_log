import React, {FC, useState} from 'react';
import {Column} from "primereact/column";
import {DataTable, DataTableCellSelection} from "primereact/datatable";
import {IEvent} from "../types/types";

interface TableType{
    events:IEvent[]
}

const Table:FC<TableType> = ({events}) => {
    const [selected,setSelected]=useState<IEvent[]>([]);

    const[read,setRead]=useState<IEvent[]>([]);

    return (
        <DataTable
            value={events}

          selectionMode="multiple" selection={selected}
            onSelectionChange={(e) => setSelected(e.value)}
            dataKey="date"  dragSelection


            paginator
            rows={5}
            sortField='date'
            sortOrder={1}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: '50rem' }}
        >
            <Column sortable field="date" header="Дата" className='w-2'></Column>
            <Column sortable field="importance" header="Важность" className='w-1'></Column>
            <Column sortable field="equipment" header="Оборудование" className='w-1' ></Column>
            <Column sortable field="message" header="Сообщения" ></Column>
            <Column sortable field="responsible" header="Ответственный" className='w-1'></Column>
        </DataTable>
    );
};

export default Table;