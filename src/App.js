import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { publicRoutes } from './routes'
import { DefaultLayout } from './layout'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const { component , layout} = route
              const Layout = layout ? layout : (layout === null ? Fragment : DefaultLayout) 
              const Page = component
              return (
                <Route 
                  key={index}
                  path={route.path}
                  element={<Layout><Page /></Layout>}/>
              )
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
