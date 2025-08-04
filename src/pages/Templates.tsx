import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Eye, Download, Star } from "lucide-react";

const Templates = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Templates" },
    { id: "tech", label: "Technology" },
    { id: "business", label: "Business" },
    { id: "creative", label: "Creative" },
    { id: "healthcare", label: "Healthcare" },
    { id: "education", label: "Education" },
  ];

  const templates = [
    {
      id: 1,
      name: "Modern Tech",
      category: "tech",
      description: "Clean, modern design perfect for software developers and engineers",
      rating: 4.8,
      downloads: 2543,
      image: "/placeholder.svg",
      tags: ["ATS-Friendly", "Modern", "Clean"],
      premium: false,
    },
    {
      id: 2,
      name: "Executive Pro",
      category: "business",
      description: "Professional template for business executives and managers",
      rating: 4.9,
      downloads: 1876,
      image: "/placeholder.svg",
      tags: ["Professional", "Executive", "Premium"],
      premium: true,
    },
    {
      id: 3,
      name: "Creative Portfolio",
      category: "creative",
      description: "Showcase your creativity with this vibrant design template",
      rating: 4.7,
      downloads: 987,
      image: "/placeholder.svg",
      tags: ["Creative", "Portfolio", "Colorful"],
      premium: false,
    },
    {
      id: 4,
      name: "Medical Professional",
      category: "healthcare",
      description: "Tailored for healthcare professionals and medical practitioners",
      rating: 4.6,
      downloads: 756,
      image: "/placeholder.svg",
      tags: ["Healthcare", "Professional", "Clean"],
      premium: false,
    },
  ];

  const filteredTemplates = selectedCategory === "all" 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resume Templates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of professionally designed, ATS-optimized templates
            tailored for different industries and career levels.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-smooth"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="feature-card group">
              <CardHeader className="pb-3">
                <div className="aspect-[3/4] bg-muted rounded-lg mb-4 relative overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="space-x-2">
                      <Button size="sm" variant="secondary">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button 
                        size="sm" 
                        className="cta-primary"
                        onClick={() => navigate('/builder', { state: { templateId: template.id } })}
                      >
                        Use Template
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  {template.premium && (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      Premium
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-3">
                  {template.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {template.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    {template.rating}
                  </div>
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {template.downloads.toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-6">
            Our AI can create a custom template based on your specific needs and industry.
          </p>
          <Button 
            className="cta-primary" 
            onClick={() => navigate('/builder')}
          >
            Create Custom Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Templates;