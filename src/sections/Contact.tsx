import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ContactItem from "../components/ContactItem";
import { contactInfo } from "../data/contact";
import { Phone, Mail, MapPin, Download } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const contentRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = contactInfo.resumeUrl;
    link.download = "刘芳羽_个人简历.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Contact" subtitle="联系方式" />

        <div
          ref={contentRef}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="reveal-item">
              <ContactItem
                icon={Phone}
                label="Phone"
                value={contactInfo.phone}
                href={`tel:${contactInfo.phone}`}
              />
            </div>
            <div className="reveal-item">
              <ContactItem
                icon={Mail}
                label="Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
            </div>
            <div className="reveal-item">
              <ContactItem icon={MapPin} label="Location" value={contactInfo.location} />
            </div>
          </div>

          <div className="reveal-item text-center">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-cream font-medium rounded-full overflow-hidden transition-all duration-500 hover:shadow-glow-pink hover:-translate-y-1 disabled:opacity-70 disabled:hover:-translate-y-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Download size={20} className="relative z-10" />
              <span className="relative z-10">
                {downloading ? "下载中..." : "下载 PDF 简历"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
