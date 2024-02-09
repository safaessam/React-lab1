
import React from 'react';
import html2pdf from 'html2pdf.js';
import './Bio.css';
import Button from './Button';   
              
              class BioSection extends React.Component {
                handleDownloadResume = () => {
                  const element = document.body;
              
                  html2pdf(element, {
                    margin: 1,
                    filename: 'resume.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { dpi: 192, letterRendering: true },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                  });
                };
              
                render() {
                  return (
                    <section id="bio" className="py-5">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6">
                            <h2 className="display-4">About Me</h2>
                            <p>
              I am a highly skilled and motivated Full Stack Engineer with 4 months of experience in designing and developing web applications. My passion for coding and problem-solving has driven me to become proficient in both front-end and back-end development. I thrive in dynamic and collaborative environments, where I can leverage my strong analytical and communication skills to deliver high-quality solutions
              </p>
                          </div>
                          <div className="col-lg-6">
                            <Button text="Download Resume" onClick={this.handleDownloadResume} />
                          </div>
                        </div>
                      </div>
                    </section>
                  );
                }
              }
              
              export default BioSection;
              