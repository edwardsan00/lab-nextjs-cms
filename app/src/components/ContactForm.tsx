"use client";

import React, { useState } from "react";
import { Button, Input, Card } from "@dynamic-page-renderer/ui";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  submitButtonText?: string;
  successMessage?: string;
  fields?: {
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    subject?: boolean;
    message?: boolean;
  };
  onSubmit?: (data: any) => Promise<void>;
}

export default function ContactForm({
  title = "Contáctanos",
  subtitle = "Completa el formulario y nos pondremos en contacto contigo lo antes posible.",
  submitButtonText = "Enviar mensaje",
  successMessage = "¡Gracias! Tu mensaje ha sido enviado correctamente.",
  fields = {
    name: true,
    email: true,
    phone: false,
    subject: true,
    message: true,
  },
  onSubmit,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (fields.name && !formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (fields.email && !formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (fields.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (fields.subject && !formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    }

    if (fields.message && !formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      }

      // Simulación de envío si no hay onSubmit
      if (!onSubmit) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setErrors({
        form: "Ocurrió un error al enviar el formulario. Inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6">
      {!isSubmitted ? (
        <>
          {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

          {errors.form && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {errors.form}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.name && (
              <Input
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                fullWidth
              />
            )}

            {fields.email && (
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                fullWidth
              />
            )}

            {fields.phone && (
              <Input
                label="Teléfono"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                fullWidth
              />
            )}

            {fields.subject && (
              <Input
                label="Asunto"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                fullWidth
              />
            )}

            {fields.message && (
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : submitButtonText}
            </Button>
          </form>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="mb-4 text-green-500">
            <svg
              className="w-16 h-16 mx-auto"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">¡Enviado con éxito!</h3>
          <p className="text-gray-600">{successMessage}</p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setIsSubmitted(false)}
          >
            Enviar otro mensaje
          </Button>
        </div>
      )}
    </Card>
  );
}
