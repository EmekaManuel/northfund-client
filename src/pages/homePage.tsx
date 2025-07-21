import { NavLink } from "react-router-dom";
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  HeartIcon,
  GlobeIcon,
  RocketIcon,
  PersonIcon,
  LightningBoltIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/logo";

import CustomGlobe from "@/components/globe/custom-globe";

// Reusable IconCard component
const IconCard = ({ icon: Icon, title, description, iconColor, bgColor }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
    <div className={`mb-4 p-3 rounded-full ${bgColor || "bg-primary/10"}`}>
      <Icon className={`h-8 w-8 ${iconColor || "text-primary"}`} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

// Reusable FeatureCard component for smaller feature items
const FeatureCard = ({ icon: Icon, title, description, iconColor }) => (
  <div className="p-6 rounded-lg border bg-card">
    <Icon className={`h-10 w-10 ${iconColor} mx-auto mb-4`} />
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

// Reusable FeatureList component
const FeatureList = ({ features, bulletColor = "bg-primary" }) => (
  <ul className="space-y-3 text-muted-foreground">
    {features.map((feature, index) => (
      <li key={index} className="flex items-start">
        <span
          className={`inline-block w-2 h-2 ${bulletColor} rounded-full mt-2 mr-3 flex-shrink-0`}
        ></span>
        {feature}
      </li>
    ))}
  </ul>
);

// Reusable FooterSection component
const FooterSection = ({ title, links }) => (
  <div className="space-y-4">
    <h4 className="text-sm font-semibold">{title}</h4>
    <ul className="space-y-3 text-sm text-muted-foreground">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.href}
            className="hover:text-foreground transition-colors"
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const HomePage = () => {
  // Data arrays for mapping
  const aboutCards = [
    {
      icon: HeartIcon,
      title: "Our Mission",
      description:
        "To democratize education funding by creating a global community that supports students' dreams and aspirations through innovative technology.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: GlobeIcon,
      title: "Global Impact",
      description:
        "We've connected students from over 50 countries with supporters worldwide, creating a truly global education support network.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: LockClosedIcon,
      title: "Trust & Security",
      description:
        "Built on Solana blockchain, every transaction is transparent, secure, and immutable, ensuring your contributions reach their intended recipients.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const studentFeatures = [
    "Create compelling campaign stories to share your educational goals and financial needs",
    "Set transparent funding targets and deadlines for your educational expenses",
    "Receive funds instantly through secure blockchain transactions",
    "Keep supporters updated with progress reports and achievements",
  ];

  const supporterFeatures = [
    "Discover inspiring student stories from around the world",
    "Contribute any amount with complete transparency on fund usage",
    "Track the impact of your contributions in real-time",
    "Connect with students and follow their educational journey",
  ];

  const keyFeatures = [
    {
      icon: LightningBoltIcon,
      title: "Lightning Fast",
      description:
        "Instant transactions powered by Solana blockchain technology",
      iconColor: "text-yellow-500",
    },
    {
      icon: LockClosedIcon,
      title: "Secure & Transparent",
      description:
        "Every transaction is recorded on the blockchain for complete transparency",
      iconColor: "text-blue-500",
    },
    {
      icon: GlobeIcon,
      title: "Global Reach",
      description: "Connect students and supporters from anywhere in the world",
      iconColor: "text-green-500",
    },
    {
      icon: PersonIcon,
      title: "Community Driven",
      description:
        "Built by the community, for the community's educational success",
      iconColor: "text-purple-500",
    },
  ];

  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Browse Campaigns", href: "/campaigns" },
        { label: "Create Campaign", href: "/campaigns/create" },
        { label: "Dashboard", href: "/dashboard" },
        { label: "How It Works", href: "/how-it-works" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "About Us", href: "/about" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "/blog" },
        { label: "Success Stories", href: "/success-stories" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Help Center", href: "/help" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-[50] w-full border-b border-border/40 bg-background/95 backdrop-blur-sm dark:bg-black/[0.6]">
        <div className="container flex h-14 items-center">
          <NavLink
            to="/"
            className="flex items-center justify-start transition-opacity duration-300 hover:opacity-85"
          >
            <Logo />
            <span className="ml-1 font-bold">NorthFund</span>
            <span className="sr-only ml-1">NorthFund</span>
          </NavLink>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background"
              asChild
            >
              <NavLink to="">
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </NavLink>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-1">
          <section className="mx-auto  flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-4 md:pb-4 lg:py-8 lg:pb-2">
            <h1 className="text-center text-3xl font-bold lg:mb-5 leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Support Students with NorthFund
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              Empowering students with financial needs through decentralized
              crowdfunding on the Solana blockchain. NorthFund connects students
              with supporters worldwide, providing secure, transparent, and fast
              funding solutions to help them achieve their educational goals.
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <NavLink to="/dashboard/campaigns/new">
                  Dashboard
                  <ArrowRightIcon className="ml-2" />
                </NavLink>
              </Button>
              <Button variant="outline" asChild>
                <NavLink to="/campaigns">See All Campaigns</NavLink>
              </Button>
            </div>
          </section>
          <div className="relative flex w-full justify-center">
            <CustomGlobe />,
          </div>
        </div>

        {/* About Us Section */}
        <section className="py-16 md:py-24 bg-background/50">
          <div className="container">
            <div className="mx-auto max-w-[980px] text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-6">
                About NorthFund
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-[750px] mx-auto">
                NorthFund was born from a simple belief: every student deserves
                access to quality education, regardless of their financial
                background. We leverage the power of blockchain technology to
                create a transparent, secure, and efficient platform that
                connects students in need with generous supporters worldwide.
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
                {aboutCards.map((card, index) => (
                  <IconCard key={index} {...card} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[980px]">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-6">
                  What We Do
                </h2>
                <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
                  NorthFund provides a comprehensive platform that bridges the
                  gap between students who need financial support and people who
                  want to make a difference.
                </p>
              </div>

              <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 mr-3">
                      <PersonIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">For Students</h3>
                  </div>
                  <FeatureList features={studentFeatures} />
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg">
                  <div className="text-center">
                    <RocketIcon className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">
                      Launch Your Campaign
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Start your educational funding journey in minutes with our
                      easy-to-use campaign creator.
                    </p>
                    <Button asChild>
                      <NavLink to="/campaigns/create">
                        Create Campaign
                        <ArrowRightIcon className="ml-2" />
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-8 rounded-lg order-2 md:order-1">
                  <div className="text-center">
                    <HeartIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">
                      Make a Difference
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Browse campaigns and support students whose stories
                      inspire you to contribute to their success.
                    </p>
                    <Button asChild variant="outline">
                      <NavLink to="/campaigns">
                        View Campaigns
                        <ArrowRightIcon className="ml-2" />
                      </NavLink>
                    </Button>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-green-500/10 mr-3">
                      <HeartIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold">For Supporters</h3>
                  </div>
                  <FeatureList
                    features={supporterFeatures}
                    bulletColor="bg-green-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 md:py-24 bg-background/50">
          <div className="container">
            <div className="mx-auto max-w-[980px] text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-12">
                Why Choose NorthFund?
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {keyFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Enhanced Footer */}
      <footer className="border-t border-border/40 bg-background/95">
        <div className="container">
          {/* Main Footer Content */}
          <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Logo />
                <span className="ml-1 font-bold text-lg">NorthFund</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Empowering students worldwide through decentralized crowdfunding
                on the Solana blockchain. Making education accessible to all.
              </p>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  asChild
                >
                  <NavLink
                    to="https://github.com/emekamanuel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubLogoIcon className="h-4 w-4" />
                  </NavLink>
                </Button>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <FooterSection key={index} {...section} />
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border/40 py-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-muted-foreground">
                © 2025 NorthFund. All rights reserved. Empowering education
                through blockchain technology.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Built with ❤️ by</span>
                <NavLink
                  to="https://github.com/emekamanuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Manuel Of The North
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
