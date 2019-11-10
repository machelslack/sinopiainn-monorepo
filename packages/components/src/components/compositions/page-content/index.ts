import HomePageContent from './home-page-content';
import BlogPageContent from './blog-page-content';
import ContactPageContent from './contact-page-content';
import ReservePageContent from './reserve-page-content';

const mainContent: Record<string, any> = {
  'home':HomePageContent,
  'blog':BlogPageContent,
  'contact':ContactPageContent,
  'reserve':ReservePageContent
};

export default mainContent;