import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const linkedinURL = process.env.LINKEDIN;
    const email = process.env.EMAIL;

    return (
        <footer className="bg-gray-925 text-white py-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                <div>
                    <p>Hugo Potier - Tous droits réservés</p>
                </div>
                <div className="flex items-center">
                    <a
                        href={linkedinURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white mr-4"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="text-gray-400 hover:text-white"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
