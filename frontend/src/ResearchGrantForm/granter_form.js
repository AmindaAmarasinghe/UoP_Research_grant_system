import React from "react";
import Button from '@mui/material/Button';


class GranterForm extends React.Component {
    constructor(props) {
        super(props);
        this.local=true;
        this.granterName=null;
        this.granterEmail=null;
        this.granterCountry=null;
        this.granterInstitute=null;
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleInstituteNameChange=this.handleInstituteNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleCountryChange=this.handleCountryChange.bind(this);
    }
    handleNameChange(event){

    }
    handleInstituteNameChange(event){

    }
    handleEmailChange(event){

    }
    handleCountryChange(event){

    }
    handleSubmit(event){

    }
    render() {
        return (
            <div className="container">
                <div className="row bg-dark text-white p-5" id="form">
                    <h2 className="text-white col-12 text-center">New Granter Details Form</h2>
                    <form onSubmit={this.handleSubmit} className="col-12">
                        <div>
                            <label className="row d-flex text-left">
                            Granter name:
                            </label>
                            <br/>
                            <input className="row d-flex justify-left col-12" type="text" value={this.granterName} onChange={this.handleNameChange} />
                            <br />
                            <label className="row d-flex text-left">
                            Institute:
                            </label>
                            <br/>
                            <input className="row d-flex justify-left col-12" type="text" value={this.granterInstitute} onChange={this.handleInstituteNameChange} />
                            <br />
                            <label className="row d-flex text-left">
                            Email:
                            </label>
                            <br/>
                            <input className="row d-flex justify-left col-12" type="text" value={this.granterEmail} onChange={this.handleEmailChange} />
                            <br />
                            <label className="row d-flex text-left">
                            Country:
                            </label>
                            <br/>
                            <input className="row d-flex justify-left col-12" type="text" value={this.granterEmail} onChange={this.handleEmailChange} />
                            <br />
                            <div className="row">
                                <span className="col-2"></span>
                                <Button variant="contained" className="col-3" type="submit">Submit</Button>
                                <span className="col-2"></span>
                                <Button variant="contained" className="col-3 bg-warning text-dark" type="submit">Close</Button>
                                <span className="col-2"></span>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default GranterForm;