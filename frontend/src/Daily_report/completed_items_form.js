import React from "react";

class Completed_Items_Form extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {selectedItem: '', desc:'', days_total: null, location:'', totalToDate: 20, inspectorId: null};
    this.itemList= [
        {id: 1, name: 'Item1', country: 'Austria'},
        {id: 2, name: 'Item2', country: 'Belgium'},
        {id: 3, name: 'Item3', country: 'Canada'},
        {id: 4, name: 'Item4', country: 'Denmark'},
        {id: 5, name: 'Item5', country: 'Egypt'},
      ];
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
    this.setState({days_total: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.selectedItem);
    event.preventDefault();
  }

  render() {
    return (
        <div className="container">
            <div className="row bg-dark text-white p-5">
                <h2 className="text-white col-12">CONTRACT ITEMS COMPLETED TODAY</h2>
                <form onSubmit={this.handleSubmit} className="col-12">
                    <label className="row m-3">
                        Item:
                        <select value={this.state.selectedItem} onChange={this.handleItemChange}>
                            {this.itemList.map(item => (<option key={item.id} value={item.id}>{item.name}</option>))}
                        </select>
                    </label>
                    <label className="row m-3">
                    Description:
                    <input type="text" value={this.state.desc} onChange={this.handleDescChange} />
                    </label>
                    <label className="row m-3">
                    Location/Stations:
                    <input type="text" value={this.state.location} onChange={this.handleDescChange} />
                    </label>
                    <label className="row m-3">
                    Day's total:
                    <input type="text" value={this.state.days_total} onChange={this.handleDescChange} />
                    </label>
                    <label className="row m-3">
                    Total to date:
                    {this.state.totalToDate}
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>  
    );
  }
}
export default Completed_Items_Form;