import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({appTitle}) => {
    return (
        <header className="header"> 
                          
                <h1>
                    {appTitle}
                </h1>
                <Button dynamicText='Show' />    
               
        </header>
    )
    
}

Header.propTypes = {
    appTitle: PropTypes.string.isRequired
}

export default Header;