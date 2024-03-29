import { Leva } from 'leva'
import CustomLoader from './components/CustomLoader'
import AppRouter from './services/routes/Router'

const Experience = () => {
  return (
    <>
      <Leva
        // hidden={true}
        collapsed={false}
        oneLineLabels={false}
        flat={true}
        theme={{
          sizes: {
            titleBarHeight: '28px',
          },
          fontSizes: {
            root: '10px',
          },
        }}
      />
      <CustomLoader />
      <AppRouter />
    </>
  )
}

export default Experience
