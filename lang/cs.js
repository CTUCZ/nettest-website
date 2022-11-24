exports.language = "cs";
exports.strings = {
    "lang": "cs",
    "LANG": "CS",
    "title": {
        "nettest": "ČTÚ – NetTest",
    },
    "headline" : {
        "nettest" : "ČTÚ – NetTest",
    },
    "template": {
        "qos_ctu": "Vizualizační portál",
        "qos_url" : "https://qos.ctu.cz/",
        "complaint" : "Jak reklamovat",
        "complaint_url" : "https://www.ctu.cz/plattezaskutecnourychlost",
        "ctu": "Český telekomunikační úřad",
        "ctu_url" : "https://www.ctu.cz/",
        "ctu_url2" : "www.ctu.cz",
        "comparison_tool": "Srovnávací nástroj",
        "comparison_tool_url": "https://srovnavac.ctu.cz/"
    },
    "index_content": {
        "service_description": {
            "nettest": "Nástroj <b>ČTÚ-NetTest</b>, provozovaný Českým telekomunikačním úřadem, informuje uživatele o aktuální kvalitě jejich služby přístupu k internetu v podobě <b>skutečně dosahované rychlosti</b> stahování (download), vkládání (upload) a doby odezvy (ping). Nabízí možnost <b>certifikovaného měření</b>, které plně automaticky provede celý proces měření s výsledkem v podobě PDF dokumentu, který může uživatel použít pro případnou reklamaci služby přístupu k internetu v pevném místě. Pokud chcete provést reklamaci služby přístupu k internetu v pevném místě (tzv. pevného internetu), je nutné vždy využít režimu certifikovaného měření, přičemž jediným přípustným způsobem měření je připojení vašeho uživatelského zařízení (PC, notebook) přímo ke koncovému zařízení (routeru, resp. modemu) nebo do koncového bodu sítě (pokud umožňuje přímé připojení uživatelského zařízení bez nutnosti konverze), a to kabelem (nikoli pomocí Wi-Fi), za dále definovaných podmínek.",
        },
        "detailed_dsc": "<p><strong>Mějte prosím na paměti, že nejen výkon vašeho uživatelského zařízení, ale i operační systém má zásadní vliv na naměřené hodnoty skutečné rychlosti.</strong></p>",
        "tos": {
            "text": "Prohlášení o ochraně osobních údajů a podmínky užití",
            "url": {
                "nettest": "/cs/Privacy",
            }
        },
        "select_version" : "Vyberte verzi",
        "test_section" : {
            "heading" : "Spustit test",
            "desc" : "Provede jedno měření nástrojem NetTest",
            "alt" : {
                "nettest" : "Spustit test",
            },
            "start" : "Start"
        },
        "map": "Mapa",
        "map_content" : "Mapy s výsledky testů",
        "statistics_content" : "Dříve provedená měření",
        "enlarge_map" : "Zvětšit mapu",
        "fullscreen" : "Na celou obrazovku",
        "loop_mode_content": "Provede opakované měření dle vlastního nastavení",
        "opendata_content": "Výsledky měření jsou dostupné jako otevřená data",
        "certified_content": "Provede proces certifikovaného měření pro účely reklamace služby",
        "mobile_apps": "Stažení aplikace pro Andorid"
    },

    "history_content" : {
        "request_code" : "Získat synchronizační kód",
        "enter_code" : "nebo zadejte již přidělený synchronizační kód a potvrďte stisknutím tlačítka odeslat.",
        "download": "Stažení historie Vašich měření",
        "csv": "CSV",
        "xlsx": "XLSX",
        "pdf": "PDF"
    },

    "opentest_content" : {
        "measurement_result_from" : "Výsledky měření z",
    },

    "opentests_content" : {
        "network_name" : "Mobilní síť (zobrazená)",
        "mobile_provider_name" : "Mobilní operátor",
        "sim_home_country" : "Domovská země SIM",
        "sim_mcc_mnc" : "SIM-MCC-MNC",
        "country_geoip" : "Země (IP)",
        "country_location" : "Země (Lokace)",
        "public_ip_as_name" : "Název sítě (AS)",
        "software_version" : "Verze softwaru",
        "next_page" : "Další strana",
        "results" : "výsledků",
        "network_country" : "Země",
        "gkz" : "ID rakouské komunity",
        "pinned_true" : "Zahrnuto ve statistikách",
        "pinned_false" : "Není zahrnuto ve statistikách",
        "show_open_test_uuid" : "Zobrazit ID testů",
        'radio_band': 'Frekvenční pásmo',
        'cell_area_code': 'Cell area code',
        'cell_location_id': 'Cell location id',
        'channel_number': 'Frekvenční kanál',
        "additional_filters" : "Další filtry",
        "intraday": "Posledních 24 hodin",
        "down_upload": "Rychlost stahování/vkládání (download/upload)"
    },

    "options_content" : {
        "client_uuid" : "UUID klienta",
        "your_uuid" : "Vaše UUID je",
        "ip_version": "Verze IP",
        "ip_version_desc": "Pokud Váš přístup k internetu podporuje IPv4 i IPv6, můžete si vybrat, který protokol použijete pro test.",
        "ipvX_only": "Pouze IPv%X%",
        "choose_server_desc" : "Prosím vyberte, který server bude použit pro měření prostřednictvím WebSocket protokolu.", 
        "config_saved" : "Nastavení bylo uloženo.",
        "email_subject" : "ČTÚ-NetTest%20žádost%20o%20podporu",
        "email_address": "nettest@ctu.cz",
    },

    "opendata_content" : {
       "open_data_specification" : "Otevřená data",
        "content_block" : 'V souladu se zásadami ochrany osobních údajů jsou výsledky měření nástrojem ČTÚ-NetTest zveřejněna jako otevřená data. Specifikace formátu dat je k dispozici <a href="/cs/DataSpecification">zde</a>. Tato specifikace popisuje informace, které jsou dostupné jako otevřená data ve formátu CSV (viz níže).',
        "csv_interface" : 'Stažení dat',
        "recent_tests_hours" : 'Výsledky měření za posledních 48 hodin:<br /><br /> <a href="/RMBTStatisticServer/export/nettest-opendata_hours-048.zip" title="ČTÚ-NetTest Open Data 48h" target="_blank" class="external-link-new-window">nettest-opendata_hours-048.zip</a><br /> <a href="/RMBTStatisticServer/export/nettest-opendata_hours-048.xlsx" title="ČTÚ-NetTest Open Data 48h" target="_blank" class="external-link-new-window">nettest-opendata_hours-048.xlsx</a>.',
        "recent_tests" : 'Výsledky měření za posledních 31 dní:<br /><br /> <a href="/RMBTStatisticServer/export/nettest-opendata.zip" title="ČTÚ-NetTest Open Data" target="_blank" class="external-link-new-window">nettest-opendata.zip</a><br /> <a href="/RMBTStatisticServer/export/nettest-opendata.xlsx" title="ČTÚ-NetTest Open Data" target="_blank" class="external-link-new-window">nettest-opendata.xlsx</a>.',
        "further_results" : "Další výsledky jsou k dispozici měsíčně:",
        "note_timestamp" : "Upozorňujeme, že časová razítka jsou v UTC (ne v místním čase).",
        "license_text" : 'Data jsou publikována v licenci <a href="https://creativecommons.org/licenses/by/4.0/deed.cs" target="_blank" class="external-link-new-window">Creative Commons Attribution 4.0 (CC BY 4.0)</a>.'
    },

    "loop_mode_content" : {
        "tests_sum" : "Počet provedených testů",
        "waiting_time_desc" : "Časová prodleva mezi dvěma testy (minuty)",
        "start": "Spustit opakované měření",
        "measurements" : "Poslední měření",
        "error_during_test" : "Během meření se vyskytla chyba.",
        "current_test": "Aktuální měření",
        "save_results": "Uložit výsledky",
        "download_results": "Stáhnout:",
        "available_history": "Výsledky měření jsou k dispozici v záložce <a href='/cs/Result'><strong style='font-weight: bold'>MOJE MĚŘENÍ</strong></a>."
    },
    "certified_measurement_content": {
        "info": "Informace",
        "data": "Údaje",
        "environment": "Informace o službě",
        "measurement": "Měření",
        "result": "Výsledek",
        "introduction_desc_1": "Jsou-li splněny všechny podmínky měření, umožňuje certifikované měření uplatnit výsledky tohoto měření jako průkazná zjištění o kvalitě Vaší služby přístupu k internetu v pevném místě (tzv. pevného internetu), pokud je nabízena na území České republiky. Tato zjištění můžete uplatnit v případě, pokud se rozhodnete využít prostředky nápravy, které máte k dispozici podle vnitrostátního práva.",
        "introduction_desc_2": "V případě vzniku jakékoliv <b>velké trvající</b> či <b>velké pravidelně se opakující odchylky</b> skutečného výkonu služby, pokud jde o rychlost stahování (download) nebo vkládání (upload), od výkonu, který Váš poskytovatel služby přístupu k internetu uvedl ve smluvních podmínkách, můžete u něj kvalitu poskytované služby reklamovat.",
        "introduction_desc_3": "Důležitým parametrem pro posouzení výkonu služby je v případě služby přístupu k internetu v pevném místě smluvně udávaná hodnota <b>běžně dostupné rychlosti</b>. Ta je rozhodující pro určení, zda dochází k případný odchylkám.",
        "introduction_desc_4": "Dalším důležitým parametrem je smluvně udávaná <b>minimální rychlost</b>. Pokud skutečně dosahovaná rychlost stahování (download) nebo vkládání (upload) klesne pod smluvně udávanou minimální rychlost pro daný směr datové komunikace, dochází k výpadku služby, tedy k jejímu neposkytování. I v tomto případě máte právo na reklamaci služby.",
        "introduction_desc_5": "<strong>Upozorňujeme, že z obecné povahy přesnosti měřicích nástrojů založených na principu webových prohlížečů lze měřicí nástroj ČTÚ-NetTest použít pro rychlost stahování do (včetně) 500 Mb/s a pro rychlost vkládání do (včetně) 250 Mb/s hodnoty inzerované rychlosti služby</strong>.",
        "introduction_instruction": "Podmínky měření",
        "introduction_instruction_desc": "Před provedením certifikovaného měření si pozorně přečtěte úplné znění podmínek měření, které jsou uvedeny v <a href='https://nettest.cz/Pruvodce_certifikovanym_merenim.pdf'>návodu k jeho provedení</a>. Obsahuje také kontrolní seznam, který Vám pomůže certifikované měření provést. S dotazy ohledně certifikovaného měření se můžete obrátit na <a href='mailto:nettest@ctu.cz'>nettest@ctu.cz</a>.",
        "please_note": "<strong>Prosíme, věnujte pozornost zejména následujícímu:</strong>",
        "note_fixed": "The certified measurement can only be used to verify wired Internet access services.",
        "note_browser": "Certifikované měření lze provádět pomocí webového prohlížeče (Chrome, Edge, Firefox apod.) na Vašem uživatelském zařízení (tj. desktop PC, notebook) s aktualizovaným operačním systémem a webovým prohlížečem.",
        "note_no_wifi": "Vaše uživatelské zařízení (desktop PC, notebook) musí být vždy připojeno k uživatelskému ethernetovému rozhraní (porty RJ‑45) koncového zařízení pevným způsobem, tedy metalickým (min. Cat. 5e) nebo případně optickým kabelem.",
        "note_speed_limits": "Výkon uživatelského zařízení, ale i operační systém má zásadní vliv na naměřené hodnoty skutečné rychlosti. Pro měření rychlostí vyšších něž 100 Mb/s se doporučuje operační systém, který využívá algoritmus TCP CUBIC (Windows 10 a vyšší, MacOS X Yosemite a vyšší, Linux kernel 2.6.19 a vyšší).",
        "note_no_other_usage": "Z povahy měřicích nástrojů založených na bázi webových prohlížečů lze měřicí nástroj NetTest použít pro certifikované měření kvality služeb přístupu k internetu do inzerovaných hodnot menších nebo rovno limitním hodnotám 500 Mbit/s (download) a 250 Mb/s (upload).",
        "note_no_other_users": "Během celého procesu certifikovaného měření nepoužívejte Vaše zařízení pro jiné aplikace.",
        "note_os": "Před spuštěním měřicího cyklu se ujistěte, že po celou dobu měření nebudou službu přístupu k internetu využívat jiní uživatelé (např. rodinní příslušníci v rámci chytrých koncových zařízení, např. prostřednictvím mobilních telefonů, tabletů, TV atd.).",
        "process": "Proces certifikovaného měření",
        "process_desc": "Certifikované měření se skládá ze 6 časově diverzifikovaných testů během dne v rámci měřicího cyklu. Měřicí cyklus trvá 1 hodinu a 30 minut. V rámci testu jsou automaticky prováděna jednotlivá měření o celkové délce měření 10 sekund pro každý směr datové komunikace (download a upload). Časový rozestup mezi jednotlivými testy je 15 minut.",
        "questions_desc": "Dotazy ohledně certifikovaného měření směřujte, prosím, na adresu <a href='mailto:nettest@ctu.cz'> nettest@ctu.cz </a>.",
        "basic_information": "Základní informace o certifikovaném měření",
        "required_field": "(povinná položka)",
        "title_prepended": "Oslovení",
        "first_name": "Křestní jméno",
        "last_name": "Příjmení",
        "title_appended": "Akademický titul",
        "location": "Místo měření",
        "location_desc": "Adresní místo, ve kterém je měření prováděno",
        "start_measurement": "Spustit certifikované měření",
        "additional_information": "Informace o službě přístupu k internetu v pevném místě",
        "provider_name": "Název poskytovatele služby",
        "provider_service_name": "Název služby",
        "provider_contract_number": "Číslo smlouvy",
        "access_type": "Popište Váš přístup k internetu",
        "access_type_desc": "Jakou přístupovou technologií je Vaše služba realizována (xDSL, optika, Wi-Fi, DOCSIS, jiná)? Jaké koncové zařízení pro připojení k internetu používáte? Je př ipojen Váš počítač (notebook) kabelem přímo do zásuvky (ethernet, RJ-45), nebo používáte k připojení k internetu modem, případně modem s funkcí routeru (disponuje LAN porty, případně umožňuje i připojení přes Wi-Fi)?  Pokud je to možné, vepište přesné výrobce a označení typu koncového zařízení (modem, router).",
        "test_device": "Popište Vaše uživatelské zařízení, které používáte pro měření",
        "test_device_desc": "Uveďte typ Vašeho uživatelského zařízení (počítač, notebook), kterým budete test provádět, typ a verzi operačního systému (např. pro operační systém Windows naleznete vše zde: Start / Ovládací panely / Systém a zabezpečení / Systém) , název a verzi webového prohlížeče v kterém budete certifikované měření provádět (najdete většinou v záložce nastavení / informace o daném webovým prohlížeči).",
        "photo_upload": "Nahrávání fotografií",
        "photo_upload_desc": "Prosíme, zašlete fotografii způsobu připojení k internetu Vašeho uživatelského zařízení (počítač, notebook), na kterém budete provádět měření, tedy zásuvky pro připojení, případně koncového zařízení v podobě modemu, nebo modemu s funkcí routeru, v jejichž případě bude na fotografii vidět stav indikačních LED diod (jejich barva), výrobce a typ. Pro tento způsob připojení k internetu se doporučuje i vytvořit fotografii zapojení připojovacího kabelu do koncového zařízení.",
        "conducting_measurements": "Proces měření",
        "measurements": "Měření",
        "result_when_finished": "Výsledek Vašeho měření bude dostupný ke stažení po ukončení všech časově diverzifikovaných testů.",
        "planned_end": "Plánované dokončení měření: cca. %X%.",
        "generating_report": "Dokument se vytváří ...",
        "finished": "Měřicí cyklus je dokončen.",
        "finished_desc": "Výsledek certifikovaného měření si uložte nebo vytiskněte. ČTÚ tento dokument neukládá.",
        "error_generating": "Chyba při generování dokumentu.",
        "generate_new": "Zkusit znovu",
        "finished_note_1": "Pokud v rámci certifikovaného měření libovolné 3 výsledky testů ze 6 celkových vykazují výslednou (tj. skutečně dosahovanou) rychlost stahování (download) nebo vkládání (upload) nižší, než je hodnota běžně dostupné rychlosti, kterou Váš poskytovatel služby přístupu k internetu uvedl ve smluvních podmínkách, jedná se s velkou pravděpodobností o vznik velké opakující se odchylky od výkonu služby.",
        "finished_note_2": "Pokud všech 6 výsledků testů z 6 celkových vykazuje výslednou rychlost stahování (download) nebo vkládání (upload) menší než běžně dostupná rychlost pro daný směr (download/upload), jedná se s velkou pravděpodobností o vznik velké trvající odchylky od výkonu služby.",
        "finished_note_3": "V případě kteréhokoliv výsledku testu, který vykazuje výslednou rychlost stahování (download) nebo vkládání (upload) menší, než je minimální rychlost pro daný směr, uvedená ve smluvních podmínkách, jedná se o výpadek služby.",
        "finished_note_4": "V obou případech velkých odchylek, stejně jako v případě výpadku služby, můžete využít svého práva reklamovat vadné poskytnutí služby u svého poskytovatele služby přístupu k internetu."
    },
    //Page titles and link descriptions
    "ctu": "Český telekomunikační úřad",
    "copyright": "ČTÚ, Všechna práva vyhrazena", 
    "index": "Úvod",
    "statistics": "Historie měření",
    "history": "Moje měření",
    "map": "Mapa",
    "options": "Nastavení",
    "opentest": "Otevřená data, výsledky měření",
    "opentests": "Otevřená data, výsledky měření",
    "opendata": "Otevřená data",
    "help": "Nápověda",
    "help_url": "https://nettest.cz/cs/Help",
    "news" : "Aktuální informace",
    "menu" : "Menu",
    "loop_mode" : "Opakované měření",
    "loop_mode_loading" : "Opakované měření se načítá...",
    "certified_measurement": "Certifikované měření",
    "further": "Další",
    "start_test": "Spustit test",
    "test": "Test",
    "framework_loading": "Testovací framework se načítá...",
    "home": "Domů",
    "mobile_apps": "Mobilní aplikace",
    "link_to_certified": "<a href='/cs/CertMeasurement'>Pro účely reklamace služby využijte certifikovaného měření.</a>",
    "loop_tab_warning": "Upozorňujeme uživatele, že pro správný průběh opakovaného měření, je nutné mít aktivní záložku s měřením v prohlížeči, jinak se nemusí spustit následný test.",
    "cert_tab_warning": "Upozorňujeme uživatele, že pro správný průběh certifikovaného měření, je nutné mít aktivní záložku s měřením v prohlížeči, jinak se nemusí spustit následný test.",

    //common words
    "top" : "Top",
    "print" : "Tisk",
    "time": "Čas",
    "operator": "Poskytovatel",
    "device": "Zařízení",
    "up": "Rychlost vkládání (Upload)",
    "down": "Rychlost stahování (Download)",
    "ping": "Zpoždění (Ping)",
    "signal": "Signál",
    'mbps': 'Mb/s',
    'ms': 'ms',
    'dBm': 'dBm',
    'dB': 'dB',
    "average" : "Průměr",

    "automatic" : "Automaticky",

    "please_select" : "Vyberte",
    "search" : "Vyhledat",

    "further_tests" : "Další testy",
    "austria" : "Austria",
    "czechia" : "Czechia",

    "24_hours" : "24 hodin",
    "1_day" : "1 den",
    "1_week" : "1 týden",
    "1_month" : "1 měsíc",
    "X_months" : "%X% měsíců",
    "1_year" : "1 rok",
    "X_years" : "%X% let",
    "days" : "Den",
    "months" : "Měsíc",
    "years" : "Rok",
    "type" : "Typ",
    "mobile" : "Mobil",
    "wifi_test" : "WLAN (App)",
    "browser" : "Prohlížeč",
    "time_span" : "Time span",
    "technology" : "Technologie",
    "mixed" : "Mixed",
    "quantile" : "Quantile",
    "X_m" : "%X% m",
    "X_km" : "%X% km",
    "quantity" : "Množství",
    "location_accuracy" : "Přesnost umístění",
    "accuracy" : "Accuracy",
    "any" : "any",
    "name" : "Name",
    "all" : "Vše",
    "devices" : "Zařízení",
    'open_uuid': 'Open-User-UUID',
    "client_uuid" : "UUID klienta",
    "begin" : "začátek",
    "end" : "konec",
    "timespan" : "Časové rozpětí",
    "timespan_end" : "Konec časového rozpětí",
    "timespan_begin" : "Začátek časového rozpětí",
    "pinned" : "Připnuto",
    "test_server" : "Měřicí server",
    "ip": "IP adresa",
    "state": "Stav",
    "api": "API",

    "access" : "Připojení",
    "date" : "Datum a čas měření",
    "sync_title" : "Synchronizace výsledků",
    "synchronization_code" : "Synchronizační kód",
    "code" : "Kód",
    "submit" : "Odeslat",

    "quality_of_service" : "Kvalita služeb",
    "details" : "Detaily",
    "detailed_results" : "Podrobné výsledky",
    "position" : "Oblast",
    "speed_curve" : "Grafy",
    "download" : "Rychlost stahování (download)",
    "upload" : "Rychlost vkládání (upload)",
    "speed" : "Rychlost",
    "data_volume" : "Objem dat",
    "signal_strength" : "Síla signálu",
    "connection_technology" : "Technologie",
    "share" : "Sdílet",
    "send_email" : "Poslat email",
    "open_data_entry" : "Položka otevřených dat",

    "measurement_result" : "Výsledek měření",
    "detailed_measurements" : "Podrobné výsledky",
    "measurements" : "Měření",
	"measurement": "Měření",
    "moreInfo" : "Více informací",
	"net": "Net",

    "websocket" : "WebSocket",
    "default_server" : "Výchozí server",
    "save" : "Uložit",

    "test_results" : "Výsledky měření",
    "advanced_search" : "Rozšířené vyhledávání",
    "from" : "od",
    "up_to" : "do",
    "zip_code" : "PSČ",
    "platform" : "Platforma",
    "software_version" : "Verze softwaru",
    "asn" : "Číslo AS",
    "apply_filters" : "Filtrovat",
    "reset" : "Zrušit",
    "histogram" : "Histogram",
    "filter_map": "Filtrovat na mapě",
    "show_details": "Ukázat detaily",

    "coordinates": "Souřadnice",
    "location": "Oblast",
    "provider" : "Provider",
    "next": "Další",
    "privacy": "Soukromí",
    "email_address": "nettest@ctu.cz",
    "email_subject": "Žádost%20o%20podporu%20ČTÚ-NetTest%20%28Web%29",
    "down_max": "DL (max)",
    "up_max": "UL (max)",
    "down_avg": "DL (normal)",
    "up_avg": "UL (normal)",
    "last_updated": "Naposledy aktualizováno",
    "coverage": "Pokrytí",
    "service_overload": "Dočasné upozornění: Pokud se váš test nespustí do 2 minut, opakujte test později. V tuto chvíli je prováděno velké množství testů, které má za následek delší prodlevu před spuštěním samotného testu. Děkujeme za pochopení.",

    // Help
    "help_page" : {
        "help_title": "Vysvětlivky jednotlivých parametrů testu a dalších pojmů",
        "download_title": "Co znamená rychlost stahování (Download)?",
        "upload_title": "Co znamená rychlost vkládání (Upload)?",
        "ping_title": "Co znamená zpoždění (Ping)?",
        "result_good_or_bad": "Jak poznám, zda je můj naměřený výsledek špatný?",
        "icon_meaning": "Jakým prahovým hodnotám odpovídají jednotlivé barevné interpretace?",
        "cert_tool": "Co znamená certifikovaný nástroj?",
        "cert_measurement": "Co znamená certifikované měření?",
        "dep": "Co znamenají demarkační body?",
        "help_apps_title": "Vysvětlivky pro mobilní aplikaci",
        "android_cert_title": "Jak provedu certifikované měření v mobilní aplikaci pro Android?"
    },

    "opendata_specification_title" : "Otevřená data - specifikace formátu",

    // Help text
    "help_content" : {
        "desc_down_1" : "Pojem rychlost stahování (download) označuje směr přenosu dat z internetu k Vám. Ve spojení s datovou rychlostí tohoto směru přenosu se doplňuje parametr download základní jednotkou v b/s, přičemž nejčastěji se setkáte s Mb/s (Megabity za sekundu), případně Gb/s (Gigabity za sekundu). Výsledná hodnota rychlosti stahování, která je součástí výsledku Vámi provedeného testu měřicím nástrojem ČTÚ-NetTest je skutečně dosahovanou rychlostí za daný interval měření. V případě provádění jednoho testu nástrojem NetTest je to 10 sekund. Tato skutečně dosahovaná rychlost charakterizuje skutečný výkon služby přístupu k internetu.",
        "desc_down_2" : "Je důležité také uvést, že hodnota rychlosti stahování odpovídá transportní vrstvě Vaší služby přístupu k internetu (připojení k internetu), a to při použití protokolu TCP, tedy nejčastěji využívaného protokolu transportní vrstvy z pohledu koncového uživatele. Hodnota rychlosti stahování (download) by se měla po většinu dne (95 % času dne) pohybovat v rozmezí hodnot maximální rychlosti a běžně dostupné rychlosti. Tyto rychlosti naleznete ve Vašich smluvních podmínkách (např. ve smlouvě o poskytování služby přístupu k internetu, případně ve Všeobecných podmínkách, nebo v Ceníku apod.). Rychlost stahování může na krátký okamžik klesnout pod hodnotu běžně dostupné rychlosti, ovšem nikoliv takovým způsobem, aby tento pokles způsobil vznik velkých odchylek nebo dokonce výpadku služby. Výpadkem služby se rozumí takový stav, kdy rychlost stahování (download) klesne pod hodnotu minimální rychlosti uvedenou ve smluvních podmínkách. V těchto případech můžete využít svého práva reklamovat vadné poskytnutí služby u svého poskytovatele služby přístupu k internetu.",
        "desc_up_1" : "Pojem rychlost vkládání (upload) označuje směr přenosu dat od Vás do internetu. Ve spojení s datovou rychlostí tohoto směru přenosu se doplňuje parametr upload, stejně jako download základní jednotkou v b/s, přičemž nejčastěji se setkáte s Mb/s (Megabity za sekundu), případně Gb/s (Gigabity za sekundu). Výsledná hodnota rychlosti vkládání, která je součástí výsledku Vámi provedeného testu měřicím nástrojem ČTÚ-NetTest je skutečně dosahovanou rychlostí za daný interval měření. V případě provádění jednoho testu nástrojem NetTest je to 10 sekund. Tato skutečně dosahovaná rychlost charakterizuje skutečný výkon služby přístupu k internetu.",
        "desc_up_2" : "Rychlost vkládání je často inzerována s&nbsp;výrazně nižší hodnotou než rychlost stahování (download). Nicméně i rychlost vkládání je důležitá, protože komunikace na internetu prostřednictvím TCP protokolu probíhají obousměrně (úspěšně stažená data jsou průběžně potvrzována a naopak). Rychlost vkládání je zvláště důležitá např. při odesílání fotografií, sdílení souborů nebo videokonferencích.",
        "desc_up_3" : "Je důležité také uvést, že hodnota rychlosti vkládání odpovídá transportní vrstvě Vaší služby přístupu k internetu (připojení k internetu), a to při použití protokolu TCP, tedy nejčastěji využívaného protokolu transportní vrstvy z pohledu koncového uživatele. Hodnota rychlosti vkládání (upload) by se měla po většinu dne (95 % času dne) pohybovat v rozmezí hodnot maximální rychlosti a běžně dostupné rychlosti. Tyto rychlosti naleznete ve Vašich smluvních podmínkách (např. ve smlouvě o poskytovaní služby přístupu k internetu, případně ve Všeobecných podmínkách, nebo v Ceníku apod.). Rychlost vkládání může na krátký okamžik klesnout pod hodnotu běžně dostupné rychlosti, ovšem nikoliv takovým způsobem, aby tento pokles způsobil vznik velkých odchylek nebo dokonce výpadku služby. Výpadkem služby se rozumí takový stav, kdy rychlost vkládání (upload) klesne pod hodnotu minimální rychlosti uvedenou ve smluvních podmínkách. V těchto případech můžete využít svého práva reklamovat vadné poskytnutí služby u svého poskytovatele služby přístupu k internetu.",
        "desc_ping" : "Pod pojmem zpoždění (ping), technicky správně obousměrné zpoždění, si lze představit čas, po který putuje datový paket vyslaný z vašeho uživatelského zařízení (počítač, notebook, mobilní telefon) prostřednictvím internetu až k měřicímu serveru nástroje ČTÚ-NetTest a zpět. Ping (zpoždění v datových sítích) se udává v jednotkách ms (milisekundách). Vysoké hodnoty obousměrného zpoždění mohou znemožnit využívání služeb v reálném čase (např. TV nebo VoIP) a bývají také jednou z příčin poklesu skutečně dosahovaných rychlostí (download a upload). Obecně platí, že vlivem zatížení sítě poskytovatele služby přístupu k internetu hodnota pingu roste a naopak. Během měření obousměrného zpoždění prostřednictvím pingu se využívá protokol síťové vrstvy ICMP.",
        "desc_result" : "Výsledek provedeného měření je nutno porovnat s hodnotami rychlostí, které máte uvedeny ve Vašich smluvních podmínkách sjednaných s poskytovatelem služby přístupu k internetu. Dle Nařízení (EU) 2015/2120, čl. 4 odst. 1 písm. d), musí být ve smluvních podmínkách o poskytování služby přístupu k internetu v pevném místě (pevný internet) uvedeny pro oba směry datové komunikace zvlášť (upload a download) čtyři rychlosti, a to rychlost inzerovaná, rychlost maximální, rychlost běžně dostupná a rychlost minimální. Všeobecné oprávnění VO-S/1/08.2020-9 vydané ČTÚ navíc mezi těmito rychlostmi definuje vzájemný vztah a také konkretizuje definice velké opakující se a velké trvající odchylky výkonu služby. Hodnota skutečně dosahované rychlosti (upload a download), kterou jste naměřili pomocí nástroje NetTest, by se po většinu času dne (95 % času dne) měla pohybovat v rozmezí hodnot maximální rychlosti a běžně dostupné rychlosti. Skutečně dosahovaná rychlost může na krátký okamžik klesnout pod hodnotu běžně dostupné rychlosti, ovšem nikoliv takovým způsobem, aby tento pokles způsobil vznik velkých odchylek nebo dokonce výpadku služby, kdy skutečně dosahovaná rychlost klesne pod hodnotu sjednané minimální rychlosti. V těchto případech máte právo reklamovat vadné poskytnutí služby přístupu k internetu. Měřicí nástroj NetTest a využití jeho režimu certifikovaného měření Vám automaticky připraví podklady v podobě PDF dokumentu, který pak jednoduše můžete použít pro účely reklamace.",
        "desc_icon_1" : "Barevná škála interpretace výsledků měření poskytuje informaci o tom, jaký výkon dosahuje služba přístupu k internetu v dané lokalitě. Vyhodnocení naměřených hodnot jednotlivých sledovaných parametrů se zobrazí bez ohledu na vaši službu přístupu k internetu. Žlutá a červená barva představují oblasti, kde služby přístupu k internetu vykazují nižší výkony (download, upload, ping). Naproti tomu zelená a tmavě zelená barva představují oblasti, kde služby přístupu k internetu dosahují vysokých výkonů.",
        "desc_icon_2" : "Použité barevné škálování je nezávislé na přístupové technologii a vychází výhradně z naměřených hodnot sledovaných parametrů služby přístupu k internetu na základě definovaných rozsahů hodnot pro jednotlivé parametry pro dané barevné označení.",
        "desc_cert_tool" : "ČTÚ-NetTest je certifikovaným nástrojem ve smyslu Nařízení (EU) 2015/2120. Znamená to, že jde o monitorovací mechanismus zavedený a provozovaný Českým telekomunikačním úřadem za účelem ověření výkonu služby přístupu k internetu koncovým uživatelem a možnosti aktivace prostředků nápravy. ČTÚ garantuje jeho funkčnost, jistou míru přesnosti, konektivitu s vysokou kapacitou připojení do peeringového uzlu a transparentnost metody.",
        "desc_cert_measurement" : "Certifikované měření znamená proces, který je pevně definován provedením 6 časově diverzifikovaných testů během kalendářního dne v rámci měřicího cyklu a za splnění předepsaných podmínek měření. Měřicí rámec trvá 1 hodinu a 30 minut. V rámci testu jsou automaticky prováděna jednotlivá měření o celkové délce měření 10 sekund pro každý směr datové komunikace (download a upload). Časový rozestup mezi jednotlivými testy je 15 minut. ČTÚ doporučuje používat nástroj ČTÚ-NetTest v režimu certifikovaného měření služeb přístupu k internetu do inzerovaných rychlostí (včetně) 500/250 Mb/s (download/upload)."
    },

    // Icon meaning table
    "parameter" : "Parametr",
    "dark_green" : "Tmavě zelená",
    "green" : "Zelená",
    "yellow" : "Žlutá",
    "red" : "Červená",

    //404
    "not_found_page": {
        "title": "Stránka nenalezena",
        "main": "Ou! Vypadá to jako <span style='font-size: 45px; font-weight: 600; padding: 0 10px; color: #2362a2'>CHYBA 404</span> ... je nám líto.",
        "note": "Omlouváme se, ale stránka, kterou hledáte, nebyla nalezena.<br/>Zkuste zkontrolovat chyby v URL, a klikněte na tlačítko aktualizovat ve vašem prohlížeči."
    },

    // Info
    "info_page": {
        "title": "Testování nedostupné",
        "note": "Omlouváme se, vzhledem k vysokému počtu probíhajících testů je kapacita měření plně vytížena, zkuste to prosím později."
    },

    //Data specification
    "ds_page" : {
        "title" : "Název",
        "desc" : "Popis",
        "type" : "Typ",
        "example" : "Příklad",
        "asn" : "Číslo autonomního systému.",
        "cat_technology" : "Kategorie použité technologie např. “4G”, “5G”, “LAN”.",
        "client_version" : "Použitá verze klientské aplikace.",
        "download_kbit" : "Rychlost stahování, kilobity za sekundu.",
        "implausible" : "Identifikace závadných měření.",
        "ip_anonym" : "Anonymizovaná IP adresa klienta.",
        "lat" : "Zeměpisná šířka pozice klienta.",
        "loc_accuracy" : "Odhad přesnosti polohy (rádius v metrech).",
        "loc_src" : "Zdroj informací o poloze. Hodnoty: “gps”, “network”.",
        "long" : "Zeměpisná délka pozice klienta.",
        "lte_rsrp" : "Síla LTE signálu v dBm.",
        "lte_rsrq" : "Kvalita LTE signálu v decibelech.",
        "model" : "Název použitého zařízení.",
        "nat_type" : "Typ připojení z hlediska NAT a verze IP (Např. veřejná IP, privátní adresa za NATem).",
        "ndt_download_kbit" : "Rychlost stahování NDT-testu v kilobitech za sekundu.",
        "ndt_upload_kbit" : "Rychlost vkládání NDT-testu v kilobitech za vteřinu.",
        "network_mcc_mnc" : "Identifikace sítě, přičemž první tři čísla reprezentují zemi a čísla za pomlčkou operátora v rámci země.",
        "network_name" : "Zobrazované jméno sítě.",
        "network_type" : "Typ sítě např. MOBILE, LTE, LAN.",
        "num_threads" : "Počet vláken testu stahování.",
        "open_test_uuid" : "UUID konkrétního testu.",
        "open_uuid" : "Identifikace klienta, který spustil test.",
        "ping_ms" : "Medián pingu (round-trip time) v milisekundách, měřeno na straně serveru.",
        "pinned" : "Identifikace relevantních měření.",
        "platform" : "Platforma, na které byl test proveden. Např. “Android” (= Google Android App), “iOS” (= Apple iOs App).",
        "server_name" : "Název měřicího serveru.",
        "sim_mcc_mnc" : "Identifikace sítě poskytovatele dle SIM karty. Význam čísel je stejný jako u network_mcc_mnc",
        "test_duration" : "Doba trvání testu v sekundách.",
        "time_utc" : "Čas spuštění testu v časové zóně UTC.",
        "upload_kbit" : "Rychlost vkládání, kilobity za sekundu.",
    },
     // Apps
     "apps_page": {
        "title": "Mobilní aplikace ČTÚ-NetTest",
        "desc": "Mobilní aplikace ČTÚ-NetTest Českého telekomunikačního úřadu umožňuje uživatelům získat informace o aktuální kvalitě mobilní služby přístupu k síti internet. V současné době je dostupná mobilní aplikace pro operační systém Android.",
        "android_title": "Mobilní aplikace pro Android",
        "download_android": "Stažení mobilní aplikace pro Android",
        "cert_android": "Návod k provedení certifikovaného měření v mobilní aplikaci pro Android",
        "tc_android": "Prohlášení o ochraně osobních údajů a podmínky užití pro Android",
        "tc_android_url": "https://nettest.cz/cs/PrivacyAndroid",
        "ios_title": "Mobilní aplikace pro iOS",
        "ios_tba": "Vydání bude oznámeno.",
        "tc_ios": "Prohlášení o ochraně osobních údajů a podmínky užití pro iOS"        
    }
}