import PropTypes from 'prop-types'


const Button = ({color, text}) => {
    const onClick = (e) =>{
    }
   return <button onClick={onClick} style={{backgroundColor: color}} className='btn'> {text}</button>
 }
 
Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}



 export default Button
 