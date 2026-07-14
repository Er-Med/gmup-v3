import { SITE } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

const FORM_FIELDS = [
  {
    id: "your-name",
    label: "Nom",
    type: "text",
    auto: "family-name",
    placeholder: "Votre nom",
  },
  {
    id: "your-firstname",
    label: "Prénom",
    type: "text",
    auto: "given-name",
    placeholder: "Votre prénom",
  },
  {
    id: "your-specialty",
    label: "Spécialité",
    type: "text",
    placeholder: "Votre spécialité",
  },
  {
    id: "your-city",
    label: "Ville",
    type: "text",
    auto: "address-level2",
    placeholder: "Votre ville",
  },
  {
    id: "your-email",
    label: "Email",
    type: "email",
    auto: "email",
    placeholder: "Votre email",
  },
  {
    id: "your-ppr",
    label: "PPR / INPE / Autre",
    type: "text",
    placeholder: "Votre Code PPR ou INPE",
  },
] as const;

export function EventRegistrationCard() {
  return (
    <div>
      <h2 className="sr-only" id="inscription-title">
        Inscription
      </h2>

      <form
        className="flex flex-col gap-4"
        action="#"
        method="post"
        aria-labelledby="inscription-title"
      >
        {FORM_FIELDS.map((field) => (
          <div key={field.id} className="flex flex-col gap-1.5">
            <label
              htmlFor={field.id}
              className="font-sans text-[0.9375rem] font-semibold leading-snug text-gmup-teal"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={"auto" in field ? field.auto : undefined}
              className={cn(
                "rounded-md border border-gmup-navy/20 bg-white px-3.5 py-2.5 text-body transition-colors placeholder:text-muted focus:border-gmup-teal focus:outline-none focus:ring-2 focus:ring-gmup-teal/15",
                typography.body,
              )}
            />
          </div>
        ))}

        <div className="mt-2 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <button
            type="submit"
            className={cn(
              "inline-flex shrink-0 items-center justify-center rounded-lg bg-gmup-teal px-10 py-4 text-[1.125rem] text-white transition hover:bg-[#0c7a81] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal",
              "font-sans font-semibold leading-none tracking-[0.025em]",
            )}
          >
            Envoyer
          </button>

          <div
            className={cn(
              "min-w-0 text-left",
              typography.small,
              "leading-relaxed text-gmup-navy",
            )}
          >
            <p>{SITE.organizer.name}</p>
            <p>
              Tél:{" "}
              <a
                href={`tel:${SITE.organizer.phone}`}
                className="text-gmup-navy transition hover:text-gmup-teal"
              >
                {SITE.organizer.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${SITE.organizer.email}`}
                className="text-gmup-navy transition hover:text-gmup-teal"
              >
                {SITE.organizer.email}
              </a>
            </p>
            <p>
              <a
                href={SITE.organizer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gmup-navy transition hover:text-gmup-teal"
              >
                {SITE.organizer.website.replace(/^https?:\/\//, "")}
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
