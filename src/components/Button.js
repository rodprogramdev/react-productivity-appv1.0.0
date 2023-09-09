import PropTypes from 'prop-types';

const Button = ({bgColor,dynamicText}) => {
    return <button style={{bgColor}} className='button'>{dynamicText}</button>

    
}

Button.defaultProps = {
    bgColor: 'green'
}

export default Button;