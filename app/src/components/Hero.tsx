import ClientComponentWrapper from "./ClientComponentWrapper";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
}

export default function Hero({
  title,
  subtitle,
  imageUrl,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  align = "center",
  size = "md",
}: HeroProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const paddingClasses = {
    sm: "py-12",
    md: "py-24",
    lg: "py-32",
  };

  return (
    <div className={`${paddingClasses[size]} bg-gray-50`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`max-w-3xl mx-auto ${alignClasses[align]}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          {subtitle && <p className="text-xl mb-8 text-gray-600">{subtitle}</p>}

          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-wrap gap-4 justify-center">
              {primaryButtonText && (
                <ClientComponentWrapper
                  componentType="Button"
                  props={{
                    variant: "primary",
                    size: "lg",
                    navigationUrl: primaryButtonUrl,
                  }}
                  children={primaryButtonText}
                />
              )}

              {secondaryButtonText && (
                <ClientComponentWrapper
                  componentType="Button"
                  props={{
                    variant: "outline",
                    size: "lg",
                    navigationUrl: secondaryButtonUrl,
                  }}
                  children={secondaryButtonText}
                />
              )}
            </div>
          )}
        </div>

        {imageUrl && (
          <div className="mt-12">
            <img
              src={imageUrl}
              alt="Hero"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}
