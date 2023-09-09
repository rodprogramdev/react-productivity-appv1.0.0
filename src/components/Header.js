import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({appTitle}) => {
    return (
        <header className="header"> 
                          
                <h1>
                    {appTitle}
                </h1>
                <Button testText='Show' />    
               
        </header>
    )
    
}

Header.propTypes = {
    appTitle: PropTypes.string.isRequired
}

export default Header;