import React from 'react';
import header from '../images/logo-conf.svg';
import './styles/BadgeEdit.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api'
import PageLoading from '../components/PageLoading';
class BadgeEdit extends React.Component {
    state = { 
        loading: true,
        error: null,
        form: {
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
            await api.badges.update(this.props.match.params.badgeId,this.state.form)
            this.setState({ loading: false})
            this.props.history.push('/badges')
        } catch(error) {
            this.setState({ loading:false , error: error})
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async e => {
        this.setState({loading:true, error: null})
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading:false, form:data})
        }catch (error) {
            this.setState({loading:false, error:error})
        }
    }
    render() {
        if(this.state.loading) {
            return <PageLoading />;
        }
        return (
            <React.Fragment>
                
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo"/>
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
                        <h1>Edit Attendant</h1>
                            <BadgeForm 
                            onChange={this.handleChange} 
                            onSubmit={this.handleSubmit} 
                            formValues={this.state.form} 
                            error={this.state.error}/>
                         </div>
                    </div>

                    

                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;