import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Upload, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const QuoteDialog = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).slice(0, 10 - files.length);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Add files to FormData
      files.forEach((file) => {
        formData.append('files', file);
      });

      // Add consent
      formData.append('consentGiven', 'true');

      const { data, error } = await supabase.functions.invoke('submit-quote', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 2 hours. For urgent requests, please WhatsApp us.",
      });
      
      setOpen(false);
      setFiles([]);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="font-semibold">
          Get a Fast Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Get Your Free Quote</DialogTitle>
          <DialogDescription>
            Send us photos for the most accurate quote. We'll respond within 2 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" required placeholder="John Smith" />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="07123 456789" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required placeholder="john@example.com" />
          </div>

          <div>
            <Label htmlFor="postcode">Postcode *</Label>
            <Input id="postcode" name="postcode" required placeholder="BN1 1AA" />
          </div>

          <div>
            <Label htmlFor="datetime">Preferred Date & Time</Label>
            <Input id="datetime" name="preferredDatetime" type="datetime-local" />
          </div>

          <div>
            <Label htmlFor="access">Access Notes</Label>
            <Input id="access" name="accessNotes" placeholder="e.g., 2nd floor, parking available, gate code" />
          </div>

          <div>
            <Label htmlFor="description">Details about your gutters *</Label>
            <Textarea
              id="description"
              name="description"
              required
              placeholder="Please describe your gutter cleaning needs (property type, gutter length, access notes, etc.)..."
              rows={4}
            />
          </div>

          <div>
            <Label>Upload Photos (up to 10 images)</Label>
            <div className="mt-2">
              <label
                htmlFor="file-upload"
                className="flex cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-muted-foreground/25 p-6 transition-colors hover:border-muted-foreground/50"
              >
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Click to upload (JPG, PNG, HEIC)
                  </p>
                  <p className="text-xs text-muted-foreground">Max 20MB per file</p>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/jpeg,image/png,image/heic"
                  onChange={handleFileChange}
                  disabled={files.length >= 10}
                />
              </label>
              {files.length > 0 && (
                <div className="mt-3 space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2"
                    >
                      <span className="truncate text-sm">{file.name}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="consent" required />
            <label
              htmlFor="consent"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I consent to be contacted via phone, email or text regarding my quote request.
            </label>
          </div>

          <div className="flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Quote Request'}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Or for immediate help:{" "}
              <a href="https://wa.me/441273569347" className="text-primary hover:underline">
                WhatsApp us
              </a>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
