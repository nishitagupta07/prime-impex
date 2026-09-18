import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import hero from "@/assets/stone-architecture.jpg";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Prime Impex Stones | Jaipur, India" },
      {
        name: "description",
        content:
          "Contact Prime Impex Stones in Jaipur for Indian marble, granite and quartzite enquiries and global supply partnerships.",
      },
      {
        property: "og:title",
        content: "Let's Talk Stone | Prime Impex Stones",
      },
      {
        property: "og:description",
        content:
          "Have a project in mind? Contact our natural stone team in Jaipur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);
    setNotice("");

    const formData = new FormData(form);

    const googleForm = document.createElement("form");

    googleForm.action =
      "https://docs.google.com/forms/d/e/1FAIpQLSeXyZA2PIdH6PkFTs-5p7AXj_aJkt_k2iQwCxMeD5crwCH0kg/formResponse";

    googleForm.method = "POST";
    googleForm.target = "google-form-hidden";
    googleForm.style.display = "none";

    const fields = {
      "entry.205420986": "Product Enquiry",
      "entry.1733444443": formData.get("name")?.toString() || "",
      "entry.1347453523": formData.get("email")?.toString() || "",
      "entry.303042199": formData.get("phone")?.toString() || "",
      "entry.1385374908": formData.get("company")?.toString() || "",
      "entry.1406498487": formData.get("country")?.toString() || "",
      "entry.177137703": formData.get("product")?.toString() || "",
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");

      input.type = "hidden";
      input.name = name;
      input.value = value;

      googleForm.appendChild(input);
    });

    document.body.appendChild(googleForm);

    googleForm.submit();

    setTimeout(() => {
      googleForm.remove();
      setSubmitting(false);

      setNotice(
        "Thank you! Your enquiry has been submitted successfully. Our team will contact you soon."
      );

      form.reset();
    }, 1000);
  }

  const fields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
    },
    {
      name: "company",
      label: "Company Name",
      type: "text",
    },
    {
      name: "country",
      label: "Country",
      type: "text",
      required: true,
    },
    {
      name: "product",
      label: "Product / Stone Interested In",
      type: "text",
    },
  ];

  const GOOGLE_FEEDBACK_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeXyZA2PIdH6PkFTs-5p7AXj_aJkt_k2iQwCxMeD5crwCH0kg/viewform?usp=publish-editor";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s Talk Stone"
        subtitle="Have a project in mind? We’d love to hear from you."
        image={hero}
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[.75fr_1.25fr] lg:px-8 lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
            Prime Impex Stones
          </p>

          <h2 className="mt-4 text-5xl">Begin your enquiry.</h2>

          <div className="mt-10 space-y-7 text-sm leading-7 text-muted-foreground">
            <p className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-bronze" />
              {company.address}
            </p>

            <p className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-bronze" />

              <span>
                <a
                  href={`tel:+91${company.phones[0]}`}
                  className="hover:text-foreground"
                >
                  {company.phones[0]}
                </a>

                <br />

                <a
                  href={`tel:+91${company.phones[1]}`}
                  className="hover:text-foreground"
                >
                  {company.phones[1]}
                </a>
              </span>
            </p>

            <a
              href={`mailto:${company.email}`}
              className="flex gap-4 hover:text-foreground"
            >
              <Mail className="mt-1 size-5 shrink-0 text-bronze" />
              {company.email}
            </a>

            <p>Instagram: {company.instagram}</p>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="grid gap-6 sm:grid-cols-2"
          noValidate
        >
          {fields.map((field) => (
            <label
              key={field.name}
              className="grid gap-2 text-xs font-semibold uppercase tracking-[0.1em]"
            >
              {field.label}

              <Input
                name={field.name}
                type={field.type}
                required={field.required}
                maxLength={field.name === "email" ? 255 : 100}
              />
            </label>
          ))}

          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.1em] sm:col-span-2">
            Message

            <Textarea name="message" required maxLength={1500} />
          </label>

          <div className="sm:col-span-2">
            <Button
              type="submit"
              variant="bronze"
              size="lg"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Enquiry"}
            </Button>

            {notice && (
              <p
                role="status"
                className="mt-5 border-l-2 border-bronze pl-4 text-sm leading-6 text-muted-foreground"
              >
                {notice}
              </p>
            )}
          </div>
        </form>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
              We Value Your Feedback
            </p>

            <h2 className="mt-4 text-4xl">Help us serve you better.</h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Your feedback helps us improve our products, service and
              customer experience.
            </p>
          </div>

          <div className="md:text-right">
            <Button asChild variant="bronze" size="lg">
              <a
                href={GOOGLE_FEEDBACK_FORM_URL}
                target="_blank"
                rel="noreferrer"
              >
                Give Your Feedback <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid min-h-80 place-items-center border border-border bg-stone p-8 text-center">
          <div>
            <MapPin className="mx-auto size-8 text-bronze" />

            <h2 className="mt-5 text-4xl">Jaipur, Rajasthan</h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
              {company.address}
            </p>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-7"
            >
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  company.address
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <iframe
        name="google-form-hidden"
        title="Google Form submission"
        style={{ display: "none" }}
      />
    </>
  );
}