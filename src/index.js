import Header from './templates/Header';
import Footer from './templates/Footer';
import Home from './pages/Home';
import Card from './templates/Card';
import Error404 from './pages/Error404';

(function App() {
  const header = null || document.getElementById('header');
  header.innerHTML = Header();
  const content = null || document.getElementById('content');
  content.innerHTML = Home();
  const card1 = null || document.getElementById('card1');
  card1.innerHTML = Card();
  const card2 = null || document.getElementById('card2');
  card2.innerHTML = Card();
  const card3 = null || document.getElementById('card3');
  card3.innerHTML = Card();
  const footer = null || document.getElementById('footer');
  footer.innerHTML = Footer();
})();

