// Credential registry data for certificates.js-lab.uk
// Each entry: { title, issuer, date (ISO, for sorting), dateLabel, hours, img, verifyUrl, note }

const REGISTRY = {
  meta: {
    name: "Yonatan Samuel",
    role: "SAP Basis & IT Infrastructure Administrator",
    updated: "2026-06-18"
  },

  certifications: {
    sap: [
      {
        title: "RISE with SAP S/4HANA Cloud, private edition — Digital Deep Dive for Cloud Architects",
        issuer: "SAP PartnerEdge",
        date: "2022-05-22",
        dateLabel: "22 May 2022",
        img: "assets/certs/sap-rise-deepdive-cloud-architects-partneredge-web.jpg"
      },
      {
        title: "Web assessment — Indirect Sales Process for RISE with SAP S/4HANA Cloud, private edition, Cloud Architect",
        issuer: "SAP",
        date: "2023-06-28",
        dateLabel: "28 Jun 2023",
        img: "assets/certs/Indirect-Sales-Process-for-RISE.jpg"
      },
      {
        title: "Web assessment — SAP S/4HANA Cloud, private edition Digital Deep Dive, Cloud Architect (Part 1)",
        issuer: "SAP",
        date: "2023-07-02",
        dateLabel: "2 Jul 2023",
        img: "assets/certs/sap-digital-deep-dive-part1.jpg"
      },
      {
        title: "Web assessment — SAP S/4HANA Cloud, private edition Digital Deep Dive, Cloud Architect (Part 2)",
        issuer: "SAP",
        date: "2023-06-29",
        dateLabel: "29 Jun 2023",
        img: "assets/certs/sap-digital-deep-dive-part2.jpg"
      },
      {
        title: "Web assessment — RISE with SAP S/4HANA Cloud, private edition for Solution Consultants",
        issuer: "SAP",
        date: "2022-12-05",
        dateLabel: "5 Dec 2022",
        img: "assets/certs/sap-indirect-sales-cloud-architect.jpg"
      },
      {
        title: "Implementation Knowledge — 10Steps2S4 Conversion to SAP S/4HANA Cloud, private edition",
        issuer: "SAP (Credly badge)",
        date: "2024-07-24",
        dateLabel: "24 Jul 2024",
        img: "assets/certs/sap-10steps2s4-credly-badge.jpg",
        verifyUrl: "https://www.credly.com/badges/dcfb2e9f-8bb4-46b9-be14-5d18acc5e1fd"
      },
      {
        title: "Product Support Accreditation",
        issuer: "SAP",
        date: "2023-11-19",
        dateLabel: "19 Nov 2023",
        img: "assets/certs/sap-product-support-accreditation.jpg"
      },
      {
        title: "SAP Basis Administration",
        issuer: "Udemy — SAP Buddy",
        date: "2022-07-11",
        dateLabel: "11 Jul 2022",
        hours: "39.5h",
        img: "assets/certs/udemy-sap-basis-administration.jpg",
        verifyUrl: "https://ude.my/UC-009b4327-f17a-441a-8722-212c145f131d"
      }
    ],
    microsoft: [
      {
        title: "Planning, Implementing & Maintaining a Windows Server 2003 Active Directory",
        issuer: "Microsoft / Hi-Tech College",
        date: "2008-11-09",
        dateLabel: "Nov 2008",
        hours: "44h",
        img: "assets/certs/ms-active-directory-2k3.jpg"
      },
      {
        title: "Implementing, Managing & Maintaining a Windows Server 2003 Network Services",
        issuer: "Microsoft / Hi-Tech College",
        date: "2008-05-20",
        dateLabel: "May 2008",
        hours: "40h",
        img: "assets/certs/ms-network-services-2k3.jpg"
      },
      {
        title: "Implementing a Windows Server 2003 Network Infrastructure: Network Hosts Services",
        issuer: "Microsoft / Hi-Tech College",
        date: "2008-05-04",
        dateLabel: "May 2008",
        hours: "16h",
        img: "assets/certs/ms-network-hosts-2k3.jpg"
      },
      {
        title: "Managing a Microsoft Windows Server 2003 Environment",
        issuer: "Microsoft / Hi-Tech College",
        date: "2008-02-10",
        dateLabel: "Feb 2008",
        hours: "40h",
        img: "assets/certs/ms-managing-2k3-environment.jpg"
      },
      {
        title: "Maintaining a Microsoft Windows Server 2003 Environment",
        issuer: "Microsoft / Hi-Tech College",
        date: "2008-03-25",
        dateLabel: "Mar 2008",
        hours: "24h",
        img: "assets/certs/ms-maintaining-2k3-environment.jpg"
      },
      {
        title: "Designing Security for Microsoft Networks",
        issuer: "Microsoft / Hi-Tech College",
        date: "2008-12-16",
        dateLabel: "Dec 2008",
        hours: "24h",
        img: "assets/certs/ms-security-design.jpg"
      },
      {
        title: "Implementing & Managing Exchange Server 2003 (Titanium)",
        issuer: "Microsoft / Hi-Tech College",
        date: "2008-07-01",
        dateLabel: "Jul 2008",
        hours: "40h",
        img: "assets/certs/ms-exchange-2k3.jpg"
      },
      {
        title: "Introduction to Exchange Server 2007",
        issuer: "Microsoft / Hi-Tech College",
        date: "2008-08-17",
        dateLabel: "Aug 2008",
        hours: "16h",
        img: "assets/certs/ms-exchange-2007-intro.jpg"
      },
      {
        title: "Installing and Configuring the Windows Vista Operating System",
        issuer: "Microsoft / Hi-Tech College",
        date: "2007-12-23",
        dateLabel: "Dec 2007",
        hours: "28h",
        img: "assets/certs/ms-vista-install.jpg"
      },
      {
        title: "Configuring Windows Vista Applications and Tools",
        issuer: "Microsoft / Hi-Tech College",
        date: "2008-01-20",
        dateLabel: "Jan 2008",
        hours: "20h",
        img: "assets/certs/ms-vista-config.jpg"
      }
    ]
  },

  learningJourneys: [
    {
      title: "Discovering SAP Business Technology Platform",
      level: "Foundational",
      date: "2025-02-02",
      dateLabel: "2 Feb 2025",
      img: "assets/certs/sap-lj-btp.jpg"
    },
    {
      title: "Exploring SAP Analytics Cloud",
      level: "Foundational",
      date: "2025-02-02",
      dateLabel: "2 Feb 2025",
      img: "assets/certs/sap-lj-analytics-cloud.jpg"
    },
    {
      title: "Discovering the Foundations of SAP Commerce Cloud and SAP S/4HANA Cloud Integrations",
      level: "Foundational",
      date: "2025-02-04",
      dateLabel: "4 Feb 2025",
      img: "assets/certs/sap-lj-commerce-cloud-integrations.jpg"
    },
    {
      title: "Exploring Business Scenarios in SAP S/4HANA Cloud Public Edition, Supply Chain",
      level: "Intermediate",
      date: "2025-02-04",
      dateLabel: "4 Feb 2025",
      expires: "4 Feb 2026",
      img: "assets/certs/sap-lj-supply-chain.jpg"
    },
    {
      title: "Exploring Data Modeling with SAP Solutions",
      level: "Foundational",
      date: "2025-02-04",
      dateLabel: "4 Feb 2025",
      img: "assets/certs/sap-lj-data-modeling.jpg"
    },
    {
      title: "Learning the Basics of SAP Fiori",
      level: "Foundational",
      date: "2025-02-04",
      dateLabel: "4 Feb 2025",
      img: "assets/certs/sap-lj-Basics-of-SAP-Fiori.jpg"
    },
    {
      title: "Leveraging SAP S/4HANA Updates and Upgrades with Zero Downtime Option of Software Update Manager",
      level: "Foundational",
      date: "2025-02-06",
      dateLabel: "6 Feb 2025",
      img: "assets/certs/sap-lj-zero-downtime.jpg"
    },
    {
      title: "Setting up an ABAP Environment on SAP BTP",
      level: "Foundational",
      date: "2025-02-04",
      dateLabel: "4 Feb 2025",
      img: "assets/certs/sap-lj-abap-btp-real.jpg"
    },
    {
      title: "Exploring SAP Business One, Web Client",
      level: "Foundational",
      date: "2025-02-11",
      dateLabel: "11 Feb 2025",
      img: "assets/certs/sap-lj-business-one-web-client.jpg"
    }
  ],

  courses: []
};
