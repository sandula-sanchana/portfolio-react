// ── Fill these in with your real details ────────────────────────────────
// GitHub is already set from your repo owner. Update the rest:
export const CONTACT_CONFIG = {
    githubUrl: "https://github.com/sandula-sanchana",

    // Your LinkedIn profile URL, e.g. "https://www.linkedin.com/in/sandula-sanchana"
    linkedinUrl: "https://www.linkedin.com/in/sandula-sanchana-010708371",

    // WhatsApp number in international format, digits only, no + or spaces
    // e.g. "94771234567" for a Sri Lankan number starting with 0771234567
    whatsappNumber: "94765371402",

    // The email you want contact-form messages sent to
    email: "sandulasanchanafernando@gmail.com",

    // Get a free key instantly at https://web3forms.com (just enter your
    // email, no account/signup needed, key arrives on screen right away)
    web3formsAccessKey: "c9857b6f-3c93-43ed-b247-d709f185cca0",
};

export const whatsappLink = (message = "") => {
    const base = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const mailtoLink = (subject = "", body = "") => {
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    const query = params.toString();
    return `mailto:${CONTACT_CONFIG.email}${query ? `?${query}` : ""}`;
};
