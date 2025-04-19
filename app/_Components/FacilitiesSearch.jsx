"use client";

import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FacilitiesSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-2xl mx-auto flex gap-4"
    >
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search facilities..."
          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white px-8 rounded-xl flex items-center gap-2 group"
      >
        Search
        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </form>
  );
}
