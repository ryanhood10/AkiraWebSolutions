import React from 'react';

const CaseStudies = () => {
    return (
        <div className="flex justify-center space-x-4">
            <div className="w-1/4 h-auto bg-gray-100 p-4 rounded">
                <img src="/path/to/image1.jpg" alt="Case Study 1" className="w-full h-auto rounded"/>
            </div>
            <div className="w-1/4 h-auto bg-gray-100 p-4 rounded">
                <img src="/path/to/image2.jpg" alt="Case Study 2" className="w-full h-auto rounded"/>
            </div>
            <div className="w-1/4 h-auto bg-gray-100 p-4 rounded">
                <img src="/path/to/image3.jpg" alt="Case Study 3" className="w-full h-auto rounded"/>
            </div>
        </div>
    );
}

export default CaseStudies;
