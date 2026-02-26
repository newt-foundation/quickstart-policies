const INQUIRY_ID_MAPPING = {
  "inq_xRZrQFKg7rqZ5UZGLhnvb2ympshE": {
    kyc_status: "approved",
    name_first: "John",
    name_last: "Doe"
  },
  "inq_xYZrQFKg8rqZ5UZJLhnvb1ympshF": {
    kyc_status: "approved",
    name_first: "Jane",
    name_last: "Smith"
  },
  "inq_xDZrQFKg9rqZ5UZHLhnvb0ympshEG": {
    kyc_status: "approved",
    name_first: "Hubert",
    name_last: "Jaroš"
  },
  "inq_kDJfLUKg4rqN5UDsqRnvb9ynpsKdZ": {
    kyc_status: "approved",
    name_first: "Dongmin",
    name_last: "Lee"
  },
}


const SANCTIONED_ADDRESS_MAPPING = {
  "0x08723392Ed15743cc38513C4925f5e6be5c17243": {
    sanctioned: true,
    identifications: [
      {
          "category": "sanctions",
          "name": "SANCTIONS: MOFA FSC Lazarus Group 2023-02-10  08723392ed15743cc38513c4925f5e6be5c17243",
          "description": "This specific address 0x08723392Ed15743cc38513C4925f5e6be5c17243 within the cluster has been identified as belonging to MOFA FSC Lazarus Group 2023-02-10.\n\nLAZARUS  GROUP (a.k.a.  \"APPLEWORM\";  a.k.a.  \"APT-C-26\";  a.k.a.  \"GROUP  77\";  a.k.a.\n\"GUARDIANS  OF  PEACE\";  a.k.a.  \"HIDDEN  COBRA\";  a.k.a.  \"OFFICE  91\";  a.k.a.  \"RED  DOT\";  a.k.a. \"TEMP.HERMIT\";  a.k.a.  \"THE  NEW  ROMANTIC  CYBER  ARMY  TEAM\";  a.k.a.  \"WHOIS HACKING  TEAM\";  a.k.a.  \"ZINC\"),  Potonggang  District,  Pyongyang,  Korea,  North;  Digital  Currency\nAddress  -  ETH 0x098B716B8Aaf21512996dC57EB0615e2383E2f96;  alt.  Digital  Currency  Address  -\nETH  0xa0e1c89Ef1a489c9C7dE96311eD5Ce5D32c20E4B;  alt.  Digital  Currency  Address  -  ETH\n0x3Cffd56B47B7b41c56258D9C7731ABaDc360E073;  alt.  Digital  Currency  Address  -  ETH\n0x53b6936513e738f44FB50d2b9476730C0Ab3Bfc1;  alt.  Digital  Currency  Address  -  ETH\n0x35fB6f6DB4fb05e6A4cE86f2C93691425626d4b1;  alt.  Digital  Currency  Address  -  ETH\n0xF7B31119c2682c88d88D455dBb9d5932c65Cf1bE;  alt.  Digital  Currency  Address  -  ETH\n0x3e37627dEAA754090fBFbb8bd226c1CE66D255e9;  alt.  Digital  Currency  Address  -  ETH\n0x08723392Ed15743cc38513C4925f5e6be5c17243 (2023.  2.  10 지정).\n\nhttps://www.fsc.go.kr/po040200/79415?srchCtgry=&curPage=&srchKey=&srchText=&srchBeginDt=&srchEndDt=",
          "url": "https://www.fsc.go.kr/po040200/79415?srchCtgry=&curPage=&srchKey=&srchText=&srchBeginDt=&srchEndDt="
      },
      {
          "category": "sanctioned entity",
          "name": "SANCTIONED ENTITY: MOFA FSC Lazarus Group 2023-02-10  08723392ed15743cc38513c4925f5e6be5c17243",
          "description": "This specific address 0x08723392Ed15743cc38513C4925f5e6be5c17243 within the cluster has been identified as belonging to MOFA FSC Lazarus Group 2023-02-10.\n\nLAZARUS  GROUP (a.k.a.  \"APPLEWORM\";  a.k.a.  \"APT-C-26\";  a.k.a.  \"GROUP  77\";  a.k.a.\n\"GUARDIANS  OF  PEACE\";  a.k.a.  \"HIDDEN  COBRA\";  a.k.a.  \"OFFICE  91\";  a.k.a.  \"RED  DOT\";  a.k.a. \"TEMP.HERMIT\";  a.k.a.  \"THE  NEW  ROMANTIC  CYBER  ARMY  TEAM\";  a.k.a.  \"WHOIS HACKING  TEAM\";  a.k.a.  \"ZINC\"),  Potonggang  District,  Pyongyang,  Korea,  North;  Digital  Currency\nAddress  -  ETH 0x098B716B8Aaf21512996dC57EB0615e2383E2f96;  alt.  Digital  Currency  Address  -\nETH  0xa0e1c89Ef1a489c9C7dE96311eD5Ce5D32c20E4B;  alt.  Digital  Currency  Address  -  ETH\n0x3Cffd56B47B7b41c56258D9C7731ABaDc360E073;  alt.  Digital  Currency  Address  -  ETH\n0x53b6936513e738f44FB50d2b9476730C0Ab3Bfc1;  alt.  Digital  Currency  Address  -  ETH\n0x35fB6f6DB4fb05e6A4cE86f2C93691425626d4b1;  alt.  Digital  Currency  Address  -  ETH\n0xF7B31119c2682c88d88D455dBb9d5932c65Cf1bE;  alt.  Digital  Currency  Address  -  ETH\n0x3e37627dEAA754090fBFbb8bd226c1CE66D255e9;  alt.  Digital  Currency  Address  -  ETH\n0x08723392Ed15743cc38513C4925f5e6be5c17243 (2023.  2.  10 지정).\n\nhttps://www.fsc.go.kr/po040200/79415?srchCtgry=&curPage=&srchKey=&srchText=&srchBeginDt=&srchEndDt=",
          "url": "https://www.fsc.go.kr/po040200/79415?srchCtgry=&curPage=&srchKey=&srchText=&srchBeginDt=&srchEndDt="
      },
      {
          "category": "sanctioned entity",
          "name": "SANCTIONED ENTITY: MOFA JP Lazarus Group 2022-12-12 08723392ed15743cc38513c4925f5e6be5c17243",
          "description": "This specific address 0x08723392Ed15743cc38513C4925f5e6be5c17243 within the cluster has been identified as belonging to MOFA JP Lazarus Group 2022-12-12. \n\nLazarus Group\na.k.a. Hidden Cobra; Office 91; Guardians of Peace; The New Romantic Cyber Army Team; Whois Hacking Team; Red Dot; Temp.Hermit; Group 77; Zinc; APT-C-26； Appleworm）\n所在地：北朝鮮平壌特別市普通江区域\n暗号資産アドレス：\n0xa0e1c89Ef1a489c9C7dE96311eD5Ce5D32c20E4B；\n0x098B716B8Aaf21512996dC57EB0615e2383E2f96；\n0x3Cffd56B47B7b41c56258D9C7731ABaDc360E073；\n0x53b6936513e738f44FB50d2b9476730C0Ab3Bfc1；\n0x35fB6f6DB4fb05e6A4cE86f2C93691425626d4b1；\n0xF7B31119c2682c88d88D455dBb9d5932c65Cf1bE；\n0x3e37627dEAA754090fBFbb8bd226c1CE66D255e9；\n0x08723392Ed15743cc38513C4925f5e6be5c17243\n\nhttps://www.mofa.go.jp/mofaj/files/100429313.pdf",
          "url": "https://www.mofa.go.jp/mofaj/files/100429313.pdf"
      },
      {
          "category": "sanctions",
          "name": "SANCTIONS: MOFA JP Lazarus Group 2022-12-12 08723392ed15743cc38513c4925f5e6be5c17243",
          "description": "This specific address 0x08723392Ed15743cc38513C4925f5e6be5c17243 within the cluster has been identified as belonging to MOFA JP Lazarus Group 2022-12-12. \n\nLazarus Group\na.k.a. Hidden Cobra; Office 91; Guardians of Peace; The New Romantic Cyber Army Team; Whois Hacking Team; Red Dot; Temp.Hermit; Group 77; Zinc; APT-C-26； Appleworm）\n所在地：北朝鮮平壌特別市普通江区域\n暗号資産アドレス：\n0xa0e1c89Ef1a489c9C7dE96311eD5Ce5D32c20E4B；\n0x098B716B8Aaf21512996dC57EB0615e2383E2f96；\n0x3Cffd56B47B7b41c56258D9C7731ABaDc360E073；\n0x53b6936513e738f44FB50d2b9476730C0Ab3Bfc1；\n0x35fB6f6DB4fb05e6A4cE86f2C93691425626d4b1；\n0xF7B31119c2682c88d88D455dBb9d5932c65Cf1bE；\n0x3e37627dEAA754090fBFbb8bd226c1CE66D255e9；\n0x08723392Ed15743cc38513C4925f5e6be5c17243\n\nhttps://www.mofa.go.jp/mofaj/files/100429313.pdf",
          "url": "https://www.mofa.go.jp/mofaj/files/100429313.pdf"
      },
      {
          "category": "sanctions",
          "name": "SANCTIONS: OFAC SDN Lazarus Group 2022-05-06 08723392ed15743cc38513c4925f5e6be5c17243",
          "description": "This specific address 0x08723392Ed15743cc38513C4925f5e6be5c17243​​​​ within the cluster has been identified as belonging to Lazarus Group.\n\nLAZARUS GROUP (a.k.a. \"\"APPLEWORM\"\"; a.k.a. \"\"APT-C-26\"\"; a.k.a. \"\"GROUP 77\"\"; a.k.a. \"\"GUARDIANS OF PEACE\"\"; a.k.a. \"\"HIDDEN COBRA\"\"; a.k.a. \"\"OFFICE 91\"\"; a.k.a. \"\"RED DOT\"\"; a.k.a. \"\"TEMP.HERMIT\"\"; a.k.a. \"\"THE NEW ROMANTIC CYBER ARMY TEAM\"\"; a.k.a. \"\"WHOIS HACKING TEAM\"\"; a.k.a. \"\"ZINC\"\"), Potonggang District, Pyongyang, Korea, North; Digital Currency Address - ETH 0x098B716B8Aaf21512996dC57EB0615e2383E2f96; alt. Digital Currency Address - ETH 0xa0e1c89Ef1a489c9C7dE96311eD5Ce5D32c20E4B; alt. Digital Currency Address - ETH 0x3Cffd56B47B7b41c56258D9C7731ABaDc360E073; alt. Digital Currency Address - ETH 0x53b6936513e738f44FB50d2b9476730C0Ab3Bfc1; Secondary sanctions risk: North Korea Sanctions Regulations, sections 510.201 and 510.210; Transactions Prohibited For Persons Owned or Controlled By U.S. Financial Institutions: North Korea Sanctions Regulations section 510.214 [DPRK3]. -to- LAZARUS GROUP (a.k.a. \"\"APPLEWORM\"\"; a.k.a. \"\"APT-C-26\"\"; a.k.a. \"\"GROUP 77\"\"; a.k.a. \"\"GUARDIANS OF PEACE\"\"; a.k.a. \"\"HIDDEN COBRA\"\"; a.k.a. \"\"OFFICE 91\"\"; a.k.a. \"\"RED DOT\"\"; a.k.a. \"\"TEMP.HERMIT\"\"; a.k.a. \"\"THE NEW ROMANTIC CYBER ARMY TEAM\"\"; a.k.a. \"\"WHOIS HACKING TEAM\"\"; a.k.a. \"\"ZINC\"\"), Potonggang District, Pyongyang, Korea, North; Digital Currency Address - ETH 0x098B716B8Aaf21512996dC57EB0615e2383E2f96; alt. Digital Currency Address - ETH 0xa0e1c89Ef1a489c9C7dE96311eD5Ce5D32c20E4B; alt. Digital Currency Address - ETH 0x3Cffd56B47B7b41c56258D9C7731ABaDc360E073; alt. Digital Currency Address - ETH 0x53b6936513e738f44FB50d2b9476730C0Ab3Bfc1; alt. Digital Currency Address - ETH 0x35fB6f6DB4fb05e6A4cE86f2C93691425626d4b1; alt. Digital Currency Address - ETH 0xF7B31119c2682c88d88D455dBb9d5932c65Cf1bE; alt. Digital Currency Address - ETH 0x3e37627dEAA754090fBFbb8bd226c1CE66D255e9; alt. Digital Currency Address - ETH 0x08723392Ed15743cc38513C4925f5e6be5c17243; Secondary sanctions risk: North Korea Sanctions Regulations, sections 510.201 and 510.210; Transactions Prohibited For Persons Owned or Controlled By U.S. Financial Institutions: North Korea Sanctions Regulations section 510.214 [DPRK3].\n\nhttps://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20220506",
          "url": "https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20220506"
      },
      {
          "category": "sanctioned entity",
          "name": "SANCTIONED ENTITY: OFAC SDN Lazarus Group 2022-05-06 08723392ed15743cc38513c4925f5e6be5c17243",
          "description": "This specific address 0x08723392Ed15743cc38513C4925f5e6be5c17243​​​​ within the cluster has been identified as belonging to Lazarus Group.\n\nLAZARUS GROUP (a.k.a. \"\"APPLEWORM\"\"; a.k.a. \"\"APT-C-26\"\"; a.k.a. \"\"GROUP 77\"\"; a.k.a. \"\"GUARDIANS OF PEACE\"\"; a.k.a. \"\"HIDDEN COBRA\"\"; a.k.a. \"\"OFFICE 91\"\"; a.k.a. \"\"RED DOT\"\"; a.k.a. \"\"TEMP.HERMIT\"\"; a.k.a. \"\"THE NEW ROMANTIC CYBER ARMY TEAM\"\"; a.k.a. \"\"WHOIS HACKING TEAM\"\"; a.k.a. \"\"ZINC\"\"), Potonggang District, Pyongyang, Korea, North; Digital Currency Address - ETH 0x098B716B8Aaf21512996dC57EB0615e2383E2f96; alt. Digital Currency Address - ETH 0xa0e1c89Ef1a489c9C7dE96311eD5Ce5D32c20E4B; alt. Digital Currency Address - ETH 0x3Cffd56B47B7b41c56258D9C7731ABaDc360E073; alt. Digital Currency Address - ETH 0x53b6936513e738f44FB50d2b9476730C0Ab3Bfc1; Secondary sanctions risk: North Korea Sanctions Regulations, sections 510.201 and 510.210; Transactions Prohibited For Persons Owned or Controlled By U.S. Financial Institutions: North Korea Sanctions Regulations section 510.214 [DPRK3]. -to- LAZARUS GROUP (a.k.a. \"\"APPLEWORM\"\"; a.k.a. \"\"APT-C-26\"\"; a.k.a. \"\"GROUP 77\"\"; a.k.a. \"\"GUARDIANS OF PEACE\"\"; a.k.a. \"\"HIDDEN COBRA\"\"; a.k.a. \"\"OFFICE 91\"\"; a.k.a. \"\"RED DOT\"\"; a.k.a. \"\"TEMP.HERMIT\"\"; a.k.a. \"\"THE NEW ROMANTIC CYBER ARMY TEAM\"\"; a.k.a. \"\"WHOIS HACKING TEAM\"\"; a.k.a. \"\"ZINC\"\"), Potonggang District, Pyongyang, Korea, North; Digital Currency Address - ETH 0x098B716B8Aaf21512996dC57EB0615e2383E2f96; alt. Digital Currency Address - ETH 0xa0e1c89Ef1a489c9C7dE96311eD5Ce5D32c20E4B; alt. Digital Currency Address - ETH 0x3Cffd56B47B7b41c56258D9C7731ABaDc360E073; alt. Digital Currency Address - ETH 0x53b6936513e738f44FB50d2b9476730C0Ab3Bfc1; alt. Digital Currency Address - ETH 0x35fB6f6DB4fb05e6A4cE86f2C93691425626d4b1; alt. Digital Currency Address - ETH 0xF7B31119c2682c88d88D455dBb9d5932c65Cf1bE; alt. Digital Currency Address - ETH 0x3e37627dEAA754090fBFbb8bd226c1CE66D255e9; alt. Digital Currency Address - ETH 0x08723392Ed15743cc38513C4925f5e6be5c17243; Secondary sanctions risk: North Korea Sanctions Regulations, sections 510.201 and 510.210; Transactions Prohibited For Persons Owned or Controlled By U.S. Financial Institutions: North Korea Sanctions Regulations section 510.214 [DPRK3].\n\nhttps://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20220506",
          "url": "https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20220506"
      }
    ]
  },
  "0xe1d865c3d669dcc8c57c8d023140cb204e672ee4": {
    sanctioned: true,
    identifications: [
      {
        "category": "sanctioned entity",
        "name": "SANCTIONED ENTITY: OFAC SDN Yunhe Wang 2024-05-28 e1d865c3d669dcc8c57c8d023140cb204e672ee4",
        "description": "This specific address 0xe1d865c3d669dcc8c57c8d023140cb204e672ee4 has been identified as OFAC SDN Yunhe Wang 2024-05-28. \n\nWANG, Yunhe (Chinese Simplified: 王云禾) (a.k.a. WAN, Jack; a.k.a. WANG, Jack; a.k.a. WILSON, William; a.k.a. WONG, Jack; a.k.a. \"TRAFFICCARB\"; a.k.a. \"TRAFFICCASH\"), 21 Angullia Park #27-03, Singapore 239974, Singapore; 98/273 31h2 Reflection Jomtien Beach, Pattaya Condo Na Jomtien Sattahip, Chonburi 20250, Thailand; DOB 05 Oct 1988; POB Beijing, China; nationality China; alt. nationality Saint Kitts and Nevis; Gender Male; Digital Currency Address - XBT bc1q4namcagg5wljs0u20z6h2sqgsq4q5lts8rt2rr; alt. Digital Currency Address - XBT bc1qdpazd6smrkq5hmw6lupq98za2fqtgmq3azv3av; alt. Digital Currency Address - XBT bc1qwz0l2ceddckwdy5rh6zyrm3x4ha6gn5f2da5zg; alt. Digital Currency Address - XBT bc1qw8evftpgc8wsmkemd8yl5fg2husza5z802xaym; alt. Digital Currency Address - XBT bc1qv4krhj2qmpd9qz9xj9nhvj99fq8s9xsw05d485; alt. Digital Currency Address - XBT bc1qu5vngdtcx8nc9d68pq8nv7pzcjrswsy87s66gk; alt. Digital Currency Address - XBT bc1qtsl3ufenrv3zgrgm9z8xarcx22x8mfztuartyn; alt. Digital Currency Address - XBT bc1qtrrfhr0f3ufsrjxfv8a7p3yuqj0spe4cm6vaws; alt. Digital Currency Address - XBT bc1qte9ret332gwrk6e7vqc87d807npzvdj5savg4h; alt. Digital Currency Address - XBT bc1qtdupwe722vcc5e0vh94cgwfs0ep4gzwyfsf75q; alt. Digital Currency Address - XBT bc1qnykkrlk67f9kdqvzyw2ndu3xmef5z2e52886yl; alt. Digital Currency Address - XBT bc1qllmlvy5u038yvwywu803p53g8udcm8w7k4qxu9; alt. Digital Currency Address - XBT bc1qlfpg2xn39u580cmwq6rymt8jdhcmj8520jhgh0; alt. Digital Currency Address - XBT bc1ql7rnd70aejdxt3f9fzdlfazjlc9hvdmut8ad8s; alt. Digital Currency Address - XBT bc1ql526s72gycmvq7hek6j3tuwwmcpv4rgs0auxu7; alt. Digital Currency Address - XBT bc1qh3lw22uqwrywr8lpun20q2ma528a4yqmgf3uqp; alt. Digital Currency Address - XBT bc1qgffxa65gr579tsz55n87pal2a777ygzg69d2yz; alt. Digital Currency Address - XBT bc1qedvcgh32dud85yt7fu6s7qavthlh38gtwa7rhx; alt. Digital Currency Address - XBT bc1qau9pmgc8l6rxpdwwap3fd6zprh5yp9mpe9jl0h; alt. Digital Currency Address - XBT bc1qakycg2zp8hydg95lc9cheumpa9yfpdeyrqqh5f; alt. Digital Currency Address - XBT bc1q9ua9ypl4dhj0zut5kzasj5c2kxclhh8v2k9djd; alt. Digital Currency Address - XBT bc1q8q7z3kt37z6jalv5ujung5lem6pzlk9r3kt66k; alt. Digital Currency Address - XBT bc1q8pw85s83mdx2f3rfu64mmfd9wexqu2y856arwp; alt. Digital Currency Address - XBT bc1q7xfqqw9htr88t7vafg80p4qrlpjfyaps452x5g; alt. Digital Currency Address - XBT bc1q7hhdygx05kyfyzjku2u7lywvx5pgyng6a0nefp; alt. Digital Currency Address - XBT bc1q6w463k7mhsgguwgqtcratm4vm42rncwhvvkeck; alt. Digital Currency Address - XBT bc1q68uswkjvu7nj7mhrvfzkx7cm6u5s9puvpm5dc2; alt. Digital Currency Address - XBT bc1q5zd0cwzd09k9r8xfk68sn5ytqp8f5aae80yfsm; alt. Digital Currency Address - XBT bc1q49ax787wv0mnn8wjgp3sx772qz7eun822rkv5k; alt. Digital Currency Address - XBT bc1q3ael5my37nklgnqcrkwmnndfx9qdnp67j0739c; alt. Digital Currency Address - XBT bc1q362njxy39gnwrvj7zytn84ax39fwnhvk7n2999; alt. Digital Currency Address - XBT bc1q2jys00x2rgdkm3xnewuucqacytu0a7echupu8y; alt. Digital Currency Address - XBT bc1q05aktddf9ce4p7hh3stgsf253m4vweu7nkhtmw; alt. Digital Currency Address - XBT bc1qtywfzxx6snut2mdrum8dyr5nnd5qhqd29wmvqt; alt. Digital Currency Address - XBT bc1qrc2gchg2fmxua5u7twu4luv5p9twmny4jjmg9x; alt. Digital Currency Address - XBT bc1q9ws2gcq7uumm4mk3l9xezwve7w5tmcs5js5cup; alt. Digital Currency Address - XBT bc1qh33xtpjqhgysq5xlmjzkm28uewj08885n95drr; alt. Digital Currency Address - XBT bc1qe8wclszdtshkjk7gph57crc72vpp9rylujgwa5; alt. Digital Currency Address - XBT bc1q2q8uxjznmurg363dvd98xjg54mrr7z6mw9t825; alt. Digital Currency Address - XBT bc1qhvzl5w99m458nm7sc6hwf5qfhxndw28sgtatk8; alt. Digital Currency Address - XBT bc1qavwamr74qlzj8txy6jaxqnpym9062h090x6kz4; alt. Digital Currency Address - XBT bc1qe9lz50jq0a5pmtry0h3ekng3kjdg09vejg7355; alt. Digital Currency Address - XBT bc1qup656lpfqfckhl580kwf62thmn5azmj2pal0sz; alt. Digital Currency Address - XBT bc1qa2xr7dmz5lztplp9yfp7k382nf4ma8gwrl7zgg; alt. Digital Currency Address - XBT bc1qrskwdw9unhlkt87ltcqq2d5pn9s6w2f35gz3z6; alt. Digital Currency Address - XBT 1NaRX1GZgtZ7E8iXo8YUdTtnb8rAK5QFJa; Digital Currency Address - ETH 0xe1d865c3d669dcc8c57c8d023140cb204e672ee4; Digital Currency Address - LTC LNf2JDiuunBz7GMDKFYHN4rq5meXWxiwfb; Digital Currency Address - TRX TBHTJqAy4DhHhmT3dNceJYNRz4SdLofLre; Passport EA2997493 (China); alt. Passport RE0064420 (Saint Kitts and Nevis) issued 10 Nov 2017 expires 09 Nov 2027; National ID No. 110108198810056013 (China) (individual) [CYBER2].\n\nhttps://ofac.treasury.gov/recent-actions/20240528_33",
        "url": "https://ofac.treasury.gov/recent-actions/20240528_33"
      }
    ]
  },
  "0x1999ef52700c34de7ec2b68a28aafb37db0c5ade": {
    sanctioned: true,
    identifications: [
      {
        "category": "sanctioned entity",
        "name": "SANCTIONED ENTITY: OFAC SDN Khadzhi Murat Dalgatovich Magomedov 2024-12-04 1999ef52700c34de7ec2b68a28aafb37db0c5ade",
        "description": "This specific address 0x1999ef52700c34de7ec2b68a28aafb37db0c5ade has been identified as OFAC SDN Khadzhi Murat Dalgatovich Magomedov 2024-12-04. \n\nMAGOMEDOV, Khadzhi Murat Dalgatovich (a.k.a. MAGOMEDOV, Murat), Maliy Kakovinskiy Pereulok, Moscow 121099, Russia; DOB 02 Aug 1988; POB Republic of Dagestan, Russia; nationality Russia; Gender Male; Digital Currency Address - ETH 0x1999ef52700c34de7ec2b68a28aafb37db0c5ade; Secondary sanctions risk: See Section 11 of Executive Order 14024.; Passport 762324796 (Russia) expires 24 Jan 2030; alt. Passport 761402005 (Russia) expires 20 Aug 2029; alt. Passport 765180824 (Russia) expires 05 Aug 2031; National ID No. 4512894535 (Russia) (individual) [RUSSIA-EO14024].\n\nhttps://ofac.treasury.gov/recent-actions/20241204",
        "url": "https://ofac.treasury.gov/recent-actions/20241204"
      }
    ]
  },
  "0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff": {
    sanctioned: true,
    identifications: [
      {
          "category": "sanctioned entity",
          "name": "SANCTIONED ENTITY: OFAC SDN SUEX.io 2021-09-21 19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff",
          "description": "Sanctions: OFAC SDN SUEX.io 2021-09-21 0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff​​​​\n\nThis specific address 0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff​​​​ within the cluster has been identified as belonging to SUEX.io.\n\nSUEX OTC, S.R.O. (a.k.a. \"SUCCESSFUL EXCHANGE\"), Presnenskaya Embankment, 12, Federation East Tower, Floor 31, Suite Q, Moscow 123317, Russia; Skorepka 1058/8 Stare Mesto, Prague 110 00, Czech Republic (Latin: Skořepka 1058/8 Staré Město, Praha 110 00, Czech Republic); Website suex.io; Digital Currency Address - XBT 12HQDsicffSBaYdJ6BhnE22sfjTESmmzKx; alt. Digital Currency Address - XBT 1L4ncif9hh9TnUveqWq77HfWWt6CJWtrnb; alt. Digital Currency Address - XBT 13mnk8SvDGqsQTHbiGiHBXqtaQCUKfcsnP; alt. Digital Currency Address - XBT 1Edue8XZCWNoDBNZgnQkCCivDyr9GEo4x6; alt. Digital Currency Address - XBT 1ECeZBxCVJ8Wm2JSN3Cyc6rge2gnvD3W5K; alt. Digital Currency Address - XBT 1J9oGoAiHeRfeMZeUnJ9W7RpV55CdKtgYE; alt. Digital Currency Address - XBT 1295rkVyNfFpqZpXvKGhDqwhP1jZcNNDMV; alt. Digital Currency Address - XBT 1LiNmTUPSJEd92ZgVJjAV3RT9BzUjvUCkx; alt. Digital Currency Address - XBT 1LrxsRd7zNuxPJcL5rttnoeJFy1y4AffYY; alt. Digital Currency Address - XBT 1KUUJPkyDhamZXgpsyXqNGc3x1QPXtdhgz; alt. Digital Currency Address - XBT 1CF46Rfbp97absrs7zb7dFfZS6qBXUm9EP; alt. Digital Currency Address - XBT 1Df883c96LVauVsx9FEgnsourD8DELwCUQ; alt. Digital Currency Address - XBT bc1qdt3gml5z5n50y5hm04u2yjdphefkm0fl2zdj68; alt. Digital Currency Address - XBT 1B64QRxfaa35MVkf7sDjuGUYAP5izQt7Qi; Digital Currency Address - ETH 0x2f389ce8bd8ff92de3402ffce4691d17fc4f6535; alt. Digital Currency Address - ETH 0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff; alt. Digital Currency Address - ETH 0xe7aa314c77f4233c18c6cc84384a9247c0cf367b; alt. Digital Currency Address - ETH 0x308ed4b7b49797e1a98d3818bff6fe5385410370; Organization Established Date 25 Sep 2018; Digital Currency Address - USDT 0x2f389ce8bd8ff92de3402ffce4691d17fc4f6535; alt. Digital Currency Address - USDT 0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff; alt. Digital Currency Address - USDT 1KUUJPkyDhamZXgpsyXqNGc3x1QPXtdhgz; alt. Digital Currency Address - USDT 1CF46Rfbp97absrs7zb7dFfZS6qBXUm9EP; alt. Digital Currency Address - USDT 1LrxsRd7zNuxPJcL5rttnoeJFy1y4AffYY; alt. Digital Currency Address - USDT 1Df883c96LVauVsx9FEgnsourD8DELwCUQ; alt. Digital Currency Address - USDT 16iWn2J1McqjToYLHSsAyS6En3QA8YQ91H; Company Number 07486049 (Czech Republic); Legal Entity Number 5299007NTWCC3U23WM81 (Czech Republic) [CYBER2]. \n\nhttps://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20210921",
          "url": "https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20210921"
      },
      {
          "category": "sanctions",
          "name": "SANCTIONS: OFAC SDN SUEX.io 2021-09-21 19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff",
          "description": "Sanctions: OFAC SDN SUEX.io 2021-09-21 0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff​​​​\n\nThis specific address 0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff​​​​ within the cluster has been identified as belonging to SUEX.io.\n\nSUEX OTC, S.R.O. (a.k.a. \"SUCCESSFUL EXCHANGE\"), Presnenskaya Embankment, 12, Federation East Tower, Floor 31, Suite Q, Moscow 123317, Russia; Skorepka 1058/8 Stare Mesto, Prague 110 00, Czech Republic (Latin: Skořepka 1058/8 Staré Město, Praha 110 00, Czech Republic); Website suex.io; Digital Currency Address - XBT 12HQDsicffSBaYdJ6BhnE22sfjTESmmzKx; alt. Digital Currency Address - XBT 1L4ncif9hh9TnUveqWq77HfWWt6CJWtrnb; alt. Digital Currency Address - XBT 13mnk8SvDGqsQTHbiGiHBXqtaQCUKfcsnP; alt. Digital Currency Address - XBT 1Edue8XZCWNoDBNZgnQkCCivDyr9GEo4x6; alt. Digital Currency Address - XBT 1ECeZBxCVJ8Wm2JSN3Cyc6rge2gnvD3W5K; alt. Digital Currency Address - XBT 1J9oGoAiHeRfeMZeUnJ9W7RpV55CdKtgYE; alt. Digital Currency Address - XBT 1295rkVyNfFpqZpXvKGhDqwhP1jZcNNDMV; alt. Digital Currency Address - XBT 1LiNmTUPSJEd92ZgVJjAV3RT9BzUjvUCkx; alt. Digital Currency Address - XBT 1LrxsRd7zNuxPJcL5rttnoeJFy1y4AffYY; alt. Digital Currency Address - XBT 1KUUJPkyDhamZXgpsyXqNGc3x1QPXtdhgz; alt. Digital Currency Address - XBT 1CF46Rfbp97absrs7zb7dFfZS6qBXUm9EP; alt. Digital Currency Address - XBT 1Df883c96LVauVsx9FEgnsourD8DELwCUQ; alt. Digital Currency Address - XBT bc1qdt3gml5z5n50y5hm04u2yjdphefkm0fl2zdj68; alt. Digital Currency Address - XBT 1B64QRxfaa35MVkf7sDjuGUYAP5izQt7Qi; Digital Currency Address - ETH 0x2f389ce8bd8ff92de3402ffce4691d17fc4f6535; alt. Digital Currency Address - ETH 0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff; alt. Digital Currency Address - ETH 0xe7aa314c77f4233c18c6cc84384a9247c0cf367b; alt. Digital Currency Address - ETH 0x308ed4b7b49797e1a98d3818bff6fe5385410370; Organization Established Date 25 Sep 2018; Digital Currency Address - USDT 0x2f389ce8bd8ff92de3402ffce4691d17fc4f6535; alt. Digital Currency Address - USDT 0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff; alt. Digital Currency Address - USDT 1KUUJPkyDhamZXgpsyXqNGc3x1QPXtdhgz; alt. Digital Currency Address - USDT 1CF46Rfbp97absrs7zb7dFfZS6qBXUm9EP; alt. Digital Currency Address - USDT 1LrxsRd7zNuxPJcL5rttnoeJFy1y4AffYY; alt. Digital Currency Address - USDT 1Df883c96LVauVsx9FEgnsourD8DELwCUQ; alt. Digital Currency Address - USDT 16iWn2J1McqjToYLHSsAyS6En3QA8YQ91H; Company Number 07486049 (Czech Republic); Legal Entity Number 5299007NTWCC3U23WM81 (Czech Republic) [CYBER2]. \n\nhttps://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20210921",
          "url": "https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20210921"
      }
    ]
  },
  "0x1da5821544e25c636c1417ba96ade4cf6d2f9b5a": {
    sanctioned: true,
    identifications: [
      {
          "category": "sanctioned entity",
          "name": "SANCTIONED ENTITY: OFAC SDN Secondeye Solution 2021-04-15 1da5821544e25c636c1417ba96ade4cf6d2f9b5a",
          "description": "Pakistan-based Secondeye Solution (SES), also known as Forwarderz, is a synthetic identity document vendor that was added to the OFAC SDN list in April 2021.\n\nSES customers could buy fake identity documents to sign up for accounts with cryptocurrency exchanges, payment providers, banks, and more under false identities. According to the US Treasury Department, SES assisted the Internet Research Agency (IRA), the Russian troll farm that OFAC designated pursuant to E.O. 13848 in 2018 for interfering in the 2016 presidential election, in concealing its identity to evade sanctions.\n\nhttps://home.treasury.gov/news/press-releases/jy0126",
          "url": "https://home.treasury.gov/news/press-releases/jy0126"
      },
      {
          "category": "sanctions",
          "name": "SANCTIONS: OFAC SDN Secondeye Solution 2021-04-15 1da5821544e25c636c1417ba96ade4cf6d2f9b5a",
          "description": "Pakistan-based Secondeye Solution (SES), also known as Forwarderz, is a synthetic identity document vendor that was added to the OFAC SDN list in April 2021.\n\nSES customers could buy fake identity documents to sign up for accounts with cryptocurrency exchanges, payment providers, banks, and more under false identities. According to the US Treasury Department, SES assisted the Internet Research Agency (IRA), the Russian troll farm that OFAC designated pursuant to E.O. 13848 in 2018 for interfering in the 2016 presidential election, in concealing its identity to evade sanctions.\n\nhttps://home.treasury.gov/news/press-releases/jy0126",
          "url": "https://home.treasury.gov/news/press-releases/jy0126"
      }
    ]
  }
}

const FRAUD_ADDRESS_MAPPING = {
  "0x968b6984cba14444f23ee51be90652408155e142": {
    risk_score: 10,
    risk_level: "CRITICAL RISK (Directly malicious)",
    risk_reasoning: "Address is directly flagged for malicious activity."
  },
  "0x1999ef52700c34de7ec2b68a28aafb37db0c5ade": {
    risk_score: 10,
    risk_level: "CRITICAL RISK (Directly malicious)",
    risk_reasoning: "Address is directly flagged for malicious activity."
  },
  "0xf4d520149541f948f6da99eaec6ef6d699690ba3": {
    risk_score: 10,
    risk_level: "CRITICAL RISK (Directly malicious)",
    risk_reasoning: "Address is directly flagged for malicious activity."
  }
}

function getKycResponse(inquiry_id) {
  const kycResponse = INQUIRY_ID_MAPPING[inquiry_id];
  if (kycResponse) {
    return kycResponse;
  } else {
    return { kyc_status: "denied", name_first: "", name_last: "" };
  }
}

function getOfacResponse(address) {
  const ofacResponse = SANCTIONED_ADDRESS_MAPPING[address];
  if (ofacResponse) {
    return ofacResponse;
  } else {
    return { sanctioned: false, identifications: [] };
  }
}

function getFraudResponse(address) {
  const fraudResponse = FRAUD_ADDRESS_MAPPING[address];
  if (fraudResponse) {
    return fraudResponse;
  }
  return {
    risk_score: 0,
    risk_level: "Very low risk",
    risk_reasoning: "No suspicious paths found within 5 hops."
  }
}


export function run(wasm_args) {
  const wasmArgs = JSON.parse(wasm_args);

  const { inquiry_id, address } = wasmArgs;

  const kycResponse = getKycResponse(inquiry_id);
  const ofacResponse = getOfacResponse(address);
  const fraudResponse = getFraudResponse(address);

  return JSON.stringify({
    ...kycResponse,
    ...ofacResponse,
    ...fraudResponse,
    address,
  });
}
