"use client";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import { ChevronDownIcon, Icon } from "@/components/ui/icon";
import { Card } from "@/components/ui/card";
import { Box } from "@/components/ui/box";
import { HoverMenu } from "@/components/ui/hover-menu";
import { ButtonLink } from "@/components/ui/buttonlink";

const aboutUsData = [
  {
    label: "About Us",
    description:
      "Discover How We Embody The Spirit Of Research,Collaborate, And Build.",
  },
  {
    label: "Team",
    description:
      "Meet The Geeks Behind The Innovative Magic We Create At The GeekBase.",
  },
  {
    label: "Leaders",
    description:
      "Dive into The Visioneries Behind The Company,Trusted By CXOs And Loved By The Community.",
  },
  {
    label: "Join Us",
    description:
      "Discover How We Embody The Spirit Of Research, Collaborate, And Build.",
  },
  {
    label: "Culture",
    description:
      "Take A Sneak Peek Of The Philosophy Behind Research-Collaborate-Build.",
  },
];

const inSightsData = [
  {
    label: "Blog",
    description:
      "Industry Trends Decoded And Useful Insights From Experts At GeekyAnts.",
  },
  {
    label: "Guides",
    description:
      "Playbooks To Achieve Bussiness Goals Curated By Domain Specialists",
  },
];

const sidebarData = {
  services: [
    {
      label: "Web App Development",
      description:
        "End-To-End Web App Development Services For Innovative Products.",
    },
    {
      label: "Mobile App Development",
      description:
        "Robust, Scalable, And Trendy Mobile Apps Using Tech Stacks Like React Native And Flutter.",
    },
    {
      label: "Quality Assurance & Software Testing",
      description:
        "Best-In-Class Quality Assurance And Software Testing Services To Ensure High Performance.",
    },
    {
      label: "UI/UX Design",
      description:
        "Unique User Interfaces Created With The Latest Tech For Excellent User Experience.",
    },
    {
      label: "Bussiness Analysis",
      description:
        "Discover Business Improvement Potential With Our Domain Experts.",
    },
    {
      label: "Full-Stack Development",
      description:
        "Robust Full-Stack Development Solution That Handles Front-End And Back-End Requirements.",
    },
  ],
  industries: [
    {
      label: "Manufacturing",
      description:
        "Innovative Apps And Dashboards To Simplify Product Complexities And Operational Challenges.",
    },
    {
      label: "Fintech",
      description:
        "Safe And Customized Financial Solutions For A Great User Experience With Real-Time Updates.",
    },
    {
      label: "HealthCare",
      description:
        "Robust Healthcare Apps To Empower Healthcare Professionals And Family Members.",
    },
    {
      label: "E-Commerce",
      description:
        "High-Performing, Customer-Centric Applications For E-Commerce Businesses.",
    },
    {
      label: "Education",
      description:
        "Applications With Multiple Features Like Live Streaming, Forums, And More.",
    },
    {
      label: "Travel & Hospitality",
      description:
        "User-Friend Travel Hospitality Apps With Modern Features That Increase User Satisfaction.",
    },
  ],
  "customizable-solutions": [
    {
      label: "E-Commerce Web App",
      description:
        "A Customizable Shopping Application Created With Next.Js And PostgreSQL.",
    },
    {
      label: "Twitter Space Clone",
      description:
        "A Customizable Twitter Space Clone Built On 100ms And Flutter With Trending Features.",
    },
    {
      label: "Chat And Messaging App",
      description:
        "A Customizable App Built With React Native,CometChat API, And Firebase.",
    },
    {
      label: "Telemedicine App",
      description:
        "A Solution That Can Be Customized For A Wide Range Of Healthcare-Related Scenarios.",
    },
    {
      label: "Food And Grocery Delivery Application",
      description:
        "A Customizable Grocery Delivery App Build On Flutter And Node.Js.",
    },
    {
      label: "Bike Taxi Booking App",
      description:
        "A Customizable Ride Booking App With A Flutter Frontend And Spring Boot Backend.",
    },
  ],
  "open-source": [
    {
      label: "gluestack-ui",
      description:
        "React & React Native UI Library For Web And Mobile With Tools To Build Design Systems Easily.",
    },
    {
      label: "gluestack-ui-flutter [Experimental]",
      description:
        "Experimental Flutter Library Of Headless UI Components For Faster Development.",
    },
    {
      label: "NativeBase",
      description:
        "Open-Source UI Library For React Native With Pre-Built Screens And Components.",
    },
  ],
  "r-n-d": [
    {
      label: "Tech Hub",
      description:
        "A Sneak-Peek Into Our Research And Development Projects And Experiments With Emerging Technologies.",
    },
  ],
};

const imageCardsData = [
  {
    title: "React Native",
    cardBackground: "bg-sky-200",
    imageUri:
      "https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Ftechnology%2F154%2F2023-02-07%2F246330165-1675751809.png&w=128&q=75",
  },
  {
    title: "Next.Js",
    cardBackground: "bg-gray-300",
    imageUri:
      "https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Ftechnology%2F895%2F2023-03-03%2F592723672-1677854466.png&w=64&q=75",
  },
  {
    title: "Flutter",
    cardBackground: "bg-slate-500",
    imageUri:
      "https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Ftechnology%2F26%2F2023-02-07%2F655973946-1675751858.png&w=128&q=75",
  },
  {
    title: "GraphQl",
    cardBackground: "bg-pink-100",
    imageUri:
      "https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Ftechnology%2F165%2F2023-02-07%2F256441127-1675754179.png&w=128&q=75",
  },
  {
    title: "Node.js",
    cardBackground: "bg-teal-300",
    imageUri:
      "https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Ftechnology%2F3%2F2023-02-07%2F111029535-1675751792.png&w=128&q=75",
  },
  {
    title: "PostgreSQL",
    cardBackground: "bg-slate-400",
    imageUri:
      "https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Ftechnology%2F361%2F2023-02-07%2F023665383-1675754874.png&w=128&q=75",
  },
  {
    title: "DevOps",
    cardBackground: "bg-teal-200",
    imageUri:
      "https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Ftechnology%2F973%2F2023-08-23%2F920559099-1692777239.png&w=64&q=75",
  },
];

const CustomCard = ({
  label,
  description,
  cardClassNames,
  imageUrl,
  imageAlt,
  variant = "text-variant",
  buttonLabel = "Our Cultural Insights",
}: {
  label: string;
  description: string;
  cardClassNames?: string;
  imageUrl?: string;
  imageAlt?: string;
  variant?: "full-image-variant" | "text-variant" | "semi-image-variant";
  buttonLabel?: string;
}) => {
  return (
    <Card
      className={`${
        variant === "text-variant" ? "p-4" : "p-0"
      } min-w-[305px]  max-w-[400px] border-solid border-2 border-background-100 rounded-md self-stretch ${cardClassNames} cursor-pointer flex-1 transition ease-out delay-100 hover:-translate-y-1 hover:scale-1 duration-100 hover:shadow-md  hover:border hover:border-background-100`}
    >
      {variant === "full-image-variant" ? (
        <Box className="w-[100%] h-[352px] relative">
          {imageUrl && (
            <Image
              src={imageUrl}
              className="h-full w-full object-cover relative rounded "
              alt={imageAlt}
              height={352}
              width={548}
              quality={100}
            />
          )}
          <VStack className="absolute top-1/2 left-8 space-y-3">
            <Text className="text-2xl md:text-4xl font-semibold text-typography-100">
              {label}
            </Text>
            <Text className="text-sm md:text-lg font-normal text-typography-400 hover:text-typography-100">
              {description}
            </Text>
            <ButtonLink
              href="/"
              className="p-0 w-[220px]"
              variant="ButtonLink"
              buttonTextClassNames="text-white group-hover:text-white underline"
              buttonIconClassNames="text-white"
            >
              {buttonLabel}
            </ButtonLink>
          </VStack>
        </Box>
      ) : (
        <VStack className="space-y-2">
          {variant === "semi-image-variant" && (
            <Box className="w-[100%] h-[240px]">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  className="h-full w-full  object-cover relative rounded"
                  alt={imageAlt}
                  height={352}
                  width={548}
                  quality={100}
                />
              )}
            </Box>
          )}
          <VStack
            className={`${
              variant === "text-variant" ? "p-0" : "p-5"
            } space-y-2`}
          >
            <HStack className="space-x-2 items-center">
              {variant === "text-variant" && (
                <Box className="w-8 h-8 bg-red-200 rounded-sm">
                  {imageUrl && (
                    <Image
                      source={imageUrl}
                      className="h-full w-full object-contain relative rounded"
                      alt={imageAlt}
                      height={352}
                      width={548}
                      quality={100}
                    />
                  )}
                </Box>
              )}
              <Text className="text-sm md:text-lg font-bold text-typography-700">
                {label}
              </Text>
            </HStack>
            <Text className="text-sm md:text-lg font-normal text-typography-700">
              {description}
            </Text>
          </VStack>
        </VStack>
      )}
    </Card>
  );
};

const ImageCard = ({
  imageUri,
  title,
  cardBackground,
  size = "sm",
}: {
  imageUri: string;
  title: string;
  cardBackground: string;
  size?: "sm" | "md";
}) => {
  return (
    <VStack className="items-center space-y-2 ">
      <Box
        className={`${
          size === "sm" ? "w-[100px] h-[100px]" : "w-[120px] h-[120px]"
        } rounded-md p-5 ${cardBackground} cursor-pointer hover:shadow-md
        transition ease-in delay-100 hover:-translate-y-1 hover:scale-100 duration-200`}
      >
        <Image
          src={imageUri}
          className="h-full w-full object-contain relative rounded"
          alt={title}
          width={size === "sm" ? 20 : 40}
          height={size === "sm" ? 20 : 40}
          quality={100}
        />
      </Box>
      <Text className="text-lg text-center text-typography-700 font-normal">
        {title}
      </Text>
    </VStack>
  );
};
export const Navbar = () => {
  return (
    <Box id="headerMenu">
      <HStack className="w-[100vw] justify-center items-center bg-background-0 space-x-2 border-solid border-b border-background-200 relative">
        <Box className="w-[200px] h-[50px] cursor-pointer mr-16">
          <Image
            src={"/assets/logo-light.png"}
            className="h-full w-full object-contain relative rounded"
            alt={"geekyants logo"}
            width={100}
            height={100}
            quality={100}
          />
        </Box>
        <HoverMenu
          className="flex min-w-[100px] p-0"
          trigger={
            <HStack className={`xl:p-3 items-center space-x-1`}>
              <Text
                className={`text-sm md:text-lg text-center
              hover:text-primary-500 text-typography-700
                font-normal text-ellipsis truncate  overflow-hidden`}
              >
                What We Do
              </Text>
              <Icon className="w-5 h-5 group-hover:text-primary-500 group-hover:rotate-180">
                <ChevronDownIcon />
              </Icon>
            </HStack>
          }
          contentClassNames="border-b-0 "
        >
          <Box className="p-4">{/* <WhatWeDoView /> */}</Box>
        </HoverMenu>
        <Text
          className="text-sm md:text-lg text-center
       hover:text-primary-500  text-typography-700
     font-normal cursor-pointer lg:flex hidden"
        >
          Case Studies
        </Text>
        <HoverMenu
          className="flex min-w-[100px]"
          trigger={
            <HStack className="xl:p-3 items-center space-x-1 ">
              <Text className="text-sm md:text-lg text-center hover:text-primary-500 text-typography-700 font-normal">
                Techonologies
              </Text>
              <Icon className="w-5 h-5 group-hover:text-primary-500 group-hover:rotate-180">
                <ChevronDownIcon />
              </Icon>
            </HStack>
          }
        >
          <HStack className="p-4  justify-center items-center space-x-4">
            {imageCardsData.map((item) => (
              <ImageCard
                key={item.title}
                title={item.title}
                cardBackground={item.cardBackground}
                imageUri={item.imageUri}
              />
            ))}
          </HStack>
        </HoverMenu>
        <HoverMenu
          className="flex min-w-[100px]"
          trigger={
            <HStack className="xl:p-3 items-center space-x-1 ">
              <Text className="text-sm md:text-lg text-center hover:text-primary-500 text-typography-700 font-normal">
                About Us
              </Text>
              <Icon className="w-5 h-5 group-hover:text-primary-500 group-hover:rotate-180">
                <ChevronDownIcon />
              </Icon>
            </HStack>
          }
        >
          <HStack className="p-4 justify-start items-baseline gap-4 flex-wrap">
            {aboutUsData.map((item) => (
              <CustomCard
                label={item.label}
                description={item.description}
                key={item.label}
              />
            ))}
          </HStack>
        </HoverMenu>
        <HoverMenu
          className="flex min-w-[100px]"
          trigger={
            <HStack className="xl:p-3 items-center space-x-1">
              <Text className="text-sm md:text-lg text-center hover:text-primary-500 text-typography-700 font-normal">
                Insights
              </Text>
              <Icon className="w-5 h-5 group-hover:text-primary-500 group-hover:rotate-180">
                <ChevronDownIcon />
              </Icon>
            </HStack>
          }
        >
          <HStack className=" p-4 justify-center items-center space-x-4">
            {inSightsData.map((item) => (
              <CustomCard
                label={item.label}
                key={item.label}
                description={item.description}
                cardClassNames="max-w-[600px]"
              />
            ))}
          </HStack>
        </HoverMenu>
        <ButtonLink href="#" className="w-[170px] p-2 xl:flex hidden">
          LET'S TALK
        </ButtonLink>
        <HoverMenu
          className="min-w-[80px]"
          contentClassNames="w-[140px] left-[85%]"
          trigger={
            <HStack className="items-center space-x-1">
              <Box className="w-5 h-5 p-2 cursor-pointer">
                <Image
                  src={"/assets/globe-icon.png"}
                  className="h-full w-full object-contain relative rounded"
                  alt={"globe image"}
                  fill
                />
              </Box>
              <Icon className="w-5 h-5 group-hover:text-primary-500 group-hover:rotate-180">
                <ChevronDownIcon />
              </Icon>
            </HStack>
          }
        >
          <VStack className="items-start space-y-2 py-4">
            <HStack className="justify-center items-center space-x-2 ">
              <Box className="w-5 h-5 p-2 cursor-pointer">
                <Image
                  src={"/assets/globe-icon.png"}
                  className="h-full w-full object-contain relative rounded"
                  alt={"globe image"}
                  fill
                />
              </Box>
              <Text
                className="text-sm md:text-lg
       hover:text-primary-500  text-typography-700
     font-normal cursor-pointer"
              >
                Global
              </Text>
            </HStack>
            <HStack className="justify-center items-center space-x-2">
              <Box className="w-5 h-5 p-2 cursor-pointer">
                <Image
                  src={"/assets/uk-flag.png"}
                  className="h-full w-full object-contain relative rounded"
                  alt={"uk flag"}
                  fill
                />
              </Box>
              <Text
                className="text-sm md:text-lg
       hover:text-primary-500  text-typography-700
     font-normal cursor-pointer"
              >
                UK
              </Text>
            </HStack>
            <HStack className="justify-center items-center space-x-2">
              <Box className="w-5 h-5 p-2 cursor-pointer">
                <Image
                  src={"/assets/usa-flag.png"}
                  className="h-full w-full object-contain relative rounded"
                  alt={"usa flag"}
                  fill
                />
              </Box>
              <Text
                className="text-sm md:text-lg
       hover:text-primary-500  text-typography-700
     font-normal cursor-pointer"
              >
                USA
              </Text>
            </HStack>
          </VStack>
        </HoverMenu>
      </HStack>
    </Box>
  );
};

export default function Page() {
  return (
    <Box className="relative">
      <Box className="w-full bg-background-50">
        <Box className="px-4 sm:px-8 md:px-0 lg:px-16 z-0">
          <VStack className="items-start px-4 sm:px-8 md:px-16 py-2 sm:py-4 md:py-8 space-y-8">
            <Text className="text-typography-950 text-2xl md:text-4xl font-bold">
              What We Do Best
            </Text>
            <Text className="text-typography-950 text-lg md:text-xl font-normal">
              500+ projects deep and still going deeper in the mobile & web app
              development space. From A to Z of building beautiful apps, we do
              everything in-house, GeekyAnts style.
            </Text>
            <VStack className="space-y-4">
              <HStack className="w-full gap-4 md:flex-row flex-col">
                <CustomCard
                  label={sidebarData["services"][0].label}
                  description={sidebarData["services"][0].description}
                  cardClassNames="max-w-full flex-1"
                />
                <CustomCard
                  label={sidebarData["services"][1].label}
                  description={sidebarData["services"][1].description}
                  cardClassNames="max-w-full flex-1"
                />
              </HStack>
              <HStack className="w-full gap-4 md:flex-row flex-col">
                <CustomCard
                  label={sidebarData["services"][2].label}
                  description={sidebarData["services"][2].description}
                  cardClassNames="max-w-full flex-1"
                />
                <CustomCard
                  label={sidebarData["services"][3].label}
                  description={sidebarData["services"][3].description}
                  cardClassNames="max-w-full flex-1"
                />
              </HStack>
              <HStack className="w-full gap-4 md:flex-row flex-col">
                <CustomCard
                  label={sidebarData["services"][4].label}
                  description={sidebarData["services"][4].description}
                  cardClassNames="max-w-full flex-1"
                />
                <CustomCard
                  label={sidebarData["services"][5].label}
                  description={sidebarData["services"][5].description}
                  cardClassNames="max-w-full flex-1"
                />
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </Box>
      <Box className="w-full bg-background-0">
        <Box className="px-4 sm:px-8 md:px-0 lg:px-16 z-0">
          <VStack className="items-start px-4 sm:px-8 md:px-16 py-2 sm:py-4 md:py-8 space-y-8 ">
            <Text className="text-typography-950 text-2xl md:text-4xl font-bold">
              Technologies
            </Text>
            <Text className="text-typography-950 text-lg md:text-xl font-normal">
              We work with cutting-edge technologies designed to solve your
              product requirements. Focus on finding solutions for your business
              needs while we handle the technical aspect.
            </Text>
            <HStack className="justify-start items-center gap-6 w-[100%] xl:w-[80%]  flex-wrap  md:flex-row flex-col">
              {imageCardsData.map((item) => (
                <ImageCard
                  key={item.title}
                  title={item.title}
                  cardBackground={item.cardBackground}
                  imageUri={item.imageUri}
                  size="md"
                />
              ))}
            </HStack>
          </VStack>
        </Box>
      </Box>
      <Box className="w-full bg-slate-100 py-10">
        <Box className="px-4 sm:px-8 md:px-0 lg:px-16 z-0">
          <VStack className="items-start px-4 sm:px-8 md:px-16 py-2 sm:py-4 md:py-8 space-y-8">
            <HStack className="md:items-end items-center justify-between w-full  md:flex-row flex-col">
              <VStack className="space-y-8 md:w-2/3 w-full md:items-start items-center">
                <Text className="text-typography-950 text-2xl md:text-4xl font-bold">
                  Open Source
                </Text>
                <Text className="text-typography-950 text-lg md:text-xl font-normal ">
                  Open-source advocates, driving React Native and Flutter.
                  Igniting innovation, smashing barriers, and fostering
                  collaboration with fiery zeal.
                </Text>
              </VStack>
              <ButtonLink
                href="/"
                variant="ButtonLink"
                className="p-0 mb-4 w-[300px]"
              >
                View Open-Source Contributions
              </ButtonLink>
            </HStack>
            <VStack className="space-y-4">
              <HStack className="w-full  md:flex-row flex-col gap-4">
                <CustomCard
                  label={sidebarData["services"][0].label}
                  description={sidebarData["services"][0].description}
                  cardClassNames="max-w-[100%] flex-1"
                  variant="semi-image-variant"
                  imageUrl="https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Fcmstechnologyproduct%2F114%2F2024-01-19%2F121147384-1705671863.png&w=2048&q=75"
                  imageAlt="test background"
                />
                <CustomCard
                  label={sidebarData["services"][1].label}
                  description={sidebarData["services"][1].description}
                  cardClassNames="max-w-[100%] flex-1"
                  variant="semi-image-variant"
                  imageUrl="https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Fcmstechnologyproduct%2F58%2F2023-02-14%2F711230492-1676373094.png&w=2048&q=75"
                  imageAlt="test background"
                />
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </Box>
      <Box className="w-full bg-stone-100 py-10">
        <Box className="px-4 sm:px-8 md:px-0 lg:px-16 z-0">
          <VStack className="items-start px-4 sm:px-8 md:px-16 py-2 sm:py-4 md:py-8 space-y-8">
            <HStack className="md:items-end items-center justify-between w-full  md:flex-row flex-col">
              <VStack className="space-y-8 md:w-2/3 w-full md:items-start items-center">
                <Text className="text-typography-950 text-2xl md:text-4xl font-bold">
                  Customisable Solutions
                </Text>
                <Text className="text-typography-950 text-lg md:text-xl font-normal ">
                  Navigate through various solutions and clones of popular apps
                  built by us which can be easily customized to fit your needs.
                </Text>
              </VStack>
              <ButtonLink
                href="/"
                variant="ButtonLink"
                className="p-0 mb-4 w-[300px]"
              >
                View Showcase Applications
              </ButtonLink>
            </HStack>
            <VStack className="space-y-4">
              <HStack className="w-full  md:flex-row flex-col gap-4">
                <CustomCard
                  label={"Supply Chain Management App"}
                  description={
                    "This fully customizable Supply Chain Management app streamlines your supply — from procurement to delivery — with zero hassles. Can be customized based on your project requirements saving hundreds of design."
                  }
                  cardClassNames="max-w-[100%] flex-1"
                  variant="semi-image-variant"
                  imageUrl="https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Fapp%2F12%2F2023-10-12%2F586575060-1697106055.png&w=2048&q=75"
                  imageAlt="test background"
                />
                <CustomCard
                  label={"Telemedicine App"}
                  description={
                    "Contains features for daily use in healthcare and telemedicine-related scenarios like appointment scheduling, prescription management, and video consultation. This customizable healthcare app."
                  }
                  cardClassNames="max-w-[100%] flex-1"
                  variant="semi-image-variant"
                  imageUrl="https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Fapp%2F2%2F2022-10-19%2F616792146-1666179836.png&w=2048&q=75"
                  imageAlt="test background"
                />
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </Box>
      <Box className="w-full bg-background-0 py-10">
        <Box className="px-4 sm:px-8 md:px-0 lg:px-16 z-0">
          <VStack className="items-start px-4 sm:px-8 md:px-16 py-2 sm:py-4 md:py-8 space-y-8">
            <VStack className="space-y-4">
              <HStack className="w-full  md:flex-row flex-col gap-4">
                <CustomCard
                  label={"Our Team"}
                  description={
                    "We are a family of innovative geeks and curious scientists, tinkering away to create the next big thing in tech."
                  }
                  cardClassNames="max-w-[100%] flex-1"
                  variant="full-image-variant"
                  imageUrl="https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Fhome-page-video%252FOur_team_new.png&w=2048&q=75"
                  imageAlt="test background"
                  buttonLabel="Meet the Team"
                />
                <CustomCard
                  label={"Our Culture"}
                  description={
                    "We believe in being early adopters of new tech, innovating without boundaries,contributing actively to the open-source."
                  }
                  cardClassNames="max-w-[100%] flex-1"
                  variant="full-image-variant"
                  imageUrl="https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Fhome-page-video%252FOur_culture_new.png&w=750&q=75"
                  imageAlt="test background"
                  buttonLabel="Our Cultural Insights"
                />
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </Box>
      <Box className="w-full bg-stone-100 py-10">
        <Box className="px-4 sm:px-8 md:px-0 lg:px-16 z-0">
          <VStack className="items-start px-4 sm:px-8 md:px-16 py-2 sm:py-4 md:py-8 space-y-8">
            <HStack className="md:items-end items-center justify-between w-full  md:flex-row flex-col">
              <VStack className="gap-8 md:w-2/3 w-full md:items-start items-center">
                <Text className="text-typography-950 text-2xl md:text-4xl font-bold">
                  Insights
                </Text>
                <Text className="text-typography-950 text-lg md:text-xl font-normal ">
                  Discover the inner workings of our brilliant minds at
                  GeekyAnts through our blogs, gaining a deeper understanding of
                  who we are.
                </Text>
              </VStack>
              <ButtonLink
                href="/"
                variant="ButtonLink"
                className="p-0 mb-4 w-[300px]"
              >
                More Blogs
              </ButtonLink>
            </HStack>
            <VStack className="space-y-4">
              <HStack className=" md:flex-row flex-col gap-4 flex-wrap max-w-full">
                <CustomCard
                  label={
                    "Exploring the Intersection of Web Development and Generative AI"
                  }
                  description={
                    "This article breaks down the talk presented by Dinesh Reddy, SED 1 at GeekyAnts, at the Modern Web and Generative AI Development Meetup, recently held at GeekyAnts."
                  }
                  cardClassNames="max-w-[100%] flex-1"
                  variant="semi-image-variant"
                  imageUrl="https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Farticleblogcomponent%2F26630%2F2024-04-29%2F660712872-1714384480.png&w=2048&q=75"
                  imageAlt="test background"
                />
                <CustomCard
                  label={
                    "Beyond Traditional Search — Enhancing Discovery with Contextual Insights"
                  }
                  description={
                    "This blog breaks down the talk by Saurav Ganguly, SDE 2, GeekyAnts, at the Modern Web and Generative AI Development meetup, recently held at GeekyAnts."
                  }
                  cardClassNames="max-w-[100%] flex-1"
                  variant="semi-image-variant"
                  imageUrl="https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Farticleblogcomponent%2F26681%2F2024-04-29%2F962836362-1714397267.png&w=2048&q=75"
                  imageAlt="test background"
                />
                <CustomCard
                  label={"Safeguarding Web Development"}
                  description={
                    "This blog breaks down the talk by Veena PD, Tech Consultant, Freelancer, at the Modern Web and Generative AI Development meetup recently held at GeekyAnts."
                  }
                  cardClassNames="max-w-[100%] flex-1"
                  variant="semi-image-variant"
                  imageUrl="https://geekyants.com/_next/image?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Farticleblogcomponent%2F26500%2F2024-04-25%2F313403270-1714043204.png&w=2048&q=75"
                  imageAlt="test background"
                />
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
