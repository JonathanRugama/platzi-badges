import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar';
import './styles/BadgeList.css'



function BadgesList (props) {

const badges= props.badges;

const [query, setQuery] = React.useState("");
const [filteredBadges, setFilteredBadges] = React.useState(badges);

 React.useMemo(()=>{
    const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result)
}, [badges, query]);

        if(filteredBadges.length === 0) {
            return(
                <div>
                     <div className="form-group">
                <label >Filter</label>
                <input 
                type="text" 
                className="form-control"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                }}/>
            </div>  
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new page
                    </Link>
                </div>
            )
        }
        return (
        <div className="BadgeList__container">
            <div className="form-group">
                <label >Filter</label>
                <input 
                type="text" 
                className="form-control"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                }}/>
            </div>  
        <ul className="list-unstyled">
        {filteredBadges.map((badge) =>{
            return(
          
                
                <li className="BadgeList__section-info" key={badge.id}>
                    <picture className="Container__avatar">
                        <Gravatar className="Badge__avatar" email={badge.email} alt="Avatar"/>
                    </picture>
                    <p className="BadgeList__item-info">
                        <Link className="text-reset" to={`/badges/${badge.id}`}>
                            <span>{badge.firstName} {badge.lastName}</span> 
                            <span>
                                <picture className="icon__container">
                                    <img src="https://logodix.com/logo/1099952.png" alt="Twitter Icon"/>
                                </picture>
                                {"@"+badge.twitter} 
                            </span>
                            <span>{badge.jobTitle}</span>
                        </Link>
                        
                    </p>
                </li>
         
            )
        })}
        </ul>
        </div>
        );
}

export default BadgesList;