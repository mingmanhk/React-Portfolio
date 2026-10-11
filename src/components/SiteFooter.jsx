import { useEffect, useState } from "react";
import { fetchTotalViews } from "../analytics";
import { useContent } from "../i18n";

export default function SiteFooter() {
  const { ui } = useContent();
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
      {views && <p>{ui.views(views)}</p>}
      <a href={`${import.meta.env.BASE_URL}privacy-policy.html`}>{ui.privacy}</a>
      <p className="site-footer__disclaimer">
        {ui.disclaimer}
      </p>
    </footer>
  );
}
