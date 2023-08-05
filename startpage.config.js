const defaultConfig = {
	username: "vic",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "cmd...",
		placeholderColor: "gray",
		userColor: "red",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "left",
				links: [
					{
						name: "Gmail",
						url: "https://mail.google.com",
						icon: "mdi:gmail"
					},
					{
						name: "Dropbox",
						url: "https://dropbox.com/",
						icon: "mdi:dropbox"
					},
					{
						name: "GPT",
						url: "https://chat.openai.com/",
						icon: "simple-icons:openai"
					},
					{
						name: "AUR",
						url: "https://aur.archlinux.org",
						icon: "mdi:arch"
					}
				]
			},
			{
				title: "Dev",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "GitHub",
						url: "https://github.com",
						icon: "mdi:github"
					},
					{
						name: "Vercel",
						url: "https://vercel.com",
						icon: "mdi:web-check"
					},
					{
						name: "...",
						url: "https://",
						icon: "mdi:help"
					},
					{
						name: "...",
						url: "https://",
						icon: "mdi:help"
					}
				]
			},
			{
				title: "Social",
				color: "violet",
				align: "left",
				links: [
					{
						name: "Twitter",
						url: "https://twitter.com",
						icon: "mdi:twitter"
					},
					{
						name: "Youtube",
						url: "https://youtube.com/",
						icon: "mdi:youtube"
					},
					{
						name: "Reddit",
						url: "https://reddit.com",
						icon: "mdi:reddit"
					},
					{
						name: "Twitch",
						url: "https://twitch.tv",
						icon: "mdi:twitch"
					}
				]
			},
			{
				title: "Gaming",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "Minecraft",
						url: "https://minecraft.net",
						icon: "mdi:minecraft"
					},
					{
						name: "Snake",
						url: "https://g.co/kgs/JhtnCA",
						icon: "mdi:snake"
					},
					{
						name: "...",
						url: "https://",
						icon: "mdi:help"
					},
					{
						name: "...",
						url: "https://",
						icon: "mdi:help"
					}
				]
			},
			{
				title: "Utilities",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Postimages",
						url: "https://popsci.com/",
						icon: "mdi:image-multiple-outline"
					},
					{
						name: "bit.ly",
						url: "https://bit.ly",
						icon: "mdi:link-variant"
					},
					{
						name: "GGServers",
						url: "https://ggservers.com",
						icon: "mdi:server-security"
					},
					{
						name: "ESA",
						url: "https://blogs.esa.int/",
						icon: "mdi:black-mesa"
					}
				]
			},
			/*
	 {
				title: "Tech",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "TechCrunch",
						url: "https://techcrunch.com/",
						icon: "game-icons:techno-heart"
					},
					{
						name: "Verge",
						url: "https://www.theverge.com/",
						icon: "arcticons:verge"
					},
					{
						name: "It's Foss",
						url: "https://itsfoss.com/",
						icon: "ri:mastodon-fill"
					},
					{
						name: "9To5 Linux",
						url: "https://9to5linux.com/",
						icon: "uil:linux"
					}
				]
			}  */
		]
	}
}

export default defaultConfig
