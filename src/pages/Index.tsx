import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { 
  Zap, 
  Target, 
  FileText, 
  TrendingUp, 
  CheckCircle, 
  Users, 
  Award,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Builder",
      description: "Our advanced AI analyzes job descriptions and creates tailored resumes that match exactly what employers are looking for.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "ATS Optimization", 
      description: "Get past applicant tracking systems with our ATS-optimized templates and real-time scoring system.",
      color: "text-accent"
    },
    {
      icon: FileText,
      title: "Industry Templates",
      description: "Choose from professionally designed templates crafted specifically for different industries and career levels.",
      color: "text-yellow-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track your resume's performance with detailed analytics and get actionable insights to improve your success rate.",
      color: "text-purple-500"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Template",
      description: "Select from our collection of ATS-optimized templates designed for your industry."
    },
    {
      number: "02", 
      title: "AI-Guided Building",
      description: "Our AI assistant guides you through each section, suggesting improvements along the way."
    },
    {
      number: "03",
      title: "ATS Score Check",
      description: "Get your resume analyzed and receive a detailed ATS compatibility score with improvement tips."
    },
    {
      number: "04",
      title: "Download & Apply",
      description: "Download your optimized resume in multiple formats and start applying to your dream jobs."
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 gradient-hero text-white">
                  AI-Powered Resume Builder
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Land Your
                  <span className="gradient-hero bg-clip-text text-transparent"> Dream Job </span>
                  with AI-Optimized Resumes
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Create ATS-friendly resumes that get noticed. Our AI analyzes job descriptions 
                  and optimizes your resume to beat applicant tracking systems and impress recruiters.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="cta-primary text-lg px-8 py-4"
                  onClick={() => navigate('/builder')}
                >
                  Build My Resume
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-4"
                  onClick={() => navigate('/ats-evaluation')}
                >
                  <Target className="w-5 h-5 mr-2" />
                  How to Use ResuMate
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                  Free forever plan
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl shadow-elegant p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="text-center border-b border-border pb-4">
                    <h3 className="font-bold text-lg text-card-foreground">John Doe</h3>
                    <p className="text-muted-foreground">Senior Software Engineer</p>
                    <p className="text-sm text-muted-foreground">john.doe@email.com | (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Professional Summary</h4>
                    <p className="text-sm text-muted-foreground">
                      Experienced software engineer with 5+ years developing scalable applications...
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Technical Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {["React", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                  ATS: 92/100
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose ResuMate?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform gives you everything you need to create 
              professional resumes that get results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card text-center">
                <CardHeader>
                  <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Get your perfect resume in just 4 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="step-card text-center relative">
                <CardHeader>
                  <div className="text-6xl font-bold text-primary/20 mb-2">{step.number}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-primary" />
                )}
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="cta-primary"
              onClick={() => navigate('/templates')}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* ATS Check Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ATS Score Checker</h2>
            <p className="text-xl text-muted-foreground">
              Check your resume's ATS compatibility and get improvement suggestions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="feature-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Upload Your Resume for ATS Analysis</CardTitle>
                <p className="text-muted-foreground">
                  Get instant feedback on how well your resume performs with applicant tracking systems
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h4 className="font-semibold">Keyword Analysis</h4>
                    <p className="text-sm text-muted-foreground">Check keyword density and relevance</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold">Format Check</h4>
                    <p className="text-sm text-muted-foreground">Ensure ATS-friendly formatting</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <TrendingUp className="w-8 h-8 text-accent-glow mx-auto mb-2" />
                    <h4 className="font-semibold">Score & Tips</h4>
                    <p className="text-sm text-muted-foreground">Get detailed improvement suggestions</p>
                  </div>
                </div>
                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="cta-primary"
                    onClick={() => navigate('/ats-evaluation')}
                  >
                    Check My Resume's ATS Score
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Full ATS analysis available after creating your resume
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of job seekers who've already transformed their careers with ResuMate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
              onClick={() => navigate('/builder')}
            >
              Start Building Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary"
              onClick={() => navigate('/templates')}
            >
              Browse Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <span className="text-red-500 text-xl">♥</span> for helping freshers build amazing resumes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
