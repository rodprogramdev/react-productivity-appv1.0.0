import PropTypes from 'prop-types';

const Button = ({bgColor,dynamicText,onClickProp}) => {
  
    // const onClick = (eventObject) => {
    //     alert('This is a a test for react  onclick attribute test')
    //     console.log(eventObject);
    // }
    
    return <button style={{bgColor}} className='button' onClick={onClickProp}>{dynamicText}</button>

    
}

Button.defaultProps = {
    bgColor: 'green'
}

Button.propTypes = {
    dynamicText: PropTypes.string,
    color: PropTypes.string
}



export default Button;