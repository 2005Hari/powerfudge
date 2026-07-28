"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function InquiryForm() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground">
            Request a <span className="text-primary italic">Proposal</span>
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Whether you need 50 boxes for your executive team or 5,000 for a company-wide initiative, we can scale to your needs. Fill out the form, and our concierge will be in touch within 24 hours.
          </p>
          <div className="p-6 bg-card border border-border/50 mt-8">
            <h3 className="font-medium text-foreground mb-2">Direct Contact</h3>
            <p className="text-muted-foreground text-sm font-light">corporate@powerfudge.com</p>
            <p className="text-muted-foreground text-sm font-light">+91 98765 43210</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-card p-8 border border-border/50"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">First Name</label>
                <input type="text" className="w-full h-12 bg-background border border-border/50 px-4 focus:outline-none focus:border-primary transition-colors text-foreground" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Last Name</label>
                <input type="text" className="w-full h-12 bg-background border border-border/50 px-4 focus:outline-none focus:border-primary transition-colors text-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Company Name</label>
              <input type="text" className="w-full h-12 bg-background border border-border/50 px-4 focus:outline-none focus:border-primary transition-colors text-foreground" />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Estimated Quantity</label>
              <select className="w-full h-12 bg-background border border-border/50 px-4 focus:outline-none focus:border-primary transition-colors text-foreground appearance-none">
                <option>25 - 100 boxes</option>
                <option>100 - 500 boxes</option>
                <option>500+ boxes</option>
              </select>
            </div>

            <Button type="submit" className="w-full h-14 rounded-none tracking-widest text-lg bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
              SUBMIT INQUIRY
            </Button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
