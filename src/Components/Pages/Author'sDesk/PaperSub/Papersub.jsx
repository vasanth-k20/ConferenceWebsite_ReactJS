import React, { useState } from 'react';
import './PaperSub.css';

export default function PaperSubmission() {
    const [formData, setFormData] = useState({
        Papertitle: '',
        AuthorFullName: '',
        AuthorMobile: '',
        AuthorEmail: '',
        AuthorInstitution: '',
        AuthorCategory: '',
        PaperFile: null,
    });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'PaperFile') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        setMessage('Paper submitted successfully!');
        setMessageType('alert-success');
    };

    return (
        <div>
            {/* Background Image Section */}
            <div
                id="intro-example"
                className="img-fluid"
                style={{
                    height: '30vh',
                    width: '100%',
                    backgroundImage: 'url("/img/bannerauthor.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mask w-100 h-100 bg-dark bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
                    <div className="text-white text-center px-3">
                        <h2 className="fw-bold display-5 text-uppercase text-light">New Paper Submission</h2>
                        <div className="divider mx-auto my-3"></div>
                    </div>
                </div>
            </div>

            <div className="main_container">
                {/* Paper Submission form */}
                <section className="container">
                    {/* Alert for Messages */}
                    {message && (
                        <div className="error">
                            <div className={`alert ${messageType}`}>
                                {message}
                            </div>
                        </div>
                    )}

                    {/* Paper Submission Form */}
                    <h3 className="form-heading">Paper Submission</h3>

                    <div className="form-container">
                        <div className="form-card">
                            <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                                <div className="form-group">
                                    <label className="form-label fw-bold">Paper Title *</label>
                                    <input
                                        name="Papertitle"
                                        className="form-control shadow-sm fs-5"
                                        value={formData.Papertitle}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-bold">Author Full Name *</label>
                                    <input
                                        name="AuthorFullName"
                                        className="form-control shadow-sm fs-5"
                                        value={formData.AuthorFullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-bold">Author Mobile Number *</label>
                                    <input
                                        name="AuthorMobile"
                                        className="form-control shadow-sm fs-5"
                                        value={formData.AuthorMobile}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-bold">Author Email Address *</label>
                                    <input
                                        name="AuthorEmail"
                                        className="form-control shadow-sm fs-5"
                                        value={formData.AuthorEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-bold">Author Institution Name *</label>
                                    <input
                                        name="AuthorInstitution"
                                        className="form-control shadow-sm fs-5"
                                        value={formData.AuthorInstitution}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-bold">Author Category *</label>
                                    <select
                                        name="AuthorCategory"
                                        className="form-select shadow-sm fs-5"
                                        value={formData.AuthorCategory}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">-- Select Category --</option>
                                        <option value="student">Student</option>
                                        <option value="faculty">Faculty</option>
                                        <option value="researcher">Researcher</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-bold"> Upload Paper *</label>
                                    <input
                                        type="file"
                                        name="PaperFile"
                                        className="form-control shadow-sm fs-5"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-button">
                                    <button type="submit">Submit Paper</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <div className="guide_container">
                    <p className="p">Follow these guidelines to submit your research paper</p>
                    <div className="card">
                        <h2>Submission Guidelines</h2>
                        <ul>
                            <li>Papers must be written in English</li>
                            <li>Maximum length: 8 pages including figures and references</li>
                            <li>Use the IEEE conference format</li>
                            <li>Submit in PDF, Docx, PPTX format</li>
                            <li>Include abstract (max 250 words)</li>
                            <li>Blind all author information for review</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h2>Important Notes</h2>
                        <ul>
                            <li>All papers undergo a double-blind peer review process</li>
                            <li>At least one author must register for the conference</li>
                            <li>Plagiarism checks will be performed</li>
                            <li>Multiple submissions are not allowed</li>
                            <li>Authors must present accepted papers at the conference</li>
                            <li>Papers will be published in the conference proceedings</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
