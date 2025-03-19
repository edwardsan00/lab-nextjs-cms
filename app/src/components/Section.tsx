import { Container } from "@dynamic-page-renderer/ui";

interface SectionProps {
  title?: string;
  subtitle?: string;
  background?: "white" | "light" | "dark" | "primary";
  centered?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Section({
  title,
  subtitle,
  background = "white",
  centered = false,
  fullWidth = false,
  children,
}: SectionProps) {
  const bgStyles = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-800 text-white",
    primary: "bg-blue-600 text-white",
  };

  return (
    <section className={`py-12 ${bgStyles[background]}`}>
      <Container maxWidth={fullWidth ? "full" : "xl"}>
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? "text-center" : ""}`}>
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
          </div>
        )}
        <div>{children}</div>
      </Container>
    </section>
  );
}
