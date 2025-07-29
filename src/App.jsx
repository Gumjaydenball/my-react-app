import React, { useState } from 'react';
import myImage from './assets/images/Contact.png';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const pages = {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact'
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#FEF7ED',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      margin: 0,
      padding: 0
    }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: '#FBCFE8',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div style={{
          maxWidth: '896px',
          margin: '0 auto',
          padding: '16px 24px'
        }}>
          <div style={{
            display: 'flex',
            gap: '32px'
          }}>
            {Object.entries(pages).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                style={{
                  fontSize: '18px',
                  fontWeight: currentPage === key ? '600' : '400',
                  color: currentPage === key ? '#DB2777' : '#4B5563',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#DB2777'}
                onMouseLeave={(e) => {
                  if (currentPage !== key) {
                    e.target.style.color = '#4B5563';
                  }
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main style={{
        maxWidth: '896px',
        margin: '0 auto',
        padding: '48px 24px'
      }}>
        {renderPage()}
      </main>
    </div>
  );
};

const HomePage = () => (
  <div style={{ textAlign: 'center' }}>
    <h1 style={{
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '24px',
      margin: '0 0 24px 0',
    }}>
      Reliable Contract Support for Nonprofits, Government,
      and Private Teams
    </h1>
    <h1 style={{
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '24px',
      margin: '0 0 24px 0',
    }}>
      Administrative, Operational, and Project-Based Services 
      Backed by 20+ Years of Experience
    </h1>
    <p style={{
      fontSize: '20px',
      color: '#4B5563',
      lineHeight: '1.6'
    }}>
      I’m Nikia Coley, a strategic operations 
      and administrative professional with over 
      two decades of cross-sector experience. I 
      specialize in keeping organizations running 
      smoothly behind the scenes. From supporting 
      public agencies and executive leaders to managing 
      nonprofit systems and insurance operations, I bring 
      structure, clarity, and efficiency to every engagement.
      Whether you need project oversight, back-office support, 
      or help serving your members or customers, I’m here to help.
    </p>

    <img src={myImage} alt="Description" 
      width= "300px"
      height= "auto"
  />

  </div>
);

const AboutPage = () => (
  <div>
    <h1 style={{
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '24px',
      margin: '0 0 24px 0'
    }}>
      About
    </h1>
    <p style={{
      fontSize: '18px',
      color: '#4B5563',
      marginBottom: '16px',
      lineHeight: '1.6'
    }}>
I’ve built a career helping organizations improve 
how they work, with a background spanning the nonprofit, 
public, and private sectors. My approach is rooted in 
problem-solving, operational structure, and strong 
relationship management. Whether I’m supporting an 
executive director, board of directors, running a 
major event, or streamlining a membership database, 
my focus is on efficiency and accuracy.
    </p>
    <p style={{
      fontSize: '18px',
      color: '#4B5563',
      lineHeight: '1.6',
      fontWeight: 'bold',
    }}>
      I’ve worked with:
    </p>
      <p style={{
      fontSize: '18px',
      color: '#4B5563',
      lineHeight: '1.6'
    }}>
      <ul>
        <li>
          National Nonprofits – where I led internal 
          operations, managed technology systems, and 
          supported fundraising, communications, and events.
        </li>
        <li>
          Public Agencies – where I served as Assistant to 
          the Board in a contracting capacity, handling 
          board preparation, compliance documentation, and 
          event coordination.
        </li>
        <li>
          Insurance Operations – where I trained and supervised 
          Property & Casualty customer service teams and supported 
          homeowners and flood insurance programs.
        </li>
      </ul>
      I bring loyalty, clarity, and integrity to every 
      partnership. I value organizations that serve a 
      purpose and I take pride in being a behind-the-scenes 
      force that helps them do it better.
    </p>
    <p style={{
      fontSize: '18px',
      color: '#4B5563',
      lineHeight: '1.6',
      fontWeight: 'bold',
    }}>
      My Tools and Training:
    </p>
    <p style={{
      fontSize: '18px',
      color: '#4B5563',
      lineHeight: '1.6',}}>
      <ul>
        <li>
          MBA, Business Administration – Walden University
        </li>
        <li>
          BA, Business Administration – Strayer University
        </li>
        <li>
          Tools: QuickBooks, MemberClicks, Asana, Trello, 
          G-Suite, Microsoft 365, Canva, Constant Contact, 
          Mailchimp, Survey Monkey, Jotform, Eleo, Claris 
          Filemaker, ClickUp
        </li>
        <li>
          Virtual event & CRM platforms | Insurance & 
          public sector systems | Process documentation 
          & project tracking
        </li>
      </ul>
    </p>
  </div>
);

const ServicesPage = () => (
  <div>
    <h1 style={{
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '24px',
      margin: '0 0 24px 0'
    }}>
      Services
    </h1>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '8px',
          margin: '0 0 8px 0',
          color: '#1F2937'
        }}>
          Operations & Project Management
        </h3>
        <p style={{
          color: '#4B5563',
          lineHeight: '1.5',
          margin: 0
        }}>
          Support for internal workflows, vendor 
          coordination, and mission-critical projects.
          <ul>
            <li>
              Process development and documentation
            </li>
            <li>
              Budget tracking and invoicing
            </li>
            <li>
              RFPs and vendor management
            </li>
            <li>
              System migrations
            </li>
            <li>
              Project oversight 
            </li>
          </ul>
          <i>
            Highlights:
          </i>
          <ul>
            <li>
              Negotiated vendor contracts and 
              handled vendor invoicing and payments. 
              Oversaw the launch and tracking of a 
              national publication through a member-based 
              organization.
            </li>
          </ul>
        </p>
      </div>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '8px',
          margin: '0 0 8px 0',
          color: '#1F2937'
        }}>
          Administrative & Executive Support
        </h3>
        <p style={{
          color: '#4B5563',
          lineHeight: '1.5',
          margin: 0
        }}>
          Reliable assistance for executives, 
          boards, and teams across sectors.
          <ul>
            <li>
              Calendar and inbox management
            </li>
            <li>
              Board Support, meeting prep, and minutes
            </li>
            <li>
              Travel coordination and logistics
            </li>
            <li>
              Internal communications
            </li>
            <li>
              Data entry and compliance support
            </li>
          </ul>
          <i>
            Highlights:
          </i>
          <ul>
            Provided executive-level support for 
            nonprofit and public sector agencies, 
            including board packet preparation, 
            interagency correspondence, and public-sector 
            compliance tasks.
          </ul>
        </p>
      </div>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '8px',
          margin: '0 0 8px 0',
          color: '#1F2937'
        }}>
          Public Sector & Government Support
        </h3>
        <p style={{
          color: '#4B5563',
          lineHeight: '1.5',
          margin: 0
        }}>
          Contracting services tailored to 
          government agencies and regulatory environments.
          <ul>
            <li>
              Administrative support for directors and administrators
            </li>
            <li>
              Legal filing coordination
            </li>
            <li>
              Puvlic records and secure data workflows
            </li>
            <li>
              Policy and customer support for regulated products
            </li>
            <li>
              Agenda prep, board documentation, and agency communications
            </li>
          </ul>
          <i>
            Highlights:
          </i>
          <ul>
            <li>
              Supported high-level public agency operations, 
              coordinated compliance documentation, and 
              handled sensitive executive workflows.
            </li>
          </ul>
        </p>
      </div>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '8px',
          margin: '0 0 8px 0',
          color: '#1F2937'
        }}>
          Membership, Communications & Events
        </h3>
        <p style={{
          color: '#4B5563',
          lineHeight: '1.5',
          margin: 0
        }}>
          Helping mission-driven organizations stay connected and engaged.
          <ul>
            <li>
              Membership processing, renewals, and support
            </li>
            <li>
              Email campaign coordination and segmentation
            </li>
            <li>
              Virtual and in-person event planning
            </li>
            <li>
              Account updates and compliance tracking
            </li>
            <li>
              CRM and policy software proficiency
            </li>
          </ul>
          <i>
            Highlights:
          </i>
          <ul>
            <li>
              Managed and trained customer service teams. 
              Specialized in homeowners and flood insurance, 
              ensuring quality assurance and training for compliance.
            </li>
          </ul>
        </p>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div>
    <h1 style={{
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '24px',
      margin: '0 0 24px 0'
    }}>
      Contact
    </h1>
    <div style={{
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }}>
      <p style={{
        fontSize: '18px',
        color: '#4B5563',
        marginBottom: '16px',
        lineHeight: '1.6'
      }}>
        Get in touch with me:
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ color: '#4B5563', margin: 0 }}>Email: ncoley1978@gmail.com</p>
      </div>
    </div>
  </div>
);

export default App;