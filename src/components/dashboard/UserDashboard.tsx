import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Download,
  Heart,
  Clock,
  BookOpen,
  Calendar,
  Star,
  MessageSquare,
} from "lucide-react";

interface UserDashboardProps {
  userName?: string;
  subscriptionType?: "Basic" | "Premium" | "None";
  subscriptionEndDate?: string;
  downloadedReports?: {
    id: string;
    title: string;
    downloadDate: string;
    category: string;
  }[];
  wishlistedReports?: {
    id: string;
    title: string;
    price: number;
    addedDate: string;
  }[];
  upcomingConsultations?: {
    id: string;
    expertName: string;
    date: string;
    time: string;
    topic: string;
  }[];
  recentlyViewedReports?: {
    id: string;
    title: string;
    viewedDate: string;
  }[];
}

const UserDashboard = ({
  userName = "John Doe",
  subscriptionType = "Basic",
  subscriptionEndDate = "2023-12-31",
  downloadedReports = [
    {
      id: "1",
      title: "Market Analysis 2023",
      downloadDate: "2023-06-15",
      category: "Market Research",
    },
    {
      id: "2",
      title: "Emerging Technologies in Finance",
      downloadDate: "2023-05-22",
      category: "Finance",
    },
    {
      id: "3",
      title: "Consumer Behavior Trends",
      downloadDate: "2023-04-10",
      category: "Consumer Research",
    },
  ],
  wishlistedReports = [
    {
      id: "4",
      title: "Healthcare Industry Outlook",
      price: 49.99,
      addedDate: "2023-06-01",
    },
    {
      id: "5",
      title: "Renewable Energy Market Forecast",
      price: 59.99,
      addedDate: "2023-05-28",
    },
  ],
  upcomingConsultations = [
    {
      id: "1",
      expertName: "Dr. Sarah Johnson",
      date: "2023-07-15",
      time: "10:00 AM",
      topic: "Market Entry Strategy",
    },
  ],
  recentlyViewedReports = [
    {
      id: "6",
      title: "AI in Business Operations",
      viewedDate: "2023-06-18",
    },
    {
      id: "7",
      title: "Supply Chain Optimization",
      viewedDate: "2023-06-17",
    },
  ],
}: UserDashboardProps) => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 bg-background">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {userName}</h1>
          <p className="text-muted-foreground mt-1">
            Manage your research reports and expert consultations
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Subscription:</span>
              <Badge
                variant={
                  subscriptionType === "Premium"
                    ? "default"
                    : subscriptionType === "Basic"
                      ? "secondary"
                      : "outline"
                }
                className={subscriptionType === "None" ? "bg-muted" : ""}
              >
                {subscriptionType === "None"
                  ? "No Active Plan"
                  : `${subscriptionType} Plan`}
              </Badge>
            </div>
            {subscriptionType !== "None" && (
              <span className="text-xs text-muted-foreground">
                Valid until {new Date(subscriptionEndDate).toLocaleDateString()}
              </span>
            )}
          </div>
          {subscriptionType === "None" ? (
            <Button>Subscribe Now</Button>
          ) : (
            <Button variant="outline">Manage Subscription</Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="downloads" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
          <TabsTrigger value="downloads" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden md:inline">Downloads</span>
          </TabsTrigger>
          <TabsTrigger value="wishlist" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span className="hidden md:inline">Wishlist</span>
          </TabsTrigger>
          <TabsTrigger
            value="consultations"
            className="flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            <span className="hidden md:inline">Consultations</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="hidden md:inline">History</span>
          </TabsTrigger>
          <TabsTrigger
            value="recommendations"
            className="flex items-center gap-2"
          >
            <Star className="h-4 w-4" />
            <span className="hidden md:inline">For You</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="downloads" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Downloaded Reports
              </CardTitle>
              <CardDescription>
                Access your purchased and downloaded research reports.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Downloaded On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {downloadedReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">
                        {report.title}
                      </TableCell>
                      <TableCell>{report.category}</TableCell>
                      <TableCell>
                        {new Date(report.downloadDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4 mr-1" /> Download
                          </Button>
                          <Button variant="ghost" size="sm">
                            <BookOpen className="h-4 w-4 mr-1" /> Read
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                View All Downloads
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="wishlist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Wishlist
              </CardTitle>
              <CardDescription>
                Reports you've saved for later purchase.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Added On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {wishlistedReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">
                        {report.title}
                      </TableCell>
                      <TableCell>${report.price.toFixed(2)}</TableCell>
                      <TableCell>
                        {new Date(report.addedDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consultations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Consultations
              </CardTitle>
              <CardDescription>
                Your scheduled expert consultation sessions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingConsultations.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Expert</TableHead>
                      <TableHead>Topic</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingConsultations.map((consultation) => (
                      <TableRow key={consultation.id}>
                        <TableCell className="font-medium">
                          {consultation.expertName}
                        </TableCell>
                        <TableCell>{consultation.topic}</TableCell>
                        <TableCell>
                          {new Date(consultation.date).toLocaleDateString()} at{" "}
                          {consultation.time}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              <Calendar className="h-4 w-4 mr-1" /> Add to
                              Calendar
                            </Button>
                            <Button size="sm">
                              <MessageSquare className="h-4 w-4 mr-1" /> Join
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    No Upcoming Consultations
                  </h3>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    You don't have any scheduled consultations with experts.
                    Book a session to get personalized insights.
                  </p>
                  <Button>Book a Consultation</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recently Viewed
              </CardTitle>
              <CardDescription>
                Reports you've recently viewed or accessed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Title</TableHead>
                    <TableHead>Viewed On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentlyViewedReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">
                        {report.title}
                      </TableCell>
                      <TableCell>
                        {new Date(report.viewedDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View Again
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Recommended For You
              </CardTitle>
              <CardDescription>
                Personalized research report recommendations based on your
                interests.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Placeholder for recommended reports */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Global Supply Chain Trends 2023
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Logistics & Operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm line-clamp-2">
                      Comprehensive analysis of global supply chain trends and
                      disruptions in 2023.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" className="w-full">
                      View Report
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Digital Transformation in Banking
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Finance & Technology
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm line-clamp-2">
                      How financial institutions are leveraging technology to
                      transform their operations.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" className="w-full">
                      View Report
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Sustainable Business Practices
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Environmental Studies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm line-clamp-2">
                      Research on implementing sustainable practices in business
                      operations.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" className="w-full">
                      View Report
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Recommendations
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserDashboard;
