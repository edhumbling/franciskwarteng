import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects - Francis Kwarteng',
  description: 'Professional projects by Francis Kwarteng, including BibiniFarms.com agricultural initiative.',
  keywords: 'Francis Kwarteng, Projects, BibiniFarms, Agriculture, Ghana, Farming',
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

      {/* BibiniFarms.com Project */}
      <div className="amazon-card-elevated" style={{ marginBottom: '40px', padding: '40px' }}>
        <div className="amazon-badge" style={{ marginBottom: '16px' }}>Agricultural Initiative</div>
        <h2 style={{ fontSize: '32px', marginBottom: '16px', color: '#ffffff' }}>BibiniFarms.com</h2>
        <h3 style={{ fontSize: '20px', marginBottom: '24px', color: '#208b0f' }}>
          Sustainable Agriculture & Community Development
        </h3>

        {/* Project Overview */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#ffffff' }}>Overview</h4>
          <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
            BibiniFarms.com represents an agricultural initiative focused on sustainable farming practices and community development. 
            The project integrates modern agricultural techniques with traditional farming wisdom to create a scalable and 
            sustainable food production system.
          </p>
        </div>

        {/* Key Features */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '18px', marginBottom: '16px', color: '#ffffff' }}>Key Features</h4>
          <div className="amazon-grid amazon-grid-2" style={{ gap: '16px' }}>
            <div className="amazon-card" style={{ padding: '20px' }}>
              <h5 style={{ fontSize: '16px', marginBottom: '8px', color: '#208b0f' }}>🌱 Sustainable Practices</h5>
              <p className="text-secondary" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                Implementation of eco-friendly farming methods that preserve soil health and promote biodiversity
              </p>
            </div>
            <div className="amazon-card" style={{ padding: '20px' }}>
              <h5 style={{ fontSize: '16px', marginBottom: '8px', color: '#208b0f' }}>🤝 Community Impact</h5>
              <p className="text-secondary" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                Creating employment opportunities and supporting local communities through agricultural development
              </p>
            </div>
            <div className="amazon-card" style={{ padding: '20px' }}>
              <h5 style={{ fontSize: '16px', marginBottom: '8px', color: '#208b0f' }}>🔬 Science-Driven</h5>
              <p className="text-secondary" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                Application of scientific principles to optimize crop yields and farming efficiency
              </p>
            </div>
            <div className="amazon-card" style={{ padding: '20px' }}>
              <h5 style={{ fontSize: '16px', marginBottom: '8px', color: '#208b0f' }}>💡 Innovation</h5>
              <p className="text-secondary" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                Integration of modern technology with traditional agricultural knowledge
              </p>
            </div>
          </div>
        </div>

        {/* Project Goals */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#ffffff' }}>Project Goals</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className="amazon-list-bullet" style={{ marginBottom: '8px', color: '#e5e5e7' }}>
              Promote sustainable agricultural practices in local communities
            </li>
            <li className="amazon-list-bullet" style={{ marginBottom: '8px', color: '#e5e5e7' }}>
              Improve food security through efficient farming methods
            </li>
            <li className="amazon-list-bullet" style={{ marginBottom: '8px', color: '#e5e5e7' }}>
              Create economic opportunities for farmers and agricultural workers
            </li>
            <li className="amazon-list-bullet" style={{ marginBottom: '8px', color: '#e5e5e7' }}>
              Educate and train the next generation of agricultural professionals
            </li>
            <li className="amazon-list-bullet" style={{ marginBottom: '8px', color: '#e5e5e7' }}>
              Develop scalable models for sustainable agriculture
            </li>
          </ul>
        </div>

        {/* Technologies & Methods */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#ffffff' }}>Technologies & Methods</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Crop Rotation', 'Organic Farming', 'Water Conservation', 'Soil Management', 'Integrated Pest Management', 'Sustainable Practices'].map((tech, index) => (
              <span key={index} style={{
                background: 'rgba(32, 139, 15, 0.15)',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                border: '1px solid rgba(32, 139, 15, 0.4)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid rgba(32, 139, 15, 0.2)' }}>
          <a 
            href="https://bibinifarms.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="amazon-button-primary amazon-button"
          >
            Visit BibiniFarms.com →
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
