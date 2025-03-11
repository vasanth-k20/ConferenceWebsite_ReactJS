import React, { useState } from 'react';
import './PaperSub.css';
import Avenue from '../../../Avenue/Avenue';

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
            setFormData({ ...formData, PaperFile: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.Papertitle);
        formDataToSend.append('fullName', formData.AuthorFullName);
        formDataToSend.append('mobileNumber', formData.AuthorMobile);
        formDataToSend.append('email', formData.AuthorEmail);
        formDataToSend.append('institution', formData.AuthorInstitution);
        formDataToSend.append('firstAuthorCategory', formData.AuthorCategory);
        formDataToSend.append('file', formData.PaperFile);

        try {
            const response = await fetch('http://localhost:5000/api/submit-paper', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.json();

            if (response.ok) {
                setMessage(result.message);
                setMessageType('alert-success');
                setFormData({
                    Papertitle: '',
                    AuthorFullName: '',
                    AuthorMobile: '',
                    AuthorEmail: '',
                    AuthorInstitution: '',
                    AuthorCategory: '',
                    PaperFile: null,
                });
            } else {
                setMessage(result.error || 'Paper submission failed.');
                setMessageType('alert-danger');
            }
        } catch (error) {
            console.error('Error submitting paper:', error);
            setMessage('An error occurred while submitting your paper.');
            setMessageType('alert-danger');
        }
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
                    backgroundImage: 'url("public/img/bannerauthor.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mask w-100 h-100 d-flex flex-column justify-content-center align-items-center">
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
                            <li><span class="check-icon"><i class="fa-solid fa-circle-check"></i></span> Papers must be written in English</li>
                            <li><span class="check-icon"><i class="fa-solid fa-circle-check"></i></span> Maximum length: 8 pages including figures and references</li>
                            <li><span class="check-icon"><i class="fa-solid fa-circle-check"></i></span> Use the IEEE conference format</li>
                            <li><span class="check-icon"><i class="fa-solid fa-circle-check"></i></span> Submit in PDF, Docx, PPTX format</li>
                            <li><span class="check-icon"><i class="fa-solid fa-circle-check"></i></span> Include abstract (max 250 words)</li>
                            <li><span class="check-icon"><i class="fa-solid fa-circle-check"></i></span> Blind all author information for review</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h2>Important Notes</h2>
                        <ul>
                            <li><span class="info-icon"><i class="fa-solid fa-circle-info"></i></span> All papers undergo a double-blind peer review process</li>
                            <li><span class="info-icon"><i class="fa-solid fa-circle-info"></i></span> At least one author must register for the conference</li>
                            <li><span class="info-icon"><i class="fa-solid fa-circle-info"></i></span> Plagiarism checks will be performed</li>
                            <li><span class="info-icon"><i class="fa-solid fa-circle-info"></i></span> Multiple submissions are not allowed</li>
                            <li><span class="info-icon"><i class="fa-solid fa-circle-info"></i></span> Authors must present accepted papers at the conference</li>
                            <li><span class="info-icon"><i class="fa-solid fa-circle-info"></i></span> Papers will be published in the conference proceedings</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Avenue/>
            </div>
        </div>
    );
}
