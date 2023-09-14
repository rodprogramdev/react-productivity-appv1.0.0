import Button from './Button'

const ShowHideSection = () => {
  const onClick = (eventObject) => {
    alert('This is a a test for react props onclick')
    console.log(eventObject);
}

  return (<>
  <Button dynamicText='Show' onClickProp={onClick} />   
  </>
  )
  
  
   

    
   
    
  
}

export default ShowHideSection