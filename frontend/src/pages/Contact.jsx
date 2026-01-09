import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    toast({
      title: t.contact.form.success,
      description: t.hero.title.includes('partenaire') 
        ? 'Nous vous répondrons dans les plus brefs délais.'
        : 'We will respond to you as soon as possible.',
    });
    setContactForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    toast({
      title: t.hero.title.includes('partenaire') ? 'Inscription réussie !' : 'Subscription successful!',
      description: t.hero.title.includes('partenaire')
        ? 'Merci de vous être abonné à notre newsletter.'
        : 'Thank you for subscribing to our newsletter.',
    });
    setNewsletterEmail('');
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation request:', consultationForm);
    toast({
      title: t.hero.title.includes('partenaire') ? 'Demande envoyée !' : 'Request sent!',
      description: t.hero.title.includes('partenaire')
        ? 'Nous vous contacterons pour confirmer votre rendez-vous.'
        : 'We will contact you to confirm your appointment.',
    });
    setConsultationForm({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t.contact.title}</h1>
          <p className="text-xl text-blue-100">{t.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t.hero.title.includes('partenaire') ? 'Adresse' : 'Address'}
              </h3>
              <p className="text-gray-600 text-sm">123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t.hero.title.includes('partenaire') ? 'Téléphone' : 'Phone'}
              </h3>
              <p className="text-gray-600 text-sm">+33 1 23 45 67 89</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">contact@mbk-consulting.fr</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Other Forms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.contact.title}</CardTitle>
                <CardDescription>
                  {t.hero.title.includes('partenaire')
                    ? 'Remplissez le formulaire ci-dessous pour nous contacter'
                    : 'Fill out the form below to contact us'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t.contact.form.name}</Label>
                    <Input
                      id="name"
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.contact.form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t.contact.form.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">{t.contact.form.company}</Label>
                    <Input
                      id="company"
                      type="text"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">{t.contact.form.subject}</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">{t.contact.form.message}</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    {t.contact.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Consultation Request and Newsletter */}
            <div className="space-y-8">
              {/* Consultation Request */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t.contact.consultation.title}</CardTitle>
                  <CardDescription>
                    {t.hero.title.includes('partenaire')
                      ? 'Réservez une consultation personnalisée'
                      : 'Book a personalized consultation'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleConsultationSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="cons-name">{t.contact.form.name}</Label>
                      <Input
                        id="cons-name"
                        type="text"
                        value={consultationForm.name}
                        onChange={(e) => setConsultationForm({ ...consultationForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cons-email">{t.contact.form.email}</Label>
                      <Input
                        id="cons-email"
                        type="email"
                        value={consultationForm.email}
                        onChange={(e) => setConsultationForm({ ...consultationForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cons-phone">{t.contact.form.phone}</Label>
                      <Input
                        id="cons-phone"
                        type="tel"
                        value={consultationForm.phone}
                        onChange={(e) => setConsultationForm({ ...consultationForm, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">{t.contact.consultation.service}</Label>
                      <Select value={consultationForm.service} onValueChange={(value) => setConsultationForm({ ...consultationForm, service: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder={t.contact.consultation.selectService} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="conseil">{t.services.conseil.title}</SelectItem>
                          <SelectItem value="audit">{t.services.audit.title}</SelectItem>
                          <SelectItem value="formation">{t.services.formation.title}</SelectItem>
                          <SelectItem value="mediation">{t.services.mediation.title}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date">{t.contact.consultation.date}</Label>
                      <Input
                        id="date"
                        type="date"
                        value={consultationForm.date}
                        onChange={(e) => setConsultationForm({ ...consultationForm, date: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      {t.contact.consultation.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t.contact.newsletter.title}</CardTitle>
                  <CardDescription>{t.contact.newsletter.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="newsletter-email">{t.contact.form.email}</Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder={t.contact.newsletter.placeholder}
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      {t.contact.newsletter.button}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
