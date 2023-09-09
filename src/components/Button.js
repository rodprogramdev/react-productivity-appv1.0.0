import PropTypes from 'prop-types';

const Button = ({bgColor,testText}) => {
    return <button style={{bgColor}} className='button'>{testText}</button>

    
}

Button.defaultProps = {
    bgColor: 'green'
}

export default Button;