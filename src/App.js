import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HomeCards1 from './components/HomeCards1'
import Xbox from './components/Xbox'
import HomeCards2 from './components/HomeCards2'
import Carbon from './components/Carbon'
import Follow from './components/Follow'
import Links from './components/Links'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />

        <Banner />

        <HomeCards1 />

        <Xbox />

        <HomeCards2 />

        <Carbon />

        <Follow />
      </div>

      <Links />
      <Footer />
    </>
  )
}

export default App

// https://www.youtube.com/watch?v=uKgn-To1C4Q&list=LL&index=1&t=91s
// https://codepen.io/bradtraversy/details/ZEGGNRb
