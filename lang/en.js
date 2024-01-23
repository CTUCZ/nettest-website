exports.language = "en";
exports.strings = {
    "lang": "en",
    "LANG": "EN",
    "title": {
        "nettest": "CTU - NetTest",
        "qostest": "QosTest"
    },
    "headline" : {
        "nettest" : "CTU-NetTest",
        "qostest" : "www.qostest.eu"
    },
    "template": {
        "qos_ctu": "Visualization portal",
        "qos_url" : "https://qos.ctu.cz/",
        "complaint" : "How to claim",
        "complaint_url" : "https://www.ctu.eu/pay-actually-achived-speed",
        "ctu": "Czech Telecommunication Office",
        "ctu_url" : "https://www.ctu.eu/",
        "ctu_url2" : "www.ctu.cz",
        "comparison_tool": "Comparison Tool",
        "comparison_tool_url": "https://srovnavac.ctu.cz/"
    },
    "index_content": {
        "service_description": {
            "nettest": "The <b>CTU-NetTest</b> tool, operated by Czech Telecommunication Office, provides information to users on the current quality of their IAS in the form of <b>actually achieved speed</b> of download, upload and roundtrip delay (ping). It offers the possibility of <b>certified measurement</b> that will carry out fully automated process of measurement with result provided in PDF document that the user can use for possible claim against the quality of IAS at a fixed location. If you want to submit a claim against IAS at a fixed location (so called ‘fixed internet’), you must always use the certified measurement mode, while the only appropriate means of measurement is connecting your end device (PC, laptop) directly to the terminal equipment device (router or modem) or to the network termination point (if it allows a direct connection of end device without the necessity of conversion) through a cable (not through Wi-Fi) under further defined conditions.",
            "qostest": "qostest.eu informs users about the current service quality (including upload, download, ping, signal strength) of their Internet connection. In addition, a map view and statistics of previous tests can be accessed."
        },
        "detailed_dsc": "<p><strong>Please, have on mind that the performance of your end device as well as the operation system have significant impact on the measured values of the actual speed.</strong></p>",
        "tos": {
            "text": "Privacy Policy and Terms of Use",
            "url": {
                "nettest": "/en/Privacy",
                "qostest": "/en/Privacy"
            }
        },
        "select_version" : "Select version",
        "test_section" : {
            "heading" : "Start test",
            "desc" : "Carry out one measurement by NetTest tool",
            "alt" : {
                "nettest" : "Start the test",
                "qostest" : "qostest teaser"
            },
            "start" : "Start"
        },
        "statistics_alt" : "Statistics teaser",
        "map": "Map",
        "map_content" : "Maps with test results",
        "help_content" : "Detailled background information",
        "statistics_content" : "Measurements carried out earlier",
        "enlarge_map" : "Zoom the map",
        "fullscreen" : "Full screen",
        "loop_mode_content": "Carry out repeated measurement by customized settings",
        "opendata_content": "Measurement results are available as open data",
        "certified_content": "Carry out certified measurement process to submit a claim",
        "mobile_apps": "Download application for Android"
    },

    "map_content" : {
        "teaser" : {
            "nettest" : 'This map shows the existing CTU-NetTest results,  it is not always possible to draw conclusions on the broadband coverage. Additional information can be found  <a href="">here</a>.',
            "qostest" : 'This map shows the existing qostest.eu results, it is not always possible to draw conclusions on the broadband coverage. Additional information can be found <a href="">here</a>.'
        },
        "search_address" : "Search for an address or city",
        "large_view" : "Large view"
    },

    "statistics_content" : {
        "teaser" : {
            "nettest" : 'Values stated here are the results of NetTest tool measurement. Find more information here.',
            "qostest" : ''
        },
        "operators_from" : "Operators from",
        "disclaimer" : 'Repeated test are being filtered for the purpose of statistic overview.',
        "opendata_disclaimer" : 'Please note: <a href="Opendata.html">measurement data available</a> as open data',
        "burgenland" : 'Burgenland',
        "carinthia" : 'Carinthia',
        "lower_austria" : 'Lower Austria',
        "upper_austria" : 'Upper Austria',
        "salzburg" : 'Salzburg',
        "styria" : "Styria",
        "tyrol" : "Tyrol",
        "vorarlberg" : "Vorarlberg",
        "vienna" : "Vienna",
        "all_states" : "All provinces",
        "enddate" : "End date",
        "all_operators" : "All operators",
        "no_operators": "No operators found for the current selection",
        "failure": "Currently there are no statistics available."
    },

    "history_content" : {
        "request_code" : "Request synchronization code",
        "enter_code" : "or enter a known synchronization code in the input box below and confirm your entry by clicking on submit",
        "download": "Download your measurements’ history",
        "csv": "CSV",
        "xlsx": "XLSX",
        "pdf": "PDF"
    },

    "opentest_content" : {
        "measurement_result_from" : "Measurement results from",
        "coverage_hint": "Please note that these data rates are not measurement results of the CTU-NetTest, but data rates published by the respective operators. The information refers to an area of 100m x 100m. For questions - such as the tariff with which bandwidths can be achieved or whether installation is possible at your specific location - please contact the respective network operator. <a href='' target='_blank'>Further information</a>",
        "coverage_unavailable": "For this location, no operator open data is available.",
        "coverage_intro": "For this location the following information has been published by operators:",
        "down_avg": "Downlink (normally available speed)",
        "up_avg": "Uplink (normally available speed)",
        "down_max": "Downlink (maximum speed available)",
        "up_max": "Uplink (maximum speed available)"
    },

    "opentests_content" : {
        "network_name" : "Mobile network (Display)",
        "mobile_provider_name" : "Mobile operator",
        "sim_home_country" : "SIM home country",
        "sim_mcc_mnc" : "SIM-MCC-MNC",
        "country_geoip" : "Country (IP)",
        "country_location" : "Country (Location)",
        "public_ip_as_name" : "Network name (AS)",
        "software_version" : "Software version",
        "next_page" : "Next page",
        "results" : "results",
        "network_country" : "Country",
        "gkz" : "Austrian community ID",
        "pinned_true" : "Included in statistics",
        "pinned_false" : "Not included in statistics",
        "show_open_test_uuid" : "Show Open-Test-UUID",
        'radio_band': 'Radio band',
        'cell_area_code': 'Cell area code',
        'cell_location_id': 'Cell location id',
        'channel_number': 'Frequency channel',
        "additional_filters" : "Further filters",
        "intraday": "Intraday",
        "down_upload": "Download/Upload"
    },

    "options_content" : {
        "client_uuid" : "Client-UUID",
        "your_uuid" : "Your UUID is",
        "ip_version": "IP version",
        "ip_version_desc": "If your internet access supports both IPv4 and IPv6, you can choose which protocol version is used for conducting the test.",
        "ipvX_only": "IPv%X% only",
        "preferred_test_type" : "Preferred Test Type",
        "choose_server_desc" : "Please choose which server should be used for conducting the WebSocket-based test.", 
        "config_saved" : "The configuration has been saved.",
        "run_ndt" : "I wish to run the optional NDT-Test.",
        "email_subject" : "CTU-NetTest%20support%20request",
        "email_address": "nettest@ctu.cz",
        "fix_threads": "lock parallel threads"
    },

    "opendata_content" : {
       "open_data_specification" : "Open Data",
        "content_block" : 'The results on CTU-NetTest measurement tool are published as open data in compliance with privacy policy. The data format specification is available <a href="/en/DataSpecification">here</a>. This specification describes information available as open data in CSV format (see below).',
        "csv_interface" : 'Download interface',
        "recent_tests_hours" : 'The results of the last 48 hours are available as zip-archive under:<br /><br /> <a href="/RMBTStatisticServer/export/nettest-opendata_hours-048.zip" title="CTU-NetTest Open Data 48h" target="_blank" class="external-link-new-window">nettest-opendata_hours-048.zip</a><br /> <a href="/RMBTStatisticServer/export/nettest-opendata_hours-048.xlsx" title="CTU-NetTest Open Data 48h" target="_blank" class="external-link-new-window">nettest-opendata_hours-048.xlsx</a>.',
        "recent_tests" : 'The results of the last 31 days are available as zip-archive under:<br /><br /> <a href="/RMBTStatisticServer/export/nettest-opendata.zip" title="CTU-NetTest Open Data" target="_blank" class="external-link-new-window">nettest-opendata.zip</a><br /> <a href="/RMBTStatisticServer/export/nettest-opendata.xlsx" title="CTU-NetTest Open Data" target="_blank" class="external-link-new-window">nettest-opendata.xlsx</a>.',
        "further_results" : "Further results are available on a monthly basis:",
        "note_timestamp" : "lease note that time stamps are in UTC (not in local time).",
        "license_text" : 'The data is published under the <a href="https://creativecommons.org/licenses/by/4.0/deed.en" target="_blank" class="external-link-new-window">Creative Commons Attribution 4.0 (CC BY 4.0)</a> license.'
    },

    "loop_mode_content" : {
        "tests" : "Number of tests",
        "tests_sum" : "Number of tests in loop mode",
        "waiting_time" : "Waiting time",
        "waiting_time_desc" : "Waiting time (in minutes) between two tests in loop mode",
        "start": "Start loop mode",
        "measurements" : "Last measurement",
        "error_during_test" : "An error occurred during the measurement.",
        "current_test": "Current measurement",
        "save_results": "Save results",
        "download_results": "Download results:",
        "available_history": "The measurement results are available under <a href='/en/Result'><strong style='font-weight: bold'>HISTORY</strong></a> bookmark."
    },
    "certified_measurement_content": {
        "info": "Info",
        "data": "Data",
        "environment": "Environment",
        "measurement": "Measurement",
        "result": "Result",
        "introduction_desc_1": "If all measurement conditions are met, the certified measurement allows to apply results of this measurement as conclusive findings about the quality of the IAS at a fixed location (so-called fixed internet), if it is offered on the area of the Czech Republic. This finding can be applied in case you decide to activate remedies available in compliance with national legislation.",
        "introduction_desc_2": "In case of any <b>significant and continuous</b> or <b>regularly recurring discrepancy</b> of actual service performance regarding its upload and download speed, from the performance the IAS provider stated in the contractual conditions, you can submit a claim to the provider against the quality of the service (QoS) provided.",
        "introduction_desc_3": "An important parameter to assess the service performance in case of IAS at a fixed location is the contractual speed of actually achieved speed. It determinates whether there are any discrepancies.",
        "introduction_desc_4": "Another important parameter is the contractual <b>minimum speed</b>. If the actually achieved minimum download or upload speed decreases under the advertised minimum speed for the given direction of data communication, the service is having an outage, i.e. it is not being provided.  Also, in this case you have the right to submit a claim against the service.",
        "introduction_desc_5": "<strong>Note, that the CTU-NetTest measurement tool can be used for advertised download speed values up to 500 Mb/s (incl.) and for upload speed values up to 250 Mb/s (incl.), given the general nature of accuracy of the measurement tools based on web-browser principles</strong>.",
        "introduction_instruction": "Conditions of the measurement",
        "introduction_instruction_desc": "Before carrying out the certified measurement, please, read carefully and fully the conditions of the measurement <a href='https://nettest.cz/Certified_measurement_guide.pdf'> in the guide</a>. It also includes a checklist which can help you carry out the certified measurement. You can send your questions about the certified measurement to <a href='mailto:nettest@ctu.cz'>nettest@ctu.cz</a>.",
        "please_note": "<strong>Please, pay attention especially to the following:</strong>",
        "note_fixed": "The certified measurement can only be used to verify wired Internet access services.",
        "note_browser": "The certified measurement can be carried out by means of a web-browser (Chrome, Edge, Firefox, etc.) on your end device (i.e. desktop PC, laptop) only with an updated operation system and browser.",
        "note_no_wifi": "Your end device (desktop PC, laptop) used for carrying out the certified measurement must be always connected to Ethernet interface (ports RJ-45) of the terminal equipment device by means of fixed, i.e. metallic (min. Cat.5e) or fibre cable.",
        "note_speed_limits": "The performance of the end device as well as of the operation system may have a significant impact on the measured actual speed. To measure speeds higher than 100 Mb/s, it is recommended to use operation system utilising TCP CUBIC (Windows 10 and higher, MacOS X Yosemite and higher, Linux kernel 2.6.19 and higher).",
        "note_no_other_usage": "The CTU-NetTest measurement tool can be used for certified measurement of IAS quality for advertised speed values below or equal to 500 Mb/s (download) and 250 Mb/s (upload), given the general nature of accuracy of the measurement tools based on web-browser principles.",
        "note_no_other_users": "Do not use your device for any other applications during the whole certified measurement process.",
        "note_os": "Before starting the measurement cycle, make sure that no other users utilise the IAS (e.g. family members on their smart terminal equipment devices, mobile phones, tablets, TV, etc.).",
        "process": "The certified measurement process",
        "process_desc": "The certified measurement is a cycle composed of 6 time-diversified tests carried out during a period of one calendar month. A measuring cycle takes 1 hour and 30 minutes. Within the test, individual measurements are carried out automatically, having duration of 10 seconds for each direction of data communication (download and upload). The time spacing between individual tests is 15 minutes.",
        "questions_desc": "Please, send your questions about the certified measurement to <a href='mailto:nettest@ctu.cz'> nettest@ctu.cz </a>.",
        "basic_information": "Basic information on the certified measurement",
        "required_field": "(obligatory entry)",
        "title_prepended": "Addressing as Mr/Mrs/Ms",
        "first_name": "First name",
        "last_name": "Last name",
        "title_appended": "Academic title",
        "location": "Location of the measurement",
        "location_desc": "Address of the location where the measurement is carried-out",
        "start_measurement": "Start the certified measurement",
        "additional_information": "Information on IAS at a fixed location",
        "provider_name": "Name of the IAS provider",
        "provider_service_name": "Name of the service",
        "provider_contract_number": "Contract number",
        "access_type": "Describe your Internet access",
        "access_type_desc": "What access technology does your service use (xDSL, fibre, Wi-Fi, DOCSIS, other)? What kind of terminal equipment device do you use for connecting to the Internet? Is your computer (laptop) connected with a cable to a socket (Ethernet, RH-45) or do you use modem or modem with router function (having LAN ports or allows also Wi-Fi connection) to connect to the Internet? If possible, state the exact name of the producer and type of the terminal equipment device (modem, router).",
        "test_device": "Describe your end device used for the measurement",
        "test_device_desc": "State the type of your end device (desktop PC, laptop) which you will use to carry out the test, type of the operation system (e.g. for OS Windows, you can find all necessary information here: Start / Control Panel / System and Security / System),  name and version of your web-browser used for the certified measurement (usually can be found in bookmarks Settings / Web-browser information).",
        "photo_upload": "Photo upload",
        "photo_upload_desc": "Please, send a photo of your end device showing how is the end device (desktop PC, laptop), used to carry out the measurement, connected to the Internet, i.e. connection sockets or terminal equipment device (modem or modem with router function) with, if possible, visible status of indicative LED diodes (their colour), producer, type. It is recommended to  take a photo of connection of the cable to the terminal equipment device as well, for this kind of connection.",
        "conducting_measurements": "Measurement process",
        "measurements": "Measurement",
        "result_when_finished": "The result of your measurement will be ready for download after all the time-diversified tests are finished.",
        "planned_end": "Planned finish of measurement: approx %X%.",
        "generating_report": "Document is being created ...",
        "finished": "Measuring cycle finished.",
        "finished_desc": "Save or print the result of the certified measurement. CTU does not save the document.",
        "error_generating": "Error when generating the document.",
        "generate_new": "Try again",
        "finished_note_1": "If random 3 tests out of total 6 tests of the certified measurement show the resulting (i.e. actually achieved) download or upload speed is lower than the normally available speed stated in contractual conditions, it is the case of significant recurring discrepancy of the service performance.",
        "finished_note_2": "If 6 tests out of total 6 tests show the resulting download or upload speed is lower than the normally available speed for the given direction (download/upload), it is the case of significant continuous discrepancy of the service performance.",
        "finished_note_3": "If a random test shows the resulting download or upload speed is lower than the value of minimum speed for the given direction, stated in contractual conditions, it is the case of service outage.",
        "finished_note_4": "In case of both significant discrepancies, as well as in case of service outage, you can apply your right to submit a claim against defective service provision to your IAS provider."
    },
    //Page titles and link descriptions
    "ctu": "Czech Telecommunication Office",
    "copyright": "CTU, All rights reserved", 
    "index": "Introduction",
    "statistics": "History of measurements",
    "history": "History",
    "map": "Map",
    "options": "Settings",
    "opentest": "Open data, results of measurements",
    "opentests": "Open data, results of measurements",
    "opendata": "Open data",
    "help": "Help",
    "help_url": "https://www.nettest.cz/en/Help",
    "news" : "News",
    "menu" : "Menu",
    "loop_mode" : "Loop mode",
    "loop_mode_loading" : "Loop mode loading...",
    "certified_measurement": "Certified measurement",
    "further": "Further",
    "start_test": "Start test",
    "test": "Test",
    "framework_loading": "Test framework loading...",
    "home": "Home",
    "mobile_apps": "Mobile application",
    "link_to_certified": "<a href='/en/CertMeasurement'>Use the certified measurement for the purpose of submission a claim against the service.</a>",
    "loop_tab_warning": "Note that web-browser bookmark with the running measurement must remain active to allow correct course of the repeated measurement, otherwise the following test might not be started.",
    "cert_tab_warning": "Note that web-browser bookmark with the running measurement must remain active to allow correct course of the certified measurement, otherwise the following test might not be started.",

    //common words
    "top" : "Top",
    "print" : "Print",
    "time": "Time",
    "operator": "Operator",
    "device": "Device",
    "up": "Up",
    "down": "Down",
    "ping": "Ping",
    "signal": "Signal",
    'mbps': 'Mbps',
    'ms': 'ms',
    'dBm': 'dBm',
    'dB': 'dB',
    'X_recent_tests': "%X% recent tests",
    'recent_tests': "Recent tests",
    'more' : "more",
    'less' : "less",
    "average" : "Average",

    "automatic" : "Automatic",
    "heatmap" : "Heatmap",
    "points" : "Points",
    "shapes" : "Shapes",
    "communities" : "Cadastral communities",
    "sources" : "Sources",

    "please_select" : "Please select",
    "address_not_distinct" : "Address not distinct",
    "map_key" : "Map key",
    "search" : "Search",

    "further_tests" : "Further tests",
    "austria" : "Austria",
    "czechia" : "Czechia",

    "24_hours" : "24 hours",
    "1_day" : "1 day",
    "1_week" : "1 week",
    "1_month" : "1 month",
    "X_months" : "%X% months",
    "1_year" : "1 year",
    "X_years" : "%X% years",
    "days" : "Days",
    "months" : "Months",
    "years" : "Years",
    "type" : "Type",
    "mobile" : "Mobile",
    "wifi_test" : "WLAN (App)",
    "browser" : "Browser",
    "time_span" : "Time span",
    "technology" : "Technology",
    "mixed" : "Mixed",
    "quantile" : "Quantile",
    "X_m" : "%X% m",
    "X_km" : "%X% km",
    "quantity" : "Quantity",
    "location_accuracy" : "Location accuracy",
    "accuracy" : "Accuracy",
    "any" : "any",
    "name" : "Name",
    "all" : "All",
    "devices" : "Devices",
    'open_uuid': 'Open-User-UUID',
    "client_uuid" : "Client-UUID",
    "begin" : "begin",
    "end" : "end",
    "timespan" : "Timespan",
    "pinned" : "Pinned",
    "test_server" : "Testserver",
    "ip": "IP",
    "state": "Status",
    "api": "API",

    "access" : "Access",
    "date" : "Date",
    "sync_title" : "Results synchronizations",
    "synchronization_code" : "Synchronization code",
    "code" : "Code",
    "submit" : "Submit",

    "quality_of_service" : "Quality of Service",
    "details" : "Details",
    "detailed_results" : "Detailed results",
    "position" : "Position",
    "speed_curve" : "Speed curve",
    "download" : "Download",
    "upload" : "Upload",
    "speed" : "Speed",
    "data_volume" : "Data volume",
    "signal_strength" : "Signal strength",
    "connection_technology" : "Technology",
    "share" : "Share",
    "get_forum_banner" : "Get forum banner",
    "send_email" : "Send email",
    "open_data_entry" : "Open data entry",

    "measurement_result" : "Measurement result",
    "detailed_measurements" : "Detailed measurements",
    "measurements" : "Measurements",
	"measurement": "Measurement",
    "moreInfo" : "More Info",
	"net": "Net",

    "websocket" : "WebSocket",
    "java_applet" : "Java-Applet",
    "default_server" : "Default Server",
    "save" : "Save",

    "test_results" : "Test results",
    "advanced_search" : "Advanced search",
    "from" : "from",
    "up_to" : "up to",
    "zip_code" : "Zip code",
    "platform" : "Platform",
    "software_version" : "Software version",
    "asn" : "AS number",
    "apply_filters" : "Apply filters",
    "reset" : "Reset",
    "histogram" : "Histogram",
    "filter_map": "Filter map",
    "show_details": "Show details",

    "coordinates": "Coordinates",
    "location": "Location",
    "provider" : "Provider",
    "surrounding_tests": "Show surrounding measurements as open data",
    "land_cover": "Land cover",
    "next": "Next",
    "privacy": "Privacy",
    "email_address": "nettest@ctu.cz",
    "email_subject": "Support%20request%20CTU-NetTest%20%28Web%29",
    "accessibility": "Accessibility",
    "down_max": "DL (max)",
    "up_max": "UL (max)",
    "down_avg": "DL (normal)",
    "up_avg": "UL (normal)",
    "last_updated": "Last updated",
    "coverage": "Coverage",
    "service_overload": "Temporary notification: If your test is not started in 2 minutes, repeat the test later. There are many tests being coursed at this moment which causes delay before starting the test itself.",

    // Help
    "help_page" : {
        "help_title": "Legend to individual test parameters and of other terms",
        "download_title": "What download speed means?",
        "upload_title": "What upload speed means?",
        "ping_title": "What ping means?",
        "result_good_or_bad": "How will I recognise that my measured result is wrong?",
        "icon_meaning": "What individual colour interpretations relate to which threshold values?",
        "cert_tool": "What certified tool means?",
        "cert_measurement": "What certified measurement means?",
        "dep": "What demarcation points mean?",
        "help_apps_title": "Legend related to mobile app",
        "android_cert_title": "How do I perform a certified measurement in the Android mobile app?"
    },

    "opendata_specification_title" : "Open data, format specification",

    // Help text
    "help_content" : {
        "desc_down_1" : "The download speed stands for the direction of data transmission from the Internet to you. In connection with the data speed of this transmission direction, the download parameter is accompanied by b/s as the basic unit, while more often you can see Mbps (megabites per second), or Gbps (gigabites per second). The resulting download speed which is part of the result of your test carried out by the CTU NetTest measurement tool is the actually achieved speed in the given measurement interval. For carrying out one test by the NetTest tool, it is 10 seconds. This actually achieved speed characterises the real performance of Internet access service (IAS).",
        "desc_down_2" : "It is important to notice that the download speed value corresponds to the transport layer of your IAS (the Internet connection) using the TCP protocol, i.e. the most often used transport layer protocol, from the end user’s point of view. The download speed value should be in the range of values of the maximum speed and the normally available speed for most of the day (95 % of daytime). These values can be found in your contractual conditions (e.g. in the contract on the provision of IAS, in Terms and Conditions, or in Price list, etc.). The download speed can decrease below the value of the normally available speed for a short time, but not in such a way that this decrease would cause appearance of significant discrepancies or even service outage. Service outage means a situation when the download speed decreases under the maximum speed value as stated in contractual conditions. In these cases, you can apply your right to submit a claim against a defective service provision to your IAS provider.",
        "desc_up_1" : "The upload speed stands for the direction of data transmission from you to the Internet. In connection with the data speed of this transmission direction, the upload parameter is accompanied by b/s as the basic unit, while more often you can see Mbps (megabites per second), or Gbps (gigabites per second). The resulting upload speed which is part of the result of your test carried out by the CTU NetTest measurement tool is the actually achieved speed in the given measurement interval. For carrying out one test by the NetTest tool, it is 10 seconds. This actually achieved speed characterises the real performance of Internet access service (IAS).",
        "desc_up_2" : "The upload speed is often advertised with significantly lower value than the download speed. Nevertheless, the upload speed is very important as the communication via TCP protocol on the Internet happens in both directions (the successfully downloaded data are being continuously confirmed and vice versa). The upload speed is particularly important e.g. for sending photos, sharing files, or for videoconferencing.",
        "desc_up_3" : "It is important to notice that the download speed value corresponds to the transport layer of your IAS (the Internet connection) using the TCP protocol, i.e. the most often used transport layer protocol, from the end user’s point of view. The upload speed value should be in the range of values of the maximum speed and the normally available speed for most of the day (95 % of daytime). These values can be found in your contractual conditions (e.g. in the contract on the provision of IAS, in Terms and Conditions, or in Price list, etc.). The upload speed can decrease below the value of the normally available speed for a short time, but not in such a way that this decrease would cause appearance of significant discrepancies or even service outage. Service outage means a situation when the upload speed decreases under the maximum speed value as stated in contractual conditions. In these cases, you can apply your right to submit a claim against a defective service provision to your IAS provider.",
        "desc_ping" : "The ping, technically correctly the roundtrip delay, can be explained as a time range during which a data packet sent from your end device (desktop PC, laptop, cell phone) travels via the Internet to the measuring server of the CTU-NetTest tool and back. Ping (delay in the data networks) is being stated in ms (milliseconds). High values of the roundtrip delay can prevent using services in real time (e.g. TV or VoIP) and are also often one of the reasons why the actually achieved download and upload speeds decrease. In general, full utilisation on the IAS provider’s network causes increase of the ping value and vice versa. During measurement of the roundtrip delay via ping, protocol of ICMP network layer is being used.",
        "desc_result" : "The result of the measurement must be compared with the speed values stated in your contractual conditions arranged with your IAS provider. According to Regulation (EU) 2015/2120 Art. 4(1)(d), the contractual conditions on provision of IAS at a fixed location (fixed internet) must include separately four speeds for both directions (upload and download) of data communication: advertised speed, maximum speed, normally available speed, and minimum speed. Above that, the General Authorisation No. VO-S/1/08.2020-9 issued by CTU defines the mutual relation between these speeds and details the definitions of a significant recurring and significant continuous discrepancy of the service performance. The value of the actually achieved speed (upload and download) that you measured using the NetTest tool should be in the range of values of the maximum speed and the normally available speed for most of the day (95 % of daytime). The actually achieved speed can decrease below the value of the normally available speed for a short time, but not in such a way that this decrease would cause appearance of significant discrepancies or even service outage, when the actually achieved speed decreases under the maximum speed value. In these cases, you can apply your right to submit a claim against a defective IAS provision. The NetTest measurement tool in its mode of certified measurement will automatically prepare a PDF document for you which you can then simply use for submitting a claim.",
        "desc_icon_1" : "The colour scale of the measurement results’ interpretation provides information on what performance the IAS on the given location can reach. The assessment of measured values of individual tracked parameters will be displayed regardless of your IAS. Yellow and red colours represent areas where the IASs shows lower performances (download, upload, ping). On contrary, green and dark green colours represent areas where the IASs reach high performances.",
        "desc_icon_2" : "The used coloured scaling is independent from the access technology and stems solely from the measured values of the tracked IAS parameters based on defined value ranges for individual parameters of the given colour.",
        "desc_cert_tool" : "The CTU-NetTest is a certified tool under the Regulation (EU) 2015/2120. That means it is a monitoring mechanism established and operated by Czech Telecommunication Office for the purpose of verifying the IAS performance by the end user and of the possibility to activate means of remedy. CTU guarantees its functioning, certain level of accuracy, connectivity with high capacity connection to a peer node, and transparency of the method.",
        "desc_cert_measurement" : "The certified measurement is a cycle composed of 6 time-diversified tests carried out during a period of one calendar day and meet the prescribed measurement conditions. A measuring framework takes 1 hour and 30 minutes. Within the test, individual measurements are carried out automatically, having duration of 10 seconds for each direction of data communication (download and upload). The time spacing between individual tests is 15 minutes. CTU recommends using the CTU-NetTest tool in the mode of certified measurement  of IASs up to advertised speeds (incl.).",
    },

    // Icon meaning table
    "parameter" : "Parameter",
    "dark_green" : "Dark green",
    "green" : "Green",
    "yellow" : "Yellow",
    "red" : "Red",

    //404
    "not_found_page": {
        "title": "Page not found",
        "main": "Oops! Seems like <span style='font-size: 45px; font-weight: 600; padding: 0 10px; color: #2362a2'>ERROR 404</span> ... we are sorry.",
        "note": "We are sorry, the page you were searching was not found. Try to check for mistakes in URL and click on Refresh in your browser."
    },

    // Info
    "info_page": {
        "title": "Testing unavailable",
        "note": "We are sorry, given the high number of the tests currently being carried out, the measurement capacity is fully utilised. Please, try it later."
    },

    //Data specification
    "ds_page" : {
        "title" : "Title",
        "desc" : "Description",
        "type" : "Type",
        "example" : "Example",
        "asn" : "Autonomous system number.",
        "cat_technology" : "Technology category of the network, e.g. “3G”, “4G”, “WLAN”.",
        "client_version" : "Software version number of the client.",
        "download_kbit" : "The download-speed in kilobit per second.",
        "implausible" : "Identification of implausible test results.",
        "ip_anonym" : "The anonymized IP-Address of the client.",
        "lat" : "Latitude of the client position.",
        "loc_accuracy" : "Estimation of accuracy of client location.",
        "loc_src" : "Source for the geo location-data. Valuse: “gps”, “network”.",
        "long" : "Longitude of the client position.",
        "lte_rsrp" : "LTE signal strength in dBm.",
        "lte_rsrq" : "LTE signal quality in decibels.",
        "model" : "Name of the device used.",
        "nat_type" : "Type of connection in terms of NAT and IP-Version (e.g. behind NAT with local to public IP and IPv4).",
        "ndt_download_kbit" : "Download speed in the NDT-test in kilobit per second.",
        "ndt_upload_kbit" : "Upload speed in the NDT-test in kilobit per second.",
        "network_mcc_mnc" : "Network identification, first three digits represent the country, the following digits represent the mobile network provider within that country.",
        "network_name" : "Display name of the mobile network.",
        "network_type" : "Type of the network, e.g. MOBILE, LAN, WLAN.",
        "num_threads" : "Number of threads used for the downlink test.",
        "open_test_uuid" : "Open-Test-UUID: The UUID of the Test.",
        "open_uuid" : "Open-UUID: Identifies the client that conducted the test. The a new Open-UUID is assigned to the client on a regular basis.",
        "ping_ms" : "Median ping (round-trip time) in milliseconds, measured on the server side.",
        "pinned" : "True, if if the test is relevant for generating the statistics (e.g. not part of a series).",
        "platform" :  "Platform on which the test has been conducted. E.g. “Android” (= Google Android App), “iOS” (= Apple iOs App).",
        "server_name" : "Name of the test-server.",
        "sim_mcc_mnc" : "Network identification of the SIM provider. The digits of MCC and MNC have the same meaning as described in “network_mcc_mnc”.",
        "test_duration" : "Duration of the test per direction (up- or download) in seconds.",
        "time_utc" : "UTC date and time when test was started.",
        "upload_kbit" : "Upload speed in kilobit per second.",
    },
     // Apps
     "apps_page": {
        "title": "CTU-NetTest mobile application",
        "desc": "The CTU-NetTest mobile application of the Czech Telecommunications Office enables users to obtain information about the current quality of the mobile Internet access service. A mobile application is currently available for the Android operating system.",
        "android_title": "Mobile application for Android",
        "download_android": "Download mobile app for Android",
        "cert_android": "Information about certified measurement for Android",
        "tc_android": "Privacy Policy and Terms of Use for Android",
        "tc_android_url": "https://nettest.cz/en/PrivacyAndroid",
        "ios_title": "Mobile application for iOS",
        "ios_tba": "To be announced.",  
    }
}