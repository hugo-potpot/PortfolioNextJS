import React from 'react';

const AboutMeBox = () => {
    return (
        <div className="flex flex-col items-center justify-start pt-16">
            <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-lg w-full text-center">
                <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden">
                    <img
                        src="/image/pp.png" // Assurez-vous que le chemin est correct
                        alt="Your Image"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-xl text-black font-semibold mb-2">Hugo Potier</h1>
                    <p className="text-gray-600">
                        Développeur Web Junior
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeBox;
