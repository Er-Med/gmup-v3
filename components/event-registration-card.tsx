import { SITE } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

const FORM_FIELDS = [
  { id: "your-name", label: "Nom", type: "text", auto: "family-name" },
  { id: "your-firstname", label: "Prénom", type: "text", auto: "given-name" },
  { id: "your-specialty", label: "Spécialité", type: "text" },
  { id: "your-city", label: "Ville", type: "text", auto: "address-level2" },
  { id: "your-email", label: "Email", type: "email", auto: "email" },
  { id: "your-ppr", label: "PPR / INPE / Autre", type: "text" },
] as const;

export function EventRegistrationCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gmup-teal/15 bg-white/80 backdrop-blur-sm">
      <div className="px-6 pt-6 pb-5 lg:px-7 lg:pt-7">
        <h2 className={typography.h3} id="inscription-title">
          Inscription
        </h2>
        <div
          className="mt-4 h-0.5 w-10 rounded-full bg-gmup-coral/75"
          aria-hidden
        />
        <p className={cn("mt-4", typography.small)}>
          Réservez votre place pour cette journée scientifique.
        </p>
      </div>

      <div className="px-6 pb-6 lg:px-7 lg:pb-7">
        <form
          className="flex flex-col gap-5"
          action="#"
          method="post"
          aria-labelledby="inscription-title"
        >
          {FORM_FIELDS.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <label htmlFor={field.id} className={typography.label}>
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                autoComplete={"auto" in field ? field.auto : undefined}
                className={cn(
                  "rounded-xl border border-gmup-navy/10 bg-gmup-navy-soft/50 px-4 py-3.5 text-body transition-colors placeholder:text-muted focus:border-gmup-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-gmup-teal/15",
                  typography.body,
                )}
              />
            </div>
          ))}
          <button
            type="submit"
            className={cn(
              "mt-1 w-full rounded-xl bg-gmup-navy px-5 py-4 uppercase tracking-[0.06em] text-white transition hover:bg-gmup-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal",
              typography.button,
            )}
          >
            Envoyer
          </button>
        </form>
      </div>

      <div className="border-t border-gmup-navy/8 px-6 py-5 lg:px-7 lg:py-6">
        <p className={typography.eyebrow}>Organisateur</p>
        <div className={cn("mt-3 flex flex-col gap-2", typography.small, "text-body")}>
          <p>
            <strong className={typography.name}>{SITE.organizer.name}</strong>
          </p>
          <p>
            Tél:{" "}
            <a
              href={`tel:${SITE.organizer.phone}`}
              className={cn(
                typography.link,
                "text-heading transition hover:text-gmup-teal",
              )}
            >
              {SITE.organizer.phoneDisplay}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${SITE.organizer.email}`}
              className={cn(
                typography.link,
                "text-heading transition hover:text-gmup-teal",
              )}
            >
              {SITE.organizer.email}
            </a>
          </p>
          <p>
            <a
              href={SITE.organizer.website}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                typography.link,
                "text-heading transition hover:text-gmup-teal",
              )}
            >
              {SITE.organizer.website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
