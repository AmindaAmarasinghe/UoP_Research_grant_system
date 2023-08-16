import React from "react";

class Completed_Items_Form extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {selectedItem: 1, desc:'', days_total: null, location:'', totalToDate: 20, inspectorId: null,response:null};
    this.itemList= [];
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleLocChange = this.handleLocChange.bind(this);
    this.handleDaysTotalChange = this.handleDaysTotalChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleItemChange(event) {
    this.setState({selectedItem: event.target.value});
  }
  handleDescChange(event) {
    this.setState({desc: event.target.value});
  }
  handleLocChange(event) {
    this.setState({location: event.target.value});
  }
  handleDaysTotalChange(event) {
    this.setState({days_total: parseFloat(event.target.value),totalToDate:this.state.totalToDate+parseFloat(event.target.value)});
  }
  async handleSubmit(event) {
    //alert('Form was submitted');
    try{
      event.preventDefault();
      let messageBody=JSON.stringify({
        item: this.state.selectedItem,
        desccription: this.state.desc,
        location: this.state.location,
        days_total: this.state.days_total,
        date: new Date(),
        inspectorId: this.state.inspectorId
      });
      console.log(messageBody);
      this.setState({response:"Form submitted sucessfully"});
      /*
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: messageBody,
      });

      let resJson = await res.json();
      if (res.status === 200) {
        
        this.setState({response:"Form submitted sucessfully"});
      } else {
        this.setState({response:"Error in form submission"});
      }
      */
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount(){
    
    fetch('./sample.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson);
              this.setState({ totalToDate : responseJson.items[0].totalToDate })
              this.itemList=responseJson.items;
            })
            .catch((error) => {
              console.error(error);
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