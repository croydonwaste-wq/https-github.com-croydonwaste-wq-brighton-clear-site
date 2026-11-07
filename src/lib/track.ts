/**
 * Conversion events. Pushes to window.dataLayer (GTM) and calls gtag (GA4) if either
 * is installed; does nothing otherwise. No personal data is sent.
 */
type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const payload = { page_path: window.location.pathname, ...params };
  try {
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: name, ...payload });
    if (typeof window.gtag === "function") window.gtag("event", name, payload);
  } catch {
    /* never block the user */
  }
}

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // must match supabase/functions/submit-quote
export const ALLOWED_UPLOAD_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/heic"];

/** Split selected files into accepted and rejected (with a reason) to mirror server rules. */
export function checkUploads(files: File[]) {
  const ok: File[] = [];
  const rejected: string[] = [];
  for (const f of files) {
    if (f.size > MAX_UPLOAD_BYTES) rejected.push(`${f.name} is over 10MB`);
    else if (f.type && !ALLOWED_UPLOAD_TYPES.includes(f.type)) rejected.push(`${f.name} isn't a JPG, PNG, WebP or HEIC image`);
    else ok.push(f);
  }
  return { ok, rejected };
}
