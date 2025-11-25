import { Icons } from "@/components/icons";
import { HomeIcon , KeyboardOffIcon} from "lucide-react";
export const DATA = {
	name: "Mohd Tabish Khan",
	initials: "MTK",
	url: "https://https://tabishcodes.dev",
	location: "Lucknow, IN",
	locationLink: "#",
	description:
		"CSE UG'27. I love building things and helping people. Very active on Twitter.",
	summary:
		"Currently in the end of my Vth Sem of CSE with DS+AI. I love participating in hackathons and has been a 3x Hackathon Winner, play sports an and travel for exploration and fun.",
	avatarUrl: "/me.jpg",
	skills: ["React", "Node.js", "Python", "Java"],
	navbar: [
		{ href: "/", icon: KeyboardOffIcon, label: "AFK (Coming Soon)" },
		// { href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "mtabishk111@gmail.com",
		tel: "+123456789",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/mtabishkhan",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/m-tabishk/",
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/buggzzbunny_",
				icon: Icons.x,

				navbar: true,
			},
			// Youtube: {
			// 	name: "Youtube",
			// 	url: "#",
			// 	icon: Icons.youtube,
			// 	navbar: true,
			// },
			email: {
				name: "Send Email",
				url: "mtabishk111@gmail.com",
				icon: Icons.email,

				navbar: false,
			},
		},
	},

	// work: [
	// 	{
	// 		company: "Atomic Finance",
	// 		href: "https://atomic.finance",
	// 		badges: [],
	// 		location: "Remote",
	// 		title: "Bitcoin Protocol Engineer",
	// 		logoUrl: "/atomic.png",
	// 		start: "May 2021",
	// 		end: "Oct 2022",
	// 		description:
	// 			"Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
	// 	},

	// ],
	education: [
		{
			school: "Shri Ramswaroop Memorial University",
			href: "https://srmu.ac.in",
			degree: "B.Tech CSE with DS and AI",
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
			title: "Bluprnt",
			href: "https://bluprnt.tech",
			dates: "",
			active: false,
			description:
				"Bluprnt provides a step-by-step guide to create any project you ask it to by providing a project name, description, and tech stack.",
			technologies: ["React.js", "TailwindCSS", "Shadcn UI"],
			links: [
				{
					type: "Website",
					href: "https://bluprnt.tech",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Video",
					href: "https://s3.ap-south-1.amazonaws.com/bucket.tabishcodes/BuildFlow+Project+Overview+%F0%9F%9A%80.mp4",
					icon: <Icons.youtube className="size-3" />,
				},
			],
			image: "/thumbnail.png",
			// video:"https://s3.ap-south-1.amazonaws.com/bucket.tabishcodes/BuildFlow+Project+Overview+%F0%9F%9A%80.mp4",
			video: undefined,
		},
		{
			title: "Prepflow",
			href: "https://prepflow.streamlit.app/",
			dates: "",
			active: false,
			description:
				"Prepflow is an AI-powered resume analysis platform that uses Retrieval-Augmented Generation (RAG) to compare resumes against job descriptions and provide personalized feedback for improvement.",
			technologies: ["Streamlit", "Langchain", "PineconeDB", "Gemini 1.5"],
			links: [
				{
					type: "Website",
					href: "https://prepflow.streamlit.app/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/prepflow.png",
			// video:"https://s3.ap-south-1.amazonaws.com/bucket.tabishcodes/BuildFlow+Project+Overview+%F0%9F%9A%80.mp4",
			video: undefined,
		},
	],

	hackathons: [
		{
			title: "HackWithUttarPradesh Grand Finalist 2024",
			dates: "November, 2024",
			location: "Unnao, India",
			description:
				"Developed a solution for Jal Shakti Ministry to monitor groundwater data and flag potential anamoly in data being recorded by the Digital Water Level Recorders (DWLRs)",
			image: "/cu.jpg",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "#",
				},
			],
		},
		{
			title: "Smart India Hackathon Grand Finalist 2024",
			dates: "December, 2024",
			location: "Bengaluru, India",
			description:
				"Developed a solution for Jal Shakti Ministry to monitor groundwater data and flag potential anamoly in data being recorded by the Digital Water Level Recorders (DWLRs)",
			image: "/logo-sih.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "#",
				},
			],
		},
		{
			title: "BuildFast with AI - Hackathon 2024",
			dates: "December, 2024",
			location: "Bengaluru, India",
			description:
				"Build Flow helps students turn ideas into reality with personalized step-by-step guides, code snippets, and resources, all free and accessible to everyone. 4th / 100 teams nationally",
			image: "/bfai.png",
			links: [
				{
					title: "Website",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://buildflow-omega.vercel.app/",
				},
			],
		},
		{
			title: "1st  AI Architect - Hackathon 2024",
			dates: "October, 2024",
			location: "Lucknow, India",
			description:
				"Built an AI-powered resume analysis platform which uses RAG to compare the resume against job description and provides personalized feedback to improve the resume.",
			image: "/sms.png",
			links: [
				{
					title: "Website",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://prepflow.streamlit.app/",
				},
			],
		},
		{
			title: "1st  Tech Trek - Hackathon 2024",
			dates: "October, 2024",
			location: "Lucknow, India",
			description:
				"Built an AI-powered resume analysis platform which uses RAG to compare the resume against job description and provides personalized feedback to improve the resume.",
			image: "/sms.png",
			links: [
				{
					title: "Website",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://prepflow.streamlit.app/",
				},
			],
		},
	],
} as const;
