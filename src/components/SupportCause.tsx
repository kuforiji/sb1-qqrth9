import React, { useState } from 'react';
import { Heart, MapPin, Search } from 'lucide-react';

const SupportCause: React.FC = () => {
  const [selectedCause, setSelectedCause] = useState('');
  const [location, setLocation] = useState('');

  const causes = ['Education', 'Health', 'Environment'];
  const locations = ['Lagos', 'Abuja', 'Port Harcourt'];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Step 3: Support a Cause</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="cause" className="block text-sm font-medium text-gray-700 mb-1">
            Select a Cause
          </label>
          <select
            id="cause"
            className="w-full border rounded-lg py-2 px-3"
            value={selectedCause}
            onChange={(e) => setSelectedCause(e.target.value)}
          >
            <option value="">Choose a cause</option>
            {causes.map((cause) => (
              <option key={cause} value={cause}>
                {cause}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Select Location
          </label>
          <div className="relative">
            <select
              id="location"
              className="w-full border rounded-lg py-2 pl-10 pr-3"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Choose a location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
          <Heart className="h-5 w-5 mr-2" />
          Support This Cause
        </button>
        <div className="mt-4">
          <button className="text-indigo-600 hover:text-indigo-800 flex items-center">
            <Search className="h-4 w-4 mr-1" />
            Explore Other Causes
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportCause;