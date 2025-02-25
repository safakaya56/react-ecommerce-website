import Footer from "./components/Footer"
import Header from "./components/Header"
import RouterConfig from "./config/RouterConfig"
import PageContainer from "./container/PageContainer"
import Categories from "./pages/Categories"

function App() {




  return (

    <div>
      <Header />
      <Categories />
      <PageContainer>
        <RouterConfig />
      </PageContainer>
      <Footer />
    </div>

  )
}

export default App
