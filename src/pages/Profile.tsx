import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navigation } from "@/components/Navigation";
import { 
  User, 
  FileText, 
  Settings, 
  Download, 
  Edit, 
  Trash2, 
  Plus,
  Eye,
  Calendar,
  TrendingUp
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: "",
    joinDate: "January 2024",
    plan: "Free"
  });

  // Mock user data
  const resumeStats = {
    totalResumes: 3,
    downloadsThisMonth: 12,
    atsScoreAverage: 82,
    templatesUsed: 2
  };

  const savedResumes = [
    {
      id: 1,
      name: "Software Developer Resume",
      template: "Modern Tech",
      lastModified: "2 days ago",
      atsScore: 85,
      status: "complete"
    },
    {
      id: 2,
      name: "Frontend Developer Resume",
      template: "Creative Portfolio",
      lastModified: "1 week ago",
      atsScore: 78,
      status: "draft"
    },
    {
      id: 3,
      name: "Full Stack Resume",
      template: "Executive Pro",
      lastModified: "2 weeks ago",
      atsScore: 88,
      status: "complete"
    }
  ];

  const recentActivity = [
    {
      action: "Downloaded",
      item: "Software Developer Resume",
      time: "2 hours ago",
      type: "download"
    },
    {
      action: "Created",
      item: "Frontend Developer Resume",
      time: "3 days ago",
      type: "create"
    },
    {
      action: "ATS Scan",
      item: "Full Stack Resume",
      time: "1 week ago",
      type: "scan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card>
            <CardContent className="py-6">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={userProfile.avatar} />
                  <AvatarFallback className="text-2xl">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">{userProfile.name}</h1>
                  <p className="text-muted-foreground mb-2">{userProfile.email}</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <Badge variant="secondary">
                      {userProfile.plan} Plan
                    </Badge>
                    <Badge variant="outline">
                      Member since {userProfile.joinDate}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                  <Button className="cta-primary" onClick={() => navigate('/builder')}>
                    <Plus className="w-4 h-4 mr-2" />
                    New Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="py-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{resumeStats.totalResumes}</p>
                  <p className="text-sm text-muted-foreground">Total Resumes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="py-4">
              <div className="flex items-center space-x-2">
                <Download className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">{resumeStats.downloadsThisMonth}</p>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="py-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">{resumeStats.atsScoreAverage}</p>
                  <p className="text-sm text-muted-foreground">Avg ATS Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="py-4">
              <div className="flex items-center space-x-2">
                <User className="w-8 h-8 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">{resumeStats.templatesUsed}</p>
                  <p className="text-sm text-muted-foreground">Templates Used</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="resumes">My Resumes</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 py-2">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'download' ? 'bg-accent' :
                          activity.type === 'create' ? 'bg-primary' : 'bg-yellow-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">{activity.action}</span> {activity.item}
                          </p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button 
                      variant="outline" 
                      className="h-auto p-4 flex flex-col items-center space-y-2"
                      onClick={() => navigate('/builder')}
                    >
                      <Plus className="w-6 h-6" />
                      <span>Create New Resume</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-auto p-4 flex flex-col items-center space-y-2"
                      onClick={() => navigate('/templates')}
                    >
                      <FileText className="w-6 h-6" />
                      <span>Browse Templates</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-auto p-4 flex flex-col items-center space-y-2"
                      onClick={() => navigate('/ats-evaluation')}
                    >
                      <TrendingUp className="w-6 h-6" />
                      <span>ATS Check</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resumes" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>My Resumes</CardTitle>
                <Button className="cta-primary" onClick={() => navigate('/builder')}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create New
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedResumes.map((resume) => (
                    <Card key={resume.id} className="border border-border">
                      <CardContent className="py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-16 bg-muted rounded border flex items-center justify-center">
                              <FileText className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{resume.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                Template: {resume.template}
                              </p>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  Modified {resume.lastModified}
                                </span>
                                <Badge 
                                  variant={resume.status === 'complete' ? 'default' : 'secondary'}
                                  className="text-xs"
                                >
                                  {resume.status}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  ATS: {resume.atsScore}/100
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={userProfile.name}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userProfile.email}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="cta-primary">Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Free Plan</h4>
                    <p className="text-sm text-muted-foreground">
                      3 resumes, basic templates, ATS checking
                    </p>
                  </div>
                  <Button className="cta-primary">Upgrade to Pro</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;