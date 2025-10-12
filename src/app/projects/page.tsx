import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects - Francis Kwarteng',
  description: 'Professional projects by Francis Kwarteng, including Bibinii Farms — a Ghanaian farmer-powered fresh egg network.',
  keywords: 'Francis Kwarteng, Projects, Bibinii Farms, Ghana, Eggs, Agriculture, Farmer Network, Delivery',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="amazon-card-elevated" style={{ marginBottom: '40px', padding: '40px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '16px', textAlign: 'center' }}>Projects</h1>
        <p className="text-secondary" style={{ fontSize: '16px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Professional initiatives bridging science and entrepreneurship
        </p>
      </div>

      {/* Bibinii Farms Project */}
      <div className="amazon-card-elevated" style={{ marginBottom: '40px', padding: '40px' }}>
        {/* Top Thumbnail Preview */}
        <a
          href="https://bibiniifarms.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', marginBottom: '20px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(32,139,15,0.3)' }}
          aria-label="Open Bibinii Farms website in new tab"
        >
          <img
            src="https://image.thum.io/get/width/1600/https://bibiniifarms.com"
            alt="Bibinii Farms website preview"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </a>

        <div className="amazon-badge" style={{ marginBottom: '16px' }}>Farmer-powered fresh eggs</div>
        <h2 style={{ fontSize: '32px', marginBottom: '16px', color: '#ffffff' }}>Bibinii Farms</h2>
        <h3 style={{ fontSize: '20px', marginBottom: '24px', color: '#208b0f' }}>
          Fresh Eggs. Ghana Grown. Farmer Powered.
        </h3>

        {/* Overview */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#ffffff' }}>Overview</h4>
          <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '12px' }}>
            Bibinii Farms connects Ghanaian farmers directly to families, schools, restaurants, and businesses — cutting out
            middlemen, reducing waste, and making local food affordable and traceable. Customers can order Ghana-grown eggs
            with doorstep delivery or pickup hubs nationwide.
          </p>
          <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.7' }}>
            The company guarantees freshness (collected, graded, and delivered within hours), pays farmers fairly with
            transparent pricing and reliable weekly payments, and operates with a sustainability mindset: eco‑friendly crates,
            zero‑waste practices, and support for community composting.
          </p>
        </div>

        {/* Impact Snapshot */}
        <div className="amazon-grid amazon-grid-3" style={{ gap: '16px', marginBottom: '24px' }}>
          <div className="amazon-card" style={{ padding: '20px' }}>
            <h5 style={{ fontSize: '16px', marginBottom: '6px', color: '#208b0f' }}>🥚 Egg crates sold</h5>
            <p className="text-secondary" style={{ fontSize: '13px' }}>2,400+ fresh, traceable crates delivered nationwide</p>
          </div>
          <div className="amazon-card" style={{ padding: '20px' }}>
            <h5 style={{ fontSize: '16px', marginBottom: '6px', color: '#208b0f' }}>₵ Income to farmers</h5>
            <p className="text-secondary" style={{ fontSize: '13px' }}>₵120,000+ paid directly to partner farmers so far</p>
          </div>
          <div className="amazon-card" style={{ padding: '20px' }}>
            <h5 style={{ fontSize: '16px', marginBottom: '6px', color: '#208b0f' }}>⚖️ Fair pay promise</h5>
            <p className="text-secondary" style={{ fontSize: '13px' }}>6× national average wages paid to employees</p>
          </div>
        </div>

        {/* Why it matters */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#ffffff' }}>Why it matters</h4>
          <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.7' }}>
            Bibinii highlights Ghana’s generational love for poultry and livestock — where caring for animals is
            family tradition, community bonding, and sustainable living passed down for generations. The model strengthens
            food security while empowering farmers and keeping value in local communities.
          </p>
        </div>

        {/* Customer Experience */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#ffffff' }}>Customer experience</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className="amazon-list-bullet" style={{ marginBottom: '8px', color: '#e5e5e7' }}>Doorstep delivery or pickup hubs</li>
            <li className="amazon-list-bullet" style={{ marginBottom: '8px', color: '#e5e5e7' }}>Eggs collected and graded within hours of delivery</li>
            <li className="amazon-list-bullet" style={{ marginBottom: '8px', color: '#e5e5e7' }}>Transparent pricing and reliable support</li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid rgba(32, 139, 15, 0.2)' }}>
          <a 
            href="https://bibiniifarms.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="amazon-button-primary amazon-button"
          >
            Visit BibiniiFarms.com →
          </a>
          <Link href="/contact" className="amazon-button">
            Inquire About Project
          </Link>
        </div>
      </div>

      {/* Additional Info */}
      <div className="amazon-card-elevated" style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Interested in Collaboration?</h2>
        <p className="text-secondary" style={{ fontSize: '16px', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
          Whether you're interested in sustainable agriculture or looking to discuss potential partnerships, I'd love to hear from you.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="amazon-button-primary amazon-button">
            Get in Touch
          </Link>
          <Link href="/research" className="amazon-button">
            View Research
          </Link>
        </div>
      </div>
    </div>
  );
}
