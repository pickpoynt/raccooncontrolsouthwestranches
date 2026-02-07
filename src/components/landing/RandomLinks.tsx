import { Link as LinkIcon } from "lucide-react";

const RandomLinks = () => {
  // Randomly selected 4 links from the provided list
  const links = [
    {
      name: "Greywater System Installation Tempe",
      url: "https://greywatersysteminstallationtempe.vercel.app/"
    },
    {
      name: "Ceramic Kiln Electrical Hookup Asheville",
      url: "https://ceramickilnelectricalhookupashevill.vercel.app/"
    },
    {
      name: "RV Pedestal Installation Plano",
      url: "https://rvpedestalinstallationplanotx.vercel.app"
    },
    {
      name: "Cheap Ceiling Fan Installation Spokane",
      url: "https://cheapceilingfaninstallationspokanew.vercel.app/"
    }
  ];

  return (
    <section className="py-12 bg-slate-100">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
            Related Local Services
          </h3>
          <p className="text-slate-600">
            Explore our network of specialized home service providers across the United States
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-emerald-300 transition-all duration-200 text-slate-700 hover:text-emerald-600 font-medium"
            >
              <LinkIcon className="w-4 h-4" />
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
