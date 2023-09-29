import React from "react";
import Button from '@mui/material/Button';
import Popup from 'reactjs-popup';
import GranterForm from './granter_form';
import dayjs, { Dayjs } from 'dayjs';
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import  { DatePicker }  from '@mui/x-date-pickers/DatePicker';
import './forms.css';

class InitialForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {selectedItem: null,granter:null,src:null, openModal:false, desc:'',init_total_todate:0, days_total: null, location:'', totalToDate: 0,foreignCurr:null, foreignAmount: null,localAmount: null,foreignRate: 320,response:null};
    this.itemList = [];
    this.currencyList = [];
    this.granters=[];
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleLocChange = this.handleLocChange.bind(this);
    this.handleDaysTotalChange = this.handleDaysTotalChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSrcChange=this.handleSrcChange.bind(this);
    this.handleForeignChange=this.handleForeignChange.bind(this);
    this.handleGranterChange=this.handleGranterChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleRemarksChange = this.handleRemarksChange.bind(this);
  }
  
  handleItemChange(event) {
    
    for(let i in this.itemList){ 
      if(this.itemList[i].item==parseInt(event.target.value)){
        this.setState({selectedItem: event.target.value, init_total_todate: this.itemList[i].to_date_quantity,totalToDate: this.itemList[i].to_date_quantity});
      }
    }
  }
  handleGranterChange(event){
    for(let i in this.granters){ 
      if(this.granters[i].item===event.target.value){
        this.setState({granter: this.granters[i].item});
        if(event.target.value==="Other"){
          //open new pop-up to insert granter
          console.log(event.target.value);
          this.setState({openModal: true});
        }
      }
    }
  }
  closeModal(){
    this.setState({openModal: false, granter: this.granters[0].item});
  }
  handleSrcChange(event) {
    this.setState({src: event.target.value});
  }
  handleDescChange(event) {
    this.setState({desc: event.target.value});
  }
  handleLocChange(event) {
    this.setState({location: event.target.value});
  }
  handleDaysTotalChange(event) {
    console.log(event.target.value)
    if(event.target.value===''){
      this.setState({days_total: 0,totalToDate:this.state.init_total_todate+0});
    }else{
      this.setState({days_total: parseFloat(event.target.value),totalToDate:this.state.init_total_todate+parseFloat(event.target.value)});
    }
  }
  handleForeignRateChange(event){
    /*for(let i in this.currencyList){ 
      if(this.currencies[i].item===event.target.value){
        //this.setState({foreignRate: this.currencies[i].value});
      }
    }*/
  }
  handleForeignChange(event){

    console.log(event.target.value);
    if(event.target.value===''){
      this.setState({localAmount: 0});
    }else{
      this.setState({localAmount: parseFloat(event.target.value*this.state.foreignRate)});
    }
  }
  async handleSubmit(event) {
    //alert('Form was submitted');
    try{
      event.preventDefault();
      let messageBody=JSON.stringify({
        item: this.state.selectedItem,
        description: this.state.desc,
        locations: this.state.location,
        days_total: this.state.days_total,
        updated_date: new Date(),
        //inspectorId: this.state.inspectorId
      });
      console.log(messageBody);
      this.setState({response:"Form submitted sucessfully"});
      
      let res = await fetch("http://localhost:8080/api/v1/set_data", {
        method: "POST",
        body: messageBody,
        mode:'cors',
        headers:{
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      });

      //let resJson = await res.json();
      if (res.status === 200) {
        
        this.setState({response:"Form submitted sucessfully"});
      } else {
        this.setState({response:"Error in form submission"});
      }
      
    } catch (err) {
      console.log(err);
    }
  }
  handleDurationChange(event){

  }
  handleRemarksChange(event){
    
  }
  componentDidMount(){
    fetch('./faculties.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors' // 'cors' by default
    }).then((response) => 
            response.json())
            .then((responseJson) => {
              console.log(responseJson);
              this.itemList=Array.from(responseJson.items);
              console.log(this.itemList)
              this.setState({selectedItem:this.itemList[0].item , totalToDate : this.itemList[0].to_date_quantity })
            });
    fetch('./currencies.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors' // 'cors' by default
    }).then((response) => 
            response.json())
            .then((responseJson) => {
              console.log(responseJson);
              this.currencyList=Array.from(responseJson.items);
              console.log(this.currencyList)
              this.setState({foreignRate:this.currencyList[0].value})
            });
    fetch('./granters.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors' // 'cors' by default
    }).then((response) => 
            response.json())
            .then((responseJson) => {
              console.log(responseJson);
              this.granters=Array.from(responseJson.items);
              console.log(this.granters)
              
            });
  }
  render() {
    return (
        <div className="container">
            <div className="row bg-dark text-white p-5" id="form">
                <h2 className="text-white col-12">Research Grant Details Form</h2>
                <form onSubmit={this.handleSubmit} className="col-12">
                    <label className="row d-flex text-left">
                        Faculty:
                        <select value={this.state.selectedItem} onChange={this.handleItemChange} className="p-1">
                          {this.itemList.map(item => (<option key={item.item} value={item.item}>{item.item}</option>))}
                        </select>
                    </label>
                    <label className="row d-flex text-left">
                    Select one:
                    <div onChange={this.handleSrcChange} style={{display:"flex",justifyContent:"left"}}>
                      <input type="radio" checked={true} value="LOCAL" name="source" /><text className="m-3">Local</text>
                      <input type="radio" value="FOREIGN" name="source" style={{marginLeft:"5%"}}/> <text className="m-3">Foreign</text>
                    </div>
                    </label>
                    <label className="row">
                        Granter:
                        <select value={this.state.granter} onChange={this.handleGranterChange} className="p-1">
                          {this.granters.map(item => (<option key={item.item} value={item.item}>{item.item}</option>))}
                        </select>
                    </label>
                    <label className="row d-flex text-left">
                    Awarded date:
                    </label>
                    <div className="row" style={{backgroundColor:'#fff',display:'flex', justifyContent:'left',marginTop:'15px',marginBottom:'15px'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="select awarded date"
                      value={this.state.src}
                      onChange={this.handleSrcChange}
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
                    Grant name:
                    </label>
                    <br/>
                    <input className="row d-flex justify-left col-12" type="text" value={this.state.desc} onChange={this.handleDescChange} />
                    <br />
                    <label className="row d-flex text-left">
                    Grantee PF no:
                    </label>
                    <br/>
                    <input className="row d-flex justify-left col-12" type="text" value={this.state.desc} onChange={this.handleDescChange} />
                    <br />
                    <label className="row d-flex text-left">
                        Foreign currency:
                        <select value={this.state.foreignCurr} onChange={this.handleForeignRateChange} className="p-1">
                          {this.currencyList.map(item => (<option key={item.item} value={item.item}>{item.item}</option>))}
                        </select>
                    </label>
                    <label className="row d-flex text-left">                    
                    Amount in Foreign currency:
                    </label>
                    <br/>
                    <input className="row d-flex justify-left col-12" type="text" value={this.state.foreignAmount} onChange={this.handleForeignChange} />
                    <br />
                    
                    <label className="row d-flex text-left" style={{marginTop:'2%', marginBottom:'2%'}}>                   
                    Amount in LKR: {this.state.localAmount}
                    </label>
                    <label className="row d-flex text-left">                    
                    Duration of the project:
                    </label>
                    <br/>
                    <input className="row d-flex justify-left col-12" type="text" value={this.state.duration} onChange={this.handleDurationChange} />
                    <br />
                    <label className="row d-flex text-left">                    
                    Remarks:
                    </label>
                    <br/>
                    <input className="row d-flex justify-left col-12" type="text" value={this.state.remarks} onChange={this.handleRemarksChange} />
                    <br />
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </div>
            
            <Popup open={this.state.openModal} onClose={this.closeModal}>
              <div>
              <GranterForm />
              </div>
            </Popup>
            <div className="row bg-dark text-white p-5 d-flex justify-center" id="formResponse">
                {this.state.response}
            </div>
        </div>  
    );
  }
}
export default InitialForm;