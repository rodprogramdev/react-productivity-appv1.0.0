import Button from './Button'

const ShowHideSection = () => {
  const onClick = (eventObject) => {
    alert('This is a a test for react props onclick')
    console.log(eventObject);
}

  return (<>
  <Button dynamicText='Show' onClickProp={onClick} />   
  <Button dynamicText='Test1' onClickProp={onClick} />   
  <Button dynamicText='Test2' onClickProp={onClick} />   
  <Button dynamicText='Test3' onClickProp={onClick} />   
  </>
  )
  
  
   

    
   
    
  
}

export default ShowHideSection