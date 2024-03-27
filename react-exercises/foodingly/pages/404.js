import Link from 'next/link';
import HeadPage from '@/components/HeadPage';
import routes from '@/constants/routes';

export default function NotFoundPage() {
  return (
    <>
      <HeadPage title="Page not found" />
      <div className="Not-found">
        <div className="Not-found-content">
          <div className="Not-found-container">
            <h2 className="Not-found-title">Page Not Found</h2>
            <p className="Not-found-text">
              Looks like you've followed a broken link or entered a URL that
              doesn't exist on this site.
            </p>
            <Link className="Not-found-link" href={routes.home}>
              Back to our site
            </Link>
          </div>
          <div className="Not-found-text">
            <span>
              If this is your site, and you weren't expecting a 404 for this
              path, please visit Netlify's
            </span>
            <Link className="Not-found-link" href={routes.pageNotFound}>
              "page not found" support guide
            </Link>
            <span>for troubleshooting tips.</span>
          </div>
        </div>
      </div>
    </>
  );
}
