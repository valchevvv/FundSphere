import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import linkedin from '@/assets/linkedin.svg';
import x from "@/assets/x.svg"
import tiktok from '@/assets/tiktok.svg';


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
    { title: 'Yes', items: ['Contacts', 'About us', 'Blog'] },
    { title: 'Campaigns', items: ['Last News', 'Top Campaigns', 'New Campaigns', 'Best Campaigns1'] },
    { title: 'Information', items: ['Help Center', 'How it works', 'Taxes', 'Private Info', 'Cookies'] }
  ];

  return (
    <footer className="px-10 py-8 bg-[#EDEFFC] rounded-md">
      <div className="flex w-full gap-9">
        {sections.map((section, index) => (
          <FooterSection key={index} title={section.title} items={section.items} />
        ))}
        <div className="w-60">
          <h4 className='text-xl font-bold'>Social Media</h4>
          <nav >
            <ul className="flex items-center gap-3">
              <li className="hover:font-bold cursor-pointer py-2">
                <img src={facebook} />
              </li>
              <li>
                <img src={instagram} />
              </li>
              <li>
                <img src={linkedin} />
              </li>
              <li>
                <img src={tiktok} />
              </li>
              <li>
                <img src={x} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
