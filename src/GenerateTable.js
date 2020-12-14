import {useState} from 'react'
import TableBox from './TableBox'
import TableForm from './TableForm'
import TableContext from './TableContext';

export default function GenerateTable() {
    let startEndState = useState({start:0, end:0})
    return (
        <TableContext.Provider value={startEndState}>
            <div>
                <TableForm />
                <TableBox />
            </div>
        </TableContext.Provider>
    )
}
