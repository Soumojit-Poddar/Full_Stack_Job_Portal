import {
    Search,
    Users,
    FileText,
    MessageSquare,
    BarChart3,
    Clock,
    Award,
    Building2,
    LayoutDashboard,
    Plus,
    Shield,
    BriefcaseBusiness
} from "lucide-react";

export const jobSeekerFeatures = [
    {
        icon: Search,
        title: "Smart Job Matching",
        description: "AI-powered algorithm matches you with relevant opportunities based on your skills and preference.",
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description: "Create professional resumes with our intuitive builder and templates designed by experts.",
    },
    {
        icon: MessageSquare,
        title: "Direct Communication",
        description: "Connect directly with hiring managers and recruiters through our secure massaging platform.",
    },
    {
        icon: Award,
        title: "Skill Assesment",
        description: "Showcase your abilities with verified skill tests and ern badges that employers trust.",
    },
];

export const employerFeatures = [
    {
        icon: Users,
        title: "Talent Pool Access",
        description: "Access our vast database of pre-screened candidates and find the perfect fit for your team.",
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track your hiring performence with detailed analytics and insights on candidate engagement.",
    },
    {
        icon: Shield,
        title: "Verified Candidates",
        description: "All candidates undergo background verification to ensure you are hiring trustworthy professionals.",
    },
    {
        icon: Clock,
        title: "Quick Hiring",
        description: "Steamlined hiring process reduces time to hire by 60% with automated screening tools.",
    },
];

// Navigation items configuration
export const NAVIGATION_MENU = [
    { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "post-job", name: "Post Job", icon: Plus },
    { id: "manage-jobs", name: "Manage Jobs", icon: BriefcaseBusiness },
    { id: "company-profile", name: "Company Profile", icon: Building2 },
];

// Catagories and job types 
export const CATAGORIES = [
    { value: "Engineering", label: "Engineering" },
    { value: "Design", label: "Design" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "IT & Software", label: "IT & Software" },
    { value: "Customer-service", label: "Customer Service" },
    { value: "Product", label: "Product" },
    { value: "Operations", label: "Operations" },
    { value: "Finance", label: "Finance" },
    { value: "HR", label: "Human Resource" },
    { value: "Other", label: "Other" },
];

export const JOB_TYPES = [
    { value: "Remote", label: "Remote" },
    { value: "Full-Time", label: "Full-Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Contract", label: "Contract" },
    { value: "Internship", label: "Internship" },
];

export const SALARY_RANGES = [
    "Less than $1000",
    "$1000 - $15,000",
    "More than $15,000"
];