import { whatsappLink } from "../config";

export default function WhatsAppFab() {
  const link = whatsappLink("Hi AutoHub, I'd like to make an enquiry.");
  return (
    <a
      className="wa-fab"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/>
        <path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.08-1.33A10 10 0 1 0 12 2zm0 18.2c-1.5 0-2.98-.4-4.27-1.16l-.31-.18-3.02.79.81-2.94-.2-.31A8.2 8.2 0 1 1 12 20.2z"/>
      </svg>
    </a>
  );
}
