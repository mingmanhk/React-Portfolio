import { useEffect, useState } from "react";
import { fetchTotalViews } from "../analytics";

export default function SiteFooter() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchTotalViews().then((count) => !cancelled && setViews(count));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Victor Lam</p>
      {views && <p>{views} {views === "1" ? "page view" : "page views"}</p>}
      <a href={`${import.meta.env.BASE_URL}privacy-policy.html`}>Privacy</a>
      <p className="site-footer__disclaimer">
        This is a personal website. Views are my own and do not represent the City of Lakewood.
      </p>
    </footer>
  );
}
