import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const routes = {
    '/': Home
}

const router = () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    header.innerHtml = Header();
    
    content.innerHtml = Home();
    
    footer.innerHtml = Footer();
};

export default router;