import React from 'react'
import './Table.css';

export default function Table(props) {

    const generateTable = () =>{
        let tableArray = [];
        for(let i = 1; i <= 10; i++){
            tableArray.push(<h6 className="table__singleBox__singleLine">{props.number}    X    {i}    =    {props.number*i}</h6>)
        }
        return tableArray;
    }

    return (  
        <div className="table__singleBox">
            {generateTable()}
        </div>
    )
}
