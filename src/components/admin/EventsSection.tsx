import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Trash2, Save } from 'lucide-react';
import ImageField from './ImageField';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  price: string;
  type: string;
  image: string;
  reservationLink: string;
}

const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const savedEvents = localStorage.getItem('eventsData');
    if (savedEvents) {
      try {
        const parsedEvents = JSON.parse(savedEvents);
        setEvents(parsedEvents.events || []);
      } catch (error) {
        console.error('Erreur lors du chargement des événements:', error);
      }
    }
  }, []);

  const saveEvents = () => {
    const eventsData = { events };
    localStorage.setItem('eventsData', JSON.stringify(eventsData));
    alert('Événements sauvegardés avec succès !');
  };

  const addEvent = () => {
    const newEvent: Event = {
      id: Date.now().toString(),
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      capacity: '',
      price: '',
      type: 'Animation',
      image: '',
      reservationLink: ''
    };
    setEvents([...events, newEvent]);
  };

  const removeEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const updateEvent = (id: string, field: keyof Event, value: string) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, [field]: value } : event
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Calendar className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">📅 Nos Événements</h2>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={addEvent}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Ajouter un événement</span>
          </button>
          <button
            onClick={saveEvents}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Sauvegarder</span>
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {events.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Aucun événement créé</p>
            <p className="text-sm text-gray-500">Cliquez sur "Ajouter un événement" pour commencer</p>
          </div>
        ) : (
          events.map((event) => (
            <div key={event.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-700">
                  {event.title || 'Nouvel événement'}
                </h3>
                <button
                  onClick={() => removeEvent(event.id)}
                  className="text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Titre de l'événement</label>
                    <input
                      type="text"
                      value={event.title}
                      onChange={(e) => updateEvent(event.id, 'title', e.target.value)}
                      placeholder="Nom de l'événement"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={event.description}
                      onChange={(e) => updateEvent(event.id, 'description', e.target.value)}
                      rows={3}
                      placeholder="Description de l'événement..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        value={event.date}
                        onChange={(e) => updateEvent(event.id, 'date', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Heure</label>
                      <input
                        type="time"
                        value={event.time}
                        onChange={(e) => updateEvent(event.id, 'time', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lien de réservation (optionnel)</label>
                    <input
                      type="url"
                      value={event.reservationLink}
                      onChange={(e) => updateEvent(event.id, 'reservationLink', e.target.value)}
                      placeholder="https://billeterie.com/event123 ou mailto:contact@restaurant.fr"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Si vide, utilisera le widget de réservation par défaut
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <ImageField
                    label="Image de l'événement"
                    value={event.image}
                    onChange={(value) => updateEvent(event.id, 'image', value)}
                    placeholder="URL de l'image de l'événement"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type d'événement</label>
                    <select
                      value={event.type}
                      onChange={(e) => updateEvent(event.id, 'type', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Animation">Animation</option>
                      <option value="Concert">Concert</option>
                      <option value="Soirée à thème">Soirée à thème</option>
                      <option value="Dégustation">Dégustation</option>
                      <option value="Événement privé">Événement privé</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lieu</label>
                    <input
                      type="text"
                      value={event.location}
                      onChange={(e) => updateEvent(event.id, 'location', e.target.value)}
                      placeholder="Lieu de l'événement"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Capacité</label>
                      <input
                        type="text"
                        value={event.capacity}
                        onChange={(e) => updateEvent(event.id, 'capacity', e.target.value)}
                        placeholder="50"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prix</label>
                      <input
                        type="text"
                        value={event.price}
                        onChange={(e) => updateEvent(event.id, 'price', e.target.value)}
                        placeholder="25€"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventsSection;