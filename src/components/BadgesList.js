import React from 'react'
import './styles/BadgeList.css'

class BadgesList extends React.Component {

    render() {
        return (
        <div className="BadgeList__container">
        <ul className="list-unstyled">
        {this.props.badges.map((badge) =>{
            return(
          
                
                <li className="BadgeList__section-info" key={badge.id}>
                    <picture>
                        <img className="BadgeList__item-avatar" src={badge.avatarUrl} alt="Avatar"/>
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