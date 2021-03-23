import React from 'react'

import confLogo from '../images/badge-header.svg'
import "../pages/styles/Badges.css"
import "../components/BadgesList"
import BadgesList from '../components/BadgesList'
import { Link } from 'react-router-dom'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
class Badges extends React.Component {
  
   
    constructor(props) {
        super(props);
        console.log('1. Constructor')
        this.state = {
            loading: true,
            error: null,
            data: undefined,
        }
    }
    componentDidMount() {
        console.log('3. ComponentDidMount')
        this.fetchData()
       
        
    }
    fetchData = async () => {
        this.setState(
            {
                loading: true,
                error: null
            }
        )
        try {
            const data = await api.badges.list();
            this.setState({loading:false, data:data})
        }catch(error){
            this.setState({loading: false, error:error})
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate()');
        console.log({
            prevProps: prevProps,
            prevState: prevState,
        })
    }
    componentWillUnmount() {
        console.log('6. componentWillUnmount');
        clearTimeout(this.timeOutId);
    }
    render() {
        console.log('2.render')
        if (this.state.loading ===true) {
            return <PageLoading />;
        }
        if(this.state.error) {
            return <PageError error ={this.state.error} />
            /* return `Error: ${this.state.error}` */
        }
        return (
        <React.Fragment>
            
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img 
                        className="" 
                        src={confLogo}
                        alt="Conf logo"/>
                    </div>
                </div>
            </div>

            <div className="Badge__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data} />
                        
                    </div>
                </div>
            </div>
        </React.Fragment>

        
        
        );
    }
}

export default Badges;