import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Navigation } from "@/components/Navigation";
import { ChevronLeft, ChevronRight, Plus, Trash2, Save, Eye } from "lucide-react";

const Builder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      portfolio: "",
    },
    summary: "",
    experience: [
      { company: "", position: "", duration: "", description: "" }
    ],
    education: [
      { institution: "", degree: "", year: "", gpa: "" }
    ],
    skills: [""],
    projects: [
      { name: "", description: "", technologies: "", link: "" }
    ],
  });

  const steps = [
    { id: 1, title: "Personal Info", description: "Basic contact information" },
    { id: 2, title: "Summary", description: "Professional summary" },
    { id: 3, title: "Experience", description: "Work experience" },
    { id: 4, title: "Education", description: "Educational background" },
    { id: 5, title: "Skills", description: "Technical and soft skills" },
    { id: 6, title: "Projects", description: "Notable projects" },
    { id: 7, title: "Review", description: "Final review" },
  ];

  const progress = (currentStep / steps.length) * 100;

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: "", position: "", duration: "", description: "" }]
    }));
  };

  const removeExperience = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { institution: "", degree: "", year: "", gpa: "" }]
    }));
  };

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, { name: "", description: "", technologies: "", link: "" }]
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, ""]
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={resumeData.personal.fullName}
                  onChange={(e) => setResumeData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, fullName: e.target.value }
                  }))}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={resumeData.personal.email}
                  onChange={(e) => setResumeData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, email: e.target.value }
                  }))}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={resumeData.personal.phone}
                  onChange={(e) => setResumeData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, phone: e.target.value }
                  }))}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={resumeData.personal.location}
                  onChange={(e) => setResumeData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, location: e.target.value }
                  }))}
                  placeholder="City, State"
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  value={resumeData.personal.linkedin}
                  onChange={(e) => setResumeData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, linkedin: e.target.value }
                  }))}
                  placeholder="linkedin.com/in/johndoe"
                />
              </div>
              <div>
                <Label htmlFor="portfolio">Portfolio/Website</Label>
                <Input
                  id="portfolio"
                  value={resumeData.personal.portfolio}
                  onChange={(e) => setResumeData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, portfolio: e.target.value }
                  }))}
                  placeholder="johndoe.com"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea
                id="summary"
                value={resumeData.summary}
                onChange={(e) => setResumeData(prev => ({ ...prev, summary: e.target.value }))}
                placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."
                rows={6}
              />
              <p className="text-sm text-muted-foreground mt-2">
                Tip: Include 2-3 sentences about your experience, skills, and what you're looking for.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold">Experience {index + 1}</h4>
                  {resumeData.experience.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeExperience(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => {
                        const newExp = [...resumeData.experience];
                        newExp[index].company = e.target.value;
                        setResumeData(prev => ({ ...prev, experience: newExp }));
                      }}
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <Label>Position</Label>
                    <Input
                      value={exp.position}
                      onChange={(e) => {
                        const newExp = [...resumeData.experience];
                        newExp[index].position = e.target.value;
                        setResumeData(prev => ({ ...prev, experience: newExp }));
                      }}
                      placeholder="Job Title"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Duration</Label>
                    <Input
                      value={exp.duration}
                      onChange={(e) => {
                        const newExp = [...resumeData.experience];
                        newExp[index].duration = e.target.value;
                        setResumeData(prev => ({ ...prev, experience: newExp }));
                      }}
                      placeholder="Jan 2023 - Present"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Description</Label>
                    <Textarea
                      value={exp.description}
                      onChange={(e) => {
                        const newExp = [...resumeData.experience];
                        newExp[index].description = e.target.value;
                        setResumeData(prev => ({ ...prev, experience: newExp }));
                      }}
                      placeholder="Describe your key responsibilities and achievements..."
                      rows={4}
                    />
                  </div>
                </div>
              </Card>
            ))}
            <Button onClick={addExperience} variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Experience
            </Button>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Review Your Resume</h3>
              <p className="text-muted-foreground">
                Review all sections of your resume before proceeding to ATS evaluation.
              </p>
            </div>
            
            <Card className="p-6">
              <h4 className="font-semibold mb-2">Personal Information</h4>
              <p className="text-sm text-muted-foreground">
                {resumeData.personal.fullName} • {resumeData.personal.email}
              </p>
            </Card>

            <div className="flex gap-4">
              <Button 
                className="cta-secondary flex-1"
                onClick={() => navigate('/ats-evaluation')}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview Resume
              </Button>
              <Button 
                className="cta-primary flex-1"
                onClick={() => navigate('/ats-evaluation')}
              >
                Check ATS Score
              </Button>
            </div>
          </div>
        );

      default:
        return <div>Step content for step {currentStep}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Resume Builder</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Step {currentStep} of {steps.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Steps Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-4">
              <h3 className="font-semibold mb-4">Steps</h3>
              <div className="space-y-2">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`step-card cursor-pointer ${
                      currentStep === step.id ? "active" : ""
                    }`}
                    onClick={() => setCurrentStep(step.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        currentStep === step.id 
                          ? "bg-primary-foreground text-primary" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {step.id}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{step.title}</p>
                        <p className="text-xs opacity-75">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>{steps[currentStep - 1]?.title}</CardTitle>
                <p className="text-muted-foreground">
                  {steps[currentStep - 1]?.description}
                </p>
              </CardHeader>
              
              <CardContent className="px-0">
                {renderStepContent()}
              </CardContent>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <Button
                  className="cta-primary"
                  onClick={() => {
                    if (currentStep === steps.length) {
                      navigate('/ats-evaluation');
                    } else {
                      setCurrentStep(Math.min(steps.length, currentStep + 1));
                    }
                  }}
                >
                  {currentStep === steps.length ? "Complete" : "Next"}
                  {currentStep !== steps.length && <ChevronRight className="w-4 h-4 ml-2" />}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;