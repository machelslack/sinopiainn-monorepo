import HomePageContent from './home-page-content';
import BlogPageContent from './blog-page-content';
import ContactPageContent from './contact-page-content';
import ReservePageContent from './reserve-page-content';
import ThingsToDoPageContent from './things-to-do-content';
import CheckoutPageContent  from './checkout-page-content';


const mainContent: Record<string, any> = {
  'home':HomePageContent,
  'thingstodo':ThingsToDoPageContent,
  'blog':BlogPageContent,
  'contact':ContactPageContent,
  'reserve':ReservePageContent,
  'checkout':CheckoutPageContent
};

export default mainContent;
