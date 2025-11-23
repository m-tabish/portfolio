import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Mohd Tabish Khan",
	initials: "MTK",
	url: "https://https://tabishcodes.dev",
	location: "Lucknow, IN",
	locationLink: "#",
	description:
		"CSE UG'27. I love building things and helping people. Very active on Twitter.",
	summary:
		"Currently in the end of my Vth Sem of CSE with DS+AI. I love participating in hackathons, play sports and travel for fun.",
	avatarUrl: "/me.jpg",
	skills: [
		"React",
		"Next.js",
		"Typescript",
		"Node.js",
		"Python",
		"Go",
		"Postgres",
		"Docker",
		"Kubernetes",
		"Java",
		"C++",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "hello@example.com",
		tel: "+123456789",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://dub.sh/dillion-github",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://dub.sh/dillion-linkedin",
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: "X",
				url: "https://dub.sh/dillion-twitter",
				icon: Icons.x,

				navbar: true,
			},
			Youtube: {
				name: "Youtube",
				url: "https://dub.sh/dillion-youtube",
				icon: Icons.youtube,
				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "#",
				icon: Icons.email,

				navbar: false,
			},
		},
	},

	work: [
		{
			company: "Atomic Finance",
			href: "https://atomic.finance",
			badges: [],
			location: "Remote",
			title: "Bitcoin Protocol Engineer",
			logoUrl: "/atomic.png",
			start: "May 2021",
			end: "Oct 2022",
			description:
				"Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
		},
		{
			company: "Shopify",
			badges: [],
			href: "https://shopify.com",
			location: "Remote",
			title: "Software Engineer",
			logoUrl: "/shopify.svg",
			start: "January 2021",
			end: "April 2021",
			description:
				"Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
		},
		{
			company: "Nvidia",
			href: "https://nvidia.com/",
			badges: [],
			location: "Santa Clara, CA",
			title: "Software Engineer",
			logoUrl: "/nvidia.png",
			start: "January 2020",
			end: "April 2020",
			description:
				"Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
		},
		{
			company: "Splunk",
			href: "https://splunk.com",
			badges: [],
			location: "San Jose, CA",
			title: "Software Engineer",
			logoUrl: "/splunk.svg",
			start: "January 2019",
			end: "April 2019",
			description:
				"Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
		},
		{
			company: "Lime",
			href: "https://li.me/",
			badges: [],
			location: "San Francisco, CA",
			title: "Software Engineer",
			logoUrl: "/lime.svg",
			start: "January 2018",
			end: "April 2018",
			description:
				"Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
		},
		{
			company: "Mitre Media",
			href: "https://mitremedia.com/",
			badges: [],
			location: "Toronto, ON",
			title: "Software Engineer",
			logoUrl: "/mitremedia.png",
			start: "May 2017",
			end: "August 2017",
			description:
				"Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
		},
	],
	education: [
		{
			school: "Shri Ramswaroop Memorial University",
			href: "https://srmu.ac.in",
			degree: "Bachelor's in Technology, CSE with Data Science and AI",
			logoUrl: "/srmu.jpg",
			start: "2023",
			end: "2027",
		},

		{
			school: "City Montessori School",
			href: "https://cmseducation.org/",
			degree: "Class 10th, 12th PCM + CS",
			logoUrl: "/cms.png",
			start: "2012",
			end: "2016",
		},
	],
	projects: [
		{
			title: "bluprnt",
			href: "https://bluprnt.tech",
			dates: "",
			active: true,
			description:
				"Bluprnt provides a step-by-step guide to create any project you ask it to by providing a project name, description, and tech stack.",
			technologies: ["React.js", "TailwindCSS", "Shadcn UI"],
			links: [
				{
					type: "Website",
					href: "https://bluprnt.tech",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/me.jpg",
			video: "https://youtube.com/BzTPJ4Mutww?si=3Dtmmmyrbyt4S2tx",
		},
	],
	hackathons: [
		{
			title: "Portal Hackathon",
			dates: "October 29, 2016",
			location: "Kingston, Ontario",
			description:
				"Developed an internal widget for uploading assignments using Waterloo's portal app",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/UWPortalSDK/crowmark",
				},
			],
		},
	],
} as const;
