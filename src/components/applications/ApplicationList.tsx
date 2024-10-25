import { CheckCircle, Clock, XCircle } from 'lucide-react';

const SAMPLE_APPLICATIONS = [
  {
    id: 1,
    property: 'Modern Downtown Apartment',
    applicant: 'John Smith',
    status: 'approved',
    date: '2024-02-25',
    score: 750,
  },
  {
    id: 2,
    property: 'Luxury Beach House',
    applicant: 'Jane Doe',
    status: 'pending',
    date: '2024-02-24',
    score: 680,
  },
  {
    id: 3,
    property: 'Cozy Studio in Hollywood',
    applicant: 'Mike Johnson',
    status: 'rejected',
    date: '2024-02-23',
    score: 550,
  },
];

export function ApplicationList() {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden mt-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Property
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Applicant
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Score
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {SAMPLE_APPLICATIONS.map((application) => (
            <tr key={application.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {application.property}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {application.applicant}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${application.status === 'approved' ? 'bg-green-100 text-green-800' : ''}
                  ${application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${application.status === 'rejected' ? 'bg-red-100 text-red-800' : ''}
                `}>
                  {application.status === 'approved' && <CheckCircle className="h-4 w-4 mr-1" />}
                  {application.status === 'pending' && <Clock className="h-4 w-4 mr-1" />}
                  {application.status === 'rejected' && <XCircle className="h-4 w-4 mr-1" />}
                  {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(application.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {application.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}