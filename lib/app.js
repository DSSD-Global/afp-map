"use ./config.js";
//country data
var country = {
  Afghanistan: [[33.7680065, 66.2385139], "AFG"],
  "Aland Islands": [[60.2166218, 19.9438638], "ALA"],
  Albania: [[41.000028, 19.9999619], "ALB"],
  Algeria: [[28.0000272, 2.9999825], "DZA"],
  "American Samoa": [[-14.289304, -170.692511], "ASM"],
  Andorra: [[42.5407167, 1.5732033], "AND"],
  Angola: [[-11.8775768, 17.5691241], "AGO"],
  Anguilla: [[18.1954947, -63.0750234], "AIA"],
  Antarctica: [[-79.4063075, 0.3149312], "ATA"],
  "Antigua and Barbuda": [[17.2234721, -61.9554608], "ATG"],
  Argentina: [[-34.9964963, -64.9672817], "ARG"],
  Armenia: [[40.7696272, 44.6736646], "ARM"],
  Aruba: [[12.4902998, -69.9609842], "ABW"],
  Australia: [[-24.7761086, 134.755], "AUS"],
  Austria: [[47.2, 13.2], "AUT"],
  Azerbaijan: [[40.3936294, 47.7872508], "AZE"],
  Bahamas: [[24.7736546, -78.0000547], "BHS"],
  Bahrain: [[26.1551249, 50.5344606], "BHR"],
  Bangladesh: [[24.4768783, 90.2932426], "BGD"],
  Barbados: [[13.1500331, -59.5250305], "BRB"],
  Belarus: [[53.4250605, 27.6971358], "BLR"],
  Belgium: [[50.6402809, 4.6667145], "BEL"],
  Belize: [[16.8259793, -88.7600927], "BLZ"],
  Benin: [[9.5293472, 2.2584408], "BEN"],
  Bermuda: [[32.3018217, -64.7603583], "BMU"],
  Bhutan: [[27.549511, 90.5119273], "BTN"],
  Bolivia: [[-17.0568696, -64.9912286], "BOL"],
  "Bonaire, Saint Eustatius and Saba": [
    [17.62590935, -63.2462886305583],
    "BES",
  ],
  "Bosnia and Herzegovina": [[44.3053476, 17.5961467], "BIH"],
  Botswana: [[-23.1681782, 24.5928742], "BWA"],
  "Bouvet Island": [[-54.4201305, 3.3599732952297483], "BVT"],
  Brazil: [[-10.3333333, -53.2], "BRA"],
  "British Indian Ocean Territory": [
    [-5.349626649999999, 72.00648804312836],
    "IOT",
  ],
  "British Virgin Islands": [[18.4024395, -64.5661642], "VGB"],
  "Brunei Darussalam": [[4.4137155, 114.5653908], "BRN"],
  Bulgaria: [[42.6073975, 25.4856617], "BGR"],
  "Burkina Faso": [[12.0753083, -1.6880314], "BFA"],
  Burundi: [[-3.3634357, 29.8870575], "BDI"],
  "Cabo Verde": [[16.0000552, -24.0083947], "CPV"],
  Cambodia: [[13.5066394, 104.869423], "KHM"],
  Cameroon: [[4.6125522, 13.1535811], "CMR"],
  Canada: [[61.0666922, -107.991707], "CAN"],
  "Cayman Islands": [[19.703182249999998, -79.9174627243246], "CYM"],
  "Central African Republic": [[7.0323598, 19.9981227], "CAF"],
  Chad: [[15.6134137, 19.0156172], "TCD"],
  Chile: [[-31.7613365, -71.3187697], "CHL"],
  China: [[35.000074, 104.999927], "CHN"],
  "Christmas Island": [[-10.49124145, 105.6173514897963], "CXR"],
  "Cocos (Keeling) Islands": [[-12.0728315, 96.8409375], "CCK"],
  Colombia: [[2.8894434, -73.783892], "COL"],
  Comoros: [[-12.2045176, 44.2832964], "COM"],
  "Congo Republic": [[-0.7264327, 15.6419155], "COG"],
  "Cook Islands": [[-19.919672900000002, -157.9753368892878], "COK"],
  "Costa Rica": [[10.2735633, -84.0739102], "CRI"],
  "Cote d'Ivoire": [[7.9897371, -5.5679458], "CIV"],
  Croatia: [[45.5643442, 17.0118954], "HRV"],
  Cuba: [[23.0131338, -80.8328748], "CUB"],
  Curacao: [[12.1845, -68.9640875031406], "CUW"],
  Cyprus: [[34.9823018, 33.1451285], "CYP"],
  "Czech Republic": [[49.8167003, 15.4749544], "CZE"],
  "DR Congo": [[-2.9814344, 23.8222636], "COD"],
  Denmark: [[55.670249, 10.3333283], "DNK"],
  Djibouti: [[11.8145966, 42.8453061], "DJI"],
  Dominica: [[19.0974031, -70.3028026], "DMA"],
  "Dominican Republic": [[19.0974031, -70.3028026], "DOM"],
  Ecuador: [[-1.3397668, -79.3666965], "ECU"],
  Egypt: [[26.2540493, 29.2675469], "EGY"],
  "El Salvador": [[13.8000382, -88.9140683], "SLV"],
  "Equatorial Guinea": [[1.613172, 10.5170357], "GNQ"],
  Eritrea: [[15.9500319, 37.9999668], "ERI"],
  Estonia: [[58.7523778, 25.3319078], "EST"],
  Eswatini: [[-26.5624806, 31.3991317], "SWZ"],
  Ethiopia: [[10.2116702, 38.6521203], "ETH"],
  "Faeroe Islands": [[62.0448724, -7.0322972], "FRO"],
  "Falkland Islands": [[-51.9666424, -59.5500387], "FLK"],
  Fiji: [[-18.1239696, 179.0122737], "FJI"],
  Finland: [[63.2467777, 25.9209164], "FIN"],
  France: [[46.603354, 1.8883335], "FRA"],
  "French Guiana": [[4.0039882, -52.999998], "GUF"],
  "French Polynesia": [[-16.03442485, -146.0490931059517], "PYF"],
  "French Southern Territories": [
    [-49.237441950000004, 69.62275903679347],
    "ATF",
  ],
  Gabon: [[-0.8999695, 11.6899699], "GAB"],
  Gambia: [[13.470062, -15.4900464], "GMB"],
  Georgia: [[42.3154, 43.3569], "GEO"],
  Germany: [[51.0834196, 10.4234469], "DEU"],
  Ghana: [[8.0300284, -1.0800271], "GHA"],
  Gibraltar: [[36.140807, -5.3541295], "GIB"],
  Greece: [[38.9953683, 21.9877132], "GRC"],
  Greenland: [[77.6192349, -42.8125967], "GRL"],
  Grenada: [[12.1360374, -61.6904045], "GRD"],
  Guadeloupe: [[16.230510250000002, -61.68712602138846], "GLP"],
  Guam: [[13.450125700000001, 144.75755102972062], "GUM"],
  Guatemala: [[15.6356088, -89.8988087], "GTM"],
  Guernsey: [[49.4566233, -2.5822348], "GGY"],
  Guinea: [[10.7226226, -10.7083587], "GIN"],
  "Guinea-Bissau": [[12.100035, -14.9000214], "GNB"],
  Guyana: [[4.8417097, -58.6416891], "GUY"],
  Haiti: [[19.1399952, -72.3570972], "HTI"],
  "Heard and McDonald Islands": [[-53.0409004, 72.60091035273109], "HMD"],
  Honduras: [[15.2572432, -86.0755145], "HND"],
  "Hong Kong": [[22.2793278, 114.1628131], "HKG"],
  Hungary: [[47.1817585, 19.5060937], "HUN"],
  Iceland: [[64.9841821, -18.1059013], "ISL"],
  India: [[22.3511148, 78.6677428], "IND"],
  Indonesia: [[-2.4833826, 117.8902853], "IDN"],
  Iran: [[32.6475314, 54.5643516], "IRN"],
  Iraq: [[33.0955793, 44.1749775], "IRQ"],
  Ireland: [[52.865196, -7.9794599], "IRL"],
  "Isle of Man": [[54.1936805, -4.5591148], "IMN"],
  Israel: [[31.5313113, 34.8667654], "ISR"],
  Italy: [[42.6384261, 12.674297], "ITA"],
  Jamaica: [[18.1850507, -77.3947693], "JAM"],
  Japan: [[36.5748441, 139.2394179], "JPN"],
  Jersey: [[49.2214561, -2.1358386], "JEY"],
  Jordan: [[31.1667049, 36.941628], "JOR"],
  Kazakhstan: [[47.2286086, 65.2093197], "KAZ"],
  Kenya: [[1.4419683, 38.4313975], "KEN"],
  Kiribati: [[-1.2394555500000002, 175.29694553869794], "KIR"],
  Kosovo: [[42.5869578, 20.9021231], "XKX"],
  Kuwait: [[29.2733964, 47.4979476], "KWT"],
  "Kyrgyz Republic": [[41.5089324, 74.724091], "KGZ"],
  Laos: [[20.0171109, 103.378253], "LAO"],
  Latvia: [[56.8406494, 24.7537645], "LVA"],
  Lebanon: [[33.8750629, 35.843409], "LBN"],
  Lesotho: [[-29.6039267, 28.3350193], "LSO"],
  Liberia: [[5.7499721, -9.3658524], "LBR"],
  Libya: [[26.8234472, 18.1236723], "LBY"],
  Liechtenstein: [[47.1416307, 9.5531527], "LIE"],
  Lithuania: [[55.3500003, 23.7499997], "LTU"],
  Luxembourg: [[49.8158683, 6.1296751], "LUX"],
  Macau: [[22.1757605, 113.5514142], "MAC"],
  Macedonia: [[41.6171214, 21.7168387], "MKD"],
  Madagascar: [[-18.9249604, 46.4416422], "MDG"],
  Malawi: [[-13.2687204, 33.9301963], "MWI"],
  Malaysia: [[4.5693754, 102.2656823], "MYS"],
  Maldives: [[4.7064352, 73.3287853], "MDV"],
  Mali: [[16.3700359, -2.2900239], "MLI"],
  Malta: [[35.8885993, 14.4476911], "MLT"],
  "Marshall Islands": [[8.9995549, 168.0002575], "MHL"],
  Martinique: [[14.6367927, -61.01582685063731], "MTQ"],
  Mauritania: [[20.2540382, -9.2399263], "MRT"],
  Mauritius: [[-20.2759451, 57.5703566], "MUS"],
  Mayotte: [[-12.8253862, 45.148626111147614], "MYT"],
  Mexico: [[22.5000485, -100.0000375], "MEX"],
  "Micronesia, Fed. Sts.": [[7.4256, 150.5508], "FSM"],
  Moldova: [[47.2879608, 28.5670941], "MDA"],
  Monaco: [[43.73844905, 7.424224092532953], "MCO"],
  Mongolia: [[46.8250388, 103.8499736], "MNG"],
  Montenegro: [[42.9868853, 19.5180992], "MNE"],
  Montserrat: [[16.7417041, -62.1916844], "MSR"],
  Morocco: [[31.1728205, -7.3362482], "MAR"],
  Mozambique: [[-19.302233, 34.9144977], "MOZ"],
  Myanmar: [[17.1750495, 95.9999652], "MMR"],
  Namibia: [[-23.2335499, 17.3231107], "NAM"],
  Nauru: [[-0.5252306, 166.9324426], "NRU"],
  Nepal: [[28.1083929, 84.0917139], "NPL"],
  Netherlands: [[52.5001698, 5.7480821], "NLD"],
  "New Caledonia": [[-20.454288599999998, 164.55660583077983], "NCL"],
  "New Zealand": [[-41.5000831, 172.8344077], "NZL"],
  Nicaragua: [[12.6090157, -85.2936911], "NIC"],
  Niger: [[17.7356214, 9.3238432], "NER"],
  Nigeria: [[9.6000359, 7.9999721], "NGA"],
  Niue: [[-19.0536414, -169.8613411], "NIU"],
  "Norfolk Island": [[-29.0289575, 167.9587289126371], "NFK"],
  "North Korea": [[40.3736611, 127.0870417], "PRK"],
  "Northern Mariana Islands": [[14.149020499999999, 145.21345248318923], "MNP"],
  Norway: [[60.5000209, 9.0999715], "NOR"],
  Oman: [[21.0000287, 57.0036901], "OMN"],
  Pakistan: [[30.3308401, 71.247499], "PAK"],
  Palau: [[7.3245000000000005, 134.496454875], "PLW"],
  Palestine: [[31.94696655, 35.27386547291496], "PSE"],
  Panama: [[8.559559, -81.1308434], "PAN"],
  "Papua New Guinea": [[-5.6816069, 144.2489081], "PNG"],
  Paraguay: [[-23.3165935, -58.1693445], "PRY"],
  Peru: [[-6.8699697, -75.0458515], "PER"],
  Philippines: [[12.7503486, 122.7312101], "PHL"],
  Pitcairn: [[-25.0657719, -130.1017823], "PCN"],
  Poland: [[52.215933, 19.134422], "POL"],
  Portugal: [[40.0332629, -7.8896263], "PRT"],
  "Puerto Rico": [[18.2214149, -66.41328179513847], "PRI"],
  Qatar: [[25.3336984, 51.2295295], "QAT"],
  Reunion: [[-21.130737949999997, 55.536480112992315], "REU"],
  Romania: [[45.9852129, 24.6859225], "ROU"],
  Russia: [[64.6863136, 97.7453061], "RUS"],
  Rwanda: [[-1.9646631, 30.0644358], "RWA"],
  "Saint-Martin": [[48.5683066, 6.7539988], "MAF"],
  Samoa: [[-13.7693895, -172.1200508], "WSM"],
  "San Marino": [[43.9458623, 12.458306], "SMR"],
  "Sao Tome and Principe": [[0.8875498, 6.9648718], "STP"],
  "Saudi Arabia": [[25.6242618, 42.3528328], "SAU"],
  Senegal: [[14.4750607, -14.4529612], "SEN"],
  Serbia: [[44.1534121, 20.55144], "SRB"],
  Seychelles: [[-4.6574977, 55.4540146], "SYC"],
  "Sierra Leone": [[8.6400349, -11.8400269], "SLE"],
  Singapore: [[1.357107, 103.8194992], "SGP"],
  "Sint Maarten": [[52.7736657, 4.7448352], "SXM"],
  Slovakia: [[48.7411522, 19.4528646], "SVK"],
  Slovenia: [[46.149034549999996, 14.626325753340627], "SVN"],
  "Solomon Islands": [[-8.7053941, 159.1070693851845], "SLB"],
  Somalia: [[8.3676771, 49.083416], "SOM"],
  "South Africa": [[-28.8166236, 24.991639], "ZAF"],
  "South Georgia and South Sandwich Is.": [[-54.4306908, -36.9869112], "SGS"],
  "South Korea": [[36.638392, 127.6961188], "KOR"],
  "South Sudan": [[7.8699431, 29.6667897], "SSD"],
  Spain: [[39.3260685, -4.8379791], "ESP"],
  "Sri Lanka": [[7.5554942, 80.7137847], "LKA"],
  "St. Barths": [[17.9036287, -62.811568843006896], "BLM"],
  "St. Helena": [[-15.9656162, -5.702145010209923], "SHN"],
  "St. Kitts and Nevis": [[17.250512, -62.6725973], "KNA"],
  "St. Lucia": [[13.8250489, -60.975036], "LCA"],
  "St. Pierre and Miquelon": [[46.783246899999995, -56.195158907484085], "SPM"],
  "St. Vincent and the Grenadines": [[12.90447, -61.2765569], "VCT"],
  Sudan: [[14.5844444, 29.4917691], "SDN"],
  Suriname: [[4.1413025, -56.0771187], "SUR"],
  "Svalbard and Jan Mayen Islands": [
    [78.4903547137402, 18.1484913825989],
    "SJM",
  ],
  Sweden: [[59.6749712, 14.5208584], "SWE"],
  Switzerland: [[46.7985624, 8.2319736], "CHE"],
  Syria: [[34.6401861, 39.0494106], "SYR"],
  Taiwan: [[23.9739374, 120.9820179], "TWN"],
  Tajikistan: [[38.6281733, 70.8156541], "TJK"],
  Tanzania: [[-6.5247123, 35.7878438], "TZA"],
  Thailand: [[14.8971921, 100.83273], "THA"],
  "Timor-Leste": [[-8.5151979, 125.8375756], "TLS"],
  Togo: [[8.7800265, 1.0199765], "TGO"],
  Tokelau: [[-9.1676396, -171.8196878], "TKL"],
  Tonga: [[-19.9160819, -175.2026424], "TON"],
  "Trinidad and Tobago": [[10.8677845, -60.9821067], "TTO"],
  Tunisia: [[33.8439408, 9.400138], "TUN"],
  Turkey: [[38.9597594, 34.9249653], "TUR"],
  Turkmenistan: [[39.3763807, 59.3924609], "TKM"],
  "Turks and Caicos Islands": [[21.7214683, -71.6201783], "TCA"],
  Tuvalu: [[-8.6405212, 179.1582918181797], "TUV"],
  Uganda: [[1.5333554, 32.2166578], "UGA"],
  Ukraine: [[49.4871968, 31.2718321], "UKR"],
  "United Arab Emirates": [[24.0002488, 53.9994829], "ARE"],
  "United Kingdom": [[54.7023545, -3.2765753], "GBR"],
  "United States": [[39.7837304, -100.4458825], "USA"],
  "United States Minor Outlying Islands": [[19.295374, 166.6280441], "UMI"],
  "United States Virgin Islands": [[17.789187, -64.7080574], "VIR"],
  Uruguay: [[-32.8755548, -56.0201525], "URY"],
  Uzbekistan: [[41.32373, 63.9528098], "UZB"],
  Vanuatu: [[-16.5255069, 168.1069154], "VUT"],
  Vatican: [[41.9034912, 12.4528349], "VAT"],
  Venezuela: [[8.0018709, -66.1109318], "VEN"],
  Vietnam: [[13.2904027, 108.4265113], "VNM"],
  "Wallis and Futuna Islands": [[-13.289402, -176.204224], "WLF"],
  "Western Sahara": [[24.1188663, -13.950892328363645], "ESH"],
  Yemen: [[16.3471243, 47.8915271], "YEM"],
  Zambia: [[-14.5186239, 27.5599164], "ZMB"],
  Zimbabwe: [[-18.4554963, 29.7468414], "ZWE"],
};

//iso
var iso = {
  AFG: [[33.7680065, 66.2385139], "Afghanistan"],
  ALA: [[60.2166218, 19.9438638], "Aland Islands"],
  ALB: [[41.000028, 19.9999619], "Albania"],
  DZA: [[28.0000272, 2.9999825], "Algeria"],
  ASM: [[-14.289304, -170.692511], "American Samoa"],
  AND: [[42.5407167, 1.5732033], "Andorra"],
  AGO: [[-11.8775768, 17.5691241], "Angola"],
  AIA: [[18.1954947, -63.0750234], "Anguilla"],
  ATA: [[-79.4063075, 0.3149312], "Antarctica"],
  ATG: [[17.2234721, -61.9554608], "Antigua and Barbuda"],
  ARG: [[-34.9964963, -64.9672817], "Argentina"],
  ARM: [[40.7696272, 44.6736646], "Armenia"],
  ABW: [[12.4902998, -69.9609842], "Aruba"],
  AUS: [[-24.7761086, 134.755], "Australia"],
  AUT: [[47.2, 13.2], "Austria"],
  AZE: [[40.3936294, 47.7872508], "Azerbaijan"],
  BHS: [[24.7736546, -78.0000547], "Bahamas"],
  BHR: [[26.1551249, 50.5344606], "Bahrain"],
  BGD: [[24.4768783, 90.2932426], "Bangladesh"],
  BRB: [[13.1500331, -59.5250305], "Barbados"],
  BLR: [[53.4250605, 27.6971358], "Belarus"],
  BEL: [[50.6402809, 4.6667145], "Belgium"],
  BLZ: [[16.8259793, -88.7600927], "Belize"],
  BEN: [[9.5293472, 2.2584408], "Benin"],
  BMU: [[32.3018217, -64.7603583], "Bermuda"],
  BTN: [[27.549511, 90.5119273], "Bhutan"],
  BOL: [[-17.0568696, -64.9912286], "Bolivia"],
  BES: [[17.62590935, -63.2462886305583], "Bonaire, Saint Eustatius and Saba"],
  BIH: [[44.3053476, 17.5961467], "Bosnia and Herzegovina"],
  BWA: [[-23.1681782, 24.5928742], "Botswana"],
  BVT: [[-54.4201305, 3.3599732952297483], "Bouvet Island"],
  BRA: [[-10.3333333, -53.2], "Brazil"],
  IOT: [
    [-5.349626649999999, 72.00648804312836],
    "British Indian Ocean Territory",
  ],
  VGB: [[18.4024395, -64.5661642], "British Virgin Islands"],
  BRN: [[4.4137155, 114.5653908], "Brunei Darussalam"],
  BGR: [[42.6073975, 25.4856617], "Bulgaria"],
  BFA: [[12.0753083, -1.6880314], "Burkina Faso"],
  BDI: [[-3.3634357, 29.8870575], "Burundi"],
  CPV: [[16.0000552, -24.0083947], "Cabo Verde"],
  KHM: [[13.5066394, 104.869423], "Cambodia"],
  CMR: [[4.6125522, 13.1535811], "Cameroon"],
  CAN: [[61.0666922, -107.991707], "Canada"],
  CYM: [[19.703182249999998, -79.9174627243246], "Cayman Islands"],
  CAF: [[7.0323598, 19.9981227], "Central African Republic"],
  TCD: [[15.6134137, 19.0156172], "Chad"],
  CHL: [[-31.7613365, -71.3187697], "Chile"],
  CHN: [[35.000074, 104.999927], "China"],
  CXR: [[-10.49124145, 105.6173514897963], "Christmas Island"],
  CCK: [[-12.0728315, 96.8409375], "Cocos (Keeling) Islands"],
  COL: [[2.8894434, -73.783892], "Colombia"],
  COM: [[-12.2045176, 44.2832964], "Comoros"],
  COG: [[-0.7264327, 15.6419155], "Congo Republic"],
  COK: [[-19.919672900000002, -157.9753368892878], "Cook Islands"],
  CRI: [[10.2735633, -84.0739102], "Costa Rica"],
  CIV: [[7.9897371, -5.5679458], "Cote d'Ivoire"],
  HRV: [[45.5643442, 17.0118954], "Croatia"],
  CUB: [[23.0131338, -80.8328748], "Cuba"],
  CUW: [[12.1845, -68.9640875031406], "Curacao"],
  CYP: [[34.9823018, 33.1451285], "Cyprus"],
  CZE: [[49.8167003, 15.4749544], "Czech Republic"],
  COD: [[-2.9814344, 23.8222636], "DR Congo"],
  DNK: [[55.670249, 10.3333283], "Denmark"],
  DJI: [[11.8145966, 42.8453061], "Djibouti"],
  DMA: [[19.0974031, -70.3028026], "Dominica"],
  DOM: [[19.0974031, -70.3028026], "Dominican Republic"],
  ECU: [[-1.3397668, -79.3666965], "Ecuador"],
  EGY: [[26.2540493, 29.2675469], "Egypt"],
  SLV: [[13.8000382, -88.9140683], "El Salvador"],
  GNQ: [[1.613172, 10.5170357], "Equatorial Guinea"],
  ERI: [[15.9500319, 37.9999668], "Eritrea"],
  EST: [[58.7523778, 25.3319078], "Estonia"],
  SWZ: [[-26.5624806, 31.3991317], "Eswatini"],
  ETH: [[10.2116702, 38.6521203], "Ethiopia"],
  FRO: [[62.0448724, -7.0322972], "Faeroe Islands"],
  FLK: [[-51.9666424, -59.5500387], "Falkland Islands"],
  FJI: [[-18.1239696, 179.0122737], "Fiji"],
  FIN: [[63.2467777, 25.9209164], "Finland"],
  FRA: [[46.603354, 1.8883335], "France"],
  GUF: [[4.0039882, -52.999998], "French Guiana"],
  PYF: [[-16.03442485, -146.0490931059517], "French Polynesia"],
  ATF: [
    [-49.237441950000004, 69.62275903679347],
    "French Southern Territories",
  ],
  GAB: [[-0.8999695, 11.6899699], "Gabon"],
  GMB: [[13.470062, -15.4900464], "Gambia"],
  GEO: [[42.3154, 43.3569], "Georgia"],
  DEU: [[51.0834196, 10.4234469], "Germany"],
  GHA: [[8.0300284, -1.0800271], "Ghana"],
  GIB: [[36.140807, -5.3541295], "Gibraltar"],
  GRC: [[38.9953683, 21.9877132], "Greece"],
  GRL: [[77.6192349, -42.8125967], "Greenland"],
  GRD: [[12.1360374, -61.6904045], "Grenada"],
  GLP: [[16.230510250000002, -61.68712602138846], "Guadeloupe"],
  GUM: [[13.450125700000001, 144.75755102972062], "Guam"],
  GTM: [[15.6356088, -89.8988087], "Guatemala"],
  GGY: [[49.4566233, -2.5822348], "Guernsey"],
  GIN: [[10.7226226, -10.7083587], "Guinea"],
  GNB: [[12.100035, -14.9000214], "Guinea-Bissau"],
  GUY: [[4.8417097, -58.6416891], "Guyana"],
  HTI: [[19.1399952, -72.3570972], "Haiti"],
  HMD: [[-53.0409004, 72.60091035273109], "Heard and McDonald Islands"],
  HND: [[15.2572432, -86.0755145], "Honduras"],
  HKG: [[22.2793278, 114.1628131], "Hong Kong"],
  HUN: [[47.1817585, 19.5060937], "Hungary"],
  ISL: [[64.9841821, -18.1059013], "Iceland"],
  IND: [[22.3511148, 78.6677428], "India"],
  IDN: [[-2.4833826, 117.8902853], "Indonesia"],
  IRN: [[32.6475314, 54.5643516], "Iran"],
  IRQ: [[33.0955793, 44.1749775], "Iraq"],
  IRL: [[52.865196, -7.9794599], "Ireland"],
  IMN: [[54.1936805, -4.5591148], "Isle of Man"],
  ISR: [[31.5313113, 34.8667654], "Israel"],
  ITA: [[42.6384261, 12.674297], "Italy"],
  JAM: [[18.1850507, -77.3947693], "Jamaica"],
  JPN: [[36.5748441, 139.2394179], "Japan"],
  JEY: [[49.2214561, -2.1358386], "Jersey"],
  JOR: [[31.1667049, 36.941628], "Jordan"],
  KAZ: [[47.2286086, 65.2093197], "Kazakhstan"],
  KEN: [[1.4419683, 38.4313975], "Kenya"],
  KIR: [[-1.2394555500000002, 175.29694553869794], "Kiribati"],
  XKX: [[42.5869578, 20.9021231], "Kosovo"],
  KWT: [[29.2733964, 47.4979476], "Kuwait"],
  KGZ: [[41.5089324, 74.724091], "Kyrgyz Republic"],
  LAO: [[20.0171109, 103.378253], "Laos"],
  LVA: [[56.8406494, 24.7537645], "Latvia"],
  LBN: [[33.8750629, 35.843409], "Lebanon"],
  LSO: [[-29.6039267, 28.3350193], "Lesotho"],
  LBR: [[5.7499721, -9.3658524], "Liberia"],
  LBY: [[26.8234472, 18.1236723], "Libya"],
  LIE: [[47.1416307, 9.5531527], "Liechtenstein"],
  LTU: [[55.3500003, 23.7499997], "Lithuania"],
  LUX: [[49.8158683, 6.1296751], "Luxembourg"],
  MAC: [[22.1757605, 113.5514142], "Macau"],
  MKD: [[41.6171214, 21.7168387], "Macedonia"],
  MDG: [[-18.9249604, 46.4416422], "Madagascar"],
  MWI: [[-13.2687204, 33.9301963], "Malawi"],
  MYS: [[4.5693754, 102.2656823], "Malaysia"],
  MDV: [[4.7064352, 73.3287853], "Maldives"],
  MLI: [[16.3700359, -2.2900239], "Mali"],
  MLT: [[35.8885993, 14.4476911], "Malta"],
  MHL: [[8.9995549, 168.0002575], "Marshall Islands"],
  MTQ: [[14.6367927, -61.01582685063731], "Martinique"],
  MRT: [[20.2540382, -9.2399263], "Mauritania"],
  MUS: [[-20.2759451, 57.5703566], "Mauritius"],
  MYT: [[-12.8253862, 45.148626111147614], "Mayotte"],
  MEX: [[22.5000485, -100.0000375], "Mexico"],
  FSM: [[7.4256, 150.5508], "Micronesia, Fed. Sts."],
  MDA: [[47.2879608, 28.5670941], "Moldova"],
  MCO: [[43.73844905, 7.424224092532953], "Monaco"],
  MNG: [[46.8250388, 103.8499736], "Mongolia"],
  MNE: [[42.9868853, 19.5180992], "Montenegro"],
  MSR: [[16.7417041, -62.1916844], "Montserrat"],
  MAR: [[31.1728205, -7.3362482], "Morocco"],
  MOZ: [[-19.302233, 34.9144977], "Mozambique"],
  MMR: [[17.1750495, 95.9999652], "Myanmar"],
  NAM: [[-23.2335499, 17.3231107], "Namibia"],
  NRU: [[-0.5252306, 166.9324426], "Nauru"],
  NPL: [[28.1083929, 84.0917139], "Nepal"],
  NLD: [[52.5001698, 5.7480821], "Netherlands"],
  NCL: [[-20.454288599999998, 164.55660583077983], "New Caledonia"],
  NZL: [[-41.5000831, 172.8344077], "New Zealand"],
  NIC: [[12.6090157, -85.2936911], "Nicaragua"],
  NER: [[17.7356214, 9.3238432], "Niger"],
  NGA: [[9.6000359, 7.9999721], "Nigeria"],
  NIU: [[-19.0536414, -169.8613411], "Niue"],
  NFK: [[-29.0289575, 167.9587289126371], "Norfolk Island"],
  PRK: [[40.3736611, 127.0870417], "North Korea"],
  MNP: [[14.149020499999999, 145.21345248318923], "Northern Mariana Islands"],
  NOR: [[60.5000209, 9.0999715], "Norway"],
  OMN: [[21.0000287, 57.0036901], "Oman"],
  PAK: [[30.3308401, 71.247499], "Pakistan"],
  PLW: [[7.3245000000000005, 134.496454875], "Palau"],
  PSE: [[31.94696655, 35.27386547291496], "Palestine"],
  PAN: [[8.559559, -81.1308434], "Panama"],
  PNG: [[-5.6816069, 144.2489081], "Papua New Guinea"],
  PRY: [[-23.3165935, -58.1693445], "Paraguay"],
  PER: [[-6.8699697, -75.0458515], "Peru"],
  PHL: [[12.7503486, 122.7312101], "Philippines"],
  PCN: [[-25.0657719, -130.1017823], "Pitcairn"],
  POL: [[52.215933, 19.134422], "Poland"],
  PRT: [[40.0332629, -7.8896263], "Portugal"],
  PRI: [[18.2214149, -66.41328179513847], "Puerto Rico"],
  QAT: [[25.3336984, 51.2295295], "Qatar"],
  REU: [[-21.130737949999997, 55.536480112992315], "Reunion"],
  ROU: [[45.9852129, 24.6859225], "Romania"],
  RUS: [[64.6863136, 97.7453061], "Russia"],
  RWA: [[-1.9646631, 30.0644358], "Rwanda"],
  MAF: [[48.5683066, 6.7539988], "Saint-Martin"],
  WSM: [[-13.7693895, -172.1200508], "Samoa"],
  SMR: [[43.9458623, 12.458306], "San Marino"],
  STP: [[0.8875498, 6.9648718], "Sao Tome and Principe"],
  SAU: [[25.6242618, 42.3528328], "Saudi Arabia"],
  SEN: [[14.4750607, -14.4529612], "Senegal"],
  SRB: [[44.1534121, 20.55144], "Serbia"],
  SYC: [[-4.6574977, 55.4540146], "Seychelles"],
  SLE: [[8.6400349, -11.8400269], "Sierra Leone"],
  SGP: [[1.357107, 103.8194992], "Singapore"],
  SXM: [[52.7736657, 4.7448352], "Sint Maarten"],
  SVK: [[48.7411522, 19.4528646], "Slovakia"],
  SVN: [[46.149034549999996, 14.626325753340627], "Slovenia"],
  SLB: [[-8.7053941, 159.1070693851845], "Solomon Islands"],
  SOM: [[8.3676771, 49.083416], "Somalia"],
  ZAF: [[-28.8166236, 24.991639], "South Africa"],
  SGS: [[-54.4306908, -36.9869112], "South Georgia and South Sandwich Is."],
  KOR: [[36.638392, 127.6961188], "South Korea"],
  SSD: [[7.8699431, 29.6667897], "South Sudan"],
  ESP: [[39.3260685, -4.8379791], "Spain"],
  LKA: [[7.5554942, 80.7137847], "Sri Lanka"],
  BLM: [[17.9036287, -62.811568843006896], "St. Barths"],
  SHN: [[-15.9656162, -5.702145010209923], "St. Helena"],
  KNA: [[17.250512, -62.6725973], "St. Kitts and Nevis"],
  LCA: [[13.8250489, -60.975036], "St. Lucia"],
  SPM: [[46.783246899999995, -56.195158907484085], "St. Pierre and Miquelon"],
  VCT: [[12.90447, -61.2765569], "St. Vincent and the Grenadines"],
  SDN: [[14.5844444, 29.4917691], "Sudan"],
  SUR: [[4.1413025, -56.0771187], "Suriname"],
  SJM: [[78.4903547137402, 18.1484913825989], "Svalbard and Jan Mayen Islands"],
  SWE: [[59.6749712, 14.5208584], "Sweden"],
  CHE: [[46.7985624, 8.2319736], "Switzerland"],
  SYR: [[34.6401861, 39.0494106], "Syria"],
  TWN: [[23.9739374, 120.9820179], "Taiwan"],
  TJK: [[38.6281733, 70.8156541], "Tajikistan"],
  TZA: [[-6.5247123, 35.7878438], "Tanzania"],
  THA: [[14.8971921, 100.83273], "Thailand"],
  TLS: [[-8.5151979, 125.8375756], "Timor-Leste"],
  TGO: [[8.7800265, 1.0199765], "Togo"],
  TKL: [[-9.1676396, -171.8196878], "Tokelau"],
  TON: [[-19.9160819, -175.2026424], "Tonga"],
  TTO: [[10.8677845, -60.9821067], "Trinidad and Tobago"],
  TUN: [[33.8439408, 9.400138], "Tunisia"],
  TUR: [[38.9597594, 34.9249653], "Turkey"],
  TKM: [[39.3763807, 59.3924609], "Turkmenistan"],
  TCA: [[21.7214683, -71.6201783], "Turks and Caicos Islands"],
  TUV: [[-8.6405212, 179.1582918181797], "Tuvalu"],
  UGA: [[1.5333554, 32.2166578], "Uganda"],
  UKR: [[49.4871968, 31.2718321], "Ukraine"],
  ARE: [[24.0002488, 53.9994829], "United Arab Emirates"],
  GBR: [[54.7023545, -3.2765753], "United Kingdom"],
  USA: [[39.7837304, -100.4458825], "United States"],
  UMI: [[19.295374, 166.6280441], "United States Minor Outlying Islands"],
  VIR: [[17.789187, -64.7080574], "United States Virgin Islands"],
  URY: [[-32.8755548, -56.0201525], "Uruguay"],
  UZB: [[41.32373, 63.9528098], "Uzbekistan"],
  VUT: [[-16.5255069, 168.1069154], "Vanuatu"],
  VAT: [[41.9034912, 12.4528349], "Vatican"],
  VEN: [[8.0018709, -66.1109318], "Venezuela"],
  VNM: [[13.2904027, 108.4265113], "Vietnam"],
  WLF: [[-13.289402, -176.204224], "Wallis and Futuna Islands"],
  ESH: [[24.1188663, -13.950892328363645], "Western Sahara"],
  YEM: [[16.3471243, 47.8915271], "Yemen"],
  ZMB: [[-14.5186239, 27.5599164], "Zambia"],
  ZWE: [[-18.4554963, 29.7468414], "Zimbabwe"],
};

var gsxToEnglish = {
  gsx$_cokwr: "Organization Name",
  gsx$_cpzh4: "Logo",
  gsx$_cre1l: "URL",
  gsx$geographicalheadquarters: "Address",
  gsx$_ciyn3: "Country",
  gsx$_ckd7g: "Global North / Global South",
  gsx$_clrrx: "# of Employees Cleaned",
  gsx$_cyevm: "Funding Structure Clean",
  gsx$_cztg3: "Categorization (Clean)",
  gsx$regionwheretheywork: "Region",
  gsx$_d2mkx: "Active In",
  gsx$_cssly: "Lat/Lon",
  gsx$_cu76f: "Description",
  gsx$_cvlqs: "Image URL",
};

let afpOrgs = [];
//Add layers for each category
//Agriculture / Natural Resource Management / Food Security
var Agr = L.layerGroup();

//Arts
var Arts = L.layerGroup();

//Capacity Building
var Cap = L.layerGroup();

//Community Development and Engagement / Education
var Comm = L.layerGroup();

//Conflict Prevention / Management & Resolution
var Con = L.layerGroup();

//Democracy & Government
var Dem = L.layerGroup();

//Development
var Dev = L.layerGroup();

//Diversity / Equity / Inclusion
var Div = L.layerGroup();

//Economic Development and Policy
var Econ = L.layerGroup();

//Education
var Edu = L.layerGroup();

//Emergency / Disaster Response
var Emer = L.layerGroup();

//Environment / Climate Justice / Conservation / Wildlife
var Env = L.layerGroup();

//Faith-based / Interreligious Action
var Faith = L.layerGroup();

//Gender Equality / Women
var Gen = L.layerGroup();

//Health
var Hea = L.layerGroup();

//Human Rights
var HRights = L.layerGroup();

//Humanitarian Aid
var HAid = L.layerGroup();

//Media & Journalism
var MJ = L.layerGroup();

//Meditation & Negotiation
var MN = L.layerGroup();

//Mental Health & Trauma Informed Care
var MH = L.layerGroup();

//Networks
var Net = L.layerGroup();

//Peacebuilding
var Peace = L.layerGroup();

//Philanthropy
var Phil = L.layerGroup();

//Policy & Advocacy
var Pol = L.layerGroup();

//Reconciliation
var Rec = L.layerGroup();

//Research & Evaluation
var Res = L.layerGroup();

//Rule of Law
var Rule = L.layerGroup();

//Science / Technology / Digital Acceleration
var Sci = L.layerGroup();

//Social Justice
var Soc = L.layerGroup();

//US Peacebuilding
var US = L.layerGroup();

//Youth
var You = L.layerGroup();

//Other
var Oth = L.layerGroup();

var checkboxes = {
  "Agriculture / Natural Resource Management / Food Security": Agr,
  Arts: Arts,
  "Capacity Building": Cap,
  "Community Development and Engagement / Education": Comm,
  "Conflict Prevention / Management & Resolution": Con,
  "Democracy & Governance": Dem,
  Development: Dev,
  "Diversity / Equity / Inclusion": Div,
  "Economic Development & Policy": Econ,
  Education: Edu,
  "Emergency / Disaster Response": Emer,
  "Environment / Climate Justice / Conservation / Wildlife": Env,
  "Faith-based / Interreligious Action": Faith,
  "Gender Equality / Women": Gen,
  Health: Hea,
  "Human Rights": HRights,
  "Humanitarian Aid": HAid,
  "Media & Journalism": MJ,
  "Mediation & Negotiation": MN,
  "Mental Health & Trauma Informed Care": MH,
  Networks: Net,
  Peacebuilding: Peace,
  Philanthropy: Phil,
  "Policy & Advocacy": Pol,
  Reconciliation: Rec,
  "Research & Evaluation": Res,
  "Rule of Law": Rule,
  "Science / Technology / Digital Acceleration": Sci,
  "Social Justice": Soc,
  "US Peacebuilding": US,
  Youth: You,
  Other: Oth,
  //"Clusters": {Agr, Arts, Cap, Comm, Con, Dem, Dev, Div, Econ, Edu, Emer, Env, Faith, Gen, Hea, HRights, HAid, MJ, MN, MH, Net, Peace, Phil, Pol, Rec, Res, Rule, Sci, Soc, US, You, Oth}
};

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map("map", { renderWorldCopies: false, minZoom: 1 }).setView(
  [0, 0],
  2
);
map.setMaxBounds([
  [100, -200],
  [-75, 240],
]);
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
  { noWrap: true }
).addTo(map);

function organizeData(data) {
  let toRet = {};
  //data is the whole JSON object

  //We care about what's in the "entry" key
  //within the "feed" key
  let entries = data.feed.entry; //represents a list of objects to loop over

  //start at 1 because at 0, that's just the top row; we care about what's after the first row

  for (var i = 1; i < entries.length; i++) {
    const entry = entries[i]; //an object that contains the data we want

    const keys = Object.keys(entry); //used to loop over this object

    // var helper = 0; //correspond the gsx$ to the element on the google spreadsheet
    var orgName = ""; //helper variable to keep track of the current organization I am looping over in/appending values in

    //for each key in keys
    keys.forEach((key, index) => {
      //if the key is a relevant piece of data
      if (key.includes("gsx$")) {
        //if this piece of data is the organization name
        if (key === "gsx$_cokwr") {
          orgName = entry[key]["$t"]; //store it
          toRet[orgName] = {}; // make a new object to store this organization's data values
        }

        //if we now have a relevant piece of data under an organization's name
        else if (toRet[orgName] != undefined) {
          //store that piece of information under the organization name key
          toRet[orgName][gsxToEnglish[key]] = entry[key]["$t"];
        }
      }
    });
  }

  return toRet;
}
function setOrgsInCategory(category, group) {
  layers = all_markers["_layers"];
  for (const [key, value] of Object.entries(afpOrgs)) {
    var orgCat = value["Categorization (Clean)"];
    if (orgCat != undefined) {
      var catList = orgCat.split(",");
      if (layers != undefined && catList.indexOf(category) >= 0) {
        for (const [k, v] of Object.entries(layers)) {
          if (v["options"]["org_title"] === key) {
            group.addLayer(v);
          }
        }
      }
    }
  }
}

const loadOrganizations = async () => {
  try {
    const res = await fetch(config.database);

    spreadsheetData = await res.json();

    afpOrgs = organizeData(spreadsheetData);
  } catch (err) {
    console.error(err);
  }
};

var all_markers = L.featureGroup();
//marker_layer contains all of the hq's
var marker_layer = L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    var childCount = cluster.getChildCount();
    var c = " marker-cluster-";
    if (childCount < 10) {
      c += "small";
    } else if (childCount < 50) {
      c += "medium";
    } else {
      c += "large";
    }

    return new L.DivIcon({
      html: "<div><span>" + childCount + "</span></div>",
      className: "marker-cluster" + c,
      iconSize: new L.Point(40, 40),
    });
  },
});

var active = L.layerGroup();

const createMap = async () => {
  await loadOrganizations();

  for (const [key, value] of Object.entries(afpOrgs)) {
    if (value["Lat/Lon"] != undefined) {
      var latlon = value["Lat/Lon"];
    }
    var comma = latlon.indexOf(",");
    var lat = latlon.slice(1, comma);
    var lon = latlon.slice(comma + 1, latlon.length - 1);
    var m = L.marker([lat, lon], { title: "", icon: AfPicon, org_title: key });
    m.bindTooltip(key).openTooltip();

    marker_layer.addLayer(m);
    all_markers.addLayer(m);
  }

  marker_layer.addTo(map);
  for (const [k, v] of Object.entries(checkboxes)) {
    setOrgsInCategory(k, v);
  }
};
createMap();

map.zoomControl.setPosition("topright");
// add the search bar to the map
var controlSearch = new L.Control.Search({
  position: "topright", // where do you want the search bar?
  layer: marker_layer, // name of the layer
  initial: false,
  zoom: 11, // set zoom to found location when searched
  marker: false,
  textPlaceholder: "Search for an organization...", // placeholder while nothing is searched
});

map.addControl(controlSearch);

var AfPicon = new L.divIcon({
  html:
    '<div id="container" class="main-icon-footer "><img src =' +
    config.afpLogo +
    '", style="width:30px;height:30px;"><div>',
  className: "AfPicon",
  iconAnchor: [20, 20],
  iconSize: [30, 30],
});

function createPopUp(name, info) {
  //Write a function that can create a HTMLElement including org name, logo and blurb
  var customPopup = '<div class = "org_name">' + name + "</div>";
  if (info["Image URL"] != undefined) {
    url = "'" + info["Image URL"] + "'";
    customPopup += '<img class = "org_img" src=' + url + "width='80%'/>";
  }
  if (info["Description"] != undefined) {
    customPopup += '<div class = "org_desc">' + info["Description"] + "</div>";
  }
  if (info["URL"] != undefined) {
    customPopup +=
      '<div class = "org_url"> Website link: <a href=' +
      info["URL"] +
      ">" +
      info["URL"] +
      "</a></div>";
  }
  return customPopup;
}

boxes = "<div class = leaflet-control-layers id = 'box_control'>";
L.Control.Checkboxes = L.Control.extend({
  onAdd: function (map) {
    var div = L.DomUtil.create("div", "box_control");
    L.DomEvent.disableClickPropagation(div);
    div.setAttribute("id", "box_control");
    for (const [k, v] of Object.entries(checkboxes)) {
      boxes += '<input id="' + k + '" type="checkbox">' + k + " </input><br/>";
    }
    boxes += '</div>';
    div.innerHTML = "<div class=t id ='box_control'><button type=button>Filter</button></div>";
    return div;
  },
  onRemove: function (map) {
    // Nothing to do here
  },
});

box_control = function (opts) {
  return new L.Control.Checkboxes(opts);
};

var checkboxes_values = {
  "Agriculture / Natural Resource Management / Food Security": false,
  Arts: false,
  "Capacity Building": false,
  "Community Development and Engagement / Education": false,
  "Conflict Prevention / Management & Resolution": false,
  "Democracy & Governance": false,
  Development: false,
  "Diversity / Equity / Inclusion": false,
  "Economic Development & Policy": false,
  Education: false,
  "Emergency / Disaster Response": false,
  "Environment / Climate Justice / Conservation / Wildlife": false,
  "Faith-based / Interreligious Action": false,
  "Gender Equality / Women": false,
  Health: false,
  "Human Rights": false,
  "Humanitarian Aid": false,
  "Media & Journalism": false,
  "Mediation & Negotiation": false,
  "Mental Health & Trauma Informed Care": false,
  Networks: false,
  Peacebuilding: false,
  Philanthropy: false,
  "Policy & Advocacy": false,
  Reconciliation: false,
  "Research & Evaluation": false,
  "Rule of Law": false,
  "Science / Technology / Digital Acceleration": false,
  "Social Justice": false,
  "US Peacebuilding": false,
  Youth: false,
  Other: false,
};

function showBoxControl() {
  var div = document.getElementById("box_control");
  div.innerHTML = "<form>" + boxes + "</form>";
  for (const [k, v] of Object.entries(checkboxes)) {
    document.getElementById(k).addEventListener(
      "click",
      () => {
        handleBox(k);
      },
      false
    );
    //set boxes which have a value of true in the storage variable to be checked
    if (checkboxes_values[k]) {
      document.getElementById(k).checked = true;
    }
  }
}

function hideBoxControl() {
  var div = document.getElementById("box_control");
  div.innerHTML = "<div class=t id ='box_control'><button type=button>Filter</button></div>";
}
box_control({ position: "topright" }).addTo(map);

// Filtration closes on mouse click outside of the box
document.addEventListener('click', function(e) {
  e = e || window.event;
  var target = e.target;
  if(e.path[1].className == 't') showBoxControl();
  else if(e.target.id !== 'box_control') hideBoxControl();
}, false);


// add the event handler
function handleBox(category) {
  //get the box we're handling and set its corresponding value in the values object
  element = document.getElementById(category);
  checkboxes_values[category] = element.checked;
  if (element.checked) {
    //if we are checking the box
    //clear the map and add all the layers that are checked
    marker_layer.clearLayers();
    for (const [k, v] of Object.entries(checkboxes_values)) {
      if (v) marker_layer.addLayer(checkboxes[k]);
    }
  } else {
    //if we are unchecking the box
    //check if we're unchecking the last box
    var no_boxes_checked = true;
    for (const [k, v] of Object.entries(checkboxes_values)) {
      if (v) {
        no_boxes_checked = false;
        break;
      }
    }
    //if we aren't, just remove the layer corresponding to the box
    if (!no_boxes_checked) {
      marker_layer.removeLayer(checkboxes[category]);
      //since some orgs have more than one category, add back the ones
      //that were deleted because they overlapped
      for (const [k, v] of Object.entries(checkboxes)) {
        if (document.getElementById(k).checked) {
          marker_layer.addLayer(v);
        }
      }
    }
    //if we are, show all markers
    else {
      marker_layer.addLayer(all_markers);
    }
  }
}

//attempt to make tooltips on clusters
let markersInCluster = [];
let titlesInCluster = [];
marker_layer.on("clustermouseover", function (e) {
  if (typeof e.layer["options"]["org_title"] == "undefined") {
    markersInCluster = [];
    titlesInCluster = [];
    getMarkersRecursively(e.layer);
    for (const v of markersInCluster) {
      titlesInCluster.push(v["options"]["org_title"]);
    }
    e.layer.bindTooltip(titlesInCluster.slice(0, 3).join(", ")).openTooltip();
  }
});

//change this if it starts impacting performance, fine for now
function getMarkersRecursively(e) {
  if (e == []) {
    return;
  } else {
    markersInCluster.push.apply(markersInCluster, e["_markers"]);
    for (const v of e["_childClusters"]) {
      getMarkersRecursively(v);
    }
  }
}

function bezierCurve(latLngOne, latLngTwo, pathOptions) {
  var latlngs = [];

  var latlng1 = latLngOne,
    latlng2 = latLngTwo;

  var offsetX = latlng2[1] - latlng1[1],
    offsetY = latlng2[0] - latlng1[0];

  var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
    theta = Math.atan2(offsetY, offsetX);

  var thetaOffset = 3.14 / 10;
  if (offsetX < 0) thetaOffset *= -1;

  var r2 = r / 2 / Math.cos(thetaOffset),
    theta2 = theta + thetaOffset;

  var midpointX = r2 * Math.cos(theta2) + latlng1[1],
    midpointY = r2 * Math.sin(theta2) + latlng1[0];

  var midpointLatLng = [midpointY, midpointX];

  latlngs.push(latlng1, midpointLatLng, latlng2);

  var curvedPath = L.curve(
    ["M", latlng1, "Q", midpointLatLng, latlng2],
    pathOptions
  );

  return curvedPath;
}
/* Set the width of the sidebar to 250px (show it) */
async function openNav(clicked_marker) {
  await closeNav();

  document.getElementById("map_sidebar").style.width = "25vw";

  document.getElementById("nav_info").innerHTML = createPopUp(
    clicked_marker["options"]["org_title"],
    afpOrgs[clicked_marker["options"]["org_title"]]
  );
  var marker = clicked_marker;
  if (
    afpOrgs[marker["options"]["org_title"]]["Active In"] != "" &&
    afpOrgs[marker["options"]["org_title"]]["Active In"] != undefined
  ) {
    var regs = afpOrgs[marker["options"]["org_title"]]["Active In"].split(", ");
    var regLatLong;
    var LLtoLL;
    var subRegionCurve;
    for (const [k, code] of Object.entries(regs)) {
      //access lat long corresponding to iso code and make a marker

      regLatLong = [iso[code][0][0], iso[code][0][1]];

      markerLatLong = [marker.getLatLng().lat, marker.getLatLng().lng];

      LLtoLL = [markerLatLong, regLatLong];

      polyLinePathOptions = {
        dashArray: "7",
        opacity: 0.7,
        weight: 1.5,
        color: "#279989",
      };

      subRegionCurve = bezierCurve(
        markerLatLong,
        regLatLong,
        polyLinePathOptions
      );
      m = L.circleMarker(regLatLong, { radius: 6, color: "#6eceb2" });
      m.bindTooltip(iso[code][1]).openTooltip();
      active.addLayer(m);
      active.addLayer(subRegionCurve);
    }
    map.setZoom(2);
    active.addTo(map);
  }
}

/* Set the width of the sidebar to 0 (hide it) */
const closeNav = async () => {
  document.getElementById("map_sidebar").style.width = "0";
  active.clearLayers();
  return;
};

marker_layer.on("click", function (event) {
  var clicked_marker = event.layer;
  openNav(clicked_marker);
});

var legend = L.control({ position: "topleft" });

legend.onAdd = function (map) {
  var div = L.DomUtil.create("div", "info legend");
  // grades = [0, 10, 20, 50, 100, 200, 500, 1000],
  // labels = [];

  // loop through our density intervals and generate a label with a colored square for each interval
  // for (var i = 0; i < grades.length; i++) {
  //   div.innerHTML +=
  //     '<i style="background:' +
  //     "blue" +
  //     '"></i> ' +
  //     grades[i] +
  //     (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
  // }

  //representing that the AfP logo markers represent headquarters
  div.innerHTML +=
    "<div style='background-color:white;'><img src =" +
    config.afpLogo +
    '", style="width:30px;height:30px;">Headquarters</div>';

  div.innerHTML +=
    "<div style='background-color:white;'><img src ='./lib/green-circle-marker.png' style='width:30px;height:30px;'>Field Office</div>";

  // div.innerHTML += "<p>Headquarters</p>";

  return div;
};

legend.addTo(map);
