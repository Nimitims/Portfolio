import { Link } from 'react-router-dom';

export function NotFoundPage() {
    return (
        <div className="bg-white relative size-full flex items-center justify-center" style={{ minHeight: '100vh' }}>
            <div className="text-center">
                <h1 className="text-[48px] mb-4">Page not found</h1>
                <p className="mb-6 text-[#5c5c5c]">The page you were looking for does not exist.</p>
                <Link to="/" className="px-4 py-2 bg-black text-white rounded">Go back home</Link>
            </div>
        </div>
    );
}
