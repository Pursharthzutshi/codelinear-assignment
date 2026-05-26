import './index.css'
import Navbar from './components/layout/Navbar'
import MarqueeBanner from './components/layout/MarqueeBanner'
import Footer from './components/layout/Footer'
import MobileSection from './sections/MobileSection'
import NewsSection from './sections/NewsSection'
import CaseStudies from './sections/CaseStudies'
import CTABanner from './sections/CTABanner'
import DashboardShowcase from './sections/DashboardShowcase'
import Features from './sections/Features'
import Header from './sections/Header'

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-dark-main)' }}>
      <Navbar />
      <main>
        <Header />
        <Features />
        <DashboardShowcase />
        <MarqueeBanner />
        <MobileSection />
        <NewsSection />
        <CaseStudies />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
