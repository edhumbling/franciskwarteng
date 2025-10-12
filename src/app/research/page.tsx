import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research - Francis Kwarteng',
  description: 'Academic research publications by Francis Kwarteng, including master\'s thesis on Giardia lamblia translation initiation and phage genomics research.',
  keywords: 'Francis Kwarteng, Research, Giardia lamblia, Translation Initiation, Phage Genomics, Master Thesis, ULM',
};

export default function ResearchPage() {
  const researchPapers = [
    {
      title: 'Characterization of the Novel Protein-Protein Interaction Between GleIF4E2 and GleIF2β',
      subtitle: 'Master of Science Thesis in Biology',
      institution: 'University of Louisiana at Monroe',
      date: 'May 2023',
      description: 'This thesis investigates the molecular mechanism of translation initiation in Giardia lamblia, a human parasite causing intestinal diarrheal disease. Using GST pull-down assays, the research characterizes protein-protein interactions between GleIF4E2 and components of the preinitiation complex, revealing how the preinitiation complex is recruited to mRNA in the absence of eIF4G.',
      pdfUrl: 'https://ik.imagekit.io/humbling/5th%20Edit%20PQ.pdf',
      type: 'Thesis',
    },
    {
      title: 'Annotation and Comparative Analysis of Two Cluster DJ Phages',
      subtitle: 'Isolated From Different Gordonia Host Species',
      institution: '2021 SEA Symposium, University of Louisiana at Monroe',
      date: '2021',
      authors: 'Todd Spears, Anne Marie Hancock, Zachary Wiggins, Mohammad S. Aktar, Quoc-Nam Duong, Jessie Grazier, JaKerick Johnson, Khadeja-tul Kubra, Francis Kwarteng, Sagor Roy, Christopher R. Gissendanner, Ann M. Findley',
      description: 'Comparative genomics research on bacteriophages isolated from Gordonia species, contributing to the SEA-PHAGES program for undergraduate research in phage genomics.',
      pdfUrl: 'https://ik.imagekit.io/humbling/2021_ULOM_Spears.docx',
      type: 'Abstract',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="amazon-card-elevated" style={{ marginBottom: '40px', padding: '40px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '16px', textAlign: 'center' }}>Research Publications</h1>
        <p className="text-secondary" style={{ fontSize: '16px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Academic research focused on molecular biology, parasitology, and microbial genomics
        </p>
      </div>

      {/* Research Papers */}
      {researchPapers.map((paper, index) => (
        <div key={index} style={{ marginBottom: '60px' }}>
          {/* Paper Header */}
          <div className="amazon-card" style={{ marginBottom: '20px', padding: '30px' }}>
            <div className="amazon-badge" style={{ marginBottom: '16px' }}>{paper.type}</div>
            <h2 style={{ fontSize: '28px', marginBottom: '12px', color: '#ffffff' }}>{paper.title}</h2>
            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: '#e5e5e7' }}>{paper.subtitle}</h3>
            
            <div style={{ marginBottom: '16px' }}>
              <p style={{ color: '#208b0f', fontSize: '14px', marginBottom: '4px' }}>
                {paper.institution}
              </p>
              <p style={{ color: '#a1a1a6', fontSize: '14px' }}>
                {paper.date}
              </p>
            </div>

            {paper.authors && (
              <div style={{ marginBottom: '16px' }}>
                <p style={{ color: '#a1a1a6', fontSize: '13px', lineHeight: '1.6' }}>
                  <strong>Authors:</strong> {paper.authors}
                </p>
              </div>
            )}

            <p style={{ color: '#e5e5e7', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
              {paper.description}
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href={paper.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="amazon-button-primary amazon-button"
              >
                Open Document
              </a>
              <Link href="/contact" className="amazon-button">
                Discuss Research
              </Link>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="amazon-card" style={{ padding: '0', overflow: 'hidden', minHeight: '1000px', background: '#1a1a1a' }}>
            <div style={{ padding: '16px', borderBottom: '1px solid rgba(32, 139, 15, 0.2)', background: '#000306' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <p style={{ color: '#ffffff', fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>
                    📄 Full Document Viewer
                  </p>
                  <p style={{ color: '#a1a1a6', fontSize: '12px' }}>
                    Scroll to navigate • Zoom available
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <a 
                    href={paper.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="amazon-button"
                    style={{ fontSize: '13px', padding: '8px 16px' }}
                  >
                    Open in New Tab ↗
                  </a>
                  <a 
                    href={paper.pdfUrl} 
                    download
                    className="amazon-button-primary amazon-button"
                    style={{ fontSize: '13px', padding: '8px 16px' }}
                  >
                    Download PDF ⬇
                  </a>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '1000px', background: '#2a2a2a' }}>
              <iframe
                src={`${paper.pdfUrl}#view=FitH&toolbar=1&navpanes=1&scrollbar=1`}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                }}
                title={paper.title}
                allowFullScreen
                loading="eager"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Call to Action */}
      <div className="amazon-card-elevated" style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Interested in Collaboration?</h2>
        <p className="text-secondary" style={{ fontSize: '16px', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
          I'm always open to discussing research opportunities in molecular biology, parasitology, and translational medicine.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="amazon-button-primary amazon-button">
            Get in Touch
          </Link>
          <Link href="/about" className="amazon-button">
            View Full Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

