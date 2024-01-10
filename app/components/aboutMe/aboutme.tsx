import React from 'react';

const AboutMeBox = () => {
    return (
        <div className="flex flex-col items-center justify-start pt-16">
            <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-lg w-full text-center">
                <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden">
                    <img
                        src="/image/pp.jpeg" // Assurez-vous que le chemin est correct
                        alt="Your Image"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">About Me</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod odio in ipsum
                        placerat, et consectetur metus convallis. Phasellus convallis erat vitae fermentum
                        placerat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeBox;
