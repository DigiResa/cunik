import React from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, Star, ArrowRight, MessageCircle, Users } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const ContactSection = () => {
  const { config } = useConfig();

  const handleEmailContact = () => {
    const subject = config.theme === 'evenementiel' 
      ? 'Demande de devis - Événement' 
      : 'Demande d\'information';
    const body = config.theme === 'evenementiel'
      ? 'Bonjour,\n\nJe souhaiterais organiser un événement et recevoir un devis personnalisé.\n\nType d\'événement : \nDate souhaitée : \nNombre de personnes : \nBudget approximatif : \n\nMerci de me recontacter.\n\nCordialement,'
      : 'Bonjour,\n\nJe souhaiterais obtenir des informations sur vos services.\n\nCordialement,';
    
    window.location.href = `mailto:${config.restaurant.email_commercial || config.restaurant.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl lg:text-5xl font-light text-white mt-4 mb-6">
            {config.theme === 'evenementiel' ? 'Planifions votre' : 'Contactez'}
            <span className="block font-bold text-amber-400">
              {config.theme === 'evenementiel' ? 'événement parfait' : 'nous'}
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {config.theme === 'evenementiel' 
              ? 'Notre équipe vous accompagne dans la réalisation de tous vos projets événementiels'
              : 'Notre équipe est à votre disposition pour répondre à toutes vos questions'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact rapide */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Phone className="h-6 w-6 text-amber-400 mr-3" />
                Contact immédiat
              </h3>
              
              <div className="space-y-6">
                {/* Téléphone */}
                <a 
                  href={`tel:${config.restaurant.phone.replace(/\s/g, '')}`}
                  className="group flex items-center space-x-4 bg-white/10 hover:bg-white/20 p-6 rounded-2xl transition-all duration-300 border border-white/20 hover:border-amber-400/50"
                >
                  <div className="bg-amber-400 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-red-900" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">Appelez-nous</h4>
                    <p className="text-white/80 text-lg font-medium">{config.restaurant.phone_commercial || config.restaurant.phone}</p>
                    <p className="text-white/60 text-sm">
                      {config.theme === 'evenementiel' ? 'Devis personnalisé immédiat' : 'Réponse immédiate'}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email */}
                <button 
                  onClick={handleEmailContact}
                  className="group w-full flex items-center space-x-4 bg-white/10 hover:bg-white/20 p-6 rounded-2xl transition-all duration-300 border border-white/20 hover:border-amber-400/50"
                >
                  <div className="bg-amber-400 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-red-900" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-white font-semibold">Écrivez-nous</h4>
                    <p className="text-white/80 text-lg font-medium">{config.restaurant.email_commercial || config.restaurant.email}</p>
                    <p className="text-white/60 text-sm">
                      {config.theme === 'evenementiel' ? 'Devis détaillé par email' : 'Réponse sous 24h'}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Réservation widget */}
              </div>
            </div>

            {/* Horaires et infos */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-amber-400 mr-3" />
                Informations pratiques
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      {config.theme === 'evenementiel' ? 'Disponibilité' : 'Horaires'}
                    </h4>
                    {config.theme === 'evenementiel' ? (
                      <div className="text-white/80 space-y-1">
                        <p>7j/7 pour vos événements</p>
                        <p className="text-sm text-white/60">Flexibilité horaire totale</p>
                      </div>
                    ) : (
                      <div className="text-white/80 space-y-1">
                        <p>{config.hours.open_days}</p>
                        <p className="text-sm">{config.hours.lunch} / {config.hours.dinner}</p>
                        <p className="text-xs text-white/60">{config.hours.closed}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Adresse</h4>
                    <p className="text-white/80">{config.restaurant.address}</p>
                    {config.theme === 'evenementiel' && (
                      <p className="text-sm text-white/60 mt-1">Parking privé disponible</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      {config.theme === 'evenementiel' ? 'Capacité' : 'Évaluation'}
                    </h4>
                    {config.theme === 'evenementiel' ? (
                      <div className="text-white/80 space-y-1">
                        <p>Jusqu'à {config.restaurant.capacity} personnes</p>
                        <p className="text-sm text-white/60">Espace entièrement modulable</p>
                      </div>
                    ) : (
                      <div className="text-white/80 space-y-1">
                        <p>{config.restaurant.rating}/5 ⭐</p>
                        <p className="text-sm text-white/60">{config.restaurant.reviews} avis Google</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact événementiel */}
          {config.theme === 'evenementiel' && (
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <MessageCircle className="h-6 w-6 text-amber-400 mr-3" />
                Demande de devis personnalisé
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Prénom *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Nom *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Type d'événement *</label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    >
                      <option value="" className="text-gray-800">Sélectionnez...</option>
                      <option value="evjf" className="text-gray-800">EVJF</option>
                      <option value="mariage" className="text-gray-800">Mariage</option>
                      <option value="anniversaire" className="text-gray-800">Anniversaire</option>
                      <option value="obseques" className="text-gray-800">Obsèques</option>
                      <option value="seminaire" className="text-gray-800">Séminaire</option>
                      <option value="autre" className="text-gray-800">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Nombre de personnes</label>
                    <input
                      type="number"
                      min="1"
                      max="80"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      placeholder="Nombre d'invités"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Date souhaitée</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Budget approximatif</label>
                    <select
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    >
                      <option value="" className="text-gray-800">Budget...</option>
                      <option value="500-1000" className="text-gray-800">500€ - 1000€</option>
                      <option value="1000-2000" className="text-gray-800">1000€ - 2000€</option>
                      <option value="2000-5000" className="text-gray-800">2000€ - 5000€</option>
                      <option value="5000+" className="text-gray-800">5000€+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Détails de votre projet</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
                    placeholder="Décrivez-nous votre événement, vos souhaits particuliers, contraintes..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onClick={handleEmailContact}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-red-900 py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
                >
                  <Mail className="h-5 w-5" />
                  <span>Envoyer ma demande</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          )}

     
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-white mb-4">
              {config.theme === 'evenementiel' ? 'Prêt à créer votre événement ?' : 'Une question ?'}
            </h3>
            <p className="text-xl text-white/90 mb-8">
              {config.theme === 'evenementiel' 
                ? 'Notre équipe vous accompagne de A à Z dans la réalisation de votre projet'
                : 'Notre équipe est là pour vous conseiller et vous accueillir'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${(config.restaurant.phone_commercial || config.restaurant.phone).replace(/\s/g, '')}`}
                className="bg-amber-400 hover:bg-amber-500 text-red-900 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>{config.restaurant.phone_commercial || config.restaurant.phone}</span>
              </a>
              <button
                onClick={handleEmailContact}
                className="border-2 border-amber-400 hover:bg-amber-400 hover:text-red-900 text-amber-400 px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Demande par email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;