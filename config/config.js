/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Daily Tasks",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						// url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
						url: "https://calendar.google.com/calendar/ical/paulqlove%40gmail.com/private-bdfb6f6c862482bb14ecd3c2a2aa5ace/basic.ics"
					}
				]
			}
		},
		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "",
				locationID: "4684888", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "30ae3d3beadaf6897821802265cde423"
			}
		},
		// {
    // module: 'on-this-day',
    // position: 'lower_third',
    // config: {
		// 	interests: ['history','science','football','general']
    //             // see below for configurable options...
    //         }
		// 	},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Dallas",
				locationID: "4684888", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "30ae3d3beadaf6897821802265cde423",
				showRainAmount: true,
				colored: true,
				fade: false
			}
		},
		{
            module: 'MMM-CoinMarketCap',
            position: "bottom_left",
            header: "Cryptocurrencies",
            config: {
                apiKey: '011714d2-427b-4f09-87c5-1f15728859cf',
                currencies: ['bitcoin', 'ethereum', 'litecoin', 'ripple'],
                view: 'graphWithChanges',
                conversion: 'USD'

                // See below for more Configuration Options
            }
        },
				{
        module: "MMM-aqicn",
        position: "top_right",
        header: "Air Quality Index",
        config: {
            token: "5c88462fb89172b4e53a93aeec1c0d727049bf57",
            stationName: "Arlington Municipal Airport, fort Worth, Dallas, Texas",
            showDetails: true
            }
        },
				{
	disabled: false,
	module: "MMM-NewsFeedTicker",
	position: "bottom_bar",
	//classes: "day_scheduler",
	config: {
	    feeds: [
		{
			title: "New York Times",
			url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml",
			customLogo: "NYT_logo_rss_250x40.png"
		},
		{
			title: "USA Today",
			url: "http://rssfeeds.usatoday.com/UsatodaycomNation-TopStories",
			customLogo: "RSS_Syndication_Logo-USATN.png"
		},
		{
			title: "BBC World News",
			url: "http://feeds.bbci.co.uk/news/world/rss.xml#",
			customLogo: "bbc_news_120x60.gif"
		}
    	    ]
	}
    },
				{
					module: 'MMM-ModuleScheduler'
				}
		// {
		// 	module: "newsfeed",
		// 	position: "bottom_bar",
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true,
		// 		broadcastNewsFeeds: true,
		// 		broadcastNewsUpdates: true
		// 	}
		// },
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
