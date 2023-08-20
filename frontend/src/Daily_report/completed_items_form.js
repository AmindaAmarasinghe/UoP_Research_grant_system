import React from "react";

class Completed_Items_Form extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {selectedItem: null, desc:'',init_total_todate:0, days_total: null, location:'', totalToDate: 0, inspectorId: null,response:null};
    this.itemList = [];
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleLocChange = this.handleLocChange.bind(this);
    this.handleDaysTotalChange = this.handleDaysTotalChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleItemChange(event) {
    
    for(let i in this.itemList){ 
      if(this.itemList[i].item==parseInt(event.target.value)){
        this.setState({selectedItem: event.target.value, init_total_todate: this.itemList[i].to_date_quantity,totalToDate: this.itemList[i].to_date_quantity});
      }
    }
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
  componentDidMount(){
    fetch('http://localhost:8080/api/v1/get_total',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors' // 'cors' by default
    }).then((response) => 
            response.json())
            .then((responseJson) => {
              //console.log(responseJson.length());
              this.itemList=Array.from(responseJson);
              console.log(this.itemList)
              this.setState({selectedItem:this.itemList[0].item , totalToDate : this.itemList[0].to_date_quantity })
            });
  }
  render() {
    return (
        <div className="container">
            <div className="row bg-dark text-white p-5" id="form">
                <h2 className="text-white col-12">CONTRACT ITEMS COMPLETED TODAY</h2>
                <form onSubmit={this.handleSubmit} className="col-12">
                    <label className="row m-3">
                        Item:
                        <select value={this.state.selectedItem} onChange={this.handleItemChange}>
                          {this.itemList.map(item => (<option key={item.item} value={item.item}>{item.item}</option>))}
                        </select>
                    </label>
                    <label className="row m-3">
                    Description:
                    <input type="text" value={this.state.desc} onChange={this.handleDescChange} />
                    </label>
                    <label className="row m-3">
                    Location/Stations:
                    <input type="text" value={this.state.location} onChange={this.handleLocChange} />
                    </label>
                    <label className="row m-3">
                    Day's total:
                    <input type="text" value={this.state.days_total} onChange={this.handleDaysTotalChange} />
                    </label>
                    <label className="row m-3">
                    Total to date: 
                    {' '+this.state.totalToDate}
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="row bg-dark text-white p-5 d-flex justify-center" id="formResponse">
                {this.state.response}
            </div>
        </div>  
    );
  }
}
export default Completed_Items_Form;