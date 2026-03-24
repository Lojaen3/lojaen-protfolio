/**
 * Contact form — no custom backend required.
 *
 * Pick ONE:
 * 1) Web3Forms (recommended): https://web3forms.com — free, emails you instantly
 *    Set VITE_WEB3FORMS_ACCESS_KEY in .env
 * 2) Formspree: https://formspree.io — set VITE_FORMSPREE_FORM_ID
 * 3) Mailto fallback: set VITE_CONTACT_EMAIL — opens the visitor's email app with a pre-filled message
 */

export async function createContactMessage({ name, email, message }) {
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (web3Key) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: web3Key,
        subject: `Portfolio contact from ${name}`,
        name,
        email,
        message,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === false) {
      throw new Error(data.message || "Could not send message. Check your Web3Forms key.");
    }
    return { ok: true, provider: "web3forms" };
  }

  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
  if (formId) {
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio: ${name}`,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Could not send via Formspree.");
    }
    return { ok: true, provider: "formspree" };
  }

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
  if (contactEmail) {
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${encodeURIComponent(contactEmail)}?subject=${subject}&body=${body}`;
    return { ok: true, provider: "mailto" };
  }

  throw new Error(
    "Contact form is not configured. Locally: add VITE_WEB3FORMS_ACCESS_KEY (or VITE_FORMSPREE_FORM_ID / VITE_CONTACT_EMAIL) to .env. " +
      "On GitHub Pages: add the same names as repository secrets (Settings → Secrets and variables → Actions), then redeploy."
  );
}
