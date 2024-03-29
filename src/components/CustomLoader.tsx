import { Loader } from '@react-three/drei'
import { Colors } from '../common/Colors'

const CustomLoader = () => {
  const customContainerStyles = {
    background: Colors.mobileAppBackgroundColor,
  }
  const customInnerStyles = {
    height: '12px',
    width: '200px',
    borderRadius: '5px',
    backgroundColor: 'white',
    transition: '4s ease-out ',
  }
  const customBarStyles = {
    height: '12px',
    width: '100%',
    borderRadius: '5px',
    backgroundColor: Colors.mobileAppFontFontColor,
  }
  const customDataStyles = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: Colors.mobileAppFontFontColor,
  }

  return (
    <Loader
      containerStyles={customContainerStyles}
      innerStyles={customInnerStyles}
      barStyles={customBarStyles}
      dataStyles={customDataStyles}
    />
  )
}

export default CustomLoader
