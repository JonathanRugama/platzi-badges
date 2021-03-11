import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/image-1.svg';
import '../components/styles/BadgeNew.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',

    }};
   
    handleChange = e => {
        /* const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value; */
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]:e.target.value,
            }
        });
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName} 
                            twitter={this.state.form.twitter} 
                            jobTitle={this.state.form.jobTitle} 
                            avatarUrl="https://scontent.ffon1-1.fna.fbcdn.net/v/t1.0-9/68506100_2578279262229598_1500559022288273408_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=irfrPQv5nVAAX9azv_a&_nc_ht=scontent.ffon1-1.fna&oh=d745b78173b0cdd7f4118451a084f9ed&oe=606A92E4" />
                        </div>
                      
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                         </div>
                    </div>

                    

                </div>
            </>
        )
    }
}

export default BadgeNew;