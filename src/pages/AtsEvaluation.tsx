import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Navigation } from "@/components/Navigation";
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Download, 
  RefreshCw, 
  FileText,
  Target,
  Eye,
  TrendingUp
} from "lucide-react";

const AtsEvaluation = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(true); // Set to true for demo

  // Mock ATS evaluation data
  const atsScore = 85;
  const evaluationData = {
    overall: {
      score: atsScore,
      grade: atsScore >= 80 ? "Excellent" : atsScore >= 60 ? "Good" : "Needs Improvement",
      color: atsScore >= 80 ? "text-accent" : atsScore >= 60 ? "text-yellow-500" : "text-destructive"
    },
    categories: [
      {
        name: "Keywords Match",
        score: 90,
        status: "pass",
        description: "Strong keyword alignment with job descriptions",
        suggestions: ["Consider adding 'React Native' to skills section"]
      },
      {
        name: "Format Compatibility",
        score: 95,
        status: "pass", 
        description: "Excellent ATS-friendly formatting",
        suggestions: []
      },
      {
        name: "Section Organization",
        score: 80,
        status: "warning",
        description: "Good structure with minor improvements needed",
        suggestions: ["Move 'Projects' section before 'Education'", "Add more quantifiable achievements"]
      },
      {
        name: "Content Quality",
        score: 75,
        status: "warning",
        description: "Content is good but could be enhanced",
        suggestions: [
          "Add more action verbs to descriptions",
          "Include specific metrics and numbers",
          "Expand on leadership experiences"
        ]
      },
      {
        name: "Contact Information",
        score: 100,
        status: "pass",
        description: "Complete and properly formatted contact details",
        suggestions: []
      }
    ],
    industryInsights: [
      {
        field: "Software Development",
        match: 92,
        topSkills: ["JavaScript", "React", "Node.js", "Python"],
        missingSkills: ["Docker", "AWS", "TypeScript"]
      },
      {
        field: "Product Management", 
        match: 68,
        topSkills: ["Project Management", "Analytics"],
        missingSkills: ["Agile", "Scrum", "SQL", "A/B Testing"]
      }
    ]
  };

  const runScan = async () => {
    setIsScanning(true);
    setScanComplete(false);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsScanning(false);
    setScanComplete(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="w-5 h-5 text-accent" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "fail":
        return <XCircle className="w-5 h-5 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">ATS Evaluation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your resume analyzed by our AI-powered ATS scanner and receive 
            actionable insights to improve your chances of getting noticed.
          </p>
        </div>

        {!scanComplete && !isScanning && (
          <Card className="max-w-2xl mx-auto mb-8">
            <CardHeader className="text-center">
              <CardTitle>Ready to Scan Your Resume?</CardTitle>
              <p className="text-muted-foreground">
                Our AI will analyze your resume against ATS requirements and provide detailed feedback.
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="cta-primary" 
                size="lg"
                onClick={runScan}
              >
                <Target className="w-5 h-5 mr-2" />
                Start ATS Scan
              </Button>
            </CardContent>
          </Card>
        )}

        {isScanning && (
          <Card className="max-w-2xl mx-auto mb-8">
            <CardContent className="py-8">
              <div className="text-center space-y-4">
                <RefreshCw className="w-12 h-12 mx-auto animate-spin text-primary" />
                <h3 className="text-xl font-semibold">Analyzing Your Resume...</h3>
                <p className="text-muted-foreground">
                  Please wait while our AI evaluates your resume against ATS requirements.
                </p>
                <Progress value={67} className="max-w-xs mx-auto" />
              </div>
            </CardContent>
          </Card>
        )}

        {scanComplete && (
          <div className="space-y-6">
            {/* Overall Score */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="text-center">
                    <div className={`text-6xl font-bold ${evaluationData.overall.color}`}>
                      {evaluationData.overall.score}
                    </div>
                    <div className="text-sm text-muted-foreground">ATS Score</div>
                  </div>
                  <div className="text-center">
                    <Badge 
                      variant={evaluationData.overall.score >= 80 ? "default" : "secondary"}
                      className="text-lg px-4 py-2"
                    >
                      {evaluationData.overall.grade}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Your resume has been analyzed across multiple criteria. 
                  {evaluationData.overall.score >= 80 
                    ? " Excellent work! Your resume is highly ATS-compatible."
                    : " There are some areas for improvement to boost your ATS compatibility."
                  }
                </p>
              </CardHeader>
            </Card>

            {/* Detailed Analysis */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Detailed Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {evaluationData.categories.map((category, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(category.status)}
                          <h4 className="font-semibold">{category.name}</h4>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{category.score}/100</span>
                          <Progress value={category.score} className="w-20" />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {category.description}
                      </p>
                      {category.suggestions.length > 0 && (
                        <div>
                          <p className="text-sm font-medium mb-1">Suggestions:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {category.suggestions.map((suggestion, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Industry Insights */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Industry Match Analysis
                </CardTitle>
                <p className="text-muted-foreground">
                  See how well your resume matches different industry requirements.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {evaluationData.industryInsights.map((industry, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{industry.field}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{industry.match}% match</span>
                          <Progress value={industry.match} className="w-24" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-accent mb-1">Strong Skills:</p>
                          <div className="flex flex-wrap gap-1">
                            {industry.topSkills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-yellow-600 mb-1">Consider Adding:</p>
                          <div className="flex flex-wrap gap-1">
                            {industry.missingSkills.map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="py-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      className="cta-secondary"
                      onClick={() => navigate('/builder')}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Edit Resume
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => navigate('/download')}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview Resume
                    </Button>
                    <Button 
                      className="cta-primary"
                      onClick={() => navigate('/download')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tips Alert */}
            <Alert className="max-w-4xl mx-auto">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Pro Tip:</strong> ATS systems are constantly evolving. 
                We recommend re-scanning your resume after making changes and 
                before applying to different types of positions.
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
};

export default AtsEvaluation;