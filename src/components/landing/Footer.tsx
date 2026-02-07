import { Phone, MapPin, Mail, Shield, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bismarck Septic Pumping Service",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    "telephone": "8777921410",
    "email": "service@septicpumpingbismarcknd.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bismarck",
      "addressRegion": "ND",
      "postalCode": "58501",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.8083",
      "longitude": "-100.7837"
    },
    "url": "https://septic-tank-pumping-bismarck-nd.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [],
    "areaServed": {
      "@type": "City",
      "name": "Bismarck",
      "containedInPlace": {
        "@type": "State",
        "name": "North Dakota"
      }
    },
    "description": "Professional septic tank pumping and cleaning services in Bismarck, North Dakota. We specialize in septic inspections, maintenance, and emergency pumping. Licensed experts serving Bismarck and Burleigh County.",
    "services": [
      "Septic tank pumping Bismarck ND",
      "Septic tank cleaning",
      "Septic system inspection",
      "Drain field maintenance",
      "Filter cleaning",
      "Bismarck septic service",
      "Burleigh County septic pumping"
    ]
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">BSP</span>
              </div>
              <span className="font-heading font-bold text-lg">Bismarck Septic Pumping</span>
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Bismarck's trusted experts for septic tank cleaning and maintenance. We ensure your system is operating efficiently and following all North Dakota environmental codes.
            </p>
            <div className="flex items-center gap-2 text-emerald-500">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Licensed Septic Experts</span>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Septic Tank Pumping</li>
              <li>Thorough Tank Cleaning</li>
              <li>System Inspections</li>
              <li>Filter Maintenance</li>
              <li>Emergency Backups</li>
              <li>Riser Installation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500" />
                <a href="tel:8777921410" className="hover:text-white transition-colors">(877) 792-1410</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500" />
                <a href="mailto:service@septicpumpingbismarcknd.com" className="hover:text-white transition-colors">service@septicpumpingbismarcknd.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 mt-0.5" />
                <span>Bismarck, North Dakota<br />Burleigh County</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>24/7 Emergency Response</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li>Bismarck, ND</li>
              <li>Mandan, ND</li>
              <li>Lincoln, ND</li>
              <li>Burleigh County, ND</li>
              <li>Morton County, ND</li>
              <li>Surrounding Rural Areas</li>
            </ul>
          </div>
        </div>

        {/* Related Services Links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h3 className="font-heading font-bold text-lg mb-4 text-center">Related Local Services</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://sumppumpbatterybackupinstallationma.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-emerald-500 hover:bg-slate-800 transition-all duration-300">
              Sump Pump Battery Backup <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://trenchlesspiperelininghuntsville.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-emerald-500 hover:bg-slate-800 transition-all duration-300">
              Trenchless Pipe Relining <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://generatorinterlockkitinstallationma.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-emerald-500 hover:bg-slate-800 transition-all duration-300">
              Generator Interlock Kit <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://aluminumwiringreplacementnapervilleil.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-emerald-500 hover:bg-slate-800 transition-all duration-300">
              Aluminum Wiring Replacement <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Bismarck Septic Pumping Service. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Septic tank pumping Bismarck ND</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

