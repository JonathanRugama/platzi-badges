import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar';
import './styles/BadgeList.css'



class BadgesList extends React.Component {

    render() {
        if(this.props.badges.length === 0) {
            return(
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new page
                    </Link>
                </div>
            )
        }
        return (
        <div className="BadgeList__container">
        <ul className="list-unstyled">
        {this.props.badges.map((badge) =>{
            return(
          
                
                <li className="BadgeList__section-info" key={badge.id}>
                    <picture className="Container__avatar">
                        <Gravatar className="Badge__avatar" email={badge.email} alt="Avatar"/>
                    </picture>
                    <p className="BadgeList__item-info">
                        <span>{badge.firstName} {badge.lastName}</span> 
                        <span>
                            <picture className="icon__container">
                                <img src="https://logodix.com/logo/1099952.png" alt="Twitter Icon"/>
                            </picture>
                            {"@"+badge.twitter} 
                        </span>
                        <span>{badge.jobTitle}</span>
                    </p>
                </li>
         
            )
        })}
        </ul>
        </div>
        );
    }
}

export default BadgesList;