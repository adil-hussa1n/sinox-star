import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import emailjs from 'emailjs-com';

export default function Career() {
  const [jobRole, setJobRole] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [cvFile, setCvFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const jobDescriptions = {
    'Business Development Manager': 'A business development manager works in strategic planning, sales management, and prospecting for new clients to help grow an organization.',
    'Marketing Manager': 'Oversees the marketing department, develops marketing strategies, and manages campaigns to promote the company’s products or services.',
    'Customer Support Manager': 'Leads the customer support team, ensures customer satisfaction, and resolves customer issues promptly.',
  };

  const handleJobRoleChange = (e) => {
    const selectedRole = e.target.value;
    setJobRole(selectedRole);
    setJobDescription(jobDescriptions[selectedRole] || '');
  };

  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCvFile(file);
    }
  };

  const cancelCvUpload = () => {
    setCvFile(null);
  };

  const uploadCvFile = async (file) => {
    try {
      const filePath = `cvs/${file.name}`;
      const storageRef = ref(storage, filePath);
      await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(storageRef);
      return fileUrl;
    } catch (error) {
      console.error("Upload failed:", error);
      throw new Error('Failed to upload CV. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cvFile) {
      setAlert({ type: 'error', message: 'Please upload your CV.' });
      return;
    }

    setIsLoading(true);
    setAlert({ type: '', message: '' });

    try {
      const fileUrl = await uploadCvFile(cvFile);

      await emailjs.send(
        'service_lb9ag4j', // Your EmailJS service ID
        'template_x1257ds', // Your EmailJS template ID
        {
          to_name: 'Recipient Name', // Replace with dynamic value if needed
          from_name: 'Applicant Name', // Replace with dynamic value if needed
          jobRole,
          jobDescription,
          cvFile: fileUrl, // URL of the uploaded CV
        },
        'Nq3uMAr3k43Gi7a2m' // Your EmailJS user ID
      );

      setAlert({ type: 'success', message: 'Application submitted successfully!' });
    } catch (error) {
      console.error("Failed to submit the application:", error);
      setAlert({ type: 'error', message: `Failed to submit the application: ${error.message}` });
    } finally {
      setIsLoading(false);
      setJobRole('');
      setJobDescription('');
      setCvFile(null);

      setTimeout(() => {
        setAlert({ type: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="Career" className="career-section-card">
      <div className="career-content-wrapper">
        <div className="career-left-side">
          <h2 className="career-left-heading">Why Join Us?</h2>
          <p className="career-left-description">
            We are a forward-thinking company that values innovation and creativity. Join us to grow your career, work on exciting projects, and be part of a team that makes a difference.
          </p>
          <ul className="career-benefits-list">
            <li><i className="fa fa-briefcase"></i> Professional Development Opportunities</li>
            <li><i className="fa fa-clock"></i> Flexible Work Environment</li>
            <li><i className="fa fa-heartbeat"></i> Health and Wellness Programs</li>
            <li><i className="fa fa-globe"></i> Inclusive and Diverse Culture</li>
          </ul>
        </div>
        <div className="career-right-side">
          <div className="career-header">
            <h1 className="career-heading-card">Career Opportunities</h1>
            <p className="career-subheader-card">Sinox will sponsor for skilled worker visa for eligible applicants from overseas</p>
          </div>
          <div className="career-card">
            <h1 className="career-heading-card">Join Our Team</h1>
            <p className="career-subtitle-card">
              Become a part of our dynamic team and grow your career with us.
            </p>
            <form onSubmit={handleSubmit} className="career-form-card">
              <div className="career-form-group-card">
                <label htmlFor="jobRole" className="career-label-card">Job Role</label>
                <select
                  id="jobRole"
                  name="jobRole"
                  value={jobRole}
                  onChange={handleJobRoleChange}
                  className="career-select-card"
                  aria-label="Select job role"
                  required
                >
                  <option value="" disabled hidden>Select a job role</option>
                  <option value="Business Development Manager">Business Development Manager</option>
                  <option value="Marketing Manager">Marketing Manager</option>
                  <option value="Customer Support Manager">Customer Support Manager</option>
                </select>
              </div>
              <div className="career-form-group-card">
                <label htmlFor="jobDescription" className="career-label-card">Job Description</label>
                <p className="career-job-description-card">{jobDescription}</p>
              </div>
              <div className="career-form-group-card">
                <label htmlFor="cvUpload" className="career-label-card">Upload CV</label>
                <div className="career-upload-wrapper">
                  <input
                    type="file"
                    id="cvUpload"
                    name="cvFile"
                    onChange={handleCvUpload}
                    accept=".pdf,.doc,.docx"
                    className="career-input-card"
                    aria-label="Upload CV"
                    required
                  />
                  {cvFile && (
                    <button type="button" onClick={cancelCvUpload} className="cancel-cv-button" aria-label="Cancel CV upload">
                      &times;
                    </button>
                  )}
                </div>
              </div>
              <button type="submit" className="career-submit-button-card" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
            {alert.message && (
              <div className={`alert ${alert.type === 'error' ? 'alert-error' : 'alert-success'}`}>
                <p>{alert.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

