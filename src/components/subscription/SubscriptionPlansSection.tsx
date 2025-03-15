import React from "react";
import { Check, X, HelpCircle } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface PlanFeature {
  name: string;
  included: boolean;
  tooltip?: string;
}

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: "monthly" | "yearly";
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
}

interface SubscriptionPlansProps {
  plans?: SubscriptionPlan[];
  title?: string;
  subtitle?: string;
  onSelectPlan?: (planId: string) => void;
}

const defaultPlans: SubscriptionPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Essential access to research reports and limited features",
    price: 29.99,
    period: "monthly",
    buttonText: "Get Started",
    features: [
      { name: "Access to 100+ research reports", included: true },
      { name: "Download up to 10 reports/month", included: true },
      { name: "Basic search functionality", included: true },
      { name: "Email support", included: true },
      {
        name: "Expert consultations",
        included: false,
        tooltip: "Available in Premium plan",
      },
      { name: "Priority access to new reports", included: false },
      { name: "Advanced analytics tools", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    description: "Full access to all reports and expert consultations",
    price: 99.99,
    period: "monthly",
    popular: true,
    buttonText: "Subscribe Now",
    features: [
      { name: "Unlimited access to all reports", included: true },
      { name: "Unlimited downloads", included: true },
      { name: "Advanced search & filters", included: true },
      { name: "Priority email & phone support", included: true },
      {
        name: "Monthly expert consultations",
        included: true,
        tooltip: "2 hours of expert consultation per month",
      },
      { name: "Early access to new reports", included: true },
      { name: "Advanced analytics dashboard", included: true },
    ],
  },
];

const SubscriptionPlansSection: React.FC<SubscriptionPlansProps> = ({
  plans = defaultPlans,
  title = "Choose Your Research Plan",
  subtitle = "Get access to expert research reports and consultations with flexible subscription options",
  onSelectPlan = () => {},
}) => {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col h-full ${plan.popular ? "border-primary shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2">
                  <Badge
                    variant="default"
                    className="bg-primary text-primary-foreground"
                  >
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">
                    /{plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={
                          feature.included ? "" : "text-muted-foreground"
                        }
                      >
                        {feature.name}
                        {feature.tooltip && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 inline-block ml-1 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  onClick={() => onSelectPlan(plan.id)}
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Separator className="mb-8 max-w-md mx-auto" />
          <p className="text-sm text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required to
            start.
          </p>
          <Button variant="link" className="text-sm">
            View full plan comparison
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlansSection;
