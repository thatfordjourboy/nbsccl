import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="py-32 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="text-blue-600 underline underline-offset-4">Back to Home</Link>
    </section>
  );
}
