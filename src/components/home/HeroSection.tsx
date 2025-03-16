import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  description?: string;
  browseReportsLabel?: string;
  subscriptionPlansLabel?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Access Expert Research & Insights",
  description = "Discover comprehensive research reports from leading industry experts. Subscribe for unlimited access or purchase individual reports to make informed decisions.",
  browseReportsLabel = "Browse Reports",
  subscriptionPlansLabel = "View Subscription Plans",
  backgroundImage = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[400px] bg-slate-100 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => (window.location.href = "/categories")}
            >
              {browseReportsLabel}
            </Button>
            <div className="relative w-full max-w-md">
              <Input
                type="search"
                placeholder="Search for reports..."
                className="h-11 pl-4 pr-10 bg-white/10 border-white text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-1 top-1/2 -translate-y-1/2 text-white h-9 w-9"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
