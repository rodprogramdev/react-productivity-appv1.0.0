import PropTypes from 'prop-types';

const Header = ({appTitle}) => {
    return (
        <header className="header">                
                <h1>
                    {appTitle}
                </h1>
        </header>
    )
    
}

Header.propTypes = {
    appTitle: PropTypes.string.isRequired
}

export default Header;