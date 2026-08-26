import { Mail } from "lucide-react";
import { MailtoLink } from "@/components/ui/MailtoLink";

interface EmailButtonProps {
  email: string;
  subject: string;
  className?: string;
}

/** Botão principal da seção Contato. O fallback vive no MailtoLink. */
export function EmailButton({ email, subject, className = "" }: EmailButtonProps) {
  return (
    <MailtoLink
      email={email}
      subject={subject}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_var(--color-accent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep hover:shadow-[0_14px_38px_-12px_var(--color-accent)] focus-visible:outline-offset-4 ${className}`}
    >
      <Mail className="h-4 w-4" aria-hidden="true" />
      Enviar e-mail
    </MailtoLink>
  );
}
