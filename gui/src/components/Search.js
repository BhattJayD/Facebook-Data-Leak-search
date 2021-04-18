import React,{useState} from 'react'

export default function Search({SearchNumber}) {
    const [numberSearch, setNumberSearch] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!numberSearch){
            alert("Must Enter Number")
        }
        SearchNumber(numberSearch);
    }
    return (
        <div className="card" style={{padding:"30px",width: 'calc(750px / 2)',alignitems: "center",margin: "10px auto",backgroundColor:"#eeebdd"}}>
            <div className="card-body">
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="Number" className="form-label">Search Number</label>
                        <input type="tel" placeholder="search" value={numberSearch} onChange={(e)=>{setNumberSearch(e.target.value)}} className="form-control" id="Number"/>
                    </div>
                        <button type="submit" className="btn btn-sm btn-success">Search</button>
                </form>
            </div>
        </div>
        
    )
}
