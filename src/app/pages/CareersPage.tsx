import React from 'react';

export default function CareersPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Careers at Cairds</h1>
      <p className="text-lg text-gray-700 mb-6">Join our award-winning team! We are always looking for talented, motivated individuals to join Cairds. Check back soon for current job opportunities.</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Sales Negotiators</li>
        <li>Lettings Consultants</li>
        <li>Property Managers</li>
        <li>Marketing & Admin roles</li>
      </ul>
      <p className="mt-6">To apply, email your CV to <a href="mailto:careers@cairds.co.uk" className="text-rose-600 underline">careers@cairds.co.uk</a></p>
    </div>
  );
}
