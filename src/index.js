import Header from './templates/Header';
import Footer from './templates/Footer';
import Home from './pages/Home';
import Error404 from './pages/Error404';

(function App() {
  const header = null || document.getElementById('header');
  header.innerHTML = Header();
  const content = null || document.getElementById('content');
  content.innerHTML = Home();
  const footer = null || document.getElementById('footer');
  footer.innerHTML = Footer();
})();

/*document.onload = () => {
  document.getElementById("header").innerHTML = Header;
  document.getElementById("footer").innerHTML = Footer;
}*/