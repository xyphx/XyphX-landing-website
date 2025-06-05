import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";   // shadcn toast ⬅️

interface TechInterestFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  org_name: string;
  tech_interest: string;
  phone: string;
  email: string;
  portfolio?: string;
}

const fieldVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function TechInterestFormPopup({
  isOpen,
  onClose,
}: TechInterestFormPopupProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/apply/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Application submitted",
          description: "🎉 We’ll get back to you soon.",
          className: "border border-purple-600 bg-neutral-900 text-white",
          duration: 5000, 
        });
        reset();
        onClose();
      } else {
       toast({
          variant: "destructive",
          title: "Submission failed",
          description: result.error || "Something went wrong. Try again.",
          className: "border border-purple-600 bg-neutral-900 text-white",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Network error",
        description: "Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  /* ------------------------- field config ------------------------- */
  const formFields = [
    {
      label: "Name*",
      name: "name",
      type: "text",
      error: errors.name,
      validation: { required: "Required" },
    },
    {
      label: "Organization / Club / College Name*",
      name: "org_name",
      type: "text",
      error: errors.org_name,
      validation: { required: "Required" },
    },
    {
      label: "Interested Technology*",
      name: "tech_interest",
      type: "text",
      error: errors.tech_interest,
      validation: { required: "Required" },
    },
    {
      label: "Phone Number*",
      name: "phone",
      type: "tel",
      error: errors.phone,
      validation: {
        required: "Required",
        pattern: {
          value: /^[+0-9\s-]{7,15}$/,
          message: "Invalid phone number",
        },
      },
    },
    {
      label: "Email*",
      name: "email",
      type: "email",
      error: errors.email,
      validation: {
        required: "Required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Invalid email address",
        },
      },
    },
    {
      label: "Portfolio URL (optional)",
      name: "portfolio",
      type: "url",
      error: errors.portfolio,
      validation: {
        pattern: {
          value:
            /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/[\w\d-./?%&=]*)?$/,
          message: "Invalid URL",
        },
      },
    },
  ] as const;
  /* --------------------------------------------------------------- */

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000CC] p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg"
          >
            <Card className="bg-black/90 border-purple-600/70 backdrop-blur-lg w-full">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-400 text-center">
                  Apply to join XyphX
                </h3>

                {/* -------- loading spinner overlay -------- */}
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-16">
                    <p className="text-purple-300 mb-4">
                      Submitting your application...
                      </p>
                    <Loader2 className="h-10 w-10 animate-spin text-purple-400" />
                  </div>
                ) : (
                  /* -------- actual form -------- */
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="text-white"
                  >
                    {formFields.map((field, i) => (
                      <motion.div
                        key={field.name}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={fieldVariants}
                      >
                        <label className="block mb-1 text-purple-300">
                          {field.label}
                        </label>
                        <input
                          {...register(
                            field.name as keyof FormData,
                            field.validation
                          )}
                          type={field.type}
                          disabled={loading}
                          className={`w-full p-3 rounded-md bg-purple-900 bg-opacity-30 border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                            field.error
                              ? "border-red-500"
                              : "border-purple-700"
                          }`}
                        />
                        {field.error && (
                          <p className="text-red-500 mt-1 text-sm">
                            {field.error.message}
                          </p>
                        )}
                      </motion.div>
                    ))}

                    <div className="flex justify-between items-center mt-6">
                      <Button
                        type="button"
                        variant="secondary"
                        disabled={loading}
                        onClick={() => {
                          reset();
                          onClose();
                        }}
                        className="border-2 border-purple-600 bg-gray-900 hover:bg-purple-600 text-white px-6 py-2 rounded transition-all duration-200"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white px-8 py-2 rounded transition-all duration-200"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
