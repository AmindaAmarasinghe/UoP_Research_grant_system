import React from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import  { DatePicker }  from '@mui/x-date-pickers/DatePicker';

class SettlementForm extends React.Component {
    constructor(props) {
        super(props);
        this.settlementDate=null;
        this.foreignAmount=null;
        this.LocalAmount=null;
        this.expenditure=null;
        this.grant={id:null,name:null,currency:null};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleLocalAmountChange=this.handleLocalAmountChange.bind(this);
        this.handleForeignAmountChange=this.handleForeignAmountChange.bind(this);
        this.handleDateChange=this.handleDateChange.bind(this);
        this.handleExpenditureChange=this.handleExpenditureChange.bind(this);
    }
    handleLocalAmountChange(event){

    }
    handleForeignAmountChange(event){

    }
    handleDateChange(event){

    }
    handleExpenditureChange(event){

    }
    handleSubmit(event){

    }
    render() {
        return (
            <div className="container">
                <div className="row bg-dark text-white p-5" id="form">
                    <h2 className="text-white col-12 text-center">Grant Settlement Details Form</h2>
                    <form onSubmit={this.handleSubmit} className="col-12">
                        <div>
                            <label className="row d-flex text-left">
                            Grant ID: {this.grant.id} - {this.grant.name}
                            </label>
                            <br/>
                            
                            <label className="row d-flex text-left">
                            Foreign Amount:
                            </label>
                            <br/>
                            <input className="row d-flex justify-left col-12" type="text" value={this.foreignAmount} onChange={this.handleForeignAmountChange} />
                            <br />
                            <label className="row d-flex text-left">
                            Received date:
                            </label>
                            <div className="row" style={{backgroundColor:'#fff',display:'flex', justifyContent:'left',marginTop:'15px',marginBottom:'15px'}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            label="select awarded date"
                            value={this.settlementDate}
                            onChange={this.handleDateChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    sx={{
                                    svg: { color: '#000' },
                                    input: { color: '#000' },
                                    label: {color: '#555'}
                                    }}
                                />
                            )}
                            />
                            </LocalizationProvider>
                            </div>
                            <label className="row d-flex text-left">
                            Local Amount: {this.LocalAmount}
                            </label>
                            <br/>
                            
                            <label className="row d-flex text-left">
                            Expenditure:
                            </label>
                            <br/>
                            <input className="row d-flex justify-left col-12" type="text" value={this.expenditure} onChange={this.handleExpenditureChange} />
                            <br />
                            <div className="">
                                
                                <Button variant="contained" type="submit">Submit</Button>
                            
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default SettlementForm;