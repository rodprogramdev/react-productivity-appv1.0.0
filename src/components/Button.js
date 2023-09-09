import PropTypes from 'prop-types';

const Button = ({bgColor}) => {
    return <button style={buttonStyles} className='button'>Show</button>

    
}

Button.defaultProps = {
    bgColor: 'green'
}

const buttonStyles = {
    
    textAlign: 'center',
}

export default Button;