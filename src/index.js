import Header from './templates/Header';
import Footer from './templates/Footer';
import Home from './pages/Home';
import Card from './templates/Card';
import Error404 from './pages/Error404';
import './styles/main.scss';
import imageHeader from './utils/images/header.jpg';
import imageCard1 from './utils/images/card1.jpg';
import imageCard2 from './utils/images/card2.jpg';
import imageCard3 from './utils/images/card3.jpg';

(function App() {
  const header = null || document.getElementById('header');
  header.innerHTML = Header();
  const content = null || document.getElementById('content');
  content.innerHTML = Home();
  const card1 = null || document.getElementById('card1');
  card1.innerHTML = Card(imageCard1);
  const card2 = null || document.getElementById('card2');
  card2.innerHTML = Card(imageCard2);
  const card3 = null || document.getElementById('card3');
  card3.innerHTML = Card(imageCard3);
  const footer = null || document.getElementById('footer');
  footer.innerHTML = Footer();
})();
