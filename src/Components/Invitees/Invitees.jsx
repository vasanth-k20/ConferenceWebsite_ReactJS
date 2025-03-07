import React, { useState } from 'react';
import './Invitees.css';

export default function Invitees() {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filterValue) => {
        setActiveFilter(filterValue);
    };

    const portfolioItems = [
        { id: 1, category: 'key', imgSrc: 'public/img/key1.jpg', title: 'Key Invitees' },
        { id: 2, category: 'key', imgSrc: 'public/img/key2.jpg', title: 'Key Invitees' },
        { id: 3, category: 'chief', imgSrc: 'public/img/chi1.jpg', title: 'Chief Patrons' },
        { id: 4, category: 'chief', imgSrc: 'public/img/chi2.jpg', title: 'Chief Patrons' },
        { id: 5, category: 'chief', imgSrc: 'public/img/chi3.jpg', title: 'Chief Patrons' },
        { id: 6, category: 'chief', imgSrc: 'public/img/chi4.jpg', title: 'Chief Patrons' },
    ];

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="portcontainer">
                <div className="portfolio-header">
                    <h3>
                        Take a Look at <span>Our Invitees</span>
                    </h3>
                </div>
                <div className="filter-section">
                    <h6></h6>
                    <ul className="filters">
                        {['all', 'key', 'chief'].map((filter) => (
                            <li key={filter}>
                                <span
                                    className={`filter ${activeFilter === filter ? 'active' : ''}`}
                                    onClick={() => handleFilterClick(filter)}
                                >
                                    {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1) + (filter === 'key' ? ' Invitees' : ' Patrons')}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="portfoliolist" className="portfolio-grid">
                    {portfolioItems
                        .filter((item) => activeFilter === 'all' || item.category === activeFilter)
                        .map((item) => (
                            <div
                                key={item.id}
                                className={`portfolio-item mix ${item.category}`}
                                style={{
                                    display: 'block',
                                    maxWidth: activeFilter === 'key' ? '400px' : '',
                                    margin: activeFilter === 'key' ? '0 auto' : '',
                                }}
                            >
                                <img src={item.imgSrc} alt={item.title} />
                                <div className="overlay">
                                    <h5>{item.title}</h5>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
