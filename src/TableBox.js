import React, {useContext} from 'react';
import './TableBox.css';
import Table from './Table';
import TableContext from "./TableContext";

export default function TableBox() {

    let getTableContext = useContext(TableContext);

    const rangeCheck = () =>{
        if(getTableContext[0].start > getTableContext[0].end || getTableContext[0].start === ""){
            return "Error";
        }
        else{
            let tableBoxArray = []
            for(let i = getTableContext[0].start; i <= getTableContext[0].end; i++){
                tableBoxArray.push(<Table number={i} />);
            }
            return tableBoxArray;
        }
    }

    return (
        <React.Fragment>
            <div className="table__gridBox__container">
                {rangeCheck()}
            </div>
        </React.Fragment>
    )
}