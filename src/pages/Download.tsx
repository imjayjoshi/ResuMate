import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Navigation } from "@/components/Navigation";
import { 
  Download as DownloadIcon, 
  FileText, 
  File, 
  Share2, 
  Mail, 
  Link2,
  CheckCircle,
  Star,
  Eye
} from "lucide-react";

const Download = () => {
  const navigate = useNavigate();
  const [selectedFormats, setSelectedFormats] = useState({
    pdf: true,
    docx: false,
    txt: false
  });
  const [isDownloading, setIsDownloading] = useState(false);

  const formats = [
    {
      id: "pdf",
      name: "PDF",
      description: "Most compatible format for ATS systems",
      icon: FileText,
      recommended: true,
      size: "245 KB"
    },
    {
      id: "docx",
      name: "Word Document",
      description: "Editable format for further customization",
      icon: File,
      recommended: false,
      size: "320 KB"
    },
    {
      id: "txt",
      name: "Plain Text",
      description: "Simple text format for quick copying",
      icon: FileText,
      recommended: false,
      size: "12 KB"
    }
  ];

  const handleFormatChange = (formatId: string, checked: boolean) => {
    setSelectedFormats(prev => ({ ...prev, [formatId]: checked }));
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsDownloading(false);
    
    // In a real app, this would trigger actual file downloads
    console.log("Downloaded formats:", Object.keys(selectedFormats).filter(key => selectedFormats[key]));
  };

  const shareOptions = [
    {
      id: "email",
      name: "Email",
      description: "Send resume via email",
      icon: Mail,
      action: () => console.log("Share via email")
    },
    {
      id: "link",
      name: "Share Link",
      description: "Generate shareable link",
      icon: Link2,
      action: () => console.log("Generate share link")
    },
    {
      id: "social",
      name: "Social Media",
      description: "Share on LinkedIn or other platforms",
      icon: Share2,
      action: () => console.log("Share on social media")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-12 h-12 text-accent mr-3" />
            <h1 className="text-4xl font-bold">Resume Ready!</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your ATS-optimized resume is ready for download. Choose your preferred 
            formats and start applying to your dream jobs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {/* Resume Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Resume Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-6 aspect-[8.5/11] max-h-96 overflow-hidden">
                <div className="text-center space-y-2 text-sm">
                  <h3 className="font-bold text-lg">John Doe</h3>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                  <p className="text-xs text-muted-foreground">
                    john.doe@email.com | (555) 123-4567 | LinkedIn: linkedin.com/in/johndoe
                  </p>
                  
                  <div className="border-t border-border pt-4 mt-4 text-left">
                    <h4 className="font-semibold mb-2">PROFESSIONAL SUMMARY</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Passionate Full Stack Developer with 3+ years of experience building 
                      scalable web applications using React, Node.js, and modern development practices...
                    </p>
                    
                    <h4 className="font-semibold mb-2 mt-4">TECHNICAL SKILLS</h4>
                    <div className="flex flex-wrap gap-1">
                      {["JavaScript", "React", "Node.js", "Python", "SQL"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Button variant="outline" className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  View Full Preview
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Download Options */}
          <Card>
            <CardHeader>
              <CardTitle>Download Formats</CardTitle>
              <p className="text-muted-foreground">
                Select the formats you need. We recommend PDF for most job applications.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {formats.map((format) => (
                  <div key={format.id} className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-smooth">
                    <Checkbox
                      id={format.id}
                      checked={selectedFormats[format.id]}
                      onCheckedChange={(checked) => handleFormatChange(format.id, checked as boolean)}
                    />
                    <format.icon className="w-6 h-6 text-primary" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor={format.id} className="font-medium cursor-pointer">
                          {format.name}
                        </Label>
                        {format.recommended && (
                          <Badge variant="secondary" className="text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            Recommended
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{format.description}</p>
                      <p className="text-xs text-muted-foreground">File size: {format.size}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <Button 
                  className="cta-primary px-8"
                  disabled={!Object.values(selectedFormats).some(Boolean) || isDownloading}
                  onClick={handleDownload}
                >
                  {isDownloading ? (
                    <>
                      <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                      Preparing Download...
                    </>
                  ) : (
                    <>
                      <DownloadIcon className="w-4 h-4 mr-2" />
                      Download Selected Formats
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Share Options */}
          <Card>
            <CardHeader>
              <CardTitle>Share Your Resume</CardTitle>
              <p className="text-muted-foreground">
                Share your resume directly or generate links for easy distribution.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {shareOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center space-y-2 hover:border-primary transition-smooth"
                    onClick={option.action}
                  >
                    <option.icon className="w-6 h-6 text-primary" />
                    <div className="text-center">
                      <p className="font-medium">{option.name}</p>
                      <p className="text-xs text-muted-foreground">{option.description}</p>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-accent">What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Job Application Tips:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Customize your resume for each job application</li>
                    <li>• Use keywords from the job description</li>
                    <li>• Follow up within 1-2 weeks after applying</li>
                    <li>• Keep track of your applications</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Continue Building:</h4>
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start"
                      onClick={() => navigate('/builder')}
                    >
                      Create Another Resume
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start"
                      onClick={() => navigate('/templates')}
                    >
                      Browse More Templates
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start"
                      onClick={() => navigate('/profile')}
                    >
                      Manage Your Resumes
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Success Alert */}
          <Alert className="border-accent/20 bg-accent/5">
            <CheckCircle className="h-4 w-4 text-accent" />
            <AlertDescription className="text-accent-foreground">
              <strong>Congratulations!</strong> Your resume has achieved an ATS score of 85/100. 
              You're ready to start applying to jobs with confidence.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default Download;