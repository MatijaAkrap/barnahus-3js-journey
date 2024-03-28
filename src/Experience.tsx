import { Leva } from 'leva'
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
      <AppRouter />
    </>
  )
}

export default Experience
