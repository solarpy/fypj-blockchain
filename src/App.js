import styles from './style';

import { Navbar, Navbar2, Hero, Stats, Business, Billing, CardDeal, Testimonials 
, Clients, CTA, Footer, Cards, Exchange, Swap, Trade } from './components';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}></div>
      <nav>
        <ul>
          <li>
            <Link to="/trade">Home</Link>
          </li>
        </ul>
      </nav>
      <Navbar2 />
      <div className="container">
        <Routes>
          <Route path="/" />
          <Route path="/trade" element={<Trade />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>
);

export default App
