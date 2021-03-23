import React from 'react';
import header from '../images/logo-conf.svg';
import './styles/BadgeNew.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api'
class BadgeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        twitter: '',
        jobTitle: '',
        email: '',

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
    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null})

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false})
        } catch(error) {
            this.setState({ loading:false , error: error})
        }
    }
    render() {
        return (
            <React.Fragment>
                
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName || 'FIRST_NAME'} 
                            lastName={this.state.form.lastName || 'LAST_NAME'} 
                            twitter={this.state.form.twitter || '@twitter'} 
                            jobTitle={this.state.form.jobTitle || 'JOB-TITLE'} 
                            email={this.state.form.email || 'mail@mail.com'}
                            avatarUrl="https://scontent.ffon1-1.fna.fbcdn.net/v/t1.0-9/68506100_2578279262229598_1500559022288273408_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=irfrPQv5nVAAX9azv_a&_nc_ht=scontent.ffon1-1.fna&oh=d745b78173b0cdd7f4118451a084f9ed&oe=606A92E4" />
                        </div>
                      
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form}/>
                         </div>
                    </div>

                    

                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;