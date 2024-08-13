import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import linkedin from '@/assets/linkedin.svg';

const FooterSection = ({ title, items }: { title: string, items: string[] }) => {
  return (
    <div className="w-60">
      <h4 className='text-xl font-bold'>{title}</h4>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="hover:font-bold cursor-pointer py-2">{item}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Footer = () => {
  const sections = [
    { title: 'Useful Information', items: ['Contacts', 'About us', 'Blog'] },
    { title: 'Campaigns', items: ['Last News', 'Top Campaigns', 'New Campaigns', 'Best Campaigns'] },
    { title: 'Information', items: ['Help Center', 'How it works', 'Taxes', 'Private Info', 'Cookies'] }
  ];

  return (
    <footer className="px-10 py-8 bg-card rounded-md">
      <div className="flex w-full gap-9">
        {sections.map((section, index) => (
          <FooterSection key={index} title={section.title} items={section.items} />
        ))}
        <div>
          <h4 className='text-xl font-bold'>Social Media</h4>
            <ul className="flex items-center justify-evenly gap-3">
              <li className="hover:font-bold cursor-pointer bg-white rounded-lg">
                <img src={facebook} className="h-9 w-9" />
              </li>
              <li className="hover:font-bold cursor-pointer bg-white rounded-lg">
                <img src={instagram} className="h-9 w-9" />
              </li>
              <li className="hover:font-bold cursor-pointer bg-white rounded-lg">
                <img src={linkedin} className="h-9 w-9" />
              </li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
