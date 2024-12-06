import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    'About Us': {
      items: [
        { label: 'Email', value: 'hello@auralis.com', isLink: true },
        { label: 'Phone', value: '+31 20 343 9223', isLink: true }
      ]
    },
    'Links': {
      items: [
        'Services',
        'Process',
        'Industries',
        'Pricing',
        'Team',
        'Contact',
        'FAQ',
        '404'
      ]
    },
    'Social Media': {
      items: [
        'LinkedIn',
        'Youtube',
        'X/Twitter',
        'Instagram'
      ]
    },
    'Legal': {
      items: [
        'Terms & conditions',
        'Privacy policy'
      ]
    }
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {Object.entries(footerSections).map(([title, section]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">{title}</h3>
              <div className="space-y-3">
                {section.items.map((item, index) => {
                  if (typeof item === 'string') {
                    return (
                      <a
                        key={index}
                        href="#"
                        className="block text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    );
                  } else {
                    return (
                      <div key={index} className="space-y-1">
                        <span className="text-orange-500 text-sm">{item.label}</span>
                        <a
                          href="#"
                          className="block text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                        >
                          {item.value}
                          {item.isLink && (
                            <ExternalLink className="w-4 h-4" />
                          )}
                        </a>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024, Auralis Inc.
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Template by</span>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              BlueStar Supply
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;