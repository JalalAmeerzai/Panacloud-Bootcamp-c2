import React, { useContext } from 'react'
import TableContext from './TableContext'

export default function TableForm() {
    let [v1, setV1] = React.useState(0);
    let [v2, setV2] = React.useState(0);

    let getTableContext = useContext(TableContext);

    return (
        <div className="table__gridBox__form">
                <form onSubmit ={ (e) => e.preventDefault()}>
                    <input 
                        className="table__gridBox__form__component"
                        type="number" 
                        placeholde="Start Numer"
                        onChange = {e => setV1(e.target.value)}
                        value={v1}
                    />
                    <input 
                        className="table__gridBox__form__component"
                        type="number" 
                        placeholde="End Numer"
                        onChange = {e => setV2(e.target.value)}
                        value={v2}
                    />
                    <input
                    type="submit"
                    value="Generate"
                    onClick={() =>
                            {
                                getTableContext[1]({ start: v1, end: v2 });
                            }
                        }
                    />
                </form>
        </div>
    )
}
