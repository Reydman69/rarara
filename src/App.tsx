import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WorkerProfiles from './components/WorkerProfiles';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <WorkerProfiles />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}