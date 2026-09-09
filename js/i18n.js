/* ==========================================================================
   Cameroon Oncology Center — EN / FR translation engine
   Works across every page: translations are looked up by a dotted key
   (data-i18n="home.hero.title") and applied to textContent (or innerHTML
   for the few entries that need embedded tags, via data-i18n-html).
   The chosen language is persisted in localStorage so it stays selected
   as the visitor moves between pages.
   ========================================================================== */

const translations = {
  en: {
    common: {
      topbar: {
        address: "Bekoko - Dibombari, Littoral Region, Cameroon",
        hours: "Open 24 Hours",
        days: "7 Days a Week",
        search_title: "Search site"
      },
      search: {
        placeholder: "Search services, leadership, pages...",
        button: "Search",
        hint: "Press Esc to close"
      },
      nav: {
        home: "Home",
        about: "About Us",
        about_glance: "COC at a Glance",
        about_leadership: "Our Leadership",
        about_reach: "Our Regional Reach",
        services: "Our Services",
        services_radiation: "Radiation Oncology",
        services_medical: "Medical Oncology",
        services_surgical: "Surgical Oncology",
        services_lab: "Laboratory & Pathology",
        services_imaging: "Imaging & Nuclear Medicine",
        services_pharmacy: "Pharmacy",
        patients: "For Patients",
        patients_book: "Book an Appointment",
        patients_support: "Patient Support",
        patients_financial: "Financial & Insurance",
        research: "Research",
        research_publications: "Publications",
        research_training: "Training Programs",
        news: "News",
        news_outreach: "Community Outreach",
        news_press: "Press & Announcements",
        careers: "Careers",
        contact: "Contact"
      },
      brand: { tagline: "Hope · Care · Life" },
      buttons: {
        book_appointment: "Book an Appointment",
        make_difference: "Make a Difference",
        learn_more: "Learn More",
        view_full_profile: "View Full Profile"
      },
      footer: {
        about: "About Us",
        services: "Our Services",
        book: "Book an Appointment",
        lab: "Laboratory & Pathology",
        patients: "Patients & Families",
        research: "Research & Training",
        copyright_suffix: "Cameroon Oncology Center. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        sitemap: "Site Map"
      }
    },

    home: {
      hero: {
        eyebrow: "Cameroon Oncology Center",
        title_html: "Together<br>Against <span>Cancer</span>",
        italic: "Advanced Care. Compassionate People. A Healthier Tomorrow.",
        desc: "Cameroon Oncology Center is a Ministry of Public Health designated Centre of Excellence in cancer care, providing comprehensive, high-quality, affordable and compassionate oncology services for patients in Cameroon and the region.",
        photo_label: "Photo placeholder — replace with a real photo of the COC facility (images/hero-building.jpg)",
        tag_html: "Hope<br>Care<br>Life"
      },
      stats: {
        consultations_label: "Patient Consultations in 2025",
        radiotherapy_label: "Patients Received Radiotherapy in 2025",
        chemo_label: "Chemotherapy Sessions in 2025",
        diagnostic_num: "Comprehensive",
        diagnostic_label: "Diagnostic & Imaging Services",
        serving_num: "Serving Patients",
        serving_label: "Across Cameroon and the Region"
      },
      services: {
        title: "Our Clinical Services",
        viewall: "View All Services",
        radiation_title: "Radiation Oncology",
        radiation_desc: "Varian iX and Varian Trilogy linear accelerators, IMRT, 3DCRT and image-guided treatment.",
        medical_title: "Medical Oncology",
        medical_desc: "Chemotherapy, targeted therapy and immunotherapy.",
        surgical_title: "Surgical Oncology",
        surgical_desc: "Gynecologic, urologic and general oncology surgery.",
        imaging_title: "Imaging & Nuclear Medicine",
        imaging_desc: "CT, CT-Sim, MRI, Ultrasound, SPECT-CT and PET-CT (coming soon).",
        lab_title: "Laboratory & Pathology",
        lab_desc: "Comprehensive laboratory services and histopathology.",
        pharmacy_title: "Pharmacy",
        pharmacy_desc: "Three pharmacy service points with day and night coverage."
      },
      tech: {
        title: "Our Technology",
        sub: "World-class technology for accurate diagnosis and advanced cancer treatment.",
        explore: "Explore Our Technology",
        item1_title: "Varian iX Linear Accelerator",
        item1_desc: "High-precision radiotherapy for optimal cancer care.",
        item2_title: "Varian Trilogy Linear Accelerator",
        item2_desc: "Advanced treatment options including 3D-CRT, IMRT and more.",
        item3_title: "Philips Big Bore CT Simulator",
        item3_desc: "Advanced imaging for precise treatment planning."
      },
      values: {
        title: "Our Values",
        compassion_title: "Compassion", compassion_desc: "We care for every patient with dignity and respect.",
        excellence_title: "Excellence", excellence_desc: "We strive for the highest standards in all we do.",
        integrity_title: "Integrity", integrity_desc: "We are honest, transparent and accountable.",
        teamwork_title: "Teamwork", teamwork_desc: "We achieve more together.",
        innovation_title: "Innovation", innovation_desc: "We embrace new ideas and technology.",
        accessibility_title: "Accessibility", accessibility_desc: "We are committed to making cancer care available to all."
      },
      excellence: {
        title: "Centre of Excellence",
        desc: "Designated by the Ministry of Public Health as a Centre of Excellence in Cancer Care.",
        ministry_html: "Ministry of Public Health<br>Centre of Excellence in Cancer Care",
        readmore: "Read the Official Designation"
      },
      quality: {
        title: "International Quality Verification",
        desc: "Our radiotherapy services have been independently evaluated by IROC Houston (MD Anderson Cancer Center), confirming high-quality and safe treatment delivery.",
        viewreport: "View Full Report"
      },
      partners: {
        title: "Our International Partners",
        p1_role: "Radiation Oncologist, UK",
        p2_role: "Medical Oncologist, USA"
      },
      video: {
        label: "Our Story",
        title: "Watch Our Theme Song",
        sub: "A message of hope, care and life from the Cameroon Oncology Center family.",
        fb_link: "Watch on Facebook"
      },
      footer_tagline: "A Healthier Cameroon. A Brighter Tomorrow."
    },

    about: {
      banner: {
        crumb: "COC at a Glance",
        title_html: "Comprehensive Cancer Care.<br>Real Impact. A Healthier Tomorrow.",
        desc: "Cameroon Oncology Center provides high-quality, affordable and compassionate cancer care to patients from across Cameroon and the region.",
        pill1: "People at the center",
        pill2: "Better care today",
        pill3: "Stronger communities tomorrow",
        quote: "“Our Center. Our Commitment. For Cameroon and Beyond.”"
      },
      milestones: {
        title: "Milestones Achieved So Far",
        subtitle: "Real Progress. Real People. Real Impact.",
        m1_num: "6,000+", m1_title: "Cancer Patients Consulted", m1_desc: "More than 6,000 cancer patients have been evaluated and cared for at COC since 2019.",
        m2_num: "2,000+", m2_title: "Radiotherapy Patients Treated", m2_desc: "More than 2,000 cancer patients have received radiotherapy using our medical linear accelerator.",
        m3_num: "6,000+", m3_title: "Chemotherapy Sessions Administered", m3_desc: "More than 6,000 chemotherapy sessions administered since 2019, benefiting about 2,000 patients.",
        m4_num: "25", m4_title: "Peer-Reviewed Research Publications", m4_desc: "Our faculty have contributed to 25 research papers published in international peer-reviewed journals since 2015.",
        m5_num: "6,000+", m5_title: "Cameroonians Screened Free of Charge", m5_desc: "More than 6,000 people have benefited from free cancer screening activities conducted across all 10 regions."
      },
      reach: {
        title: "Our Regional Reach",
        desc: "Serving Cameroon. Reaching Across Borders. COC has provided cancer care to patients from all 10 regions of Cameroon and from 7 other African countries.",
        badge1_title: "10 Regions of Cameroon",
        badge1_desc: "Patients from all 10 regions have accessed care at COC.",
        badge2_title: "7 Other African Countries",
        badge2_desc: "Chad, Republic of the Congo, DR Congo, Gabon, Equatorial Guinea, Nigeria and the Central African Republic.",
        map_label: "Map placeholder — regional reach map of Cameroon & Central Africa (images/regional-map.jpg)"
      },
      gallery: {
        g1: "Patient Care", g2: "Radiotherapy", g3: "Surgery", g4: "Laboratory & Diagnostics", g5: "Community Outreach"
      },
      cta: {
        title: "One Center. A Stronger, Healthier Africa.",
        desc: "From advanced cancer treatment to screening, education, research and international collaboration, COC continues to expand access to comprehensive cancer care in Cameroon and the wider region.",
        btn: "Join Us in Making a Difference"
      },
      leadership: {
        crumb: "About COC",
        title: "Our Leadership",
        subtitle: "Experienced. Committed. United against cancer.",
        intro: "At Cameroon Oncology Center, our leadership combines clinical expertise, managerial excellence and a shared commitment to high-quality, compassionate cancer care.",
        col1_title: "Institutional Leadership", col1_sub: "Vision, strategy and global partnerships",
        col2_title: "Clinical Leadership", col2_sub: "Evidence-based, multidisciplinary cancer care",
        col3_title: "Senior Clinical Advisor", col3_sub: "Academic leadership and guidance",
        exec_title: "Executive & Administrative Leadership", exec_sub: "Operational excellence for a stronger, more sustainable COC",
        p1_role: "PhD, MCCPM, DABMP — Founder, President & CEO",
        p1_desc: "Medical physicist, cancer researcher and healthcare leader with a strong commitment to expanding access to quality cancer care in Cameroon and beyond.",
        p2_role: "MD, MPH — Medical Director & Head of Radiation Oncology",
        p2_desc: "Radiation oncologist and physician-leader with extensive experience in clinical oncology, advanced radiotherapy and health-systems management in Sub-Saharan Africa.",
        p3_role: "Senior Advisor, Radiation Oncology",
        p3_desc: "Senior radiation oncologist and academic physician. A pioneer of radiation oncology in Cameroon, providing senior clinical and strategic guidance to COC.",
        p4_role: "Chief Medical Oncologist & Head of Medical Oncology",
        p4_desc: "Leads the Medical Oncology service at COC and works closely with multidisciplinary teams.",
        p5_role: "General Manager",
        p5_desc: "Responsible for the overall management and coordination of the Center's administrative and operational activities.",
        p6_role: "Deputy General Manager",
        p6_desc: "Supports the General Manager and executive leadership in coordination of administrative and operational activities.",
        p7_role: "Finance Manager",
        p7_desc: "Responsible for financial management, budgeting, financial reporting and planning in support of COC's mission and growth.",
        p8_role: "Director of Human Resources",
        p8_desc: "Accomplished healthcare professional whose background in medical laboratory sciences supports COC's continued growth.",
        p9_role: "Chief Engineer",
        p9_desc: "Provides leadership for the engineering and technical infrastructure required to support COC's clinical operations.",
        quote_lead: "Different expertise. A shared purpose. Working together for a cancer-free future.",
        quote_text: "“Leadership is not a position, but a commitment to a better tomorrow for the patients we serve.”",
        quote_cite: "— Cameroon Oncology Center"
      },
      footer_tagline: "Cancer care today. A brighter tomorrow."
    },

    histo: {
      banner: "A Ministry of Public Health Designated Centre of Excellence in Cancer Care",
      hero: {
        title_html: "Histopathology<br>and <span class=\"highlight\">Laboratory Services</span>",
        tag: "Accurate Diagnosis. Better Treatment. Improved Outcomes.",
        desc: "Our Histopathology and Laboratory Services provide high-quality, timely and accurate diagnostic information to guide cancer care. We work in collaboration with Smart Medicals India for Immunohistochemistry (IHC) and other specialized services.",
        icon1: "Accurate Diagnosis", icon2: "Timely Results", icon3: "Guiding Treatment", icon4: "Better Patient Outcomes",
        doctor_role: "Consultant Pathologist, Cameroon Oncology Center",
        photo_label: "Photo placeholder — COC facility exterior (images/coc-building.jpg)",
        collab_title: "In Collaboration With Smart Medicals India",
        collab1: "Immunohistochemistry (IHC)", collab2: "Molecular and special studies", collab3: "Digital pathology (selected cases)", collab4: "Expert consultation"
      },
      services: {
        head: "Our Services",
        histo_title: "Histopathology",
        histo1: "Biopsies and surgical specimens", histo2: "Frozen section (where indicated)", histo3: "Comprehensive reporting", histo4: "Second opinion (national & international)",
        cyto_title: "Cytology",
        cyto1: "FNAC (Fine Needle Aspiration Cytology)", cyto2: "Pap smear and other cytology", cyto3: "Body fluid cytology", cyto4: "Rapid reporting",
        lab_title: "Clinical Laboratory",
        lab1: "Hematology", lab2: "Clinical chemistry", lab3: "Microbiology", lab4: "Serology and other routine tests", lab5: "Tumor markers (e.g. PSA, CEA, CA 15-3, CA 125)", lab6: "Support for multidisciplinary tumor board"
      },
      cancers: {
        head: "Common Cancers Diagnosed",
        c1: "Breast cancer", c2: "Cervical cancer", c3: "Prostate cancer", c4: "Colorectal cancer", c5: "Lung cancer",
        c6: "Head and neck cancers", c7: "Thyroid cancer", c8: "Gastrointestinal cancers", c9: "Skin cancers",
        c10: "Hematologic malignancies (e.g. lymphoma, leukemia)", c11: "Other solid tumors",
        quote: "“Providing the answers that guide your care.”"
      },
      process: {
        head: "From Sample to Diagnosis",
        step1_title: "Sample Collection", step1_desc: "Biopsy or surgery.",
        step2_title: "Tissue Processing", step2_desc: "Tissue processing and slide preparation.",
        step3_title: "Microscopic Examination", step3_desc: "Examination by the pathologist.",
        step4_title: "Accurate Report", step4_desc: "Report issued to guide treatment.",
        turnaround_title: "Turnaround Time for Results",
        turnaround_desc: "Most results available within 3–10 days. Some urgent tests (e.g. frozen section, selected cytology) within 3 days."
      },
      team: {
        title: "Our Team",
        t1_html: "Dr. Bodo Edmond<br>Consultant Pathologist", t2: "Laboratory Scientists", t3: "Histotechnologists", t4: "Laboratory Technicians", t5: "Quality & Data Management"
      },
      why: {
        title: "Why Choose COC?",
        w1: "Experienced and dedicated team",
        w2: "Modern equipment and quality standards",
        w3: "Collaboration with Smart Medicals India for IHC and specialized tests",
        w4: "Timely and reliable reporting (3–10 days)",
        w5: "Integrated care with multidisciplinary team",
        w6: "Patient-centered and compassionate service"
      },
      info: {
        title: "Service Information",
        routine_title: "Routine Services", routine_desc: "Monday – Friday, 8:00 AM – 5:00 PM",
        special_title: "Special / STAT Requests", special_desc: "As needed",
        inquiries_title: "For Inquiries",
        email_title: "Email",
        request_btn: "Request This Service"
      },
      footer_tagline: "Expert Care. Stronger Communities. A Healthier Cameroon."
    },

    appt: {
      banner: {
        crumb: "For Patients",
        title: "Book an Appointment",
        desc: "Fill in the form below and our patient coordination team will contact you to confirm your appointment date and time."
      },
      form: {
        title: "Request an Appointment",
        desc: "Fields marked * are required. This is a request only — it does not guarantee a slot until confirmed by our team.",
        fullname_label: "Full Name",
        fullname_placeholder: "e.g. Ngozi Achu",
        email_label: "Email Address",
        email_placeholder: "you@example.com",
        phone_label: "Phone Number",
        phone_placeholder: "+237 6XX XXX XXX",
        service_label: "Service Needed",
        service_placeholder: "Select a service",
        service_radiation: "Radiation Oncology",
        service_medical: "Medical Oncology",
        service_surgical: "Surgical Oncology",
        service_imaging: "Imaging & Nuclear Medicine",
        service_lab: "Laboratory & Pathology",
        service_pharmacy: "Pharmacy",
        service_other: "Other / Not sure",
        date_label: "Preferred Date",
        notes_label: "Additional Notes",
        notes_placeholder: "Briefly describe your reason for visit or any relevant medical history",
        submit_btn: "Request Appointment",
        submitting_btn: "Submitting...",
        note_html: "Or call us directly at <a href=\"tel:+237676199595\" style=\"color:var(--navy);font-weight:600;\">+237 6 76 19 95 95</a> for urgent cases."
      },
      success: {
        title: "Almost done — check your email app.",
        desc: "We've opened an email pre-filled with your request. Press Send there to deliver it to our patient coordination team."
      },
      validation: {
        fullName: "Please enter your full name.",
        email: "Enter a valid email address.",
        phone: "Enter a valid phone number.",
        service: "Please select a service.",
        date: "Please choose a preferred date."
      }
    },

    patients: {
      banner: {
        crumb: "Patients & Families",
        title_html: "YOU ARE<br><span class=\"highlight\">NOT ALONE</span>",
        subtitle: "Patients & Families",
        tag: "Together for a Healthier, Cancer-Free Cameroon",
        side_html: "Patients.<br>Families.<br>Communities.<br>Stronger Together.",
        desc_bold: "Compassionate care. Clear guidance. A team by your side.",
        desc: "At Cameroon Oncology Center, we walk with you and your family from the first appointment through treatment, recovery and beyond.",
        strip: "Because every person matters."
      },
      first_visit: {
        title: "Your First Visit to COC",
        intro: "Please bring the following, when available:",
        b1: "Referral letter or physician notes",
        b2: "Pathology/biopsy reports",
        b3: "Previous laboratory results",
        b4: "CT, MRI, ultrasound, X-ray or other imaging and reports",
        b5: "Previous treatment records (surgery, chemotherapy or radiotherapy)",
        b6: "Current medication list",
        b7: "Identification and insurance/authorization documents",
        note_bold: "Do not delay seeking care because your records are incomplete.",
        note: "Our team can evaluate you and help determine what additional information or testing is needed."
      },
      journey: {
        title: "Your COC Care Journey",
        s1_t: "Arrival & Registration", s1_d: "A warm welcome to start your journey",
        s2_t: "Oncology Nurse Navigation", s2_d: "Your guide throughout your care",
        s3_t: "Specialist Consultation", s3_d: "Meet with our oncology team",
        s4_t: "Diagnostic Evaluation", s4_d: "Pathology · Laboratory · CT · MRI · Ultrasound · Nuclear Medicine",
        s5_t: "Multidisciplinary Treatment Plan", s5_d: "Experts working together for you",
        s6_t: "Treatment", s6_d: "Radiotherapy · Medical Oncology · Surgery · Other Specialty Care",
        s7_t: "Support Throughout Treatment", s7_d: "Nutrition · Psycho-Oncology · Cardiology · Pharmacy · Pain & Palliative Care",
        s8_t: "Follow-up & Survivorship", s8_d: "Continued care for a healthier tomorrow"
      },
      financial: {
        title: "Financial Guidance & Access to Care",
        subtitle: "Talk to Us About the Cost of Your Care",
        desc: "Our team will help you understand treatment costs, insurance/authorization requirements and available financial-support pathways. Please discuss any financial concerns with us before delaying or abandoning treatment.",
        goal: "Our goal is to help you get the care you need."
      },
      family: {
        title: "Cancer Care Is a Family Journey",
        desc: "We welcome family members and caregivers as partners in care. Families can receive treatment education, medication guidance, nutrition advice, psychological support and instructions for caring for the patient between visits.",
        caption_html: "Real People.<br>Real Support.<br>Real Hope."
      },
      whole_person: {
        title: "Care for the Whole Person",
        nurse_t: "Nurse Navigation", nurse_d: "Someone helps coordinate your journey.",
        nutrition_t: "Nutrition", nutrition_d: "Support before, during and after treatment.",
        psycho_t: "Psycho-Oncology", psycho_d: "Emotional and psychological support for you and your family.",
        pain_t: "Pain & Palliative Care", pain_d: "Symptom relief and quality of life support at every stage.",
        pharmacy_t: "Pharmacy", pharmacy_d: "Cancer medicines and medication support integrated with treatment.",
        cardio_t: "Cardio-Oncology", cardio_d: "Specialized cardiovascular assessment when cancer or its treatment may affect the heart."
      },
      hospitalization: {
        title: "When Hospitalization Is Needed",
        h1: "90% private-room hospitalization",
        h2: "Maximum 1 nurse : 6 patients",
        h3: "24-hour onsite physician generalist",
        h4: "Twice-daily oncologist review",
        h5: "Four levels of acuity-based care",
        restaurant_t: "Onsite Restaurant",
        restaurant_d: "Meals and refreshments are available on the COC campus for patients, caregivers and visitors.",
        insurance_t: "We Accept All Insurance Companies",
        insurance_d: "We work with all insurance companies and will assist you with the authorization and billing process."
      },
      payment: {
        title: "Flexible Payment Options",
        desc: "Your bills can be settled by:",
        cash: "Cash", momo: "MoMo", orange: "Orange Money", bank: "Bank Transfer / Wire", card: "Card Payment (Visa Terminal on Site)"
      },
      travel: {
        title: "Travelling to COC? We Can Help You Plan Your Visit",
        t1: "Appointment coordination before travel",
        t2: "Medical record review where possible",
        t3: "Treatment scheduling",
        t4: "Information about length of stay",
        t5: "Hospitalization when clinically necessary",
        t6: "Accommodation guidance",
        t7: "Support for accompanying family and caregivers",
        t8: "French and English communication",
        side: "We Welcome Patients from Across Cameroon and Beyond"
      },
      questionnaire: {
        title: "Download Our Patient Questionnaire",
        desc: "Save time at your visit by completing our short Pre-Visit Questionnaire. Please print, complete and bring it with you to your appointment.",
        btn: "Download Patient Questionnaire (PDF)",
        side: "Be Prepared for Your Visit"
      },
      need_care: {
        title: "Need Care Now?",
        desc: "We are here for you. Contact us for appointments, urgent care or physician referrals.",
        a1_t: "Book an Appointment", a1_d: "For new consultations, second opinions and follow-up.",
        a2_t: "Urgent Care", a2_d: "For acute illness, cancer-treatment complications, accidents and general medical emergencies.",
        a3_t: "Physician Referral", a3_d: "For doctors referring patients through the COC Affiliate Physician Network."
      },
      footer_tagline: "Patients. Families. Communities. A Healthier Cameroon."
    },

    research: {
      banner: {
        crumb: "A Ministry of Public Health Designated Centre of Excellence in Cancer Care",
        title_html: "Research, Education<br>& Training",
        subtitle: "Advancing Knowledge. Training Professionals. Improving Cancer Care.",
        desc: "At Cameroon Oncology Center, we combine clinical care, research and education to build cancer-care capacity for Cameroon and Africa. Our multidisciplinary team is committed to generating new knowledge, training the next generation of oncology professionals, and sharing expertise locally and globally.",
        quote_html: "“Training.<br>Research.<br>New Hope<br>for Generations.”",
        strip: "People. Knowledge. Partnerships. A Healthier Africa."
      },
      icons: { research: "Research Excellence", train: "Train Professionals", capacity: "Build Capacity", global: "Global Collaboration", care: "Better Cancer Care" },
      clinical: {
        head: "Clinical Research & Publications",
        subtitle: "Generating Evidence. Improving Lives.",
        stat_num: "25+",
        stat_label: "Published Papers in the Past 10 Years",
        desc: "Our faculty, scientists and researchers have published more than 25 papers in reputable international journals in the past 10 years.",
        c1: "Research in radiotherapy, medical oncology, cardio-oncology, nutrition and supportive care",
        c2: "Health systems and implementation research",
        c3: "Oncology nurse navigation and patient outcomes",
        c4: "Cancer care financing and access to care",
        c5: "Collaborations with national and international partners",
        link: "View Our Publications",
        linksub: "Advancing knowledge for Africa."
      },
      school: {
        head: "Cameroon Oncology Center School of Health Sciences (COC-SHS)",
        subtitle: "Education. Practice. Impact.",
        desc: "The Cameroon Oncology Center School of Health Sciences is part of the African University Institute of Sciences and Technology (AUIST). The School operates from the COC main campus in Douala, providing hands-on training in a real clinical environment.",
        s1: "Undergraduate and postgraduate training programs",
        s2: "Clinical rotations and practical experience",
        s3: "Research and academic mentorship",
        s4: "Training the next generation of African health professionals",
        s5: "Contributing to a stronger health workforce for Cameroon and the region"
      },
      residency: {
        head: "COC-Sponsored Medical Residency Training",
        subtitle: "Investing in the Next Generation of Cancer-Care Specialists",
        stat_num: "4",
        stat_label: "COC-Sponsored Residents",
        stat_sub: "4 Specialties · One Mission",
        stat_note: "Building Cameroon's future cancer-care workforce",
        desc: "Cameroon Oncology Center currently sponsors four physicians undergoing specialist residency training in:",
        spec1: "Clinical Oncology", spec2: "Medical Oncology", spec3: "General Surgery", spec4: "Gynecology",
        r1: "Financial support for residency training",
        r2: "Clinical mentorship by COC specialists",
        r3: "Exposure to a multidisciplinary cancer care environment",
        r4: "Preparing future leaders in oncology for Cameroon and Africa",
        r5: "Commitment to long-term workforce development",
        quote: "“Investing in people. Strengthening tomorrow.”"
      },
      teleoncology: {
        head: "International Education & Tele-Oncology",
        subtitle: "Connecting Cameroon to Global Expertise",
        t1: "Virtual tumor boards and multidisciplinary case discussions",
        t2: "International expert consultations",
        t3: "Education on treatment planning and new technologies",
        t4: "Tele-mentoring for COC and affiliate network providers",
        t5: "Opportunities for visiting faculty and international rotations",
        quote: "“Global knowledge. Local impact.”"
      },
      cpe: {
        head: "Continuing Professional Education",
        subtitle: "Lifelong Learning for a Stronger Cancer Care System",
        c1: "Regular CME programs, workshops and seminars",
        c2: "Training for physicians, nurses, radiation therapists, medical physicists, pharmacists, technologists and other healthcare professionals",
        c3: "Education for affiliate network physicians",
        c4: "Updates on new guidelines, technologies and best practices",
        c5: "Multidisciplinary tumor board participation",
        c6: "Practical, case-based learning"
      },
      next_gen: {
        head: "Training the Next Generation",
        subtitle: "Students Today. Cancer Care Leaders Tomorrow.",
        n1: "Oncology residents and fellows",
        n2: "Medical, nursing and allied health students",
        n3: "Research trainees and visiting professionals",
        n4: "Exposure to comprehensive, real-world cancer care",
        n5: "Mentorship and career development",
        quote: "“Learn. Serve. Lead. For a healthier Africa.”"
      },
      pathway: {
        title: "Our Pathway: Knowledge to a Healthier Cameroon and Africa",
        p1_t: "Clinical Care", p1_s: "Real-World Experience",
        p2_t: "Research", p2_s: "New Knowledge",
        p3_t: "Education", p3_s: "Share & Teach",
        p4_t: "Professional Training", p4_s: "Skills & Capacity",
        p5_t: "Knowledge Sharing", p5_s: "Local & Global",
        p6_t: "Better Cancer Care", p6_s: "For Cameroon and Africa"
      },
      contact_btn: "Partner in Research & Training",
      strip1: "Care Today. Hope Tomorrow.",
      strip2_l: "For a Healthier Cameroon.",
      strip2_r: "For a Stronger Africa."
    },

    medonc: {
      banner: {
        label: "Our Services",
        title: "Medical Oncology",
        subtitle: "Comprehensive Cancer Care. Personalized for You.",
        desc: "At Cameroon Oncology Center, our medical oncology team provides evidence-based treatment for a wide range of cancers, using the latest therapies and a multidisciplinary approach to achieve the best possible outcomes. We combine clinical expertise, compassion and support to care for every patient throughout their cancer journey.",
        tag_html: "More<br>Than Treatment.<br>A Brighter<br>Tomorrow."
      },
      icons: { team: "Experienced Team", therapies: "Advanced Therapies", safety: "Patient Safety", holistic: "Holistic Support", multi: "Multidisciplinary Care", outcomes: "Better Outcomes" },
      services: {
        head: "Our Medical Oncology Services",
        chemo_t: "Chemotherapy", chemo_d: "Standard and combination chemotherapy regimens for curative or palliative intent.",
        targeted_t: "Targeted Therapy", targeted_d: "Modern targeted therapies for selected cancers.",
        immuno_t: "Immunotherapy", immuno_d: "Immunotherapy for appropriate indications.",
        hormonal_t: "Hormonal Therapy", hormonal_d: "Hormone therapy for hormone-sensitive cancers (e.g. breast, prostate).",
        supportive_t: "Supportive Care", supportive_d: "Management of symptoms and treatment-related side effects.",
        monitoring_t: "Treatment Monitoring", monitoring_d: "Regular assessment of response and toxicity.",
        education_t: "Patient Education", education_d: "Information and counseling to help you understand your treatment.",
        palliative_t: "Palliative & End-of-Life Care", palliative_d: "Relief of symptoms and improved quality of life."
      },
      cancers: {
        head: "Cancers We Treat",
        c1: "Breast Cancer", c2: "Prostate Cancer", c3: "Gynecologic Cancers (Cervical, Ovarian, Endometrial)",
        c4: "Gastrointestinal Cancers (Colorectal, Gastric, etc.)", c5: "Lung Cancer", c6: "Head & Neck Cancers",
        c7: "Hematologic Cancers (Lymphoma, Leukemia, etc.)", c8: "Liver Cancer", c9: "Genitourinary Cancers",
        c10: "Skin Cancers", c11: "Pediatric Cancers", c12: "Other Solid Tumors"
      },
      facilities: {
        head: "Treatment Options and Facilities",
        infusion_t: "Infusion Center", infusion_d: "Comfortable, modern space with experienced nursing care.",
        rooms_t: "Private Rooms", rooms_d: "For patients who prefer a more private and personalized setting."
      },
      protocols: {
        head: "Our Treatment Protocols",
        p1: "More than 30 different chemotherapy and systemic therapy protocols",
        p2: "Protocols for curative or palliative intent",
        p3: "Chemo-irradiation regimens for cancers such as cervical, colorectal and most head and neck cancers",
        p4: "Regularly updated based on international guidelines",
        p5: "Tailored to each patient's individual needs"
      },
      notalone: {
        title: "You Are Not Alone",
        desc: "Our multidisciplinary team of doctors, nurses, pharmacists, nutritionists, psychosocial counselors and palliative care specialists work together to support you and your family.",
        tagline: "Care. Support. Hope. Always."
      },
      team: {
        head: "Our Medical Oncology Team",
        t1n: "Dr. Lana Mohamed Khair Ahmed", t1r: "Head of Medical Oncology Unit", t1s: "Medical Oncologist", t1e: "Full-time",
        t2n: "Dr. Kamtcheu Djeuga Ronny", t2r: "Staff Medical Oncologist", t2e: "Full-time",
        t3n: "Dr. Glenda Ndiarah Nkeng", t3r: "Medical Oncologist", t3e: "Part-time",
        t4n: "Dr. Ngolette Ngo Tega", t4r: "Medical Oncologist", t4e: "Part-time",
        t5n: "Professor Edmund Folefac", t5r: "Chief Medical Oncologist, USA", t5e: "International Tele-Oncology",
        nurses_t: ">10 Oncology Nurses", nurses_d: "Dedicated, experienced nursing team providing safe and compassionate care."
      },
      impact: {
        head: "Our Impact (2025)",
        n1: "451", l1: "Patients Treated",
        n2: "1,951", l2: "Systemic Therapy Administrations",
        n3: ">30", l3: "Treatment Protocols",
        n4: "90.3%", l4: "Conventional Chemotherapy",
        n5: "9.7%", l5: "Targeted Therapy & Immunotherapy",
        strip: "Real People. Real Progress. A Healthier Cameroon."
      },
      support: {
        head: "Patient Support Services",
        s1: "Nutrition Counseling", s2: "Psychosocial Support", s3: "Side Effect Management", s4: "Palliative Care", s5: "Patient Education", s6: "Family Counseling"
      },
      banner_strip: "Together for a Cancer-Free Cameroon.",
      contact: {
        title: "Need a Medical Oncology Appointment?",
        desc: "Our team is here to answer your questions and guide you through your treatment options.",
        btn1: "Request an Appointment", btn2: "Call Us", btn3: "Email Us",
        tagline: "Expert Care. Closer to Home."
      }
    },

    nuclearmed: {
      banner: {
        label: "Our Services",
        title: "Nuclear Medicine",
        subtitle: "Molecular Imaging. Better Diagnosis. More Informed Cancer Care.",
        desc: "At Cameroon Oncology Center, our nuclear medicine service uses small amounts of radioactive material (radiotracers) to show how the body is functioning at a cellular level. This helps to detect disease early, stage cancer, guide treatment, and monitor response with precision and care.",
        equipment: "GE Discovery NM/CT 670 SPECT-CT",
        equipment_sub: "Advanced Technology for Better Care",
        quote_html: "\"Supporting<br>function.<br>Changing lives.\""
      },
      icons: { early: "Early Detection", personalized: "Personalized Care", monitoring: "Treatment Monitoring", safe: "Safe & Effective", outcomes: "Better Outcomes" },
      services: {
        head: "Our Nuclear Medicine Services",
        onc_t: "Oncology & Cancer Imaging",
        onc1: "Cancer staging and restaging", onc2: "Detection of metastatic disease", onc3: "Bone scintigraphy for bone metastases, fracture and tumors", onc4: "Sentinel lymph node imaging", onc5: "Assessment of treatment response and recurrence", onc6: "Evaluation of tumors (e.g. pancreas, adrenal glands)",
        cardiac_t: "Cardiac Nuclear Medicine",
        cardiac1: "Myocardial perfusion imaging", cardiac2: "Assessment of blood flow and heart function", cardiac3: "Detection of coronary artery disease", cardiac4: "Evaluation of heart function after heart attack", cardiac5: "MUGA scans before and after chemotherapy",
        renal_t: "Renal Nuclear Medicine",
        renal1: "Evaluation of kidney function and urinary tract obstruction", renal2: "Assessment of hypertension in the kidney arteries", renal3: "Evaluation for kidney infection", renal4: "Assessment of abnormal urine flow (reflux)",
        thyroid_t: "Thyroid & Endocrine Imaging",
        thyroid1: "Diagnosis of thyroid nodules and thyroid cancer", thyroid2: "Assessment of hyperthyroidism", thyroid3: "Parathyroid adenoma localization", thyroid4: "Evaluation of endocrine disorders",
        other_t: "Other Applications",
        other1: "Brain imaging for seizures, memory loss and blood flow problems", other2: "Gastrointestinal studies (e.g. gastric emptying)", other3: "Lung ventilation/perfusion (V/Q)", other4: "Infection and inflammation imaging", other5: "Hematologic imaging"
      },
      how: {
        head: "How a Nuclear Medicine Study Works",
        s1: "Referral and Scheduling", s2: "Patient Preparation", s3: "Radiotracer Administration", s3d: "(injection, oral or inhaled)",
        s4: "Uptake Period", s4d: "(time varies)", s5: "SPECT-CT Imaging", s5d: "(20 minutes to several hours)",
        s6: "Image Analysis and Interpretation", s7: "Report to Referring Physician"
      },
      team: {
        head: "Our Nuclear Medicine Team",
        t1n: "Dr. Fabrice Folouse", t1r: "Nuclear Medicine Physician / Consultant",
        t2n: "Grace Freda Mukami", t2r: "Nuclear Medicine Technologist & Trainer",
        t3n: "Mr. Derrick Ndikwaosoh", t3r: "Manager, Radiology & Imaging"
      },
      safety: {
        head: "Patient Information & Safety",
        s1: "Uses small amounts of radioactive material (radiotracers)",
        s2: "Examinations are generally safe with a low radiation risk",
        s3: "Please inform us if you are pregnant or breastfeeding",
        s4: "Tell your doctor about all medications, allergies and recent illnesses",
        s5: "Most procedures are outpatient, non-invasive and usually painless"
      },
      contact: {
        title: "Need a Nuclear Medicine Appointment?",
        desc: "Our team is here to help. Contact us to schedule an appointment or for more information."
      }
    },

    spectct: {
      banner: {
        title: "Nuclear Medicine",
        subtitle: "SPECT-CT for Women's Health",
        tag: "Functional Imaging. Precise Localization. More Informed Care.",
        desc: "From cancer care and cardiac assessment to bone health and endocrine disease, SPECT-CT can provide valuable functional and anatomical information for women across different stages of life.",
        quote_html: "\"Earlier answers.<br>Greater possibilities.<br>Healthier tomorrows.\"",
        side: "Supporting Women's Health at Every Stage of Life."
      },
      icons: { prevent: "Detect disease early", diagnose: "Provide precise information", guide: "Support personalized treatment", monitor: "Track response to therapy", empower: "Better outcomes for women" },
      table: {
        head: "Key Applications of SPECT-CT in Women's Health",
        col1: "Medical Area", col2: "SPECT-CT Application", col3: "Primary Clinical Benefit",
        area1: "Gynecological & Breast Oncology",
        area1_r1_app: "Sentinel Lymph Node (SLN) Mapping", area1_r1_benefit: "Helps guide nodes for biopsy to prevent extensive surgery and reduce risk of chronic lymphedema",
        area1_r2_app: "Breast Imaging (selected applications)", area1_r2_benefit: "Provides functional information that can complement conventional imaging in appropriately selected cases",
        area1_r3_app: "Pelvic Staging & Delineation", area1_r3_benefit: "Helps isolate malignant tissue from complex anatomy and can detect small local recurrences",
        area2: "Cardiovascular Assessment",
        area2_r1_app: "Attenuation Correction", area2_r1_benefit: "Reduces false shadows caused by breast tissue, improving diagnostic accuracy and helping avoid unnecessary invasive investigations",
        area2_r2_app: "Myocardial Perfusion Imaging", area2_r2_benefit: "Provides functional assessment of blood flow and heart function, including evaluation in women with known or suspected coronary artery disease",
        area3: "Osteoporosis & Bone Health",
        area3_r1_app: "Pain Differentiation", area3_r1_benefit: "Helps distinguish osteoporotic fractures from arthritis or malignant lesions by combining metabolic and structural information",
        area3_r2_app: "Occult Fracture Detection", area3_r2_benefit: "Can detect subtle pelvic or spinal insufficiency fractures before a debilitating break occurs",
        area4: "Endocrine Management",
        area4_r1_app: "Parathyroid Adenoma Localization", area4_r1_benefit: "Pinpoints ectopic adenomas to allow for highly targeted, minimally invasive neck surgeries",
        area4_r2_app: "Thyroid Nodule Characterization", area4_r2_benefit: "Maps hyperfunctioning or non-functioning nodules directly onto the anatomy of the neck"
      },
      why: {
        head: "Why SPECT-CT Matters for Women",
        w1: "Combines functional and anatomical information",
        w2: "Helps guide less-invasive, more targeted treatments",
        w3: "Supports accurate staging and follow-up",
        w4: "Useful across a wide range of conditions affecting women"
      },
      commitment: {
        head: "Our Commitment",
        desc: "We are dedicated to providing advanced nuclear medicine services that meet the unique needs of women, with compassion, respect and personalized care."
      },
      health_matters: {
        head: "Your Health Matters",
        quote: "\"Empowered families build healthier families and stronger communities.\"",
        cite: "— Cameroon Oncology Center"
      },
      contact: {
        title: "Need an Appointment or More Information?",
        desc: "Our team is here to assist. Contact us today."
      },
      footer_tagline: "Care for Women. Care for Families. A Healthier Cameroon."
    },

    directions: {
      banner: {
        crumb: "Getting Here",
        title: "How to Get to COC",
        subtitle: "Cameroon Oncology Center — Carrefour Palmeraie, Bekoko-Dibombari, Douala",
        tag: "Easy to Find. Closer to You."
      },
      location: {
        head: "Our Location",
        name: "Cameroon Oncology Center",
        address: "Carrefour Palmeraie, Bekoko-Dibombari, Douala",
        pluscode: "Plus Code: 4HCV+3J5, Bonabéri, Cameroon",
        maplink: "View on Google Maps",
        map_label: "Map placeholder — route map to COC (images/directions-map.jpg)"
      },
      route: {
        head: "Directions to Cameroon Oncology Center",
        s1: "From Douala, take the N3 road towards Dibombari.",
        s2: "Continue on the N3 passing the Yapak-Bakoko interchange.",
        s3: "After Carrefour Palmeraie, turn right toward the COC access road (as shown on the map).",
        s4: "Follow the road a short distance. Cameroon Oncology Center will be on your right."
      },
      landmarks: {
        head: "Landmarks (as shown on the map)",
        l1: "Carrefour Palmeraie (N3)", l2: "CAPOGCO", l3: "Clinical Italian Bakoko", l4: "Yapak-Bakoko Interchange",
        l5: "Le Zenith Bilingual School Complex", l6: "Shiloh Church of Nations (SCON)", l7: "Parc Camion Bekoko"
      },
      travel: {
        head: "Travel Time (Estimate)",
        from_douala_label: "From Douala city center:", from_douala: "30–45 minutes (depending on traffic)",
        from_bonaberi_label: "From Bonabéri:", from_bonaberi: "15–25 minutes"
      },
      photo_caption: "A modern cancer-fighting center for a healthier Cameroon.",
      insurance_title: "We Accept All Insurance Companies",
      insurance_desc: "We work with all insurance companies and will assist you with the authorization and billing process.",
      contact_head: "Contact Us",
      doctor_on_call: "Doctor on Call"
    },

    radiology: {
      banner: {
        label: "Our Services",
        title: "Radiology & Diagnostic Imaging",
        subtitle: "Clear Images. Confident Decisions. Brighter Tomorrows.",
        desc: "At Cameroon Oncology Center, our radiology and imaging services provide high-quality, reliable imaging to support cancer diagnosis, treatment planning, response assessment and long-term follow-up. We work closely with our multidisciplinary team to deliver accurate, timely and patient-centered care.",
        tag_html: "Advanced Imaging.<br>Better Cancer Care.",
        equipment_caption: "Philips CT Scanner for Diagnostic Imaging"
      },
      icons: { accurate: "Accurate Diagnosis", modern: "Modern Equipment", team: "Experienced Team", safety: "Patient Safety", multi: "Multidisciplinary Care", compassionate: "Compassionate Service" },
      services: {
        head: "Our Imaging Services",
        ct_t: "Computed Tomography (CT)",
        ct1: "Diagnostic CT scans for cancer diagnosis and staging", ct2: "High-resolution, multi-slice imaging", ct3: "CT-guided procedures (biopsy, drainage)", ct4: "Assessment of treatment response", ct5: "Whole body and specialized studies",
        mri_t: "Magnetic Resonance Imaging (MRI)",
        mri_equip: "Hitachi AIRIS Elite 0.35 T Open MRI",
        mri1: "Open-design MRI for improved comfort", mri2: "Brain, spine and selected body imaging", mri3: "Cancer diagnosis, staging and follow-up", mri4: "Soft tissue evaluation", mri5: "Preoperative and treatment-planning support",
        us_t: "Ultrasound (US)",
        us1: "Abdominal and pelvic ultrasound", us2: "Breast and thyroid ultrasound", us3: "Image-guided procedures", us4: "Vascular and Doppler studies", us5: "Follow-up and surveillance imaging",
        ctsim_t: "CT Simulation for Radiotherapy",
        ctsim1: "Philips Big Bore CT Simulator", ctsim2: "High-precision imaging for radiotherapy planning", ctsim3: "Immobilization and positioning systems", ctsim4: "Accurate target delineation", ctsim5: "Supports advanced 3D, IMRT and other radiation techniques"
      },
      clinical: {
        head: "Clinical Applications",
        c1: "Cancer diagnosis and staging", c2: "Assessment of metastatic disease", c3: "Monitoring treatment response", c4: "Pre-operative and pre-radiotherapy planning",
        c5: "Detection of recurrence", c6: "Evaluation of treatment-related complications", c7: "Image-guided interventions", c8: "Long-term surveillance"
      },
      impact: {
        head: "Our Impact (2025)",
        n1: "985", l1: "CT scans", n2: "23", l2: "MRI studies", n3: "75", l3: "Ultrasound studies", n4: "1,531", l4: "Total imaging studies"
      },
      quote: { text: "\"High-quality imaging supports every step of the cancer journey.\"", cite: "— Cameroon Oncology Center", caption: "Expert Interpretation for Better Care" },
      team: {
        head: "Our Radiology & Imaging Team",
        radiologists: "Radiologists (2)", technologists: "Radiology Technologists (4)",
        t1n: "Dr. Joshua Tambe", t1r: "Radiologist",
        t2n: "Dr. Bhavesh Patel", t2r: "Radiologist", t2s: "(Provides Tele-Radiology Services)",
        t3n: "Mr. Ndikwaosoh Derrick", t3r: "Manager, Radiology & Imaging",
        t4n: "Mr. Ndeme Mercel", t4r: "Radiology Technologist",
        t5n: "Ms. Sandy ndzi Mugob", t5r: "Radiology Technologist",
        t6n: "Mr. Yves Cesaire Monthe", t6r: "Radiology Technologist"
      },
      why: {
        head: "Why Choose COC for Radiology & Imaging?",
        w1: "Modern and well-maintained equipment (CT, MRI, Ultrasound)",
        w2: "Experienced radiologists and technologists",
        w3: "Integrated with oncology care (surgery, medical oncology, radiotherapy)",
        w4: "Fast and accurate reporting",
        w5: "Patient-centered service",
        w6: "Commitment to safety, quality and better outcomes"
      },
      highlight_title: "Imaging Today for a Healthier Tomorrow.",
      contact: { title: "Need an Imaging Appointment?", desc: "Our team is here to help you schedule an appointment or for more information." }
    },

    urgentcare: {
      banner: {
        title_html: "Urgent Care &<br>Emergency Services",
        subtitle: "24-Hour Care for Cancer Patients, Accidents and General Medical Emergencies.",
        desc: "COC is more than a cancer emergency center. Our urgent care service is open to the entire community. You do not need to be a cancer patient to receive medical attention at Cameroon Oncology Center.",
        tag_html: "Quality Care.<br>For Every Patient.<br>Every Day.<br>Anytime."
      },
      icons: {
        open_html: "Open<br>24 Hours<br>7 Days a Week",
        physician_html: "Physician<br>Generalist<br>Onsite 24/7",
        oncologist_html: "Oncologists<br>Onsite 24/7<br>for Emergencies",
        care_html: "Care for<br>Cancer and<br>Non-Cancer Patients"
      },
      onc: {
        head: "Oncology Emergencies",
        lead: "Urgent care for cancer patients at any stage of treatment",
        i1: "Fever or suspected infection (especially during chemotherapy)",
        i2: "Severe pain or sudden worsening of cancer symptoms",
        i3: "Dehydration, persistent vomiting or diarrhea",
        i4: "Breathing problems or shortness of breath",
        i5: "Bleeding",
        i6: "Severe anemia or other blood-related problems",
        i7: "Treatment reactions and chemotherapy complications",
        i8: "Neurologic emergencies (e.g. suspected spinal cord compression)",
        i9: "Urinary obstruction",
        i10: "Acute complications from advanced cancer",
        i11: "Any other urgent oncologic concern"
      },
      general: {
        head: "General Medical & Accident Care",
        lead: "Urgent care for the whole community",
        i1: "Accident and injury patients (falls, road traffic accidents, etc.)",
        i2: "Malaria and other febrile illnesses",
        i3: "Infections (respiratory, urinary, gastrointestinal, etc.)",
        i4: "Dehydration and persistent vomiting or diarrhea",
        i5: "Hypertension-related problems",
        i6: "Diabetes and other acute medical conditions",
        i7: "Abdominal pain and other gastrointestinal complaints",
        i8: "Shortness of breath and chest symptoms",
        i9: "Wound care and minor procedures",
        i10: "Routine medical checkups and health screening",
        i11: "Any other urgent non-cancer medical concern"
      },
      maternity: {
        head: "Emergency Maternity Care",
        lead: "Safe care for mothers and newborns",
        stat_num: "70+", stat_label: "Babies Delivered at COC",
        stat_desc: "Over the past 7 years, COC has assisted with the delivery of 70+ babies who came to us through emergency care.",
        i1: "Emergency obstetric assessment and stabilization",
        i2: "Management of labor and delivery (when indicated)",
        i3: "Care for pregnancy-related complications",
        i4: "Newborn care and stabilization",
        i5: "Referral to inpatient maternity/obstetric care if needed",
        i6: "Support for both mother and baby",
        quote: "\"New beginnings. Brighter tomorrows. For families. For Cameroon.\""
      },
      pathway: {
        head: "Your Pathway to Care",
        subtitle: "Fast. Organized. Comprehensive.",
        s1: "Arrival", s1s: "(Any Patient)",
        s2: "Rapid Assessment & Triage",
        s3: "Physician Generalist Evaluation",
        s4: "Laboratory & Imaging as Needed", s4s: "(blood tests, X-ray, CT, etc.)",
        s5: "Specialist Consultation", s5s: "(Oncologist or Other)",
        s6: "Treatment & Stabilization",
        s7: "Discharge or Hospital Admission", s7s: "(if needed)"
      },
      access: {
        head: "With Immediate Access to All COC Services",
        a1: "Imaging", a1s: "(CT, MRI, Ultrasound, X-ray)",
        a2: "Laboratory Services", a3: "Pharmacy", a4: "Medical Oncology", a5: "Radiation Oncology",
        a6: "Surgery", a7: "Inpatient Care", a8: "Nutrition Support", a9: "Psycho-Oncology & Social Support"
      },
      contact_btn: "Visit Our Urgent Care"
    },

    nutrition: {
      banner: {
        title_html: "Nutrition &<br>Dietetics",
        subtitle: "Oncology Nutrition – Supporting Strength Throughout the Cancer Journey",
        desc: "Our Nutrition Unit provides individualized nutritional care to help patients maintain strength, improve treatment tolerance, enhance quality of life and achieve better outcomes.",
        quote_html: "Good Nutrition.<br>Stronger Patients.<br>Brighter Tomorrows."
      },
      icons: { tolerance: "Better Treatment Tolerance", strength: "Maintain Strength and Body Weight", complications: "Fewer Complications", qol: "Improved Quality of Life", support: "Support for Patients and Families" },
      specialist: {
        head: "Meet Our Nutritionist",
        name: "Dr. Guimeya Michelle", role: "Nutritionist",
        bio: "Dr. Guimeya Michelle leads our Nutrition Unit, providing evidence-based nutritional care to patients with cancer. She is dedicated to helping patients and families maintain strength, manage treatment side effects, and improve their overall well-being through personalized nutrition support."
      },
      when: {
        head: "When Should You See Our Nutritionist?",
        w1: "Unintentional weight loss", w2: "Poor appetite or reduced food intake", w3: "Nausea, vomiting, diarrhea or constipation", w4: "Difficulty swallowing or eating",
        w5: "Significant weight changes during treatment", w6: "Malnutrition or low body weight", w7: "Need for guidance on what to eat during cancer treatment", w8: "Before or after surgery", w9: "For support during survivorship or palliative care"
      },
      services: {
        head: "Our Nutrition Services",
        s1: "Nutritional assessment using PG-SGA", s2: "Individualized dietary counseling and meal planning", s3: "Nutrition support during chemotherapy, radiotherapy and surgery",
        s4: "Management of nutrition-related symptoms (e.g. nausea, vomiting, taste changes)", s5: "Oral nutritional supplements", s6: "Enteral nutrition (tube feeding) when needed",
        s7: "Parenteral nutrition when indicated", s8: "Nutrition education for patients and caregivers", s9: "Long-term follow-up and survivorship nutrition", s10: "Collaboration with the multidisciplinary team"
      },
      pathway: {
        head: "Our Nutrition Care Pathway", subtitle: "Personalized Nutrition Support from Diagnosis to Survivorship",
        p1_t: "Nutrition Screening", p1_d: "Early identification of nutritional risk",
        p2_t: "PG-SGA Assessment", p2_d: "Comprehensive evaluation of nutritional status",
        p3_t: "Individualized Nutrition Plan", p3_d: "Tailored dietary advice and intervention",
        p4_t: "Oral, Enteral or Parenteral Support", p4_d: "Based on patient needs",
        p5_t: "Monitoring During Treatment", p5_d: "Track weight, intake, symptoms and response",
        p6_t: "Recovery & Survivorship", p6_d: "Ongoing support for a healthier future"
      },
      experience: {
        head: "Our Experience at COC (Jan 2025 – Jun 2026)",
        total: "256", total_label: "Patients assessed for nutritional status (using PG-SGA)",
        status_head: "Nutritional Status", well: "Well nourished (25.8%)", moderate: "Moderately malnourished (36.3%)", severe: "Severely malnourished (37.9%)",
        note: "74.2% of patients had moderate or severe malnutrition"
      },
      support_types: {
        head: "Types of Nutritional Support Provided",
        oral: "72.7%", oral_label: "Oral nutritional support",
        enteral: "10.9%", enteral_label: "Enteral nutrition (tube feeding)",
        parenteral: "16.4%", parenteral_label: "Parenteral nutrition"
      },
      quote2: "\"Good nutrition is a powerful part of cancer treatment.\"",
      tagline: "Nourish. Heal. Live Better.",
      integrated: { head: "Integrated Care for Better Outcomes", desc: "We work closely with:" },
      footer_tagline: "Healthy Nutrition. Stronger Lives."
    },

    cardiology: {
      banner: {
        title_html: "Cardiology &<br>Cardio-Oncology",
        subtitle: "Protecting Your Heart Before, During and After Cancer Treatment",
        desc: "We provide comprehensive cardiovascular care for cancer patients and the community, combining clinical expertise, modern technology and a multidisciplinary approach to ensure safer cancer treatment and better heart health.",
        quote: "\"A healthy heart for a stronger fight against cancer.\""
      },
      icons: { prevention: "Prevention and Early Detection", safe: "Safe Cancer Treatment", multi: "Multidisciplinary Care", survival: "Better Survival and Quality of Life" },
      team: {
        head: "Our Cardiology Team", subtitle: "Experienced. Compassionate. Committed to Your Heart Health.",
        t1n: "Dr. Kemayou Francine", t1r: "Cardio-Oncologist", t1s: "Specialist training in France", t1d: "Focused on cardiovascular care for cancer patients before, during and after cancer treatment.",
        t2n: "Dr. Souksouna Fanny", t2r: "General Cardiologist", t2d: "Comprehensive cardiovascular care for the community, including hypertension, heart failure, arrhythmias and coronary diseases.",
        t3n: "U.S. Tele-Cardiology Support", t3r: "International Second Opinion", t3d: "Collaboration with U.S. cardiologists for complex cases and specialized tests (e.g. advanced imaging, cardio-oncology cases) when needed."
      },
      symptoms: { head: "Common Symptoms We Evaluate", s1: "Chest pain or discomfort", s2: "Shortness of breath", s3: "Palpitations (irregular heartbeat)", s4: "Swelling of legs (edema)", s5: "High blood pressure", s6: "Fatigue", s7: "Dizziness or fainting" },
      carefor: {
        head: "We Care For",
        c1: "Patients starting chemotherapy, targeted therapy or immunotherapy", c2: "Patients receiving radiotherapy (especially chest/breast irradiation)",
        c3: "Pre-operative cardiac evaluation", c4: "Follow-up during and after cancer treatment", c5: "General adult cardiovascular diseases", c6: "Survivorship and long-term heart health"
      },
      services: {
        head: "Our Cardiology Services",
        s1_t: "Cardiology Consultation", s1_d: "Comprehensive evaluation and personalized care",
        s2_t: "Electrocardiogram (ECG)", s2_d: "Fast and accurate diagnosis of heart rhythm disorders",
        s3_t: "Echocardiography (2D, Doppler, Strain)", s3_d: "Advanced cardiac imaging to assess heart structure and function",
        s4_t: "Stress Testing", s4_d: "Evaluation of cardiac performance during physical activity",
        s5_t: "24/48-Hour Holter Monitoring", s5_d: "Continuous heart rhythm monitoring",
        s6_t: "Management of Hypertension, Heart Failure, Coronary Artery Disease and Valvular Diseases", s6_d: "Medical treatment and regular follow-up",
        s7_t: "Cardiovascular Prevention", s7_d: "Lifestyle counseling, risk assessment and early intervention",
        s8_t: "Nuclear Cardiology (MUGA Scan)", s8_d: "Assessment of heart function when indicated, especially before and during certain cancer treatments"
      },
      program: {
        head: "Our Cardio-Oncology Program",
        p1: "Baseline cardiac assessment before cancer treatment", p2: "Risk stratification for cardiotoxicity", p3: "Monitoring during chemotherapy, targeted therapy or immunotherapy",
        p4: "Cardiac evaluation before surgery", p5: "Early detection and management of treatment-related heart problems", p6: "Coordination with Medical Oncology, Radiation Oncology and other specialists", p7: "Long-term follow-up for cancer survivors"
      },
      technology: { head: "Our Technology", t1: "Modern ECG machines", t2: "Echocardiography with Doppler and strain imaging", t3: "Stress testing", t4: "24/48-hour Holter monitoring", t5: "Nuclear cardiology (MUGA scan)", t6: "Tele-cardiology and digital consultation" },
      multidisciplinary: { head: "A Multidisciplinary Approach", desc: "We work closely with Medical Oncology, Radiation Oncology, Surgery, Anesthesiology, Nuclear Medicine and Primary Care to provide integrated and personalized care." },
      heartmatters: { head: "Your Heart Matters", quote: "\"Better heart health. Brighter tomorrows for people with cancer and beyond.\"" }
    },

    outreach: {
      banner: {
        title_html: "Community Outreach,<br>Cancer Screening & Prevention",
        subtitle: "Taking Early Detection Into Our Communities",
        desc: "A joint initiative of the Cameroon Cancer Foundation (CCF) in collaboration with the Cameroon Oncology Center (COC)",
        tag: "Education. Screening. Hope. Healthier Communities."
      },
      impact: {
        head: "Five-Year Impact (2021 – 2025)",
        screened: "5,678", screened_label: "People Screened for Cancer",
        sensitized: "17,809", sensitized_label: "People Sensitised on Cancer Prevention",
        suspected: "375", suspected_label: "Suspected Cancer Cases Identified", suspected_note: "Referred for further medical evaluation"
      },
      programs: {
        head: "Main Cancer Screening Programs",
        breast: "87", breast_label: "Breast Cancer suspected cases identified",
        cervical: "212", cervical_label: "Cervical Cancer suspected cases identified",
        prostate: "76", prostate_label: "Prostate Cancer suspected cases identified"
      },
      locations: {
        head: "We Bring Screening to the Community", desc: "Screening and awareness activities are conducted in:",
        l1: "Churches", l2: "Mosques", l3: "Workplaces", l4: "Banks", l5: "Supermarkets", l6: "Women's Associations", l7: "Schools & Universities", l8: "Rural Communities",
        note: "Urban and rural populations across Cameroon."
      },
      reach: {
        head: "Our Reach Across Cameroon",
        desc: "Major outreach regions: Far North, North, Adamawa, East (Bertoua), Centre (Yaoundé, Bafia), West (Dschang, Foumban)",
        note: "Other communities served across all 10 regions.",
        caption: "Reaching communities across Cameroon and beyond."
      },
      pathway: {
        head: "The Pathway from Community to Care",
        p1: "Community Education & Sensitization", p2: "Free Screening in the Community", p3: "Suspected Abnormality Identified", p4: "Referral to COC for Diagnostic Evaluation", p5: "Treatment When Needed at COC"
      },
      about_ccf: {
        head: "About the Cameroon Cancer Foundation (CCF)",
        desc: "The Cameroon Cancer Foundation (CCF) is a non-governmental, non-profit organization dedicated to reducing the cancer burden in Cameroon through screening, awareness, prevention, advocacy and patient support. CCF works closely with the Cameroon Oncology Center (COC), which provides the physicians, specialists and nurses for screening activities.",
        link: "Learn more at: www.camcancerfoundation.org"
      },
      partnership: { head: "In Partnership for a Cancer-Free Cameroon", tag: "Early Detection Saves Lives" },
      footer_strip: "Stronger Communities. A Healthier Cameroon."
    },

    psycho: {
      banner: {
        title_html: "Psychology &<br>Psycho-Oncology",
        subtitle: "Caring for the Mind While Treating the Cancer",
        desc: "We provide compassionate psychological support for patients with cancer and their families, integrating mental health care into every step of the cancer journey.",
        quote: "\"You are not alone. We are here to listen, support and walk with you.\""
      },
      icons: { emotional: "Emotional Support", counseling: "Patient & Family Counseling", coping: "Better Coping and Resilience", qol: "Improved Quality of Life" },
      specialist: {
        head: "Meet Our Specialist",
        name: "Dr. Fidele Eyebe", role: "Head, Psycho-Oncology & Psychology Services",
        bio: "Dr. Fidele Eyebe leads our Psycho-Oncology and Psychology services, providing expert care to patients with cancer and their families. He is committed to integrating mental health into comprehensive cancer care to improve emotional well-being, treatment adherence and quality of life."
      },
      help: {
        head: "How We Can Help",
        h1: "Anxiety and stress at diagnosis", h2: "Depression and low mood", h3: "Coping with treatment and side effects", h4: "Fear of recurrence", h5: "Body image and self-esteem concerns",
        h6: "Family and caregiver counseling", h7: "Financial and social stress", h8: "End-of-life and bereavement support", h9: "Building resilience and hope"
      },
      services: {
        head: "Our Services",
        s1: "Psychological assessment and distress screening", s2: "Individual and group counseling", s3: "Psychoeducation for patients and families", s4: "Emotional and motivational support",
        s5: "Crisis intervention", s6: "Coping-skills development", s7: "Family counseling and social support", s8: "Support during active treatment",
        s9: "Survivorship support", s10: "Palliative and end-of-life psychological care", s11: "Referral to other services when needed"
      },
      journey: {
        head: "Your Journey with Our Psycho-Oncology Service", subtitle: "Support at Every Step of the Cancer Care Continuum",
        j1_t: "Diagnosis and Initial Contact", j1_d: "We are here from the beginning.",
        j2_t: "Screening and Identification", j2_d: "Assessment of emotional needs.",
        j3_t: "Multidisciplinary Assessment", j3_d: "Collaboration with your oncology team.",
        j4_t: "Psycho-Oncology Intervention", j4_d: "Individualized support based on your needs.",
        j5_t: "Follow-up and Continuity of Care", j5_d: "Ongoing support throughout treatment.",
        j6_t: "Survivorship or Palliative Care", j6_d: "Support for a better tomorrow, at every stage."
      },
      impact: {
        head: "Our Impact in 2025",
        consultations: "314", consultations_label: "Psycho-oncology consultations",
        per_month: "20–30", per_month_label: "Consultations per month (throughout the year)",
        breast: "40.8%", breast_label: "Breast cancer patients",
        cervical: "25.2%", cervical_label: "Cervical cancer patients",
        pediatric: "6.4%", pediatric_label: "Pediatric cancer patients",
        note: "Sustained utilization throughout the year, demonstrating the high demand and importance of psychological support in cancer care at COC."
      },
      integrated: { head: "Integrated Care", desc: "We work closely with Medical Oncology, Radiation Oncology, Surgery, Nursing, Nutrition, Palliative Care and Social Services to provide holistic, patient-centered care." },
      footer_tagline: "A Healthier Mind for a Brighter Tomorrow.",
      strip_right: "Caring for the whole person beyond the cancer."
    },

    inpatient: {
      banner: {
        title_html: "Hospitalization &<br>Inpatient Care",
        subtitle: "24-Hour Medical Coverage. Personalized Rooms. Comprehensive Cancer Care.",
        desc: "Our inpatient care provides safe, compassionate and high-quality care for patients at every stage of the cancer journey, from diagnosis and treatment to recovery and advanced care.",
        quote: "\"Compassionate Care for a Brighter Tomorrow.\""
      },
      stats: {
        private: "90%", private_label: "of our hospitalized patients stay in private rooms",
        ratio: "1:6", ratio_label: "MAXIMUM Nurse-to-patient assignment",
        physician: "24/7", physician_label: "Physician generalist onsite",
        twice: "TWICE DAILY", twice_label: "Oncologist review of hospitalized patients. Two oncologists are onsite 24 hours and available for emergencies."
      },
      facilities: {
        head: "Comfortable and Safe Facilities",
        private_t: "Private Room", private_d: "Clean. Comfortable. Peaceful. 90% of our patients are housed in individual rooms.",
        four_t: "Four-Patient Room", four_d: "Available when needed. A limited number of rooms can accommodate 4 patients."
      },
      medcare: {
        head: "Medical Care Around the Clock",
        m1: "24-hour onsite physician generalist coverage", m2: "Two oncologists onsite 24 hours for emergencies", m3: "Hospitalized patients are routinely seen by an oncologist twice daily",
        m4: "Physician generalist reviews patients every few hours, depending on the clinical level and condition", m5: "Nursing care tailored to the patient's acuity level (maximum 1 nurse to 6 patients)"
      },
      restaurant: { head: "Onsite Restaurant", caption: "Nutritious Meals for a Stronger Tomorrow", desc: "Our onsite restaurant provides healthy, balanced meals for patients, caregivers and staff in a comfortable environment." },
      levels: {
        head: "Our Four Levels of Inpatient Care",
        desc: "Patients are classified at admission and the level can be adjusted at any time by a physician generalist or oncologist based on the patient's clinical condition.",
        l1_t: "Level 1 — Standard Inpatient Care", l1_a: "Clinically stable patients requiring hospitalization and routine oncology care", l1_b: "Routine monitoring", l1_c: "Standard nursing and physician support",
        l2_t: "Level 2 — Enhanced Monitoring & Stabilization", l2_a: "Patients who are less stable or require stabilization before chemotherapy, radiotherapy or surgery", l2_b: "Closer observation", l2_c: "More frequent nursing and physician assessment",
        l3_t: "Level 3 — High-Acuity Care", l3_a: "Sicker patients requiring frequent clinical assessment and substantially closer monitoring", l3_b: "High level of nursing support", l3_c: "Frequent physician review",
        l4_t: "Level 4 — Intensive Care", l4_a: "Critically ill patients requiring the highest level of monitoring and medical/nursing support", l4_b: "Continuous monitoring", l4_c: "Intensive physician and nursing care"
      },
      dynamic: {
        head: "Dynamic Patient Management",
        d1: "Patient Condition Changes", d2: "Clinical Reassessment", d3: "Level Adjusted by Physician Generalist or Oncologist", d4: "Nursing & Medical Support Adjusted Accordingly",
        quote: "\"The right level of care. At the right time. For a better tomorrow.\""
      },
      services: {
        head: "Comprehensive Inpatient Services",
        s1: "Medical Oncology", s2: "Radiation Oncology", s3: "Surgery", s4: "Pharmacy", s5: "Laboratory Services", s6: "Nutrition Support", s7: "Psycho-Oncology", s8: "Palliative Care", s9: "Pain & Symptom Management", s10: "Social & Family Support"
      },
      commitment: { head: "Our Commitment", c1: "Patient Safety First", c2: "High-Quality, Compassionate Care", c3: "Respect, Dignity and Privacy", c4: "Continuous Quality Improvement" }
    },

    headneck: {
      hn: {
        title: "Head and Neck (Ear-Nose & Throat) Cancer",
        subtitle: "Multidisciplinary Treatment Approach",
        tag: "Early Detection. Comprehensive Care. Better Outcomes.",
        cancers_head: "Common Head and Neck Cancers",
        c1: "Oral cavity cancer", c2: "Oropharyngeal cancer (HPV-related and non-HPV)", c3: "Laryngeal cancer", c4: "Hypopharyngeal cancer", c5: "Nasal cavity and paranasal sinus cancer", c6: "Salivary gland tumors", c7: "Thyroid cancer (see right panel)", c8: "Skin cancers of the head and neck",
        symptoms_head: "Common Symptoms",
        s1: "Persistent sore throat", s2: "Difficulty swallowing", s3: "Hoarseness or voice changes", s4: "Persistent mouth ulcers", s5: "Neck mass or swelling", s6: "Ear pain", s7: "Unexplained weight loss", s8: "Persistent nasal obstruction or bleeding",
        doctor_n: "Dr. Ava Louis Georges", doctor_r: "Consultant Otorhinolaryngologist (Head & Neck Surgeon)", doctor_c: "DES d'ORL – FMSB, Université de Yaoundé I (2025)",
        quote: "\"Expert care for the ear, nose and throat for a healthier tomorrow.\"",
        treatment_head: "Standard Treatment for Locally Advanced Head and Neck Cancer", treatment_sub: "Concurrent Chemoradiation (Standard of Care)",
        t1_head: "Chemotherapy", t1a: "Cisplatin 100 mg/m² every 3 weeks (Days 1, 22, 43) OR Cisplatin 40 mg/m² weekly (6–7 weeks)", t1b: "Alternatives (when cisplatin not suitable): Carboplatin + 5-Fluorouracil; Cetuximab (selected patients)",
        t2_head: "Radiotherapy", t2a: "External beam radiotherapy to the primary tumor and regional lymph nodes", t2b: "Typical total dose: 70 Gy in 35 fractions (2 Gy per fraction over 7 weeks)", t2c: "Intensity-modulated radiotherapy (IMRT) when available", t2d: "Daily image guidance (IGRT)",
        t3_head: "Supportive Care", t3a: "Nutritional support (oral or feeding tube)", t3b: "Speech and swallowing rehabilitation", t3c: "Pain management", t3d: "Management of side effects (mucositis, dermatitis, dry mouth, etc.)", t3e: "Psychosocial support", t3f: "Regular follow-up",
        multi_head: "Multidisciplinary Care at COC",
        m1: "ENT Surgeon", m2: "Radiation Oncologist", m3: "Medical Oncologist", m4: "Radiologist (CT, MRI, SPECT-CT)", m5: "Pathologist", m6: "Nutritionist", m7: "Speech Therapist", m8: "Psycho-oncologist & Survivorship Team"
      },
      thy: {
        title: "Thyroid Cancer",
        subtitle: "Evidence-Based Treatment Including I-131",
        tag: "Surgery First. Radioiodine (I-131) When Indicated. Radiotherapy When Other Options Fail.",
        types_head: "Types of Thyroid Cancer",
        ty1: "Papillary thyroid cancer (most common)", ty2: "Follicular thyroid cancer", ty3: "Medullary thyroid cancer", ty4: "Anaplastic thyroid cancer", ty5: "Other rare types",
        symptoms_head: "Common Symptoms",
        s1: "Neck lump or nodule", s2: "Swelling in the neck", s3: "Hoarseness", s4: "Difficulty swallowing (rare)", s5: "Breathing changes (rare)",
        treatment_head: "Treatment of Thyroid Cancer", treatment_sub: "Individualized Based on Type, Stage and Risk Factors",
        t1_head: "Surgery (First-line Treatment)", t1a: "Total or partial thyroidectomy depending on the type and stage", t1b: "Removal of involved lymph nodes when indicated",
        t2_head: "Radioiodine Therapy with I-131", t2a: "Iodine-131 (I-131) is a radioactive isotope selectively taken up by thyroid tissue", t2b: "Used after surgery to destroy any remaining thyroid cancer cells (especially in differentiated thyroid cancers)", t2c: "Helps reduce the risk of recurrence", t2d: "Administered as an oral capsule in a controlled setting", t2e: "Well tolerated with minimal side effects",
        t3_head: "Thyroid Hormone Suppression", t3a: "Lifelong levothyroxine to keep TSH low and reduce recurrence risk", t3b: "Regular monitoring of thyroid hormone levels (TSH, free T4)",
        t4_head: "Radiotherapy (When Other Options Fail)", t4a: "Radiotherapy is generally NOT a routine treatment for thyroid cancer", t4b: "Considered when surgery and radioiodine (I-131) are not possible or have failed", t4c: "Locally advanced, unresectable disease", t4d: "Persistent or recurrent disease not responsive to radioiodine", t4e: "Palliative treatment for symptom control (e.g. bone metastases)",
        t5_head: "Follow-up", t5a: "Periodic clinical evaluation, neck ultrasound and lab tests (thyroglobulin, TSH)", t5b: "Additional imaging (CT, MRI, or SPECT-CT) when indicated", t5c: "Long-term surveillance for recurrence",
        key_head: "Key Message",
        k1: "Most thyroid cancers are successfully treated with surgery and radioiodine (I-131)", k2: "Radiotherapy is reserved for selected cases when other options fail", k3: "Early detection and appropriate treatment lead to excellent outcomes in most patients"
      },
      footer_strip: "Expert Care. Stronger Communities. A Healthier Cameroon."
    },

    gynecology: {
      banner: {
        title: "Gynecology & Gynecologic Oncology",
        subtitle: "Comprehensive Care for Women. From Prevention to Treatment and Survivorship.",
        desc: "At Cameroon Oncology Center, we provide specialized gynecologic and gynecologic oncology care for women of all ages. Our multidisciplinary team is committed to early detection, advanced treatment and compassionate care for gynecologic cancers, breast cancers and other women's health conditions.",
        quote: "\"Compassionate, expert care for women at every stage of life.\""
      },
      icons: { women: "Women-Centered Care", multi: "Multidisciplinary Approach", advanced: "Advanced Treatment Options", compassionate: "Compassionate Support", outcomes: "Better Outcomes" },
      services: {
        head: "Our Gynecology & Gynecologic Oncology Services",
        cervical_t: "Cervical Cancer", cervical1: "Screening and early detection", cervical2: "Diagnosis and staging", cervical3: "Surgery, chemotherapy and radiotherapy", cervical4: "Management of precancerous lesions (CIN)", cervical5: "Follow-up and survivorship",
        ovarian_t: "Ovarian Cancer", ovarian1: "Evaluation of abdominal or pelvic masses", ovarian2: "Diagnosis and staging", ovarian3: "Surgery (debulking)", ovarian4: "Chemotherapy and targeted therapy", ovarian5: "Long-term follow-up",
        endometrial_t: "Endometrial (Uterine) Cancer", endometrial1: "Evaluation of abnormal uterine bleeding", endometrial2: "Diagnosis and staging", endometrial3: "Surgical management", endometrial4: "Adjuvant therapy (chemotherapy/radiotherapy)", endometrial5: "Survivorship care",
        rare_t: "Vulvar, Vaginal & Rare Gynecologic Cancers", rare1: "Accurate diagnosis and staging", rare2: "Surgery and reconstructive options", rare3: "Chemoradiation when needed", rare4: "Multidisciplinary tumor board review", rare5: "Follow-up and survivorship",
        breast_t: "Breast Surgery (Benign & Malignant)", breast1: "Mastectomy (total or modified radical)", breast2: "Lumpectomy (breast-conserving surgery)", breast3: "Sentinel lymph node dissection", breast4: "Axillary surgery when indicated", breast5: "Oncoplastic and reconstructive options", breast6: "Multidisciplinary breast cancer care", breast7: "Integration with medical oncology, radiotherapy and survivorship services",
        general_t: "General Gynecology", general1: "Evaluation of abnormal Pap smear", general2: "Management of pelvic masses and fibroids", general3: "Menstrual and menopausal disorders", general4: "Family planning and reproductive health", general5: "Referral for specialized care when needed"
      },
      pathway: {
        head: "Cervical Cancer Care Pathway", subtitle: "From Screening to Survivorship",
        p1_t: "Screening & Early Detection", p1_d: "Pap smear, HPV testing and community screening (through Cameroon Cancer Foundation)",
        p2_t: "Diagnosis & Biopsy", p2_d: "Colposcopy, biopsy and histopathology",
        p3_t: "Staging", p3_d: "Pelvic examination, imaging (CT/MRI) and multidisciplinary evaluation",
        p4_t: "Multidisciplinary Review", p4_d: "Discussion at tumor board to develop an individualized treatment plan",
        p5_t: "Treatment", p5_d: "Surgery and/or chemoradiation based on stage and patient factors",
        p6_t: "Follow-up & Survivorship", p6_d: "Regular monitoring, management of side effects and long-term support"
      },
      ccf: {
        head: "In Partnership with Cameroon Cancer Foundation",
        desc: "Through community outreach and screening programs, the Cameroon Cancer Foundation (CCF) provides free cervical cancer screening and education across Cameroon. COC works closely with CCF to ensure that women with abnormal results receive timely diagnostic evaluation and treatment.",
        link: "Learn More About Screening with CCF"
      },
      team: { head: "Our Team", name: "Dr. Mbi-Kobenge Fidelia", role: "Gynecologic Oncologist & Breast Surgeon", bio: "Leads our gynecology and gynecologic oncology service, providing expert, compassionate care for women with gynecologic and breast cancers and related conditions." },
      facilities: {
        head: "Our Facilities & Support Services",
        f1: "Minimally Invasive and Open Surgery", f2: "Chemotherapy Services", f3: "Radiotherapy & Chemoradiation", f4: "Advanced Imaging (CT, MRI, Ultrasound, Nuclear Medicine)", f5: "Histopathology", f6: "Multidisciplinary Tumor Board"
      },
      support: {
        head: "Patient Support",
        s1: "Patient Education and Counseling", s2: "Psychosocial Support", s3: "Nutrition Guidance", s4: "Fertility and Reproductive Health", s5: "Menopause Care", s6: "Survivorship Programs",
        quote: "\"Empowered Women Build Healthier Communities.\""
      },
      contact: { title: "Ready to Schedule a Consultation?", desc: "Our team is here to support you. Contact us today." },
      footer_tagline: "Healthy Women. Stronger Families. A Brighter Cameroon."
    },

    surgical: {
      banner: {
        label: "Our Services", title: "Surgical Oncology", subtitle: "Specialized Cancer Surgery. Multidisciplinary Care.",
        desc: "At Cameroon Oncology Center, our surgical oncology team provides safe, high-quality, patient-centered surgical care for a wide range of cancers. We work closely with medical oncology, radiation oncology, imaging, pathology, anesthesia and nursing to deliver the best possible outcomes.",
        tag_html: "Expert Surgeons.<br>Advanced Care.<br>Brighter Tomorrows."
      },
      icons: { comprehensive: "Comprehensive Cancer Care", experienced: "Experienced Surgeons", modern: "Modern Operating Facilities", safety: "Patient Safety", multi: "Multidisciplinary Approach", compassionate: "Compassionate Care" },
      services: {
        head: "Our Surgical Oncology Services",
        general_t: "General Cancer Surgery", general1: "Breast cancer surgery", general2: "Gastrointestinal and colorectal cancer surgery", general3: "Soft tissue and other solid tumor surgery", general4: "Diagnostic and therapeutic procedures", general5: "Palliative surgical procedures",
        urologic_t: "Urologic Oncology", urologic1: "Prostate cancer surgery", urologic2: "Bladder cancer surgery", urologic3: "Kidney and upper urinary tract surgery", urologic4: "Testicular cancer surgery", urologic5: "Other genitourinary malignancies",
        gyn_t: "Gynecologic Oncology", gyn1: "Cervical cancer surgery", gyn2: "Ovarian cancer surgery", gyn3: "Endometrial cancer surgery", gyn4: "Surgery for other gynecologic cancers", gyn5: "Minimally invasive and open surgical approaches",
        headneck_t: "Head & Neck Cancer Surgery", headneck1: "Oral cavity cancers", headneck2: "Thyroid cancer", headneck3: "Laryngeal and pharyngeal cancers", headneck4: "Salivary gland tumors", headneck5: "Reconstructive procedures"
      },
      team: {
        head: "Our Surgical Oncology Team",
        t1n: "Dr. Amos Pchana", t1r: "Chief General Surgeon", t1s: "General Surgical Oncology",
        t2n: "Dr. Dissake Ngom Emerick", t2r: "General Surgeon", t2s: "General Surgical Oncology",
        t3n: "Dr. Eyole Njako Eyole", t3r: "Urologist", t3s: "Urologic Oncology",
        t4n: "Dr. Mbi-Kobenge Fidelia", t4r: "Gynecologist", t4s: "Gynecologic Oncology",
        t5n: "Dr. Ava Louis Georges", t5r: "Head & Neck Surgeon (ORL)"
      },
      quote: { text: "\"Together, we provide comprehensive cancer care through surgery and multidisciplinary teamwork.\"", cite: "— Cameroon Oncology Center" },
      pathway: {
        head: "The Surgical Care Pathway",
        p1_t: "Diagnosis & Staging", p1_d: "Imaging and clinical evaluation",
        p2_t: "Multidisciplinary Tumor Board", p2_d: "Case discussion and treatment planning",
        p3_t: "Surgical Planning", p3_d: "Individualized approach",
        p4_t: "Surgery", p4_d: "Safe and precise cancer surgery",
        p5_t: "Histopathology", p5_d: "Definitive diagnosis and staging",
        p6_t: "Postoperative Review", p6_d: "Recovery and complication monitoring",
        p7_t: "Adjuvant Therapy", p7_d: "(when indicated) Chemotherapy and/or radiotherapy",
        p8_t: "Surveillance", p8_d: "Long-term follow-up and support"
      },
      facilities: {
        head: "Our Operating Facilities",
        f1_t: "Modern Operating Theatres", f1_d: "Equipped for safe and complex cancer surgery",
        f2_t: "Postoperative Care", f2_d: "Comfortable and closely monitored recovery",
        f3_t: "Advanced Equipment", f3_d: "For a wide range of surgical procedures"
      },
      why: {
        head: "Why Choose COC for Cancer Surgery?",
        w1: "Experienced and dedicated surgical team", w2: "Multidisciplinary treatment planning", w3: "Modern operating facilities and equipment",
        w4: "Comprehensive perioperative care", w5: "Coordination with chemotherapy and radiotherapy", w6: "Focus on safety, quality and better outcomes"
      },
      contact: { title: "Need a Surgical Oncology Consultation?", desc: "Our team is here to help you schedule an appointment or for more information." }
    },

    radiation: {
      banner: {
        label: "Our Services", title: "Radiation Oncology", subtitle: "Advanced Radiotherapy. Precision Treatment. Compassionate Care.",
        desc: "Cameroon Oncology Center provides modern radiation therapy for patients with a wide range of cancers. Our radiation oncology team combines advanced treatment technology, physics quality assurance and multidisciplinary clinical expertise to deliver safe, precise and patient-centered care.",
        tag_t: "VARIAN TRILOGY", tag_d: "Precision Technology. Better Outcomes."
      },
      icons: { advanced: "Advanced Technology", expert: "Expert Multidisciplinary Team", safety: "Safety & Quality", patient: "Patient-Centered Care", global: "Local Expertise, Global Collaboration" },
      services: {
        head: "Our Radiation Therapy Services",
        imrt: "IMRT", imrt_d: "Intensity-modulated radiation therapy for highly conformal treatment.",
        threed: "3D Conformal Radiation Therapy", threed_d: "Precise treatment tailored to your cancer.",
        twod: "2D Radiation Therapy", twod_d: "Effective treatment when clinically appropriate.",
        stereo: "Stereotactic Radiotherapy", stereo_d: "High-precision treatment for selected cancers.",
        palliative: "Palliative Radiotherapy", palliative_d: "Relief of symptoms and improved quality of life.",
        curative: "Curative Radiotherapy", curative_d: "With the goal of long-term cancer control."
      },
      linacs: {
        head: "Two Medical Linear Accelerators",
        trilogy_t: "VARIAN TRILOGY", trilogy_d: "Advanced linear accelerator for precision external-beam radiotherapy.",
        ix_t: "VARIAN iX", ix_d: "A second medical linear accelerator expanding treatment capacity and supporting reliable access to radiotherapy."
      },
      process: {
        head: "From Simulation to Treatment", subtitle: "A carefully planned process for safe, precise and individualized care.",
        s1_t: "Consultation", s1_d: "Meet with our radiation oncologist and discuss your treatment plan.",
        s2_t: "CT Simulation", s2_d: "Philips Big Bore CT Simulator",
        s3_t: "AI-Assisted Contouring", s3_d: "Radformation AutoContour",
        s4_t: "Treatment Planning", s4_d: "Eclipse Treatment Planning System",
        s5_t: "Organ-at-Risk Constraints", s5_d: "QUANTEC-informed planning principles",
        s6_t: "Physician & Physics Review", s6_d: "Multidisciplinary planning review",
        s7_t: "Quality Assurance", s7_d: "Patient-specific QA and machine QA",
        s8_t: "Treatment Delivery", s8_d: "Varian Trilogy or Varian iX",
        s9_t: "Follow-up", s9_d: "Ongoing care and support"
      },
      cancers: { head: "Cancers We Treat With Radiotherapy", c1: "Breast Cancer", c2: "Prostate Cancer", c3: "Cervical Cancer", c4: "Head & Neck Cancer", c5: "Brain Tumors", c6: "Rectal Cancer", c7: "Lung Cancer", c8: "Gynecologic Cancers", c9: "Pediatric Cancers", c10: "Metastatic / Palliative Disease" },
      expect: {
        head: "What to Expect During Radiation Therapy",
        e1_t: "Consultation", e1_d: "Meet your radiation oncologist and discuss your treatment plan.",
        e2_t: "Simulation", e2_d: "A CT scan (Philips Big Bore) is performed in the treatment position.",
        e3_t: "Planning", e3_d: "Your treatment is designed using advanced software and reviewed by our clinical and physics team.",
        e4_t: "Treatment", e4_d: "Each session is painless and usually takes only a few minutes.",
        e5_t: "Follow-up", e5_d: "We monitor your progress and manage any side effects."
      },
      quality: {
        head: "Quality & Safety",
        desc: "Precision requires more than technology. It requires a culture of quality. Every radiation treatment at COC involves multiple layers of review, including radiation oncologist review, medical physics treatment-plan verification, machine quality assurance, patient-specific QA where applicable, image guidance and multidisciplinary discussion. Treatment plans are developed with attention to internationally recognized normal-tissue dose constraints, including QUANTEC guidance where applicable, to optimize tumor coverage while limiting radiation exposure to organs at risk.",
        iroc: "Independent Quality Verification in Partnership with IROC Houston", link: "Learn more about our quality recognition"
      },
      team: {
        head: "Our Radiation Oncology Team",
        sub_onc: "Radiation Oncologists",
        t1n: "Dr. Mosse Bassane Alain Wilfried", t1r: "Medical Director & Head of Radiation Oncology", t1e: "Full-time",
        t2n: "Dr. Bodo Danny", t2r: "Radiation Oncologist", t2e: "Full-time",
        t3n: "Professor Mouelle Sone Albert", t3r: "Senior Advisor & Consultant Radiation Oncologist", t3e: "Weekly consultation clinic",
        t4n: "Professor Waleed Mourad", t4r: "Chief Radiation Oncologist, USA", t4e: "International Tele-Oncology",
        sub_physics: "Medical Physics", t5n: "Ms. Farzaneh Mirkhaghani", t5r: "Chief Medical Physicist", t6n: "Mr. Jerome Makeng Kefac", t6r: "Staff Medical Physicist",
        sub_therapy: "Radiation Therapy", t7n: "Mr. Nilay Majumder", t7r: "Chief Radiation Therapist", t7s: "and 6 additional Radiation Therapists",
        sub_support: "Technical Support", support_d: "2 Full-Time-Equivalent Engineers", support_s: "Supporting our radiotherapy equipment and infrastructure"
      },
      stats: { onc: "4", onc_label: "Radiation Oncologists / Consultants", physicists: "2", physicists_label: "Medical Physicists", therapists: "7", therapists_label: "Radiation Therapists", engineers: "2", engineers_label: "FTE Engineers", linacs: "2", linacs_label: "Linear Accelerators" },
      contact: { title: "Need Radiation Therapy?", desc: "Our radiation oncology team is here to help you understand your diagnosis, treatment options and what to expect during radiotherapy.", btn1: "Request an Appointment", btn2: "Contact Radiation Oncology", btn3: "For Referring Physicians" }
    },

    urology: {
      banner: {
        label: "Our Services", title: "Urology & Urologic Oncology", subtitle: "Comprehensive Care for the Urinary Tract and Male Reproductive Health",
        desc: "At Cameroon Oncology Center, we provide expert, compassionate and patient-centered urologic care for both cancerous and non-cancerous conditions of the kidneys, ureters, bladder, prostate, testicles and male reproductive system. Our multidisciplinary team works together to deliver accurate diagnosis, advanced treatment options and better outcomes.",
        quote: "\"Expert urologic care today for healthier tomorrows.\"", tag_html: "Restoring<br>Function.<br>Improving Lives."
      },
      icons: { expert: "Expert Care", multi: "Multidisciplinary Approach", advanced: "Advanced Technology", patient: "Patient-Centered Care", outcomes: "Better Outcomes" },
      services: {
        head: "Our Urology & Urologic Oncology Services",
        prostate_t: "Prostate Care", prostate1: "BPH (enlarged prostate)", prostate2: "Prostate cancer diagnosis and staging", prostate3: "PSA screening", prostate4: "Prostate biopsy", prostate5: "Medical and surgical management",
        kidney_t: "Kidney & Ureter Disorders", kidney1: "Kidney stones", kidney2: "Ureteric stones", kidney3: "Renal obstruction", kidney4: "Hydronephrosis", kidney5: "Stone prevention and follow-up",
        bladder_t: "Bladder Disorders & Bladder Cancer", bladder1: "Bladder cancer", bladder2: "Bladder tumors", bladder3: "Bladder stones", bladder4: "Neurogenic bladder", bladder5: "Urinary retention", bladder6: "Recurrent urinary tract infections (UTIs)",
        male_t: "Male Reproductive Health", male1: "Male infertility evaluation", male2: "Erectile dysfunction", male3: "Male sexual health", male4: "Varicocele", male5: "Hydrocele", male6: "Epididymal disorders",
        testicular_t: "Testicular & Scrotal Disorders", testicular1: "Testicular pain", testicular2: "Testicular masses", testicular3: "Scrotal swelling", testicular4: "Testicular torsion", testicular5: "Epididymitis",
        surgery_t: "Urologic Surgery", surgery1: "Circumcision", surgery2: "Suprapubic catheter insertion", surgery3: "Endoscopic urologic procedures", surgery4: "Open urologic surgery", surgery5: "Emergency urologic surgery", surgery6: "Management of urologic trauma",
        general_t: "General Urology", general1: "Comprehensive urologic consultation", general2: "Blood in urine (hematuria)", general3: "Incontinence", general4: "Frequent urination", general5: "Difficult urination", general6: "Management of precancerous lesions"
      },
      pathway: {
        head: "Prostate Cancer Care Pathway", subtitle: "From Early Detection to Long-Term Survivorship",
        p1_t: "PSA Testing & Clinical Evaluation", p1_d: "Risk assessment and screening",
        p2_t: "Imaging & Biopsy", p2_d: "MRI, CT, ultrasound and targeted biopsy",
        p3_t: "Histopathology", p3_d: "Accurate diagnosis and risk stratification",
        p4_t: "Staging", p4_d: "Determine extent of disease",
        p5_t: "Multidisciplinary Tumor Board", p5_d: "Individualized treatment plan",
        p6_t: "Treatment Options", p6_d: "Surgery, Radiotherapy, Systemic therapy, Clinical trials, Supportive care",
        p7_t: "Follow-up & Survivorship", p7_d: "Regular monitoring and long-term care"
      },
      urologist: {
        head: "Meet Our Urologist", name: "Dr. Eyole Njako Eyole", role: "Consultant Urologist",
        c1: "Master of Medicine (Urology) – University of Nairobi", c2: "Member, American Urological Association (AUA)", c3: "Member, International Society of Urology (SIU)", c4: "Cameroon Medical Council Registered Urologist",
        quote: "\"Committed to providing expert, compassionate and patient-centered urologic care.\""
      },
      diagnostics: {
        head: "Advanced Diagnostics & Treatment",
        d1: "CT, MRI and ultrasound imaging", d2: "Endoscopic evaluation and minimally invasive surgery", d3: "Prostate and bladder biopsies",
        d4: "Integration with histopathology, radiology, medical oncology, radiation oncology and nuclear medicine", d5: "Modern operating facilities", d6: "Access to international expertise"
      },
      looking_ahead: {
        head: "Looking Ahead: Precision Prostate Cancer Care", tag: "Theranostics (Coming Soon)",
        desc: "COC will soon offer theranostics for prostate cancer using advanced molecular imaging and targeted radiopharmaceutical therapy, providing new hope for patients with advanced prostate cancer.",
        quote: "\"Innovation Today for a Healthier Tomorrow.\""
      },
      clinic: { head: "Clinic Information", urology_clinic: "Urology Clinic", urology_days: "Every second Saturday", appointments: "Appointments by reservation", emergency: "Emergency referrals accepted" },
      support: {
        head: "Patient Information & Support",
        s1: "Patient education and counseling", s2: "Support for patients and families", s3: "Guidance on lifestyle and prevention", s4: "Psychosocial support", s5: "Coordination with other specialties", s6: "Follow-up and survivorship care"
      },
      footer_quote: "Better Urologic Health. Stronger Families. A Healthier Cameroon."
    },

    nursenav: {
      banner: {
        title: "Oncology Nurse Navigation", subtitle: "No Patient Navigates Cancer Care Alone.",
        desc: "At Cameroon Oncology Center, every oncology patient is supported by a dedicated oncology nurse navigator from the first point of contact through all stages of care. Our Universal Closed-Loop Oncology Nurse Navigation Program ensures that each patient receives personalized guidance, education, coordination and ongoing support.",
        quote: "\"Guiding You at Every Step of Your Cancer Journey.\""
      },
      icons: { assess: "Assess", assess_d: "Identify needs and barriers", educate: "Educate", educate_d: "Provide clear information", coordinate: "Coordinate", coordinate_d: "Connect with the right services", advocate: "Advocate", advocate_d: "Support your care journey", followup: "Follow Up", followup_d: "Stay with you long term" },
      strip: "Every Cancer. Every Stage. Every Patient.",
      strip_sub: "Diagnosis | Treatment | Survivorship | Recurrence | Palliative Care",
      pathway: {
        head: "The COC Closed-Loop Oncology Nurse Navigation Pathway", subtitle: "A Continuous, Patient-Centered Navigation Cycle",
        p1_t: "Registration", p1a: "Patient arrives at COC (from any source)", p1b: "Registration and medical record creation", p1c: "Initial orientation to services",
        p2_t: "Entry Navigation (Before Consultation)", p2a: "Warm welcome and comprehensive assessment", p2b: "Review of medical records and previous investigations", p2c: "Identify clinical and non-clinical barriers (financial, transportation, psychosocial, etc.)", p2d: "Organize laboratory, imaging and other tests", p2e: "Prepare patient for specialist consultation",
        p3_t: "Specialist Consultation", p3a: "Consultation with the appropriate specialist(s) (Medical Oncology, Radiation Oncology, Surgery, Gynecology, etc.)", p3b: "Diagnosis and staging", p3c: "Discussion of treatment options", p3d: "Development of individualized care plan",
        p4_t: "Exit Navigation (After Consultation)", p4a: "Review and explain treatment plan", p4b: "Teach-back to confirm understanding", p4c: "Arrange appointments and referrals", p4d: "Coordinate additional tests", p4e: "Address patient questions and concerns", p4f: "Provide emotional support",
        p5_t: "Treatment Coordination", p5a: "Coordinate start of treatment (chemotherapy, radiotherapy, surgery, etc.)", p5b: "Liaise with pharmacy, laboratory, imaging and other services", p5c: "Monitor treatment schedule", p5d: "Manage side effects and complications", p5e: "Ensure access to supportive care (nutrition, psychology, cardiology, palliative care, etc.)",
        p6_t: "Longitudinal Follow-up (Continuous Navigation)", p6a: "Regular contact (calls, visits, WhatsApp)", p6b: "Monitor symptoms and side effects", p6c: "Ensure adherence to treatment", p6d: "Assist with survivorship care planning", p6e: "Support during recurrence or palliation", p6f: "Link to community resources as needed"
      },
      note: "The navigator remains connected to the patient throughout the entire cancer journey.",
      before_leave: { head: "Before You Leave COC", desc: "See Your Nurse Navigator Again", note: "Every oncology patient returns to the nurse navigator after the specialist consultation. The navigator reviews the recommendations, confirms understanding, arranges appointments and referrals, and addresses any remaining barriers before you leave." },
      what_does: {
        head: "What Your Oncology Nurse Navigator Does",
        w1: "Comprehensive patient assessment", w2: "Review and organize medical records", w3: "Coordinate investigations and appointments", w4: "Provide education and emotional support",
        w5: "Identify and help overcome barriers to care (financial, transportation, language, etc.)", w6: "Work closely with the multidisciplinary team", w7: "Ensure continuous follow-up"
      },
      integrated: {
        head: "Integrated with All COC Services",
        i1: "Medical Oncology", i2: "Radiation Oncology", i3: "Surgery", i4: "Laboratory", i5: "Imaging (CT, MRI, Ultrasound)", i6: "Pharmacy", i7: "Nutrition Support", i8: "Psycho-Oncology & Social Support", i9: "Cardiology", i10: "Palliative Care", i11: "Inpatient Care", i12: "Community Resources"
      },
      team: { head: "A Dedicated Navigation Team", desc: "Our program started with one nurse navigator and expanded to two dedicated oncology nurse navigators to meet the growing needs of our patients.", quote: "\"We walk this journey with you.\"" }
    },

    affiliate: {
      banner: {
        title: "Affiliate Physician Network Program", subtitle: "A National Shared Cancer Care Network",
        desc: "Partnering for better cancer care across Cameroon and beyond. Affiliate physicians remain involved before, during and after specialized treatment at Cameroon Oncology Center.",
        quote: "\"Together We Bring Hope Closer to Home.\"", tag_html: "One Network.<br>One Goal.<br>A Cancer-Free<br>Cameroon."
      },
      icons: { access: "Better Access to Care", collaboration: "Stronger Collaboration", continuity: "Continuity for Patients", outcomes: "Improved Outcomes" },
      vision: { head: "Our Vision", desc: "To be the leading cancer care network in Cameroon, providing high-quality, accessible and compassionate care to every patient, everywhere." },
      mission: { head: "Our Mission", desc: "To improve access to comprehensive cancer care through collaborative partnerships with physicians who share responsibility for early diagnosis, referral, treatment coordination, survivorship and palliative care." },
      principles: { head: "Guiding Principles", p1: "Patient welfare first", p2: "Respect patient choice", p3: "Clinical independence", p4: "Confidentiality", p5: "Evidence-based care", p6: "Ethical collaboration" },
      join: { head: "Join the Network", desc: "Together we can expand access to quality cancer care for our communities.", btn: "Become an Affiliate" },
      pathway: {
        head: "The COC Affiliate Care Pathway", subtitle: "A Continuous, Shared-Care Journey",
        p1_t: "Affiliate Physician (Initial Evaluation)", p1a: "Recognizes suspected cancer", p1b: "Initiates work-up", p1c: "Counsels the patient", p1d: "Prepares a complete referral package",
        p2_t: "Referral (to COC)", p2a: "Clinical history", p2b: "Pathology reports", p2c: "Imaging and laboratory results", p2d: "Specific referral question",
        p3_t: "Cameroon Oncology Center (Specialized Care)", p3a: "Patient navigation", p3b: "Multidisciplinary review", p3c: "Advanced diagnostics", p3d: "Radiotherapy, chemotherapy, surgery", p3e: "Supportive care",
        p4_t: "Shared Plan (Joint Management)", p4a: "Treatment plan", p4b: "Communication with affiliate physician", p4c: "Defined follow-up strategy", p4d: "Patient education",
        p5_t: "Local Follow-up (Closer to Home)", p5a: "Surveillance and follow-up", p5b: "Supportive care", p5c: "Symptom control", p5d: "Rapid re-escalation to COC when specialist review is needed"
      },
      note: "Continuous Communication, Treatment Updates and Shared Decision Support",
      note2: "The patient remains at the Center or Spoke Center",
      note3: "Patient choice · Clinical independence · Confidentiality · Documented shared care · No care merely for referral",
      levels: {
        head: "Four Affiliate Levels",
        l1_t: "Level 1 — Referral Partner", l1a: "General practitioners and family physicians", l1b: "Early recognition", l1c: "Initial work-up", l1d: "Early referral", l1e: "Basic follow-up", l1f: "Community education",
        l2_t: "Level 2 — Service Partner", l2a: "District and regional hospitals", l2b: "Coordinate diagnostics", l2c: "Prepare referral packages", l2d: "Follow patients after treatment", l2e: "Manage supportive care",
        l3_t: "Level 3 — Collaborative Care Partner", l3a: "Specialists (surgery, gynecology, urology, ENT, gastroenterology, etc.)", l3b: "Co-management", l3c: "Joint tumor board participation", l3d: "Shared care and follow-up", l3e: "Training and education",
        l4_t: "Level 4 — Advanced Collaborative Partner", l4a: "Comprehensive oncology services", l4b: "Strong integration with COC", l4c: "Joint programs and research", l4d: "Training and capacity building", l4e: "Leadership in regional cancer care"
      },
      hub: {
        head: "The Hub-and-Spoke Model",
        desc: "COC (Douala-Bekoko, Main Hub) with affiliate annexes at Bamenda, Garoua, Maroua, Ngaoundéré, Bertoua and Douala-Bonabéri",
        b1: "Bring care closer to patients", b2: "Reduce travel costs", b3: "Earlier diagnosis", b4: "Better treatment adherence", b5: "Access to specialist expertise", b6: "Telemedicine and knowledge sharing", b7: "A stronger, more equitable cancer care network"
      },
      components: { head: "Key Components", c1: "Complete Referral Process", c2: "Multidisciplinary Consultation", c3: "Multidisciplinary Tumor Board", c4: "Continuous Feedback" },
      benefits_physicians: { head: "Benefits for Physicians", b1: "Access to specialist advice", b2: "Continuing medical education", b3: "Shared care and co-management", b4: "Recognition as a COC partner", b5: "Support for complex cases" },
      benefits_patients: { head: "Benefits for Patients", b1: "Faster access to specialist care", b2: "Care closer to home", b3: "Reduced travel costs", b4: "Continuity of care", b5: "Better treatment outcomes" },
      commitment: { head: "Our Commitment", c1: "Partnership", c2: "Quality", c3: "Equity", c4: "A healthier Cameroon" }
    }
  },

  fr: {
    common: {
      topbar: {
        address: "Bekoko - Dibombari, Région du Littoral, Cameroun",
        hours: "Ouvert 24h/24",
        days: "7 Jours sur 7",
        search_title: "Rechercher sur le site"
      },
      search: {
        placeholder: "Rechercher services, direction, pages...",
        button: "Rechercher",
        hint: "Appuyez sur Échap pour fermer"
      },
      nav: {
        home: "Accueil",
        about: "À Propos",
        about_glance: "Aperçu du COC",
        about_leadership: "Notre Direction",
        about_reach: "Notre Portée Régionale",
        services: "Nos Services",
        services_radiation: "Oncologie Radiothérapique",
        services_medical: "Oncologie Médicale",
        services_surgical: "Oncologie Chirurgicale",
        services_lab: "Laboratoire et Pathologie",
        services_imaging: "Imagerie et Médecine Nucléaire",
        services_pharmacy: "Pharmacie",
        patients: "Pour les Patients",
        patients_book: "Prendre Rendez-vous",
        patients_support: "Soutien aux Patients",
        patients_financial: "Finances et Assurance",
        research: "Recherche",
        research_publications: "Publications",
        research_training: "Programmes de Formation",
        news: "Actualités",
        news_outreach: "Sensibilisation Communautaire",
        news_press: "Presse et Annonces",
        careers: "Carrières",
        contact: "Contact"
      },
      brand: { tagline: "Espoir · Soin · Vie" },
      buttons: {
        book_appointment: "Prendre Rendez-vous",
        make_difference: "Faites la Différence",
        learn_more: "En Savoir Plus",
        view_full_profile: "Voir le Profil Complet"
      },
      footer: {
        about: "À Propos",
        services: "Nos Services",
        book: "Prendre Rendez-vous",
        lab: "Laboratoire et Pathologie",
        patients: "Patients et Familles",
        research: "Recherche et Formation",
        copyright_suffix: "Cameroon Oncology Center. Tous droits réservés.",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
        sitemap: "Plan du Site"
      }
    },

    home: {
      hero: {
        eyebrow: "Cameroon Oncology Center",
        title_html: "Ensemble<br>Contre <span>le Cancer</span>",
        italic: "Des Soins Avancés. Des Personnes Compatissantes. Un Avenir en Meilleure Santé.",
        desc: "Cameroon Oncology Center est un Centre d'Excellence en soins du cancer désigné par le Ministère de la Santé Publique, offrant des services d'oncologie complets, de haute qualité, abordables et empreints de compassion aux patients du Cameroun et de la région.",
        photo_label: "Espace photo — remplacez par une photo réelle de l'établissement du COC (images/hero-building.jpg)",
        tag_html: "Espoir<br>Soin<br>Vie"
      },
      stats: {
        consultations_label: "Consultations de Patients en 2025",
        radiotherapy_label: "Patients Ayant Reçu une Radiothérapie en 2025",
        chemo_label: "Séances de Chimiothérapie en 2025",
        diagnostic_num: "Complets",
        diagnostic_label: "Services de Diagnostic et d'Imagerie",
        serving_num: "Au Service des Patients",
        serving_label: "Dans Tout le Cameroun et la Région"
      },
      services: {
        title: "Nos Services Cliniques",
        viewall: "Voir Tous les Services",
        radiation_title: "Oncologie Radiothérapique",
        radiation_desc: "Accélérateurs linéaires Varian iX et Varian Trilogy, IMRT, 3DCRT et traitement guidé par l'image.",
        medical_title: "Oncologie Médicale",
        medical_desc: "Chimiothérapie, thérapie ciblée et immunothérapie.",
        surgical_title: "Oncologie Chirurgicale",
        surgical_desc: "Chirurgie oncologique gynécologique, urologique et générale.",
        imaging_title: "Imagerie et Médecine Nucléaire",
        imaging_desc: "CT, CT-Sim, IRM, Échographie, SPECT-CT et PET-CT (bientôt disponible).",
        lab_title: "Laboratoire et Pathologie",
        lab_desc: "Services de laboratoire complets et histopathologie.",
        pharmacy_title: "Pharmacie",
        pharmacy_desc: "Trois points de service pharmaceutique avec couverture jour et nuit."
      },
      tech: {
        title: "Notre Technologie",
        sub: "Une technologie de classe mondiale pour un diagnostic précis et un traitement avancé du cancer.",
        explore: "Découvrir Notre Technologie",
        item1_title: "Accélérateur Linéaire Varian iX",
        item1_desc: "Radiothérapie de haute précision pour des soins optimaux contre le cancer.",
        item2_title: "Accélérateur Linéaire Varian Trilogy",
        item2_desc: "Options de traitement avancées incluant la 3D-CRT, l'IMRT et plus encore.",
        item3_title: "Simulateur CT Philips Big Bore",
        item3_desc: "Imagerie avancée pour une planification précise du traitement."
      },
      values: {
        title: "Nos Valeurs",
        compassion_title: "Compassion", compassion_desc: "Nous prenons soin de chaque patient avec dignité et respect.",
        excellence_title: "Excellence", excellence_desc: "Nous visons les normes les plus élevées dans tout ce que nous faisons.",
        integrity_title: "Intégrité", integrity_desc: "Nous sommes honnêtes, transparents et responsables.",
        teamwork_title: "Esprit d'équipe", teamwork_desc: "Nous accomplissons davantage ensemble.",
        innovation_title: "Innovation", innovation_desc: "Nous adoptons de nouvelles idées et technologies.",
        accessibility_title: "Accessibilité", accessibility_desc: "Nous nous engageons à rendre les soins contre le cancer accessibles à tous."
      },
      excellence: {
        title: "Centre d'Excellence",
        desc: "Désigné par le Ministère de la Santé Publique comme Centre d'Excellence en Soins du Cancer.",
        ministry_html: "Ministère de la Santé Publique<br>Centre d'Excellence en Soins du Cancer",
        readmore: "Lire la Désignation Officielle"
      },
      quality: {
        title: "Vérification Internationale de la Qualité",
        desc: "Nos services de radiothérapie ont été évalués de manière indépendante par IROC Houston (MD Anderson Cancer Center), confirmant une prestation de traitement sûre et de haute qualité.",
        viewreport: "Voir le Rapport Complet"
      },
      partners: {
        title: "Nos Partenaires Internationaux",
        p1_role: "Oncologue Radiothérapeute, Royaume-Uni",
        p2_role: "Oncologue Médical, États-Unis"
      },
      video: {
        label: "Notre Histoire",
        title: "Regardez Notre Chanson Thème",
        sub: "Un message d'espoir, de soin et de vie de la part de la famille du Cameroon Oncology Center.",
        fb_link: "Regarder sur Facebook"
      },
      footer_tagline: "Un Cameroun en Meilleure Santé. Un Avenir Plus Radieux."
    },

    about: {
      banner: {
        crumb: "Aperçu du COC",
        title_html: "Des Soins Complets Contre le Cancer.<br>Un Impact Réel. Un Avenir en Meilleure Santé.",
        desc: "Cameroon Oncology Center fournit des soins contre le cancer de haute qualité, abordables et empreints de compassion aux patients de tout le Cameroun et de la région.",
        pill1: "Les personnes au centre",
        pill2: "De meilleurs soins aujourd'hui",
        pill3: "Des communautés plus fortes demain",
        quote: "«Notre Centre. Notre Engagement. Pour le Cameroun et Au-delà.»"
      },
      milestones: {
        title: "Étapes Franchies à ce Jour",
        subtitle: "Progrès Réels. Personnes Réelles. Impact Réel.",
        m1_num: "6 000+", m1_title: "Patients Atteints de Cancer Consultés", m1_desc: "Plus de 6 000 patients atteints de cancer ont été évalués et pris en charge au COC depuis 2019.",
        m2_num: "2 000+", m2_title: "Patients Traités par Radiothérapie", m2_desc: "Plus de 2 000 patients atteints de cancer ont reçu une radiothérapie grâce à notre accélérateur linéaire médical.",
        m3_num: "6 000+", m3_title: "Séances de Chimiothérapie Administrées", m3_desc: "Plus de 6 000 séances de chimiothérapie administrées depuis 2019, bénéficiant à environ 2 000 patients.",
        m4_num: "25", m4_title: "Publications de Recherche Évaluées par des Pairs", m4_desc: "Notre corps professoral a contribué à 25 articles de recherche publiés dans des revues internationales à comité de lecture depuis 2015.",
        m5_num: "6 000+", m5_title: "Camerounais Dépistés Gratuitement", m5_desc: "Plus de 6 000 personnes ont bénéficié d'activités de dépistage gratuit du cancer menées dans les 10 régions."
      },
      reach: {
        title: "Notre Portée Régionale",
        desc: "Au Service du Cameroun. Au-delà des Frontières. Le COC a fourni des soins contre le cancer à des patients venus des 10 régions du Cameroun et de 7 autres pays africains.",
        badge1_title: "10 Régions du Cameroun",
        badge1_desc: "Des patients des 10 régions ont accédé aux soins au COC.",
        badge2_title: "7 Autres Pays Africains",
        badge2_desc: "Tchad, République du Congo, RD Congo, Gabon, Guinée Équatoriale, Nigeria et République Centrafricaine.",
        map_label: "Espace carte — carte de la portée régionale du Cameroun et de l'Afrique Centrale (images/regional-map.jpg)"
      },
      gallery: {
        g1: "Soins aux Patients", g2: "Radiothérapie", g3: "Chirurgie", g4: "Laboratoire et Diagnostic", g5: "Sensibilisation Communautaire"
      },
      cta: {
        title: "Un Centre. Une Afrique Plus Forte et en Meilleure Santé.",
        desc: "Du traitement avancé du cancer au dépistage, à l'éducation, à la recherche et à la collaboration internationale, le COC continue d'élargir l'accès à des soins complets contre le cancer au Cameroun et dans la région.",
        btn: "Rejoignez-nous pour Faire la Différence"
      },
      leadership: {
        crumb: "À Propos du COC",
        title: "Notre Direction",
        subtitle: "Expérimentée. Engagée. Unie contre le cancer.",
        intro: "Au Cameroon Oncology Center, notre direction allie expertise clinique, excellence managériale et un engagement commun envers des soins contre le cancer de haute qualité et empreints de compassion.",
        col1_title: "Direction Institutionnelle", col1_sub: "Vision, stratégie et partenariats mondiaux",
        col2_title: "Direction Clinique", col2_sub: "Soins du cancer multidisciplinaires fondés sur des données probantes",
        col3_title: "Conseiller Clinique Principal", col3_sub: "Direction académique et orientation",
        exec_title: "Direction Exécutive et Administrative", exec_sub: "Excellence opérationnelle pour un COC plus fort et plus durable",
        p1_role: "PhD, MCCPM, DABMP — Fondateur, Président et Directeur Général",
        p1_desc: "Physicien médical, chercheur en cancérologie et leader de la santé profondément engagé à élargir l'accès à des soins de qualité contre le cancer au Cameroun et au-delà.",
        p2_role: "MD, MPH — Directeur Médical et Chef du Service d'Oncologie Radiothérapique",
        p2_desc: "Oncologue radiothérapeute et médecin-leader possédant une vaste expérience en oncologie clinique, radiothérapie avancée et gestion des systèmes de santé en Afrique subsaharienne.",
        p3_role: "Conseiller Principal, Oncologie Radiothérapique",
        p3_desc: "Oncologue radiothérapeute senior et médecin universitaire. Pionnier de l'oncologie radiothérapique au Cameroun, il apporte au COC ses conseils cliniques et stratégiques.",
        p4_role: "Oncologue Médical en Chef et Chef du Service d'Oncologie Médicale",
        p4_desc: "Dirige le service d'oncologie médicale au COC et travaille en étroite collaboration avec les équipes multidisciplinaires.",
        p5_role: "Directeur Général",
        p5_desc: "Responsable de la gestion globale et de la coordination des activités administratives et opérationnelles du Centre.",
        p6_role: "Directeur Général Adjoint",
        p6_desc: "Soutient le Directeur Général et la direction exécutive dans la coordination des activités administratives et opérationnelles.",
        p7_role: "Directrice Financière",
        p7_desc: "Responsable de la gestion financière, de la budgétisation, du reporting financier et de la planification à l'appui de la mission et de la croissance du COC.",
        p8_role: "Directrice des Ressources Humaines",
        p8_desc: "Professionnelle de santé accomplie dont la formation en sciences de laboratoire médical soutient la croissance continue du COC.",
        p9_role: "Ingénieur en Chef",
        p9_desc: "Dirige l'infrastructure technique et d'ingénierie nécessaire au bon fonctionnement clinique du COC.",
        quote_lead: "Des expertises différentes. Un objectif commun. Travailler ensemble pour un avenir sans cancer.",
        quote_text: "«Le leadership n'est pas une position, mais un engagement envers un avenir meilleur pour les patients que nous servons.»",
        quote_cite: "— Cameroon Oncology Center"
      },
      footer_tagline: "Des soins contre le cancer aujourd'hui. Un avenir plus radieux."
    },

    histo: {
      banner: "Un Centre d'Excellence en Soins du Cancer Désigné par le Ministère de la Santé Publique",
      hero: {
        title_html: "Histopathologie<br>et <span class=\"highlight\">Services de Laboratoire</span>",
        tag: "Diagnostic Précis. Meilleur Traitement. Résultats Améliorés.",
        desc: "Nos Services d'Histopathologie et de Laboratoire fournissent des informations diagnostiques de haute qualité, rapides et précises pour guider les soins contre le cancer. Nous travaillons en collaboration avec Smart Medicals India pour l'immunohistochimie (IHC) et d'autres services spécialisés.",
        icon1: "Diagnostic Précis", icon2: "Résultats Rapides", icon3: "Orientation du Traitement", icon4: "Meilleurs Résultats pour les Patients",
        doctor_role: "Anatomo-pathologiste Consultant, Cameroon Oncology Center",
        photo_label: "Espace photo — extérieur de l'établissement du COC (images/coc-building.jpg)",
        collab_title: "En Collaboration Avec Smart Medicals India",
        collab1: "Immunohistochimie (IHC)", collab2: "Études moléculaires et spéciales", collab3: "Pathologie numérique (cas sélectionnés)", collab4: "Consultation d'experts"
      },
      services: {
        head: "Nos Services",
        histo_title: "Histopathologie",
        histo1: "Biopsies et pièces opératoires", histo2: "Examen extemporané (le cas échéant)", histo3: "Rapports complets", histo4: "Second avis (national et international)",
        cyto_title: "Cytologie",
        cyto1: "FNAC (Cytoponction à l'Aiguille Fine)", cyto2: "Frottis de Pap et autres cytologies", cyto3: "Cytologie des liquides corporels", cyto4: "Rapports rapides",
        lab_title: "Laboratoire Clinique",
        lab1: "Hématologie", lab2: "Chimie clinique", lab3: "Microbiologie", lab4: "Sérologie et autres tests de routine", lab5: "Marqueurs tumoraux (ex. PSA, CEA, CA 15-3, CA 125)", lab6: "Soutien au conseil tumoral multidisciplinaire"
      },
      cancers: {
        head: "Cancers Couramment Diagnostiqués",
        c1: "Cancer du sein", c2: "Cancer du col de l'utérus", c3: "Cancer de la prostate", c4: "Cancer colorectal", c5: "Cancer du poumon",
        c6: "Cancers de la tête et du cou", c7: "Cancer de la thyroïde", c8: "Cancers gastro-intestinaux", c9: "Cancers de la peau",
        c10: "Hémopathies malignes (ex. lymphome, leucémie)", c11: "Autres tumeurs solides",
        quote: "«Fournir les réponses qui guident vos soins.»"
      },
      process: {
        head: "De l'Échantillon au Diagnostic",
        step1_title: "Prélèvement de l'Échantillon", step1_desc: "Biopsie ou chirurgie.",
        step2_title: "Traitement des Tissus", step2_desc: "Traitement des tissus et préparation des lames.",
        step3_title: "Examen Microscopique", step3_desc: "Examen par l'anatomo-pathologiste.",
        step4_title: "Rapport Précis", step4_desc: "Rapport émis pour guider le traitement.",
        turnaround_title: "Délai d'Obtention des Résultats",
        turnaround_desc: "La plupart des résultats sont disponibles sous 3 à 10 jours. Certains tests urgents (ex. examen extemporané, cytologie sélectionnée) sous 3 jours."
      },
      team: {
        title: "Notre Équipe",
        t1_html: "Dr Bodo Edmond<br>Anatomo-pathologiste Consultant", t2: "Scientifiques de Laboratoire", t3: "Histotechnologistes", t4: "Techniciens de Laboratoire", t5: "Qualité et Gestion des Données"
      },
      why: {
        title: "Pourquoi Choisir le COC ?",
        w1: "Équipe expérimentée et dévouée",
        w2: "Équipements modernes et normes de qualité",
        w3: "Collaboration avec Smart Medicals India pour l'IHC et les tests spécialisés",
        w4: "Rapports rapides et fiables (3–10 jours)",
        w5: "Soins intégrés avec une équipe multidisciplinaire",
        w6: "Service centré sur le patient et empreint de compassion"
      },
      info: {
        title: "Informations sur le Service",
        routine_title: "Services de Routine", routine_desc: "Lundi – Vendredi, 8h00 – 17h00",
        special_title: "Demandes Spéciales / STAT", special_desc: "Selon les besoins",
        inquiries_title: "Pour Renseignements",
        email_title: "Email",
        request_btn: "Demander ce Service"
      },
      footer_tagline: "Soins Experts. Communautés Plus Fortes. Un Cameroun en Meilleure Santé."
    },

    appt: {
      banner: {
        crumb: "Pour les Patients",
        title: "Prendre Rendez-vous",
        desc: "Remplissez le formulaire ci-dessous et notre équipe de coordination des patients vous contactera pour confirmer la date et l'heure de votre rendez-vous."
      },
      form: {
        title: "Demander un Rendez-vous",
        desc: "Les champs marqués * sont obligatoires. Ceci est uniquement une demande — elle ne garantit pas un créneau tant qu'elle n'est pas confirmée par notre équipe.",
        fullname_label: "Nom Complet",
        fullname_placeholder: "ex. Ngozi Achu",
        email_label: "Adresse E-mail",
        email_placeholder: "vous@exemple.com",
        phone_label: "Numéro de Téléphone",
        phone_placeholder: "+237 6XX XXX XXX",
        service_label: "Service Souhaité",
        service_placeholder: "Sélectionnez un service",
        service_radiation: "Oncologie Radiothérapique",
        service_medical: "Oncologie Médicale",
        service_surgical: "Oncologie Chirurgicale",
        service_imaging: "Imagerie et Médecine Nucléaire",
        service_lab: "Laboratoire et Pathologie",
        service_pharmacy: "Pharmacie",
        service_other: "Autre / Pas sûr",
        date_label: "Date Souhaitée",
        notes_label: "Remarques Supplémentaires",
        notes_placeholder: "Décrivez brièvement le motif de votre visite ou tout antécédent médical pertinent",
        submit_btn: "Demander un Rendez-vous",
        submitting_btn: "Envoi en cours...",
        note_html: "Ou appelez-nous directement au <a href=\"tel:+237676199595\" style=\"color:var(--navy);font-weight:600;\">+237 6 76 19 95 95</a> pour les cas urgents."
      },
      success: {
        title: "Presque terminé — vérifiez votre application e-mail.",
        desc: "Nous avons ouvert un e-mail pré-rempli avec votre demande. Appuyez sur Envoyer pour la transmettre à notre équipe de coordination des patients."
      },
      validation: {
        fullName: "Veuillez saisir votre nom complet.",
        email: "Veuillez saisir une adresse e-mail valide.",
        phone: "Veuillez saisir un numéro de téléphone valide.",
        service: "Veuillez sélectionner un service.",
        date: "Veuillez choisir une date souhaitée."
      }
    },

    patients: {
      banner: {
        crumb: "Patients et Familles",
        title_html: "VOUS N'ÊTES<br><span class=\"highlight\">PAS SEUL</span>",
        subtitle: "Patients et Familles",
        tag: "Ensemble pour un Cameroun en Meilleure Santé, Sans Cancer",
        side_html: "Patients.<br>Familles.<br>Communautés.<br>Plus Fortes Ensemble.",
        desc_bold: "Des soins empreints de compassion. Des conseils clairs. Une équipe à vos côtés.",
        desc: "Au Cameroon Oncology Center, nous vous accompagnons, vous et votre famille, du premier rendez-vous au traitement, au rétablissement et au-delà.",
        strip: "Parce que chaque personne compte."
      },
      first_visit: {
        title: "Votre Première Visite au COC",
        intro: "Veuillez apporter les éléments suivants, si disponibles :",
        b1: "Lettre de référence ou notes du médecin",
        b2: "Rapports de pathologie/biopsie",
        b3: "Résultats de laboratoire antérieurs",
        b4: "CT, IRM, échographie, radiographie ou autres examens d'imagerie et leurs rapports",
        b5: "Dossiers de traitements antérieurs (chirurgie, chimiothérapie ou radiothérapie)",
        b6: "Liste des médicaments actuels",
        b7: "Pièce d'identité et documents d'assurance/autorisation",
        note_bold: "Ne retardez pas les soins parce que votre dossier est incomplet.",
        note: "Notre équipe peut vous évaluer et vous aider à déterminer quelles informations ou quels tests supplémentaires sont nécessaires."
      },
      journey: {
        title: "Votre Parcours de Soins au COC",
        s1_t: "Arrivée et Enregistrement", s1_d: "Un accueil chaleureux pour commencer votre parcours",
        s2_t: "Accompagnement par une Infirmière en Oncologie", s2_d: "Votre guide tout au long de vos soins",
        s3_t: "Consultation avec un Spécialiste", s3_d: "Rencontre avec notre équipe d'oncologie",
        s4_t: "Évaluation Diagnostique", s4_d: "Pathologie · Laboratoire · CT · IRM · Échographie · Médecine Nucléaire",
        s5_t: "Plan de Traitement Multidisciplinaire", s5_d: "Des experts qui travaillent ensemble pour vous",
        s6_t: "Traitement", s6_d: "Radiothérapie · Oncologie Médicale · Chirurgie · Autres Soins Spécialisés",
        s7_t: "Soutien Pendant Tout le Traitement", s7_d: "Nutrition · Onco-psychologie · Cardiologie · Pharmacie · Soins Palliatifs",
        s8_t: "Suivi et Survivance", s8_d: "Des soins continus pour un avenir en meilleure santé"
      },
      financial: {
        title: "Accompagnement Financier et Accès aux Soins",
        subtitle: "Parlons du Coût de Vos Soins",
        desc: "Notre équipe vous aidera à comprendre les coûts du traitement, les exigences d'assurance/autorisation et les dispositifs d'aide financière disponibles. Veuillez nous faire part de toute préoccupation financière avant de retarder ou d'abandonner le traitement.",
        goal: "Notre objectif est de vous aider à obtenir les soins dont vous avez besoin."
      },
      family: {
        title: "Les Soins Contre le Cancer, un Parcours Familial",
        desc: "Nous accueillons les membres de la famille et les aidants comme partenaires de soins. Les familles peuvent recevoir une éducation thérapeutique, des conseils sur les médicaments, des conseils nutritionnels, un soutien psychologique et des instructions pour prendre soin du patient entre les visites.",
        caption_html: "De Vraies Personnes.<br>Un Vrai Soutien.<br>Un Vrai Espoir."
      },
      whole_person: {
        title: "Des Soins pour la Personne Toute Entière",
        nurse_t: "Accompagnement Infirmier", nurse_d: "Une personne vous aide à coordonner votre parcours.",
        nutrition_t: "Nutrition", nutrition_d: "Soutien avant, pendant et après le traitement.",
        psycho_t: "Onco-psychologie", psycho_d: "Soutien émotionnel et psychologique pour vous et votre famille.",
        pain_t: "Soins Palliatifs et de la Douleur", pain_d: "Soulagement des symptômes et soutien à la qualité de vie à chaque étape.",
        pharmacy_t: "Pharmacie", pharmacy_d: "Médicaments anticancéreux et accompagnement médicamenteux intégrés au traitement.",
        cardio_t: "Cardio-oncologie", cardio_d: "Évaluation cardiovasculaire spécialisée lorsque le cancer ou son traitement peut affecter le cœur."
      },
      hospitalization: {
        title: "Quand une Hospitalisation Est Nécessaire",
        h1: "90 % d'hospitalisation en chambre individuelle",
        h2: "Maximum 1 infirmière pour 6 patients",
        h3: "Médecin généraliste sur place 24h/24",
        h4: "Visite de l'oncologue deux fois par jour",
        h5: "Quatre niveaux de soins selon la gravité",
        restaurant_t: "Restaurant sur Place",
        restaurant_d: "Des repas et rafraîchissements sont disponibles sur le campus du COC pour les patients, aidants et visiteurs.",
        insurance_t: "Nous Acceptons Toutes les Compagnies d'Assurance",
        insurance_d: "Nous travaillons avec toutes les compagnies d'assurance et vous assisterons dans le processus d'autorisation et de facturation."
      },
      payment: {
        title: "Options de Paiement Flexibles",
        desc: "Vos factures peuvent être réglées par :",
        cash: "Espèces", momo: "MoMo", orange: "Orange Money", bank: "Virement Bancaire", card: "Paiement par Carte (Terminal Visa sur Place)"
      },
      travel: {
        title: "Vous Venez au COC ? Nous Pouvons Vous Aider à Planifier Votre Visite",
        t1: "Coordination du rendez-vous avant le voyage",
        t2: "Examen du dossier médical lorsque possible",
        t3: "Planification du traitement",
        t4: "Informations sur la durée du séjour",
        t5: "Hospitalisation lorsque cliniquement nécessaire",
        t6: "Conseils d'hébergement",
        t7: "Soutien pour la famille et les aidants accompagnants",
        t8: "Communication en français et en anglais",
        side: "Nous Accueillons des Patients de Tout le Cameroun et d'Ailleurs"
      },
      questionnaire: {
        title: "Téléchargez Notre Questionnaire Patient",
        desc: "Gagnez du temps lors de votre visite en remplissant notre court questionnaire pré-visite. Veuillez l'imprimer, le remplir et l'apporter à votre rendez-vous.",
        btn: "Télécharger le Questionnaire Patient (PDF)",
        side: "Préparez Votre Visite"
      },
      need_care: {
        title: "Besoin de Soins Maintenant ?",
        desc: "Nous sommes là pour vous. Contactez-nous pour des rendez-vous, des soins urgents ou des références médicales.",
        a1_t: "Prendre Rendez-vous", a1_d: "Pour les nouvelles consultations, deuxièmes avis et suivis.",
        a2_t: "Soins Urgents", a2_d: "Pour les maladies aiguës, complications liées au traitement du cancer, accidents et urgences médicales générales.",
        a3_t: "Référence Médicale", a3_d: "Pour les médecins qui réfèrent des patients via le réseau de médecins affiliés du COC."
      },
      footer_tagline: "Patients. Familles. Communautés. Un Cameroun en Meilleure Santé."
    },

    research: {
      banner: {
        crumb: "Un Centre d'Excellence en Soins du Cancer Désigné par le Ministère de la Santé Publique",
        title_html: "Recherche, Éducation<br>et Formation",
        subtitle: "Faire Progresser les Connaissances. Former des Professionnels. Améliorer les Soins du Cancer.",
        desc: "Au Cameroon Oncology Center, nous combinons soins cliniques, recherche et éducation pour renforcer les capacités de lutte contre le cancer au Cameroun et en Afrique. Notre équipe multidisciplinaire s'engage à générer de nouvelles connaissances, à former la prochaine génération de professionnels en oncologie et à partager son expertise localement et à l'international.",
        quote_html: "«Formation.<br>Recherche.<br>Nouvel Espoir<br>pour les Générations Futures.»",
        strip: "Personnes. Connaissances. Partenariats. Une Afrique en Meilleure Santé."
      },
      icons: { research: "Excellence en Recherche", train: "Former des Professionnels", capacity: "Renforcer les Capacités", global: "Collaboration Mondiale", care: "Meilleurs Soins du Cancer" },
      clinical: {
        head: "Recherche Clinique et Publications",
        subtitle: "Générer des Preuves. Améliorer des Vies.",
        stat_num: "25+",
        stat_label: "Articles Publiés au Cours des 10 Dernières Années",
        desc: "Notre corps professoral, nos scientifiques et nos chercheurs ont publié plus de 25 articles dans des revues internationales reconnues au cours des 10 dernières années.",
        c1: "Recherche en radiothérapie, oncologie médicale, cardio-oncologie, nutrition et soins de soutien",
        c2: "Recherche sur les systèmes de santé et la mise en œuvre",
        c3: "Accompagnement infirmier en oncologie et résultats pour les patients",
        c4: "Financement des soins du cancer et accès aux soins",
        c5: "Collaborations avec des partenaires nationaux et internationaux",
        link: "Voir Nos Publications",
        linksub: "Faire progresser les connaissances pour l'Afrique."
      },
      school: {
        head: "École des Sciences de la Santé du Cameroon Oncology Center (COC-SHS)",
        subtitle: "Éducation. Pratique. Impact.",
        desc: "L'École des Sciences de la Santé du Cameroon Oncology Center fait partie de l'African University Institute of Sciences and Technology (AUIST). L'École opère depuis le campus principal du COC à Douala, offrant une formation pratique dans un véritable environnement clinique.",
        s1: "Programmes de formation de premier et deuxième cycles",
        s2: "Stages cliniques et expérience pratique",
        s3: "Mentorat en recherche et sur le plan académique",
        s4: "Formation de la prochaine génération de professionnels de santé africains",
        s5: "Contribution à un personnel de santé plus solide pour le Cameroun et la région"
      },
      residency: {
        head: "Formation en Résidence Médicale Parrainée par le COC",
        subtitle: "Investir dans la Prochaine Génération de Spécialistes des Soins du Cancer",
        stat_num: "4",
        stat_label: "Résidents Parrainés par le COC",
        stat_sub: "4 Spécialités · Une Mission",
        stat_note: "Bâtir la future main-d'œuvre camerounaise en soins du cancer",
        desc: "Cameroon Oncology Center parraine actuellement quatre médecins en formation de résidence spécialisée dans :",
        spec1: "Oncologie Clinique", spec2: "Oncologie Médicale", spec3: "Chirurgie Générale", spec4: "Gynécologie",
        r1: "Soutien financier pour la formation en résidence",
        r2: "Mentorat clinique par les spécialistes du COC",
        r3: "Exposition à un environnement de soins du cancer multidisciplinaire",
        r4: "Préparation des futurs leaders en oncologie pour le Cameroun et l'Afrique",
        r5: "Engagement envers le développement à long terme du personnel",
        quote: "«Investir dans les personnes. Renforcer demain.»"
      },
      teleoncology: {
        head: "Éducation Internationale et Télé-Oncologie",
        subtitle: "Connecter le Cameroun à l'Expertise Mondiale",
        t1: "Conseils tumoraux virtuels et discussions de cas multidisciplinaires",
        t2: "Consultations avec des experts internationaux",
        t3: "Formation sur la planification des traitements et les nouvelles technologies",
        t4: "Télé-mentorat pour le COC et les prestataires du réseau affilié",
        t5: "Opportunités pour les professeurs invités et les rotations internationales",
        quote: "«Connaissances mondiales. Impact local.»"
      },
      cpe: {
        head: "Formation Professionnelle Continue",
        subtitle: "Un Apprentissage Continu pour un Système de Soins du Cancer Plus Solide",
        c1: "Programmes de FMC réguliers, ateliers et séminaires",
        c2: "Formation pour médecins, infirmières, radiothérapeutes, physiciens médicaux, pharmaciens, technologues et autres professionnels de santé",
        c3: "Éducation pour les médecins du réseau affilié",
        c4: "Mises à jour sur les nouvelles directives, technologies et meilleures pratiques",
        c5: "Participation aux conseils tumoraux multidisciplinaires",
        c6: "Apprentissage pratique basé sur des cas"
      },
      next_gen: {
        head: "Former la Prochaine Génération",
        subtitle: "Étudiants Aujourd'hui. Leaders des Soins du Cancer Demain.",
        n1: "Résidents et boursiers en oncologie",
        n2: "Étudiants en médecine, en soins infirmiers et professions de santé associées",
        n3: "Stagiaires en recherche et professionnels invités",
        n4: "Exposition à des soins du cancer complets et concrets",
        n5: "Mentorat et développement de carrière",
        quote: "«Apprendre. Servir. Diriger. Pour une Afrique en meilleure santé.»"
      },
      pathway: {
        title: "Notre Parcours : Des Connaissances vers un Cameroun et une Afrique en Meilleure Santé",
        p1_t: "Soins Cliniques", p1_s: "Expérience Concrète",
        p2_t: "Recherche", p2_s: "Nouvelles Connaissances",
        p3_t: "Éducation", p3_s: "Partager et Enseigner",
        p4_t: "Formation Professionnelle", p4_s: "Compétences et Capacités",
        p5_t: "Partage des Connaissances", p5_s: "Local et Mondial",
        p6_t: "Meilleurs Soins du Cancer", p6_s: "Pour le Cameroun et l'Afrique"
      },
      contact_btn: "Devenir Partenaire en Recherche et Formation",
      strip1: "Soins Aujourd'hui. Espoir Demain.",
      strip2_l: "Pour un Cameroun en Meilleure Santé.",
      strip2_r: "Pour une Afrique Plus Forte."
    },

    medonc: {
      banner: {
        label: "Nos Services",
        title: "Oncologie Médicale",
        subtitle: "Des Soins Complets Contre le Cancer. Personnalisés pour Vous.",
        desc: "Au Cameroon Oncology Center, notre équipe d'oncologie médicale fournit un traitement fondé sur des données probantes pour un large éventail de cancers, en utilisant les thérapies les plus récentes et une approche multidisciplinaire pour obtenir les meilleurs résultats possibles. Nous combinons expertise clinique, compassion et soutien pour accompagner chaque patient tout au long de son parcours contre le cancer.",
        tag_html: "Plus<br>qu'un Traitement.<br>Un Avenir<br>Plus Radieux."
      },
      icons: { team: "Équipe Expérimentée", therapies: "Thérapies Avancées", safety: "Sécurité des Patients", holistic: "Soutien Global", multi: "Soins Multidisciplinaires", outcomes: "Meilleurs Résultats" },
      services: {
        head: "Nos Services d'Oncologie Médicale",
        chemo_t: "Chimiothérapie", chemo_d: "Protocoles de chimiothérapie standards et combinés, à visée curative ou palliative.",
        targeted_t: "Thérapie Ciblée", targeted_d: "Thérapies ciblées modernes pour certains cancers.",
        immuno_t: "Immunothérapie", immuno_d: "Immunothérapie pour les indications appropriées.",
        hormonal_t: "Hormonothérapie", hormonal_d: "Hormonothérapie pour les cancers hormono-sensibles (ex. sein, prostate).",
        supportive_t: "Soins de Soutien", supportive_d: "Prise en charge des symptômes et des effets secondaires liés au traitement.",
        monitoring_t: "Suivi du Traitement", monitoring_d: "Évaluation régulière de la réponse au traitement et de la toxicité.",
        education_t: "Éducation du Patient", education_d: "Informations et conseils pour vous aider à comprendre votre traitement.",
        palliative_t: "Soins Palliatifs et de Fin de Vie", palliative_d: "Soulagement des symptômes et amélioration de la qualité de vie."
      },
      cancers: {
        head: "Cancers Traités",
        c1: "Cancer du Sein", c2: "Cancer de la Prostate", c3: "Cancers Gynécologiques (col, ovaire, endomètre)",
        c4: "Cancers Gastro-intestinaux (colorectal, gastrique, etc.)", c5: "Cancer du Poumon", c6: "Cancers de la Tête et du Cou",
        c7: "Cancers Hématologiques (lymphome, leucémie, etc.)", c8: "Cancer du Foie", c9: "Cancers Génito-urinaires",
        c10: "Cancers de la Peau", c11: "Cancers Pédiatriques", c12: "Autres Tumeurs Solides"
      },
      facilities: {
        head: "Options de Traitement et Installations",
        infusion_t: "Centre de Perfusion", infusion_d: "Un espace confortable et moderne avec du personnel infirmier expérimenté.",
        rooms_t: "Chambres Privées", rooms_d: "Pour les patients qui préfèrent un cadre plus privé et personnalisé."
      },
      protocols: {
        head: "Nos Protocoles de Traitement",
        p1: "Plus de 30 protocoles différents de chimiothérapie et de thérapie systémique",
        p2: "Protocoles à visée curative ou palliative",
        p3: "Régimes de chimio-irradiation pour les cancers tels que le col de l'utérus, le colorectal et la plupart des cancers de la tête et du cou",
        p4: "Régulièrement mis à jour selon les directives internationales",
        p5: "Adaptés aux besoins individuels de chaque patient"
      },
      notalone: {
        title: "Vous N'êtes Pas Seul",
        desc: "Notre équipe multidisciplinaire de médecins, infirmières, pharmaciens, nutritionnistes, conseillers psychosociaux et spécialistes des soins palliatifs travaille ensemble pour vous soutenir, vous et votre famille.",
        tagline: "Soin. Soutien. Espoir. Toujours."
      },
      team: {
        head: "Notre Équipe d'Oncologie Médicale",
        t1n: "Dr Lana Mohamed Khair Ahmed", t1r: "Cheffe de l'Unité d'Oncologie Médicale", t1s: "Oncologue Médicale", t1e: "Temps plein",
        t2n: "Dr Kamtcheu Djeuga Ronny", t2r: "Oncologue Médical", t2e: "Temps plein",
        t3n: "Dr Glenda Ndiarah Nkeng", t3r: "Oncologue Médicale", t3e: "Temps partiel",
        t4n: "Dr Ngolette Ngo Tega", t4r: "Oncologue Médicale", t4e: "Temps partiel",
        t5n: "Professeur Edmund Folefac", t5r: "Oncologue Médical en Chef, États-Unis", t5e: "Télé-oncologie Internationale",
        nurses_t: ">10 Infirmières en Oncologie", nurses_d: "Une équipe infirmière dévouée et expérimentée offrant des soins sûrs et empreints de compassion."
      },
      impact: {
        head: "Notre Impact (2025)",
        n1: "451", l1: "Patients Traités",
        n2: "1 951", l2: "Administrations de Thérapie Systémique",
        n3: ">30", l3: "Protocoles de Traitement",
        n4: "90,3 %", l4: "Chimiothérapie Conventionnelle",
        n5: "9,7 %", l5: "Thérapie Ciblée et Immunothérapie",
        strip: "Personnes Réelles. Progrès Réels. Un Cameroun en Meilleure Santé."
      },
      support: {
        head: "Services de Soutien aux Patients",
        s1: "Conseil Nutritionnel", s2: "Soutien Psychosocial", s3: "Gestion des Effets Secondaires", s4: "Soins Palliatifs", s5: "Éducation du Patient", s6: "Conseil Familial"
      },
      banner_strip: "Ensemble pour un Cameroun Sans Cancer.",
      contact: {
        title: "Besoin d'un Rendez-vous en Oncologie Médicale ?",
        desc: "Notre équipe est là pour répondre à vos questions et vous guider dans vos options de traitement.",
        btn1: "Demander un Rendez-vous", btn2: "Appelez-nous", btn3: "Envoyez-nous un E-mail",
        tagline: "Soins Experts. Plus Proches de Vous."
      }
    },

    nuclearmed: {
      banner: {
        label: "Nos Services",
        title: "Médecine Nucléaire",
        subtitle: "Imagerie Moléculaire. Meilleur Diagnostic. Soins du Cancer Mieux Informés.",
        desc: "Au Cameroon Oncology Center, notre service de médecine nucléaire utilise de petites quantités de matière radioactive (radiotraceurs) pour montrer le fonctionnement du corps au niveau cellulaire. Cela permet de détecter les maladies précocement, de stadifier le cancer, de guider le traitement et de suivre la réponse avec précision et attention.",
        equipment: "GE Discovery NM/CT 670 SPECT-CT",
        equipment_sub: "Technologie Avancée pour de Meilleurs Soins",
        quote_html: "«Soutenir<br>la fonction.<br>Changer des vies.»"
      },
      icons: { early: "Détection Précoce", personalized: "Soins Personnalisés", monitoring: "Suivi du Traitement", safe: "Sûr et Efficace", outcomes: "Meilleurs Résultats" },
      services: {
        head: "Nos Services de Médecine Nucléaire",
        onc_t: "Imagerie Oncologique et du Cancer",
        onc1: "Stadification et restadification du cancer", onc2: "Détection de maladie métastatique", onc3: "Scintigraphie osseuse pour métastases, fractures et tumeurs", onc4: "Imagerie du ganglion sentinelle", onc5: "Évaluation de la réponse au traitement et de la récidive", onc6: "Évaluation de tumeurs (ex. pancréas, glandes surrénales)",
        cardiac_t: "Médecine Nucléaire Cardiaque",
        cardiac1: "Imagerie de perfusion myocardique", cardiac2: "Évaluation du flux sanguin et de la fonction cardiaque", cardiac3: "Détection de la maladie coronarienne", cardiac4: "Évaluation de la fonction cardiaque après un infarctus", cardiac5: "Scintigraphies MUGA avant et après chimiothérapie",
        renal_t: "Médecine Nucléaire Rénale",
        renal1: "Évaluation de la fonction rénale et de l'obstruction des voies urinaires", renal2: "Évaluation de l'hypertension d'origine rénale", renal3: "Évaluation d'une infection rénale", renal4: "Évaluation d'un flux urinaire anormal (reflux)",
        thyroid_t: "Imagerie Thyroïdienne et Endocrinienne",
        thyroid1: "Diagnostic des nodules thyroïdiens et du cancer de la thyroïde", thyroid2: "Évaluation de l'hyperthyroïdie", thyroid3: "Localisation d'un adénome parathyroïdien", thyroid4: "Évaluation des troubles endocriniens",
        other_t: "Autres Applications",
        other1: "Imagerie cérébrale pour épilepsie, pertes de mémoire et problèmes de flux sanguin", other2: "Études gastro-intestinales (ex. vidange gastrique)", other3: "Ventilation/perfusion pulmonaire (V/Q)", other4: "Imagerie des infections et inflammations", other5: "Imagerie hématologique"
      },
      how: {
        head: "Comment se Déroule un Examen de Médecine Nucléaire",
        s1: "Référence et Planification", s2: "Préparation du Patient", s3: "Administration du Radiotraceur", s3d: "(injection, orale ou inhalée)",
        s4: "Période de Fixation", s4d: "(durée variable)", s5: "Imagerie SPECT-CT", s5d: "(20 minutes à plusieurs heures)",
        s6: "Analyse et Interprétation des Images", s7: "Rapport au Médecin Référent"
      },
      team: {
        head: "Notre Équipe de Médecine Nucléaire",
        t1n: "Dr Fabrice Folouse", t1r: "Médecin en Médecine Nucléaire / Consultant",
        t2n: "Grace Freda Mukami", t2r: "Technologue en Médecine Nucléaire et Formatrice",
        t3n: "M. Derrick Ndikwaosoh", t3r: "Responsable, Radiologie et Imagerie"
      },
      safety: {
        head: "Informations et Sécurité du Patient",
        s1: "Utilise de petites quantités de matière radioactive (radiotraceurs)",
        s2: "Les examens sont généralement sûrs avec un faible risque radiologique",
        s3: "Veuillez nous informer si vous êtes enceinte ou allaitez",
        s4: "Informez votre médecin de tous vos médicaments, allergies et maladies récentes",
        s5: "La plupart des procédures sont ambulatoires, non invasives et généralement indolores"
      },
      contact: {
        title: "Besoin d'un Rendez-vous en Médecine Nucléaire ?",
        desc: "Notre équipe est là pour vous aider. Contactez-nous pour planifier un rendez-vous ou pour plus d'informations."
      }
    },

    spectct: {
      banner: {
        title: "Médecine Nucléaire",
        subtitle: "SPECT-CT pour la Santé des Femmes",
        tag: "Imagerie Fonctionnelle. Localisation Précise. Soins Mieux Informés.",
        desc: "Des soins du cancer à l'évaluation cardiaque, en passant par la santé osseuse et les maladies endocriniennes, la SPECT-CT peut fournir des informations fonctionnelles et anatomiques précieuses pour les femmes à différentes étapes de la vie.",
        quote_html: "«Des réponses plus tôt.<br>Plus de possibilités.<br>Des lendemains en meilleure santé.»",
        side: "Soutenir la Santé des Femmes à Chaque Étape de la Vie."
      },
      icons: { prevent: "Détecter la maladie tôt", diagnose: "Fournir des informations précises", guide: "Soutenir un traitement personnalisé", monitor: "Suivre la réponse au traitement", empower: "De meilleurs résultats pour les femmes" },
      table: {
        head: "Applications Clés de la SPECT-CT dans la Santé des Femmes",
        col1: "Domaine Médical", col2: "Application SPECT-CT", col3: "Bénéfice Clinique Principal",
        area1: "Oncologie Gynécologique et Mammaire",
        area1_r1_app: "Cartographie du Ganglion Sentinelle (GS)", area1_r1_benefit: "Aide à guider les ganglions pour la biopsie afin d'éviter une chirurgie extensive et de réduire le risque de lymphœdème chronique",
        area1_r2_app: "Imagerie Mammaire (applications sélectionnées)", area1_r2_benefit: "Fournit des informations fonctionnelles pouvant compléter l'imagerie conventionnelle dans des cas bien sélectionnés",
        area1_r3_app: "Stadification et Délimitation Pelvienne", area1_r3_benefit: "Aide à isoler les tissus malins d'une anatomie complexe et peut détecter de petites récidives locales",
        area2: "Évaluation Cardiovasculaire",
        area2_r1_app: "Correction d'Atténuation", area2_r1_benefit: "Réduit les fausses ombres causées par les tissus mammaires, améliorant la précision diagnostique et évitant des examens invasifs inutiles",
        area2_r2_app: "Imagerie de Perfusion Myocardique", area2_r2_benefit: "Fournit une évaluation fonctionnelle du flux sanguin et de la fonction cardiaque, y compris chez les femmes avec une maladie coronarienne connue ou suspectée",
        area3: "Ostéoporose et Santé Osseuse",
        area3_r1_app: "Différenciation de la Douleur", area3_r1_benefit: "Aide à distinguer les fractures ostéoporotiques de l'arthrite ou des lésions malignes en combinant informations métaboliques et structurelles",
        area3_r2_app: "Détection de Fracture Occulte", area3_r2_benefit: "Peut détecter de discrètes fractures d'insuffisance pelvienne ou vertébrale avant une fracture invalidante",
        area4: "Prise en Charge Endocrinienne",
        area4_r1_app: "Localisation d'Adénome Parathyroïdien", area4_r1_benefit: "Localise précisément les adénomes ectopiques pour permettre une chirurgie cervicale ciblée et peu invasive",
        area4_r2_app: "Caractérisation des Nodules Thyroïdiens", area4_r2_benefit: "Cartographie les nodules hyperfonctionnels ou non fonctionnels directement sur l'anatomie du cou"
      },
      why: {
        head: "Pourquoi la SPECT-CT Compte pour les Femmes",
        w1: "Combine des informations fonctionnelles et anatomiques",
        w2: "Aide à guider des traitements moins invasifs et plus ciblés",
        w3: "Soutient une stadification et un suivi précis",
        w4: "Utile dans un large éventail de conditions affectant les femmes"
      },
      commitment: {
        head: "Notre Engagement",
        desc: "Nous nous engageons à fournir des services de médecine nucléaire avancés répondant aux besoins particuliers des femmes, avec compassion, respect et des soins personnalisés."
      },
      health_matters: {
        head: "Votre Santé Compte",
        quote: "«Des familles autonomisées bâtissent des familles en meilleure santé et des communautés plus fortes.»",
        cite: "— Cameroon Oncology Center"
      },
      contact: {
        title: "Besoin d'un Rendez-vous ou de Plus d'Informations ?",
        desc: "Notre équipe est là pour vous aider. Contactez-nous dès aujourd'hui."
      },
      footer_tagline: "Soins pour les Femmes. Soins pour les Familles. Un Cameroun en Meilleure Santé."
    },

    directions: {
      banner: {
        crumb: "Comment Nous Trouver",
        title: "Comment se Rendre au COC",
        subtitle: "Cameroon Oncology Center — Carrefour Palmeraie, Bekoko-Dibombari, Douala",
        tag: "Facile à Trouver. Plus Près de Vous."
      },
      location: {
        head: "Notre Localisation",
        name: "Cameroon Oncology Center",
        address: "Carrefour Palmeraie, Bekoko-Dibombari, Douala",
        pluscode: "Code Plus : 4HCV+3J5, Bonabéri, Cameroun",
        maplink: "Voir sur Google Maps",
        map_label: "Espace carte — itinéraire vers le COC (images/directions-map.jpg)"
      },
      route: {
        head: "Itinéraire vers Cameroon Oncology Center",
        s1: "Depuis Douala, prenez la route N3 en direction de Dibombari.",
        s2: "Continuez sur la N3 en passant l'échangeur de Yapak-Bakoko.",
        s3: "Après Carrefour Palmeraie, tournez à droite en direction de la route d'accès au COC (comme indiqué sur la carte).",
        s4: "Suivez la route sur une courte distance. Le Cameroon Oncology Center sera sur votre droite."
      },
      landmarks: {
        head: "Points de Repère (comme sur la carte)",
        l1: "Carrefour Palmeraie (N3)", l2: "CAPOGCO", l3: "Clinical Italian Bakoko", l4: "Échangeur de Yapak-Bakoko",
        l5: "Le Zenith Bilingual School Complex", l6: "Shiloh Church of Nations (SCON)", l7: "Parc Camion Bekoko"
      },
      travel: {
        head: "Temps de Trajet (Estimation)",
        from_douala_label: "Depuis le centre-ville de Douala :", from_douala: "30–45 minutes (selon la circulation)",
        from_bonaberi_label: "Depuis Bonabéri :", from_bonaberi: "15–25 minutes"
      },
      photo_caption: "Un centre moderne de lutte contre le cancer pour un Cameroun en meilleure santé.",
      insurance_title: "Nous Acceptons Toutes les Compagnies d'Assurance",
      insurance_desc: "Nous travaillons avec toutes les compagnies d'assurance et vous assisterons dans le processus d'autorisation et de facturation.",
      contact_head: "Contactez-nous",
      doctor_on_call: "Médecin de garde"
    },

    radiology: {
      banner: {
        label: "Nos Services",
        title: "Radiologie et Imagerie Diagnostique",
        subtitle: "Images Claires. Décisions Confiantes. Lendemains Meilleurs.",
        desc: "Au Cameroon Oncology Center, nos services de radiologie et d'imagerie fournissent une imagerie fiable et de haute qualité pour soutenir le diagnostic du cancer, la planification du traitement, l'évaluation de la réponse et le suivi à long terme. Nous travaillons en étroite collaboration avec notre équipe multidisciplinaire pour offrir des soins précis, rapides et centrés sur le patient.",
        tag_html: "Imagerie Avancée.<br>Meilleurs Soins du Cancer.",
        equipment_caption: "Scanner CT Philips pour l'Imagerie Diagnostique"
      },
      icons: { accurate: "Diagnostic Précis", modern: "Équipement Moderne", team: "Équipe Expérimentée", safety: "Sécurité des Patients", multi: "Soins Multidisciplinaires", compassionate: "Service Empreint de Compassion" },
      services: {
        head: "Nos Services d'Imagerie",
        ct_t: "Tomodensitométrie (CT)",
        ct1: "Scanners CT diagnostiques pour le diagnostic et la stadification du cancer", ct2: "Imagerie multi-coupes haute résolution", ct3: "Procédures guidées par CT (biopsie, drainage)", ct4: "Évaluation de la réponse au traitement", ct5: "Études du corps entier et spécialisées",
        mri_t: "Imagerie par Résonance Magnétique (IRM)",
        mri_equip: "IRM Ouverte Hitachi AIRIS Elite 0,35 T",
        mri1: "IRM à conception ouverte pour un meilleur confort", mri2: "Imagerie du cerveau, de la colonne et de parties sélectionnées du corps", mri3: "Diagnostic, stadification et suivi du cancer", mri4: "Évaluation des tissus mous", mri5: "Soutien préopératoire et à la planification du traitement",
        us_t: "Échographie",
        us1: "Échographie abdominale et pelvienne", us2: "Échographie mammaire et thyroïdienne", us3: "Procédures guidées par image", us4: "Études vasculaires et Doppler", us5: "Imagerie de suivi et de surveillance",
        ctsim_t: "Simulation CT pour la Radiothérapie",
        ctsim1: "Simulateur CT Philips Big Bore", ctsim2: "Imagerie haute précision pour la planification de la radiothérapie", ctsim3: "Systèmes d'immobilisation et de positionnement", ctsim4: "Délimitation précise de la cible", ctsim5: "Compatible avec la 3D avancée, l'IMRT et d'autres techniques de radiothérapie"
      },
      clinical: {
        head: "Applications Cliniques",
        c1: "Diagnostic et stadification du cancer", c2: "Évaluation de la maladie métastatique", c3: "Suivi de la réponse au traitement", c4: "Planification préopératoire et pré-radiothérapie",
        c5: "Détection de récidive", c6: "Évaluation des complications liées au traitement", c7: "Interventions guidées par image", c8: "Surveillance à long terme"
      },
      impact: {
        head: "Notre Impact (2025)",
        n1: "985", l1: "Scanners CT", n2: "23", l2: "Études IRM", n3: "75", l3: "Études Échographiques", n4: "1 531", l4: "Études d'Imagerie au Total"
      },
      quote: { text: "«Une imagerie de haute qualité soutient chaque étape du parcours contre le cancer.»", cite: "— Cameroon Oncology Center", caption: "Interprétation Experte pour de Meilleurs Soins" },
      team: {
        head: "Notre Équipe de Radiologie et d'Imagerie",
        radiologists: "Radiologues (2)", technologists: "Technologues en Radiologie (4)",
        t1n: "Dr Joshua Tambe", t1r: "Radiologue",
        t2n: "Dr Bhavesh Patel", t2r: "Radiologue", t2s: "(Fournit des Services de Télé-radiologie)",
        t3n: "M. Ndikwaosoh Derrick", t3r: "Responsable, Radiologie et Imagerie",
        t4n: "M. Ndeme Mercel", t4r: "Technologue en Radiologie",
        t5n: "Mme Sandy ndzi Mugob", t5r: "Technologue en Radiologie",
        t6n: "M. Yves Cesaire Monthe", t6r: "Technologue en Radiologie"
      },
      why: {
        head: "Pourquoi Choisir le COC pour la Radiologie et l'Imagerie ?",
        w1: "Équipement moderne et bien entretenu (CT, IRM, échographie)",
        w2: "Radiologues et technologues expérimentés",
        w3: "Intégré aux soins oncologiques (chirurgie, oncologie médicale, radiothérapie)",
        w4: "Rapports rapides et précis",
        w5: "Service centré sur le patient",
        w6: "Engagement envers la sécurité, la qualité et de meilleurs résultats"
      },
      highlight_title: "L'Imagerie Aujourd'hui pour un Avenir en Meilleure Santé.",
      contact: { title: "Besoin d'un Rendez-vous d'Imagerie ?", desc: "Notre équipe est là pour vous aider à planifier un rendez-vous ou pour plus d'informations." }
    },

    urgentcare: {
      banner: {
        title_html: "Soins Urgents et<br>Services d'Urgence",
        subtitle: "Soins 24h/24 pour les Patients Atteints de Cancer, les Accidents et les Urgences Médicales Générales.",
        desc: "Le COC est plus qu'un centre d'urgence oncologique. Notre service de soins urgents est ouvert à toute la communauté. Vous n'avez pas besoin d'être un patient atteint de cancer pour recevoir des soins médicaux au Cameroon Oncology Center.",
        tag_html: "Des Soins de Qualité.<br>Pour Chaque Patient.<br>Chaque Jour.<br>À Tout Moment."
      },
      icons: {
        open_html: "Ouvert<br>24 Heures<br>7 Jours sur 7",
        physician_html: "Médecin<br>Généraliste<br>Sur Place 24h/24",
        oncologist_html: "Oncologues<br>Sur Place 24h/24<br>pour les Urgences",
        care_html: "Soins pour<br>Patients Cancéreux<br>et Non Cancéreux"
      },
      onc: {
        head: "Urgences Oncologiques",
        lead: "Soins urgents pour les patients atteints de cancer à tout stade du traitement",
        i1: "Fièvre ou suspicion d'infection (surtout pendant la chimiothérapie)",
        i2: "Douleur sévère ou aggravation soudaine des symptômes du cancer",
        i3: "Déshydratation, vomissements ou diarrhée persistants",
        i4: "Problèmes respiratoires ou essoufflement",
        i5: "Saignement",
        i6: "Anémie sévère ou autres problèmes sanguins",
        i7: "Réactions au traitement et complications de la chimiothérapie",
        i8: "Urgences neurologiques (ex. suspicion de compression médullaire)",
        i9: "Obstruction urinaire",
        i10: "Complications aiguës d'un cancer avancé",
        i11: "Toute autre préoccupation oncologique urgente"
      },
      general: {
        head: "Soins Médicaux Généraux et Accidents",
        lead: "Soins urgents pour toute la communauté",
        i1: "Patients accidentés et blessés (chutes, accidents de la route, etc.)",
        i2: "Paludisme et autres maladies fébriles",
        i3: "Infections (respiratoires, urinaires, gastro-intestinales, etc.)",
        i4: "Déshydratation et vomissements ou diarrhée persistants",
        i5: "Problèmes liés à l'hypertension",
        i6: "Diabète et autres affections médicales aiguës",
        i7: "Douleurs abdominales et autres troubles gastro-intestinaux",
        i8: "Essoufflement et symptômes thoraciques",
        i9: "Soins des plaies et petites interventions",
        i10: "Contrôles médicaux de routine et dépistage",
        i11: "Toute autre préoccupation médicale urgente non cancéreuse"
      },
      maternity: {
        head: "Soins d'Urgence en Maternité",
        lead: "Des soins sûrs pour les mères et les nouveau-nés",
        stat_num: "70+", stat_label: "Bébés Nés au COC",
        stat_desc: "Au cours des 7 dernières années, le COC a assisté à la naissance de plus de 70 bébés venus à nous via les soins d'urgence.",
        i1: "Évaluation et stabilisation obstétricale d'urgence",
        i2: "Prise en charge du travail et de l'accouchement (si indiqué)",
        i3: "Prise en charge des complications liées à la grossesse",
        i4: "Soins et stabilisation du nouveau-né",
        i5: "Référence vers des soins de maternité/obstétrique hospitaliers si nécessaire",
        i6: "Soutien pour la mère et le bébé",
        quote: "«Nouveaux départs. Lendemains meilleurs. Pour les familles. Pour le Cameroun.»"
      },
      pathway: {
        head: "Votre Parcours de Soins",
        subtitle: "Rapide. Organisé. Complet.",
        s1: "Arrivée", s1s: "(Tout Patient)",
        s2: "Évaluation Rapide et Triage",
        s3: "Évaluation par le Médecin Généraliste",
        s4: "Laboratoire et Imagerie si Nécessaire", s4s: "(analyses de sang, radiographie, CT, etc.)",
        s5: "Consultation Spécialisée", s5s: "(Oncologue ou Autre)",
        s6: "Traitement et Stabilisation",
        s7: "Sortie ou Admission Hospitalière", s7s: "(si nécessaire)"
      },
      access: {
        head: "Avec un Accès Immédiat à Tous les Services du COC",
        a1: "Imagerie", a1s: "(CT, IRM, Échographie, Radiographie)",
        a2: "Services de Laboratoire", a3: "Pharmacie", a4: "Oncologie Médicale", a5: "Oncologie Radiothérapique",
        a6: "Chirurgie", a7: "Soins Hospitaliers", a8: "Soutien Nutritionnel", a9: "Onco-psychologie et Soutien Social"
      },
      contact_btn: "Visitez Nos Soins Urgents"
    },

    nutrition: {
      banner: {
        title_html: "Nutrition et<br>Diététique",
        subtitle: "Nutrition en Oncologie – Soutenir la Force Tout au Long du Parcours Contre le Cancer",
        desc: "Notre Unité de Nutrition fournit des soins nutritionnels individualisés pour aider les patients à maintenir leur force, améliorer la tolérance au traitement, renforcer la qualité de vie et obtenir de meilleurs résultats.",
        quote_html: "Bonne Nutrition.<br>Patients Plus Forts.<br>Lendemains Plus Radieux."
      },
      icons: { tolerance: "Meilleure Tolérance au Traitement", strength: "Maintien de la Force et du Poids", complications: "Moins de Complications", qol: "Qualité de Vie Améliorée", support: "Soutien aux Patients et aux Familles" },
      specialist: {
        head: "Rencontrez Notre Nutritionniste",
        name: "Dr Guimeya Michelle", role: "Nutritionniste",
        bio: "Le Dr Guimeya Michelle dirige notre Unité de Nutrition, offrant des soins nutritionnels fondés sur des données probantes aux patients atteints de cancer. Elle se consacre à aider les patients et les familles à maintenir leur force, gérer les effets secondaires du traitement et améliorer leur bien-être général grâce à un accompagnement nutritionnel personnalisé."
      },
      when: {
        head: "Quand Consulter Notre Nutritionniste ?",
        w1: "Perte de poids involontaire", w2: "Perte d'appétit ou réduction de l'apport alimentaire", w3: "Nausées, vomissements, diarrhée ou constipation", w4: "Difficulté à avaler ou à manger",
        w5: "Changements de poids importants pendant le traitement", w6: "Malnutrition ou faible poids corporel", w7: "Besoin de conseils sur l'alimentation pendant le traitement du cancer", w8: "Avant ou après une chirurgie", w9: "Pour un soutien pendant la survie ou les soins palliatifs"
      },
      services: {
        head: "Nos Services de Nutrition",
        s1: "Évaluation nutritionnelle via PG-SGA", s2: "Conseils diététiques individualisés et planification des repas", s3: "Soutien nutritionnel pendant la chimiothérapie, la radiothérapie et la chirurgie",
        s4: "Gestion des symptômes liés à la nutrition (ex. nausées, vomissements, changements de goût)", s5: "Suppléments nutritionnels oraux", s6: "Nutrition entérale (alimentation par sonde) si nécessaire",
        s7: "Nutrition parentérale si indiquée", s8: "Éducation nutritionnelle pour patients et aidants", s9: "Suivi à long terme et nutrition de survivance", s10: "Collaboration avec l'équipe multidisciplinaire"
      },
      pathway: {
        head: "Notre Parcours de Soins Nutritionnels", subtitle: "Soutien Nutritionnel Personnalisé du Diagnostic à la Survie",
        p1_t: "Dépistage Nutritionnel", p1_d: "Identification précoce du risque nutritionnel",
        p2_t: "Évaluation PG-SGA", p2_d: "Évaluation complète du statut nutritionnel",
        p3_t: "Plan Nutritionnel Individualisé", p3_d: "Conseils diététiques et intervention adaptés",
        p4_t: "Soutien Oral, Entéral ou Parentéral", p4_d: "Selon les besoins du patient",
        p5_t: "Suivi Pendant le Traitement", p5_d: "Suivi du poids, de l'apport, des symptômes et de la réponse",
        p6_t: "Récupération et Survie", p6_d: "Soutien continu pour un avenir en meilleure santé"
      },
      experience: {
        head: "Notre Expérience au COC (Jan 2025 – Juin 2026)",
        total: "256", total_label: "Patients évalués pour leur statut nutritionnel (via PG-SGA)",
        status_head: "Statut Nutritionnel", well: "Bien nourri (25,8 %)", moderate: "Modérément malnutri (36,3 %)", severe: "Sévèrement malnutri (37,9 %)",
        note: "74,2 % des patients présentaient une malnutrition modérée ou sévère"
      },
      support_types: {
        head: "Types de Soutien Nutritionnel Fournis",
        oral: "72,7 %", oral_label: "Soutien nutritionnel oral",
        enteral: "10,9 %", enteral_label: "Nutrition entérale (alimentation par sonde)",
        parenteral: "16,4 %", parenteral_label: "Nutrition parentérale"
      },
      quote2: "«Une bonne nutrition est un élément puissant du traitement du cancer.»",
      tagline: "Nourrir. Guérir. Mieux Vivre.",
      integrated: { head: "Soins Intégrés pour de Meilleurs Résultats", desc: "Nous travaillons en étroite collaboration avec :" },
      footer_tagline: "Une Nutrition Saine. Des Vies Plus Fortes."
    },

    cardiology: {
      banner: {
        title_html: "Cardiologie et<br>Cardio-Oncologie",
        subtitle: "Protéger Votre Cœur Avant, Pendant et Après le Traitement du Cancer",
        desc: "Nous fournissons des soins cardiovasculaires complets pour les patients atteints de cancer et la communauté, combinant expertise clinique, technologie moderne et approche multidisciplinaire pour assurer un traitement du cancer plus sûr et une meilleure santé cardiaque.",
        quote: "«Un cœur en bonne santé pour une lutte plus forte contre le cancer.»"
      },
      icons: { prevention: "Prévention et Détection Précoce", safe: "Traitement du Cancer Sécurisé", multi: "Soins Multidisciplinaires", survival: "Meilleure Survie et Qualité de Vie" },
      team: {
        head: "Notre Équipe de Cardiologie", subtitle: "Expérimentée. Empreinte de Compassion. Engagée envers Votre Santé Cardiaque.",
        t1n: "Dr Kemayou Francine", t1r: "Cardio-oncologue", t1s: "Formation spécialisée en France", t1d: "Concentrée sur les soins cardiovasculaires des patients atteints de cancer avant, pendant et après le traitement.",
        t2n: "Dr Souksouna Fanny", t2r: "Cardiologue Générale", t2d: "Soins cardiovasculaires complets pour la communauté, y compris hypertension, insuffisance cardiaque, arythmies et maladies coronariennes.",
        t3n: "Soutien en Télé-cardiologie (É.-U.)", t3r: "Deuxième Avis International", t3d: "Collaboration avec des cardiologues américains pour les cas complexes et les tests spécialisés (ex. imagerie avancée, cas de cardio-oncologie) si nécessaire."
      },
      symptoms: { head: "Symptômes Courants que Nous Évaluons", s1: "Douleur ou gêne thoracique", s2: "Essoufflement", s3: "Palpitations (rythme cardiaque irrégulier)", s4: "Gonflement des jambes (œdème)", s5: "Hypertension artérielle", s6: "Fatigue", s7: "Vertiges ou évanouissements" },
      carefor: {
        head: "Nous Prenons en Charge",
        c1: "Les patients débutant une chimiothérapie, thérapie ciblée ou immunothérapie", c2: "Les patients recevant une radiothérapie (surtout thoracique/mammaire)",
        c3: "L'évaluation cardiaque préopératoire", c4: "Le suivi pendant et après le traitement du cancer", c5: "Les maladies cardiovasculaires générales de l'adulte", c6: "La survie et la santé cardiaque à long terme"
      },
      services: {
        head: "Nos Services de Cardiologie",
        s1_t: "Consultation de Cardiologie", s1_d: "Évaluation complète et soins personnalisés",
        s2_t: "Électrocardiogramme (ECG)", s2_d: "Diagnostic rapide et précis des troubles du rythme cardiaque",
        s3_t: "Échocardiographie (2D, Doppler, Strain)", s3_d: "Imagerie cardiaque avancée pour évaluer la structure et la fonction du cœur",
        s4_t: "Test d'Effort", s4_d: "Évaluation de la performance cardiaque pendant l'activité physique",
        s5_t: "Holter 24/48 Heures", s5_d: "Surveillance continue du rythme cardiaque",
        s6_t: "Prise en Charge de l'Hypertension, de l'Insuffisance Cardiaque, de la Maladie Coronarienne et des Valvulopathies", s6_d: "Traitement médical et suivi régulier",
        s7_t: "Prévention Cardiovasculaire", s7_d: "Conseils de mode de vie, évaluation des risques et intervention précoce",
        s8_t: "Cardiologie Nucléaire (Scintigraphie MUGA)", s8_d: "Évaluation de la fonction cardiaque si indiquée, notamment avant et pendant certains traitements du cancer"
      },
      program: {
        head: "Notre Programme de Cardio-Oncologie",
        p1: "Évaluation cardiaque de référence avant le traitement du cancer", p2: "Stratification du risque de cardiotoxicité", p3: "Surveillance pendant la chimiothérapie, la thérapie ciblée ou l'immunothérapie",
        p4: "Évaluation cardiaque avant la chirurgie", p5: "Détection et prise en charge précoces des problèmes cardiaques liés au traitement", p6: "Coordination avec l'oncologie médicale, la radiothérapie et d'autres spécialités", p7: "Suivi à long terme des survivants du cancer"
      },
      technology: { head: "Notre Technologie", t1: "Appareils ECG modernes", t2: "Échocardiographie avec imagerie Doppler et strain", t3: "Test d'effort", t4: "Holter 24/48 heures", t5: "Cardiologie nucléaire (scintigraphie MUGA)", t6: "Télé-cardiologie et consultation numérique" },
      multidisciplinary: { head: "Une Approche Multidisciplinaire", desc: "Nous travaillons en étroite collaboration avec l'Oncologie Médicale, l'Oncologie Radiothérapique, la Chirurgie, l'Anesthésiologie, la Médecine Nucléaire et les Soins Primaires pour offrir des soins intégrés et personnalisés." },
      heartmatters: { head: "Votre Cœur Compte", quote: "«Une meilleure santé cardiaque. Des lendemains plus radieux pour les personnes atteintes de cancer et au-delà.»" }
    },

    outreach: {
      banner: {
        title_html: "Sensibilisation Communautaire,<br>Dépistage et Prévention du Cancer",
        subtitle: "Apporter la Détection Précoce dans Nos Communautés",
        desc: "Une initiative conjointe de la Fondation Camerounaise contre le Cancer (CCF) en collaboration avec le Cameroon Oncology Center (COC)",
        tag: "Éducation. Dépistage. Espoir. Communautés en Meilleure Santé."
      },
      impact: {
        head: "Impact sur Cinq Ans (2021 – 2025)",
        screened: "5 678", screened_label: "Personnes Dépistées pour le Cancer",
        sensitized: "17 809", sensitized_label: "Personnes Sensibilisées à la Prévention du Cancer",
        suspected: "375", suspected_label: "Cas de Cancer Suspectés Identifiés", suspected_note: "Référés pour évaluation médicale complémentaire"
      },
      programs: {
        head: "Principaux Programmes de Dépistage du Cancer",
        breast: "87", breast_label: "Cas suspects de cancer du sein identifiés",
        cervical: "212", cervical_label: "Cas suspects de cancer du col identifiés",
        prostate: "76", prostate_label: "Cas suspects de cancer de la prostate identifiés"
      },
      locations: {
        head: "Nous Apportons le Dépistage à la Communauté", desc: "Les activités de dépistage et de sensibilisation sont menées dans :",
        l1: "Églises", l2: "Mosquées", l3: "Lieux de travail", l4: "Banques", l5: "Supermarchés", l6: "Associations de femmes", l7: "Écoles et universités", l8: "Communautés rurales",
        note: "Populations urbaines et rurales à travers le Cameroun."
      },
      reach: {
        head: "Notre Portée à Travers le Cameroun",
        desc: "Principales régions de sensibilisation : Extrême-Nord, Nord, Adamaoua, Est (Bertoua), Centre (Yaoundé, Bafia), Ouest (Dschang, Foumban)",
        note: "D'autres communautés desservies dans les 10 régions.",
        caption: "Atteindre les communautés à travers le Cameroun et au-delà."
      },
      pathway: {
        head: "Le Parcours de la Communauté aux Soins",
        p1: "Éducation et Sensibilisation Communautaire", p2: "Dépistage Gratuit dans la Communauté", p3: "Anomalie Suspectée Identifiée", p4: "Référence au COC pour Évaluation Diagnostique", p5: "Traitement au COC si Nécessaire"
      },
      about_ccf: {
        head: "À Propos de la Fondation Camerounaise contre le Cancer (CCF)",
        desc: "La Fondation Camerounaise contre le Cancer (CCF) est une organisation non gouvernementale à but non lucratif dédiée à la réduction du fardeau du cancer au Cameroun par le dépistage, la sensibilisation, la prévention, le plaidoyer et le soutien aux patients. La CCF travaille en étroite collaboration avec le Cameroon Oncology Center (COC), qui fournit les médecins, spécialistes et infirmiers pour les activités de dépistage.",
        link: "En savoir plus : www.camcancerfoundation.org"
      },
      partnership: { head: "En Partenariat pour un Cameroun Sans Cancer", tag: "La Détection Précoce Sauve des Vies" },
      footer_strip: "Communautés Plus Fortes. Un Cameroun en Meilleure Santé."
    },

    psycho: {
      banner: {
        title_html: "Psychologie et<br>Onco-psychologie",
        subtitle: "Prendre Soin de l'Esprit Tout en Traitant le Cancer",
        desc: "Nous offrons un soutien psychologique empreint de compassion aux patients atteints de cancer et à leurs familles, intégrant la santé mentale à chaque étape du parcours contre le cancer.",
        quote: "«Vous n'êtes pas seul. Nous sommes là pour vous écouter, vous soutenir et marcher à vos côtés.»"
      },
      icons: { emotional: "Soutien Émotionnel", counseling: "Conseil aux Patients et aux Familles", coping: "Meilleure Adaptation et Résilience", qol: "Qualité de Vie Améliorée" },
      specialist: {
        head: "Rencontrez Notre Spécialiste",
        name: "Dr Fidele Eyebe", role: "Chef, Services d'Onco-psychologie et de Psychologie",
        bio: "Le Dr Fidele Eyebe dirige nos services d'Onco-psychologie et de Psychologie, offrant des soins experts aux patients atteints de cancer et à leurs familles. Il s'engage à intégrer la santé mentale dans les soins complets du cancer pour améliorer le bien-être émotionnel, l'adhésion au traitement et la qualité de vie."
      },
      help: {
        head: "Comment Nous Pouvons Vous Aider",
        h1: "Anxiété et stress au diagnostic", h2: "Dépression et baisse de moral", h3: "Adaptation au traitement et à ses effets secondaires", h4: "Peur de la récidive", h5: "Préoccupations liées à l'image corporelle et à l'estime de soi",
        h6: "Conseil aux familles et aux aidants", h7: "Stress financier et social", h8: "Soutien en fin de vie et en cas de deuil", h9: "Renforcement de la résilience et de l'espoir"
      },
      services: {
        head: "Nos Services",
        s1: "Évaluation psychologique et dépistage de la détresse", s2: "Conseil individuel et de groupe", s3: "Psychoéducation pour les patients et les familles", s4: "Soutien émotionnel et motivationnel",
        s5: "Intervention de crise", s6: "Développement des compétences d'adaptation", s7: "Conseil familial et soutien social", s8: "Soutien pendant le traitement actif",
        s9: "Soutien à la survie", s10: "Soins psychologiques palliatifs et de fin de vie", s11: "Référence vers d'autres services si nécessaire"
      },
      journey: {
        head: "Votre Parcours avec Notre Service d'Onco-psychologie", subtitle: "Un Soutien à Chaque Étape du Continuum de Soins du Cancer",
        j1_t: "Diagnostic et Premier Contact", j1_d: "Nous sommes là dès le début.",
        j2_t: "Dépistage et Identification", j2_d: "Évaluation des besoins émotionnels.",
        j3_t: "Évaluation Multidisciplinaire", j3_d: "Collaboration avec votre équipe d'oncologie.",
        j4_t: "Intervention en Onco-psychologie", j4_d: "Soutien individualisé selon vos besoins.",
        j5_t: "Suivi et Continuité des Soins", j5_d: "Soutien continu tout au long du traitement.",
        j6_t: "Survie ou Soins Palliatifs", j6_d: "Soutien pour un meilleur avenir, à chaque étape."
      },
      impact: {
        head: "Notre Impact en 2025",
        consultations: "314", consultations_label: "Consultations d'onco-psychologie",
        per_month: "20–30", per_month_label: "Consultations par mois (toute l'année)",
        breast: "40,8 %", breast_label: "Patientes atteintes de cancer du sein",
        cervical: "25,2 %", cervical_label: "Patientes atteintes de cancer du col",
        pediatric: "6,4 %", pediatric_label: "Patients atteints de cancer pédiatrique",
        note: "Une utilisation soutenue tout au long de l'année, démontrant la forte demande et l'importance du soutien psychologique dans les soins du cancer au COC."
      },
      integrated: { head: "Soins Intégrés", desc: "Nous travaillons en étroite collaboration avec l'Oncologie Médicale, l'Oncologie Radiothérapique, la Chirurgie, les Soins Infirmiers, la Nutrition, les Soins Palliatifs et les Services Sociaux pour offrir des soins holistiques centrés sur le patient." },
      footer_tagline: "Un Esprit en Meilleure Santé pour un Avenir Plus Radieux.",
      strip_right: "Prendre soin de la personne tout entière, au-delà du cancer."
    },

    inpatient: {
      banner: {
        title_html: "Hospitalisation et<br>Soins Hospitaliers",
        subtitle: "Couverture Médicale 24h/24. Chambres Personnalisées. Soins Complets du Cancer.",
        desc: "Nos soins hospitaliers offrent des soins sûrs, empreints de compassion et de haute qualité aux patients à chaque étape du parcours contre le cancer, du diagnostic et du traitement à la récupération et aux soins avancés.",
        quote: "«Des Soins Empreints de Compassion pour un Avenir Plus Radieux.»"
      },
      stats: {
        private: "90 %", private_label: "de nos patients hospitalisés séjournent en chambre privée",
        ratio: "1:6", ratio_label: "MAXIMUM d'affectation infirmière-patients",
        physician: "24/7", physician_label: "Médecin généraliste sur place",
        twice: "DEUX FOIS PAR JOUR", twice_label: "Visite de l'oncologue aux patients hospitalisés. Deux oncologues sont sur place 24h/24 et disponibles pour les urgences."
      },
      facilities: {
        head: "Installations Confortables et Sûres",
        private_t: "Chambre Privée", private_d: "Propre. Confortable. Paisible. 90 % de nos patients sont logés en chambre individuelle.",
        four_t: "Chambre à Quatre Lits", four_d: "Disponible en cas de besoin. Un nombre limité de chambres peut accueillir 4 patients."
      },
      medcare: {
        head: "Des Soins Médicaux 24 Heures sur 24",
        m1: "Couverture par un médecin généraliste sur place 24h/24", m2: "Deux oncologues sur place 24 heures pour les urgences", m3: "Les patients hospitalisés sont régulièrement vus par un oncologue deux fois par jour",
        m4: "Le médecin généraliste réévalue les patients toutes les quelques heures, selon le niveau clinique et l'état", m5: "Des soins infirmiers adaptés au niveau de gravité du patient (maximum 1 infirmière pour 6 patients)"
      },
      restaurant: { head: "Restaurant sur Place", caption: "Des Repas Nutritifs pour un Avenir Plus Fort", desc: "Notre restaurant sur place propose des repas sains et équilibrés pour les patients, les aidants et le personnel dans un environnement confortable." },
      levels: {
        head: "Nos Quatre Niveaux de Soins Hospitaliers",
        desc: "Les patients sont classés à l'admission et le niveau peut être ajusté à tout moment par un médecin généraliste ou un oncologue selon l'état clinique du patient.",
        l1_t: "Niveau 1 — Soins Hospitaliers Standards", l1_a: "Patients cliniquement stables nécessitant une hospitalisation et des soins oncologiques de routine", l1_b: "Surveillance de routine", l1_c: "Soins infirmiers et médicaux standards",
        l2_t: "Niveau 2 — Surveillance et Stabilisation Renforcées", l2_a: "Patients moins stables ou nécessitant une stabilisation avant chimiothérapie, radiothérapie ou chirurgie", l2_b: "Observation plus rapprochée", l2_c: "Évaluation infirmière et médicale plus fréquente",
        l3_t: "Niveau 3 — Soins de Haute Acuité", l3_a: "Patients plus malades nécessitant une évaluation clinique fréquente et une surveillance nettement plus rapprochée", l3_b: "Niveau élevé de soutien infirmier", l3_c: "Réévaluation médicale fréquente",
        l4_t: "Niveau 4 — Soins Intensifs", l4_a: "Patients gravement malades nécessitant le plus haut niveau de surveillance et de soutien médical/infirmier", l4_b: "Surveillance continue", l4_c: "Soins médicaux et infirmiers intensifs"
      },
      dynamic: {
        head: "Gestion Dynamique des Patients",
        d1: "Changement de l'État du Patient", d2: "Réévaluation Clinique", d3: "Niveau Ajusté par le Médecin Généraliste ou l'Oncologue", d4: "Soutien Infirmier et Médical Ajusté en Conséquence",
        quote: "«Le bon niveau de soins. Au bon moment. Pour un meilleur avenir.»"
      },
      services: {
        head: "Services Hospitaliers Complets",
        s1: "Oncologie Médicale", s2: "Oncologie Radiothérapique", s3: "Chirurgie", s4: "Pharmacie", s5: "Services de Laboratoire", s6: "Soutien Nutritionnel", s7: "Onco-psychologie", s8: "Soins Palliatifs", s9: "Gestion de la Douleur et des Symptômes", s10: "Soutien Social et Familial"
      },
      commitment: { head: "Notre Engagement", c1: "La Sécurité des Patients Avant Tout", c2: "Des Soins de Haute Qualité et Empreints de Compassion", c3: "Respect, Dignité et Confidentialité", c4: "Amélioration Continue de la Qualité" }
    },

    headneck: {
      hn: {
        title: "Cancer de la Tête et du Cou (ORL)",
        subtitle: "Approche de Traitement Multidisciplinaire",
        tag: "Détection Précoce. Soins Complets. Meilleurs Résultats.",
        cancers_head: "Cancers Courants de la Tête et du Cou",
        c1: "Cancer de la cavité buccale", c2: "Cancer de l'oropharynx (lié au HPV et non lié au HPV)", c3: "Cancer du larynx", c4: "Cancer de l'hypopharynx", c5: "Cancer de la cavité nasale et des sinus paranasaux", c6: "Tumeurs des glandes salivaires", c7: "Cancer de la thyroïde (voir panneau de droite)", c8: "Cancers de la peau de la tête et du cou",
        symptoms_head: "Symptômes Courants",
        s1: "Mal de gorge persistant", s2: "Difficulté à avaler", s3: "Enrouement ou changements de voix", s4: "Ulcères buccaux persistants", s5: "Masse ou gonflement du cou", s6: "Douleur à l'oreille", s7: "Perte de poids inexpliquée", s8: "Obstruction ou saignement nasal persistant",
        doctor_n: "Dr Ava Louis Georges", doctor_r: "Oto-rhino-laryngologiste Consultant (Chirurgien Tête et Cou)", doctor_c: "DES d'ORL – FMSB, Université de Yaoundé I (2025)",
        quote: "«Des soins experts pour l'oreille, le nez et la gorge pour un avenir en meilleure santé.»",
        treatment_head: "Traitement Standard du Cancer de la Tête et du Cou Localement Avancé", treatment_sub: "Chimioradiothérapie Concomitante (Norme de Soins)",
        t1_head: "Chimiothérapie", t1a: "Cisplatine 100 mg/m² toutes les 3 semaines (Jours 1, 22, 43) OU Cisplatine 40 mg/m² par semaine (6–7 semaines)", t1b: "Alternatives (si cisplatine non adapté) : Carboplatine + 5-Fluorouracile ; Cétuximab (patients sélectionnés)",
        t2_head: "Radiothérapie", t2a: "Radiothérapie externe sur la tumeur primaire et les ganglions lymphatiques régionaux", t2b: "Dose totale typique : 70 Gy en 35 fractions (2 Gy par fraction sur 7 semaines)", t2c: "Radiothérapie à modulation d'intensité (IMRT) si disponible", t2d: "Guidage par image quotidien (IGRT)",
        t3_head: "Soins de Soutien", t3a: "Soutien nutritionnel (oral ou par sonde)", t3b: "Rééducation de la parole et de la déglutition", t3c: "Gestion de la douleur", t3d: "Gestion des effets secondaires (mucite, dermatite, sécheresse buccale, etc.)", t3e: "Soutien psychosocial", t3f: "Suivi régulier",
        multi_head: "Soins Multidisciplinaires au COC",
        m1: "Chirurgien ORL", m2: "Oncologue Radiothérapeute", m3: "Oncologue Médical", m4: "Radiologue (CT, IRM, SPECT-CT)", m5: "Anatomo-pathologiste", m6: "Nutritionniste", m7: "Orthophoniste", m8: "Équipe d'Onco-psychologie et de Survie"
      },
      thy: {
        title: "Cancer de la Thyroïde",
        subtitle: "Traitement Fondé sur des Données Probantes, y Compris l'I-131",
        tag: "Chirurgie d'Abord. Iode Radioactif (I-131) si Indiqué. Radiothérapie en Dernier Recours.",
        types_head: "Types de Cancer de la Thyroïde",
        ty1: "Cancer papillaire de la thyroïde (le plus fréquent)", ty2: "Cancer folliculaire de la thyroïde", ty3: "Cancer médullaire de la thyroïde", ty4: "Cancer anaplasique de la thyroïde", ty5: "Autres types rares",
        symptoms_head: "Symptômes Courants",
        s1: "Nodule ou masse au cou", s2: "Gonflement du cou", s3: "Enrouement", s4: "Difficulté à avaler (rare)", s5: "Changements respiratoires (rares)",
        treatment_head: "Traitement du Cancer de la Thyroïde", treatment_sub: "Individualisé selon le Type, le Stade et les Facteurs de Risque",
        t1_head: "Chirurgie (Traitement de Première Ligne)", t1a: "Thyroïdectomie totale ou partielle selon le type et le stade", t1b: "Ablation des ganglions lymphatiques atteints si indiquée",
        t2_head: "Traitement par Iode Radioactif (I-131)", t2a: "L'iode-131 (I-131) est un isotope radioactif sélectivement capté par le tissu thyroïdien", t2b: "Utilisé après la chirurgie pour détruire les cellules cancéreuses thyroïdiennes restantes (notamment dans les cancers différenciés)", t2c: "Aide à réduire le risque de récidive", t2d: "Administré sous forme de capsule orale dans un cadre contrôlé", t2e: "Bien toléré avec des effets secondaires minimes",
        t3_head: "Suppression Hormonale Thyroïdienne", t3a: "Lévothyroxine à vie pour maintenir la TSH basse et réduire le risque de récidive", t3b: "Surveillance régulière des taux d'hormones thyroïdiennes (TSH, T4 libre)",
        t4_head: "Radiothérapie (en Dernier Recours)", t4a: "La radiothérapie n'est généralement PAS un traitement de routine pour le cancer de la thyroïde", t4b: "Envisagée lorsque la chirurgie et l'iode radioactif (I-131) ne sont pas possibles ou ont échoué", t4c: "Maladie localement avancée et non résécable", t4d: "Maladie persistante ou récidivante ne répondant pas à l'iode radioactif", t4e: "Traitement palliatif pour le contrôle des symptômes (ex. métastases osseuses)",
        t5_head: "Suivi", t5a: "Évaluation clinique périodique, échographie du cou et tests de laboratoire (thyroglobuline, TSH)", t5b: "Imagerie supplémentaire (CT, IRM ou SPECT-CT) si indiquée", t5c: "Surveillance à long terme de la récidive",
        key_head: "Message Clé",
        k1: "La plupart des cancers de la thyroïde sont traités avec succès par chirurgie et iode radioactif (I-131)", k2: "La radiothérapie est réservée aux cas sélectionnés lorsque les autres options ont échoué", k3: "La détection précoce et un traitement approprié conduisent à d'excellents résultats chez la plupart des patients"
      },
      footer_strip: "Soins Experts. Communautés Plus Fortes. Un Cameroun en Meilleure Santé."
    },

    gynecology: {
      banner: {
        title: "Gynécologie et Oncologie Gynécologique",
        subtitle: "Soins Complets pour les Femmes. De la Prévention au Traitement et à la Survie.",
        desc: "Au Cameroon Oncology Center, nous fournissons des soins gynécologiques et d'oncologie gynécologique spécialisés pour les femmes de tous âges. Notre équipe multidisciplinaire s'engage envers la détection précoce, le traitement avancé et des soins empreints de compassion pour les cancers gynécologiques, les cancers du sein et autres conditions de santé féminine.",
        quote: "«Des soins experts et empreints de compassion pour les femmes à chaque étape de la vie.»"
      },
      icons: { women: "Soins Centrés sur la Femme", multi: "Approche Multidisciplinaire", advanced: "Options de Traitement Avancées", compassionate: "Soutien Empreint de Compassion", outcomes: "Meilleurs Résultats" },
      services: {
        head: "Nos Services de Gynécologie et d'Oncologie Gynécologique",
        cervical_t: "Cancer du Col de l'Utérus", cervical1: "Dépistage et détection précoce", cervical2: "Diagnostic et stadification", cervical3: "Chirurgie, chimiothérapie et radiothérapie", cervical4: "Prise en charge des lésions précancéreuses (CIN)", cervical5: "Suivi et survie",
        ovarian_t: "Cancer de l'Ovaire", ovarian1: "Évaluation des masses abdominales ou pelviennes", ovarian2: "Diagnostic et stadification", ovarian3: "Chirurgie (cytoréduction)", ovarian4: "Chimiothérapie et thérapie ciblée", ovarian5: "Suivi à long terme",
        endometrial_t: "Cancer de l'Endomètre (Utérus)", endometrial1: "Évaluation des saignements utérins anormaux", endometrial2: "Diagnostic et stadification", endometrial3: "Prise en charge chirurgicale", endometrial4: "Thérapie adjuvante (chimiothérapie/radiothérapie)", endometrial5: "Soins de survie",
        rare_t: "Cancers Vulvaires, Vaginaux et Gynécologiques Rares", rare1: "Diagnostic et stadification précis", rare2: "Chirurgie et options reconstructives", rare3: "Chimioradiothérapie si nécessaire", rare4: "Revue par le conseil tumoral multidisciplinaire", rare5: "Suivi et survie",
        breast_t: "Chirurgie Mammaire (Bénigne et Maligne)", breast1: "Mastectomie (totale ou radicale modifiée)", breast2: "Tumorectomie (chirurgie conservatrice du sein)", breast3: "Curage du ganglion sentinelle", breast4: "Chirurgie axillaire si indiquée", breast5: "Options oncoplastiques et reconstructives", breast6: "Soins multidisciplinaires du cancer du sein", breast7: "Intégration avec l'oncologie médicale, la radiothérapie et les services de survie",
        general_t: "Gynécologie Générale", general1: "Évaluation d'un frottis anormal", general2: "Prise en charge des masses pelviennes et fibromes", general3: "Troubles menstruels et ménopausiques", general4: "Planification familiale et santé reproductive", general5: "Référence pour des soins spécialisés si nécessaire"
      },
      pathway: {
        head: "Parcours de Soins du Cancer du Col de l'Utérus", subtitle: "Du Dépistage à la Survie",
        p1_t: "Dépistage et Détection Précoce", p1_d: "Frottis, test HPV et dépistage communautaire (via la Fondation Camerounaise contre le Cancer)",
        p2_t: "Diagnostic et Biopsie", p2_d: "Colposcopie, biopsie et histopathologie",
        p3_t: "Stadification", p3_d: "Examen pelvien, imagerie (CT/IRM) et évaluation multidisciplinaire",
        p4_t: "Revue Multidisciplinaire", p4_d: "Discussion au conseil tumoral pour élaborer un plan de traitement individualisé",
        p5_t: "Traitement", p5_d: "Chirurgie et/ou chimioradiothérapie selon le stade et les facteurs du patient",
        p6_t: "Suivi et Survie", p6_d: "Surveillance régulière, gestion des effets secondaires et soutien à long terme"
      },
      ccf: {
        head: "En Partenariat avec la Fondation Camerounaise contre le Cancer",
        desc: "Grâce aux programmes de sensibilisation communautaire et de dépistage, la Fondation Camerounaise contre le Cancer (CCF) offre un dépistage gratuit du cancer du col de l'utérus et une éducation à travers le Cameroun. Le COC travaille en étroite collaboration avec la CCF pour garantir que les femmes présentant des résultats anormaux reçoivent une évaluation diagnostique et un traitement rapides.",
        link: "En Savoir Plus sur le Dépistage avec la CCF"
      },
      team: { head: "Notre Équipe", name: "Dr Mbi-Kobenge Fidelia", role: "Oncologue Gynécologique et Chirurgienne du Sein", bio: "Dirige notre service de gynécologie et d'oncologie gynécologique, offrant des soins experts et empreints de compassion aux femmes atteintes de cancers gynécologiques et du sein et de conditions connexes." },
      facilities: {
        head: "Nos Installations et Services de Soutien",
        f1: "Chirurgie Mini-invasive et Ouverte", f2: "Services de Chimiothérapie", f3: "Radiothérapie et Chimioradiothérapie", f4: "Imagerie Avancée (CT, IRM, Échographie, Médecine Nucléaire)", f5: "Histopathologie", f6: "Conseil Tumoral Multidisciplinaire"
      },
      support: {
        head: "Soutien aux Patientes",
        s1: "Éducation et Conseil aux Patientes", s2: "Soutien Psychosocial", s3: "Conseils Nutritionnels", s4: "Fertilité et Santé Reproductive", s5: "Soins de la Ménopause", s6: "Programmes de Survie",
        quote: "«Des Femmes Autonomisées Bâtissent des Communautés en Meilleure Santé.»"
      },
      contact: { title: "Prête à Planifier une Consultation ?", desc: "Notre équipe est là pour vous soutenir. Contactez-nous dès aujourd'hui." },
      footer_tagline: "Femmes en Bonne Santé. Familles Plus Fortes. Un Cameroun Plus Radieux."
    },

    surgical: {
      banner: {
        label: "Nos Services", title: "Oncologie Chirurgicale", subtitle: "Chirurgie Oncologique Spécialisée. Soins Multidisciplinaires.",
        desc: "Au Cameroon Oncology Center, notre équipe d'oncologie chirurgicale offre des soins chirurgicaux sûrs, de haute qualité et centrés sur le patient pour un large éventail de cancers. Nous travaillons en étroite collaboration avec l'oncologie médicale, la radiothérapie, l'imagerie, la pathologie, l'anesthésie et les soins infirmiers pour obtenir les meilleurs résultats possibles.",
        tag_html: "Chirurgiens Experts.<br>Soins Avancés.<br>Lendemains Plus Radieux."
      },
      icons: { comprehensive: "Soins Complets du Cancer", experienced: "Chirurgiens Expérimentés", modern: "Installations Chirurgicales Modernes", safety: "Sécurité des Patients", multi: "Approche Multidisciplinaire", compassionate: "Soins Empreints de Compassion" },
      services: {
        head: "Nos Services d'Oncologie Chirurgicale",
        general_t: "Chirurgie Oncologique Générale", general1: "Chirurgie du cancer du sein", general2: "Chirurgie du cancer gastro-intestinal et colorectal", general3: "Chirurgie des tissus mous et autres tumeurs solides", general4: "Procédures diagnostiques et thérapeutiques", general5: "Procédures chirurgicales palliatives",
        urologic_t: "Oncologie Urologique", urologic1: "Chirurgie du cancer de la prostate", urologic2: "Chirurgie du cancer de la vessie", urologic3: "Chirurgie du rein et des voies urinaires supérieures", urologic4: "Chirurgie du cancer testiculaire", urologic5: "Autres cancers génito-urinaires",
        gyn_t: "Oncologie Gynécologique", gyn1: "Chirurgie du cancer du col de l'utérus", gyn2: "Chirurgie du cancer de l'ovaire", gyn3: "Chirurgie du cancer de l'endomètre", gyn4: "Chirurgie d'autres cancers gynécologiques", gyn5: "Approches chirurgicales minimalement invasives et ouvertes",
        headneck_t: "Chirurgie du Cancer de la Tête et du Cou", headneck1: "Cancers de la cavité buccale", headneck2: "Cancer de la thyroïde", headneck3: "Cancers du larynx et du pharynx", headneck4: "Tumeurs des glandes salivaires", headneck5: "Procédures reconstructives"
      },
      team: {
        head: "Notre Équipe d'Oncologie Chirurgicale",
        t1n: "Dr Amos Pchana", t1r: "Chirurgien Général en Chef", t1s: "Oncologie Chirurgicale Générale",
        t2n: "Dr Dissake Ngom Emerick", t2r: "Chirurgien Général", t2s: "Oncologie Chirurgicale Générale",
        t3n: "Dr Eyole Njako Eyole", t3r: "Urologue", t3s: "Oncologie Urologique",
        t4n: "Dr Mbi-Kobenge Fidelia", t4r: "Gynécologue", t4s: "Oncologie Gynécologique",
        t5n: "Dr Ava Louis Georges", t5r: "Chirurgien Tête et Cou (ORL)"
      },
      quote: { text: "«Ensemble, nous offrons des soins complets contre le cancer grâce à la chirurgie et au travail d'équipe multidisciplinaire.»", cite: "— Cameroon Oncology Center" },
      pathway: {
        head: "Le Parcours de Soins Chirurgicaux",
        p1_t: "Diagnostic et Stadification", p1_d: "Imagerie et évaluation clinique",
        p2_t: "Conseil Tumoral Multidisciplinaire", p2_d: "Discussion des cas et planification du traitement",
        p3_t: "Planification Chirurgicale", p3_d: "Approche individualisée",
        p4_t: "Chirurgie", p4_d: "Chirurgie du cancer sûre et précise",
        p5_t: "Histopathologie", p5_d: "Diagnostic définitif et stadification",
        p6_t: "Réévaluation Postopératoire", p6_d: "Récupération et surveillance des complications",
        p7_t: "Thérapie Adjuvante", p7_d: "(si indiquée) Chimiothérapie et/ou radiothérapie",
        p8_t: "Surveillance", p8_d: "Suivi et soutien à long terme"
      },
      facilities: {
        head: "Nos Installations Chirurgicales",
        f1_t: "Salles d'Opération Modernes", f1_d: "Équipées pour une chirurgie du cancer sûre et complexe",
        f2_t: "Soins Postopératoires", f2_d: "Récupération confortable et étroitement surveillée",
        f3_t: "Équipement Avancé", f3_d: "Pour un large éventail de procédures chirurgicales"
      },
      why: {
        head: "Pourquoi Choisir le COC pour la Chirurgie du Cancer ?",
        w1: "Équipe chirurgicale expérimentée et dévouée", w2: "Planification de traitement multidisciplinaire", w3: "Installations et équipements chirurgicaux modernes",
        w4: "Soins périopératoires complets", w5: "Coordination avec la chimiothérapie et la radiothérapie", w6: "Priorité à la sécurité, la qualité et de meilleurs résultats"
      },
      contact: { title: "Besoin d'une Consultation en Oncologie Chirurgicale ?", desc: "Notre équipe est là pour vous aider à planifier un rendez-vous ou pour plus d'informations." }
    },

    radiation: {
      banner: {
        label: "Nos Services", title: "Oncologie Radiothérapique", subtitle: "Radiothérapie Avancée. Traitement de Précision. Soins Empreints de Compassion.",
        desc: "Le Cameroon Oncology Center fournit une radiothérapie moderne aux patients atteints d'un large éventail de cancers. Notre équipe d'oncologie radiothérapique combine technologie de traitement avancée, assurance qualité en physique médicale et expertise clinique multidisciplinaire pour offrir des soins sûrs, précis et centrés sur le patient.",
        tag_t: "VARIAN TRILOGY", tag_d: "Technologie de Précision. Meilleurs Résultats."
      },
      icons: { advanced: "Technologie Avancée", expert: "Équipe Multidisciplinaire Experte", safety: "Sécurité et Qualité", patient: "Soins Centrés sur le Patient", global: "Expertise Locale, Collaboration Mondiale" },
      services: {
        head: "Nos Services de Radiothérapie",
        imrt: "IMRT", imrt_d: "Radiothérapie à modulation d'intensité pour un traitement hautement conforme.",
        threed: "Radiothérapie Conformationnelle 3D", threed_d: "Traitement précis adapté à votre cancer.",
        twod: "Radiothérapie 2D", twod_d: "Traitement efficace lorsque cliniquement approprié.",
        stereo: "Radiothérapie Stéréotaxique", stereo_d: "Traitement de haute précision pour certains cancers.",
        palliative: "Radiothérapie Palliative", palliative_d: "Soulagement des symptômes et amélioration de la qualité de vie.",
        curative: "Radiothérapie Curative", curative_d: "Avec pour objectif un contrôle du cancer à long terme."
      },
      linacs: {
        head: "Deux Accélérateurs Linéaires Médicaux",
        trilogy_t: "VARIAN TRILOGY", trilogy_d: "Accélérateur linéaire avancé pour une radiothérapie externe de précision.",
        ix_t: "VARIAN iX", ix_d: "Un deuxième accélérateur linéaire médical augmentant la capacité de traitement et soutenant un accès fiable à la radiothérapie."
      },
      process: {
        head: "De la Simulation au Traitement", subtitle: "Un processus soigneusement planifié pour des soins sûrs, précis et individualisés.",
        s1_t: "Consultation", s1_d: "Rencontre avec votre oncologue radiothérapeute pour discuter de votre plan de traitement.",
        s2_t: "Simulation CT", s2_d: "Simulateur CT Philips Big Bore",
        s3_t: "Contourage Assisté par IA", s3_d: "Radformation AutoContour",
        s4_t: "Planification du Traitement", s4_d: "Système de planification de traitement Eclipse",
        s5_t: "Contraintes des Organes à Risque", s5_d: "Principes de planification basés sur QUANTEC",
        s6_t: "Revue Médecin et Physique", s6_d: "Revue de planification multidisciplinaire",
        s7_t: "Assurance Qualité", s7_d: "QA spécifique au patient et QA de la machine",
        s8_t: "Délivrance du Traitement", s8_d: "Varian Trilogy ou Varian iX",
        s9_t: "Suivi", s9_d: "Soins et soutien continus"
      },
      cancers: { head: "Cancers Traités par Radiothérapie", c1: "Cancer du Sein", c2: "Cancer de la Prostate", c3: "Cancer du Col de l'Utérus", c4: "Cancer de la Tête et du Cou", c5: "Tumeurs Cérébrales", c6: "Cancer Rectal", c7: "Cancer du Poumon", c8: "Cancers Gynécologiques", c9: "Cancers Pédiatriques", c10: "Maladie Métastatique / Palliative" },
      expect: {
        head: "À Quoi S'attendre Pendant la Radiothérapie",
        e1_t: "Consultation", e1_d: "Rencontre avec votre oncologue radiothérapeute pour discuter de votre plan de traitement.",
        e2_t: "Simulation", e2_d: "Un scanner CT (Philips Big Bore) est réalisé en position de traitement.",
        e3_t: "Planification", e3_d: "Votre traitement est conçu à l'aide d'un logiciel avancé et révisé par notre équipe clinique et de physique.",
        e4_t: "Traitement", e4_d: "Chaque séance est indolore et ne dure généralement que quelques minutes.",
        e5_t: "Suivi", e5_d: "Nous surveillons vos progrès et gérons les éventuels effets secondaires."
      },
      quality: {
        head: "Qualité et Sécurité",
        desc: "La précision exige plus que de la technologie. Elle exige une culture de la qualité. Chaque traitement de radiothérapie au COC implique plusieurs niveaux de contrôle, y compris la révision par l'oncologue radiothérapeute, la vérification du plan de traitement par la physique médicale, l'assurance qualité de la machine, le QA spécifique au patient le cas échéant, le guidage par image et la discussion multidisciplinaire. Les plans de traitement sont élaborés en tenant compte des contraintes de dose aux tissus normaux internationalement reconnues, y compris les recommandations QUANTEC le cas échéant, afin d'optimiser la couverture tumorale tout en limitant l'exposition des organes à risque.",
        iroc: "Vérification Indépendante de la Qualité en Partenariat avec IROC Houston", link: "En savoir plus sur notre reconnaissance qualité"
      },
      team: {
        head: "Notre Équipe d'Oncologie Radiothérapique",
        sub_onc: "Oncologues Radiothérapeutes",
        t1n: "Dr Mosse Bassane Alain Wilfried", t1r: "Directeur Médical et Chef du Service d'Oncologie Radiothérapique", t1e: "Temps plein",
        t2n: "Dr Bodo Danny", t2r: "Oncologue Radiothérapeute", t2e: "Temps plein",
        t3n: "Professeur Mouelle Sone Albert", t3r: "Conseiller Principal et Oncologue Radiothérapeute Consultant", t3e: "Clinique de consultation hebdomadaire",
        t4n: "Professeur Waleed Mourad", t4r: "Oncologue Radiothérapeute en Chef, États-Unis", t4e: "Télé-oncologie Internationale",
        sub_physics: "Physique Médicale", t5n: "Mme Farzaneh Mirkhaghani", t5r: "Physicienne Médicale en Chef", t6n: "M. Jerome Makeng Kefac", t6r: "Physicien Médical",
        sub_therapy: "Radiothérapie", t7n: "M. Nilay Majumder", t7r: "Radiothérapeute en Chef", t7s: "et 6 radiothérapeutes supplémentaires",
        sub_support: "Support Technique", support_d: "2 Ingénieurs Équivalent Temps Plein", support_s: "Soutenant nos équipements et infrastructures de radiothérapie"
      },
      stats: { onc: "4", onc_label: "Oncologues Radiothérapeutes / Consultants", physicists: "2", physicists_label: "Physiciens Médicaux", therapists: "7", therapists_label: "Radiothérapeutes", engineers: "2", engineers_label: "Ingénieurs ETP", linacs: "2", linacs_label: "Accélérateurs Linéaires" },
      contact: { title: "Besoin d'une Radiothérapie ?", desc: "Notre équipe d'oncologie radiothérapique est là pour vous aider à comprendre votre diagnostic, vos options de traitement et à quoi vous attendre pendant la radiothérapie.", btn1: "Demander un Rendez-vous", btn2: "Contacter l'Oncologie Radiothérapique", btn3: "Pour les Médecins Référents" }
    },

    urology: {
      banner: {
        label: "Nos Services", title: "Urologie et Oncologie Urologique", subtitle: "Soins Complets pour les Voies Urinaires et la Santé Reproductive Masculine",
        desc: "Au Cameroon Oncology Center, nous fournissons des soins urologiques experts, empreints de compassion et centrés sur le patient pour les affections cancéreuses et non cancéreuses des reins, des uretères, de la vessie, de la prostate, des testicules et du système reproducteur masculin. Notre équipe multidisciplinaire travaille ensemble pour fournir un diagnostic précis, des options de traitement avancées et de meilleurs résultats.",
        quote: "«Des soins urologiques experts aujourd'hui pour des lendemains en meilleure santé.»", tag_html: "Restaurer<br>la Fonction.<br>Améliorer des Vies."
      },
      icons: { expert: "Soins Experts", multi: "Approche Multidisciplinaire", advanced: "Technologie Avancée", patient: "Soins Centrés sur le Patient", outcomes: "Meilleurs Résultats" },
      services: {
        head: "Nos Services d'Urologie et d'Oncologie Urologique",
        prostate_t: "Soins de la Prostate", prostate1: "HBP (hypertrophie bénigne de la prostate)", prostate2: "Diagnostic et stadification du cancer de la prostate", prostate3: "Dépistage du PSA", prostate4: "Biopsie de la prostate", prostate5: "Prise en charge médicale et chirurgicale",
        kidney_t: "Troubles du Rein et de l'Uretère", kidney1: "Calculs rénaux", kidney2: "Calculs urétéraux", kidney3: "Obstruction rénale", kidney4: "Hydronéphrose", kidney5: "Prévention des calculs et suivi",
        bladder_t: "Troubles de la Vessie et Cancer de la Vessie", bladder1: "Cancer de la vessie", bladder2: "Tumeurs de la vessie", bladder3: "Calculs vésicaux", bladder4: "Vessie neurogène", bladder5: "Rétention urinaire", bladder6: "Infections urinaires récurrentes",
        male_t: "Santé Reproductive Masculine", male1: "Évaluation de l'infertilité masculine", male2: "Dysfonction érectile", male3: "Santé sexuelle masculine", male4: "Varicocèle", male5: "Hydrocèle", male6: "Troubles épididymaires",
        testicular_t: "Troubles Testiculaires et Scrotaux", testicular1: "Douleur testiculaire", testicular2: "Masses testiculaires", testicular3: "Gonflement scrotal", testicular4: "Torsion testiculaire", testicular5: "Épididymite",
        surgery_t: "Chirurgie Urologique", surgery1: "Circoncision", surgery2: "Pose de cathéter sus-pubien", surgery3: "Procédures urologiques endoscopiques", surgery4: "Chirurgie urologique ouverte", surgery5: "Chirurgie urologique d'urgence", surgery6: "Prise en charge des traumatismes urologiques",
        general_t: "Urologie Générale", general1: "Consultation urologique complète", general2: "Sang dans les urines (hématurie)", general3: "Incontinence", general4: "Mictions fréquentes", general5: "Difficulté à uriner", general6: "Prise en charge des lésions précancéreuses"
      },
      pathway: {
        head: "Parcours de Soins du Cancer de la Prostate", subtitle: "De la Détection Précoce à la Survie à Long Terme",
        p1_t: "Test du PSA et Évaluation Clinique", p1_d: "Évaluation des risques et dépistage",
        p2_t: "Imagerie et Biopsie", p2_d: "IRM, CT, échographie et biopsie ciblée",
        p3_t: "Histopathologie", p3_d: "Diagnostic précis et stratification du risque",
        p4_t: "Stadification", p4_d: "Détermination de l'étendue de la maladie",
        p5_t: "Conseil Tumoral Multidisciplinaire", p5_d: "Plan de traitement individualisé",
        p6_t: "Options de Traitement", p6_d: "Chirurgie, radiothérapie, thérapie systémique, essais cliniques, soins de soutien",
        p7_t: "Suivi et Survie", p7_d: "Surveillance régulière et soins à long terme"
      },
      urologist: {
        head: "Rencontrez Notre Urologue", name: "Dr Eyole Njako Eyole", role: "Urologue Consultant",
        c1: "Maîtrise en Médecine (Urologie) – Université de Nairobi", c2: "Membre, American Urological Association (AUA)", c3: "Membre, Société Internationale d'Urologie (SIU)", c4: "Urologue Enregistré au Conseil Médical du Cameroun",
        quote: "«Engagé à fournir des soins urologiques experts, empreints de compassion et centrés sur le patient.»"
      },
      diagnostics: {
        head: "Diagnostics et Traitements Avancés",
        d1: "Imagerie CT, IRM et échographie", d2: "Évaluation endoscopique et chirurgie mini-invasive", d3: "Biopsies de la prostate et de la vessie",
        d4: "Intégration avec l'histopathologie, la radiologie, l'oncologie médicale, la radiothérapie et la médecine nucléaire", d5: "Installations chirurgicales modernes", d6: "Accès à l'expertise internationale"
      },
      looking_ahead: {
        head: "Perspectives : Soins de Précision du Cancer de la Prostate", tag: "Théranostique (Bientôt Disponible)",
        desc: "Le COC proposera prochainement la théranostique pour le cancer de la prostate, utilisant l'imagerie moléculaire avancée et la thérapie radiopharmaceutique ciblée, offrant un nouvel espoir aux patients atteints d'un cancer de la prostate avancé.",
        quote: "«L'Innovation Aujourd'hui pour un Avenir en Meilleure Santé.»"
      },
      clinic: { head: "Informations sur la Clinique", urology_clinic: "Clinique d'Urologie", urology_days: "Tous les deux samedis", appointments: "Rendez-vous sur réservation", emergency: "Références d'urgence acceptées" },
      support: {
        head: "Informations et Soutien aux Patients",
        s1: "Éducation et conseil aux patients", s2: "Soutien aux patients et aux familles", s3: "Conseils sur le mode de vie et la prévention", s4: "Soutien psychosocial", s5: "Coordination avec d'autres spécialités", s6: "Suivi et soins de survie"
      },
      footer_quote: "Une Meilleure Santé Urologique. Des Familles Plus Fortes. Un Cameroun en Meilleure Santé."
    },

    nursenav: {
      banner: {
        title: "Accompagnement Infirmier en Oncologie", subtitle: "Aucun Patient ne Navigue Seul dans les Soins du Cancer.",
        desc: "Au Cameroon Oncology Center, chaque patient en oncologie est soutenu par une infirmière navigatrice dédiée dès le premier contact et tout au long des soins. Notre Programme Universel d'Accompagnement Infirmier en Boucle Fermée garantit que chaque patient reçoit des conseils, une éducation, une coordination et un soutien continu personnalisés.",
        quote: "«Vous Guider à Chaque Étape de Votre Parcours Contre le Cancer.»"
      },
      icons: { assess: "Évaluer", assess_d: "Identifier les besoins et les obstacles", educate: "Éduquer", educate_d: "Fournir des informations claires", coordinate: "Coordonner", coordinate_d: "Connecter avec les bons services", advocate: "Défendre", advocate_d: "Soutenir votre parcours de soins", followup: "Suivre", followup_d: "Rester avec vous sur le long terme" },
      strip: "Chaque Cancer. Chaque Étape. Chaque Patient.",
      strip_sub: "Diagnostic | Traitement | Survie | Récidive | Soins Palliatifs",
      pathway: {
        head: "Le Parcours d'Accompagnement Infirmier en Boucle Fermée du COC", subtitle: "Un Cycle d'Accompagnement Continu et Centré sur le Patient",
        p1_t: "Enregistrement", p1a: "Le patient arrive au COC (de n'importe quelle source)", p1b: "Enregistrement et création du dossier médical", p1c: "Orientation initiale vers les services",
        p2_t: "Accompagnement d'Entrée (Avant la Consultation)", p2a: "Accueil chaleureux et évaluation complète", p2b: "Revue des dossiers médicaux et examens antérieurs", p2c: "Identification des obstacles cliniques et non cliniques (financiers, transport, psychosociaux, etc.)", p2d: "Organisation des examens de laboratoire, d'imagerie et autres", p2e: "Préparation du patient pour la consultation spécialisée",
        p3_t: "Consultation Spécialisée", p3a: "Consultation avec le(s) spécialiste(s) approprié(s) (oncologie médicale, radiothérapie, chirurgie, gynécologie, etc.)", p3b: "Diagnostic et stadification", p3c: "Discussion des options de traitement", p3d: "Élaboration d'un plan de soins individualisé",
        p4_t: "Accompagnement de Sortie (Après la Consultation)", p4a: "Revue et explication du plan de traitement", p4b: "Reformulation pour confirmer la compréhension", p4c: "Organisation des rendez-vous et références", p4d: "Coordination des examens supplémentaires", p4e: "Réponse aux questions et préoccupations du patient", p4f: "Soutien émotionnel",
        p5_t: "Coordination du Traitement", p5a: "Coordination du début du traitement (chimiothérapie, radiothérapie, chirurgie, etc.)", p5b: "Liaison avec la pharmacie, le laboratoire, l'imagerie et d'autres services", p5c: "Suivi du calendrier de traitement", p5d: "Gestion des effets secondaires et complications", p5e: "Garantie d'accès aux soins de soutien (nutrition, psychologie, cardiologie, soins palliatifs, etc.)",
        p6_t: "Suivi Longitudinal (Accompagnement Continu)", p6a: "Contact régulier (appels, visites, WhatsApp)", p6b: "Surveillance des symptômes et effets secondaires", p6c: "Garantie de l'adhésion au traitement", p6d: "Aide à la planification des soins de survie", p6e: "Soutien pendant la récidive ou la palliation", p6f: "Lien vers les ressources communautaires si nécessaire"
      },
      note: "La navigatrice reste connectée au patient tout au long du parcours contre le cancer.",
      before_leave: { head: "Avant de Quitter le COC", desc: "Revoyez Votre Infirmière Navigatrice", note: "Chaque patient en oncologie retourne voir l'infirmière navigatrice après la consultation spécialisée. La navigatrice examine les recommandations, confirme la compréhension, organise les rendez-vous et références, et répond à tout obstacle restant avant votre départ." },
      what_does: {
        head: "Ce que Fait Votre Infirmière Navigatrice en Oncologie",
        w1: "Évaluation complète du patient", w2: "Revue et organisation des dossiers médicaux", w3: "Coordination des examens et rendez-vous", w4: "Éducation et soutien émotionnel",
        w5: "Identification et aide à surmonter les obstacles aux soins (financiers, transport, langue, etc.)", w6: "Travail étroit avec l'équipe multidisciplinaire", w7: "Garantie d'un suivi continu"
      },
      integrated: {
        head: "Intégré à Tous les Services du COC",
        i1: "Oncologie Médicale", i2: "Oncologie Radiothérapique", i3: "Chirurgie", i4: "Laboratoire", i5: "Imagerie (CT, IRM, Échographie)", i6: "Pharmacie", i7: "Soutien Nutritionnel", i8: "Onco-psychologie et Soutien Social", i9: "Cardiologie", i10: "Soins Palliatifs", i11: "Soins Hospitaliers", i12: "Ressources Communautaires"
      },
      team: { head: "Une Équipe d'Accompagnement Dédiée", desc: "Notre programme a débuté avec une infirmière navigatrice et s'est étendu à deux infirmières navigatrices dédiées pour répondre aux besoins croissants de nos patients.", quote: "«Nous marchons à vos côtés dans ce parcours.»" }
    },

    affiliate: {
      banner: {
        title: "Programme du Réseau de Médecins Affiliés", subtitle: "Un Réseau National Partagé de Soins du Cancer",
        desc: "Un partenariat pour de meilleurs soins du cancer à travers le Cameroun et au-delà. Les médecins affiliés restent impliqués avant, pendant et après le traitement spécialisé au Cameroon Oncology Center.",
        quote: "«Ensemble, Nous Rapprochons l'Espoir de Chez Vous.»", tag_html: "Un Réseau.<br>Un Objectif.<br>Un Cameroun<br>Sans Cancer."
      },
      icons: { access: "Meilleur Accès aux Soins", collaboration: "Collaboration Renforcée", continuity: "Continuité pour les Patients", outcomes: "Meilleurs Résultats" },
      vision: { head: "Notre Vision", desc: "Être le principal réseau de soins du cancer au Cameroun, offrant des soins de haute qualité, accessibles et empreints de compassion à chaque patient, partout." },
      mission: { head: "Notre Mission", desc: "Améliorer l'accès à des soins complets du cancer grâce à des partenariats collaboratifs avec des médecins qui partagent la responsabilité du diagnostic précoce, de la référence, de la coordination des traitements, de la survie et des soins palliatifs." },
      principles: { head: "Principes Directeurs", p1: "Le bien-être du patient d'abord", p2: "Respect du choix du patient", p3: "Indépendance clinique", p4: "Confidentialité", p5: "Soins fondés sur des données probantes", p6: "Collaboration éthique" },
      join: { head: "Rejoindre le Réseau", desc: "Ensemble, nous pouvons élargir l'accès à des soins du cancer de qualité pour nos communautés.", btn: "Devenir Affilié" },
      pathway: {
        head: "Le Parcours de Soins Affiliés du COC", subtitle: "Un Parcours de Soins Partagés et Continu",
        p1_t: "Médecin Affilié (Évaluation Initiale)", p1a: "Reconnaît un cancer suspecté", p1b: "Initie le bilan", p1c: "Conseille le patient", p1d: "Prépare un dossier de référence complet",
        p2_t: "Référence (vers le COC)", p2a: "Antécédents cliniques", p2b: "Rapports de pathologie", p2c: "Résultats d'imagerie et de laboratoire", p2d: "Question de référence spécifique",
        p3_t: "Cameroon Oncology Center (Soins Spécialisés)", p3a: "Accompagnement du patient", p3b: "Revue multidisciplinaire", p3c: "Diagnostics avancés", p3d: "Radiothérapie, chimiothérapie, chirurgie", p3e: "Soins de soutien",
        p4_t: "Plan Partagé (Gestion Conjointe)", p4a: "Plan de traitement", p4b: "Communication avec le médecin affilié", p4c: "Stratégie de suivi définie", p4d: "Éducation du patient",
        p5_t: "Suivi Local (Plus Proche de Chez Vous)", p5a: "Surveillance et suivi", p5b: "Soins de soutien", p5c: "Contrôle des symptômes", p5d: "Réorientation rapide vers le COC si un avis spécialisé est nécessaire"
      },
      note: "Communication Continue, Mises à Jour du Traitement et Soutien à la Décision Partagée",
      note2: "Le patient reste au Centre ou au Centre Satellite",
      note3: "Choix du patient · Indépendance clinique · Confidentialité · Soins partagés documentés · Aucun soin uniquement pour référence",
      levels: {
        head: "Quatre Niveaux d'Affiliation",
        l1_t: "Niveau 1 — Partenaire de Référence", l1a: "Médecins généralistes et de famille", l1b: "Reconnaissance précoce", l1c: "Bilan initial", l1d: "Référence précoce", l1e: "Suivi de base", l1f: "Éducation communautaire",
        l2_t: "Niveau 2 — Partenaire de Service", l2a: "Hôpitaux de district et régionaux", l2b: "Coordination des diagnostics", l2c: "Préparation des dossiers de référence", l2d: "Suivi des patients après traitement", l2e: "Gestion des soins de soutien",
        l3_t: "Niveau 3 — Partenaire de Soins Collaboratifs", l3a: "Spécialistes (chirurgie, gynécologie, urologie, ORL, gastro-entérologie, etc.)", l3b: "Cogestion", l3c: "Participation au conseil tumoral conjoint", l3d: "Soins et suivi partagés", l3e: "Formation et éducation",
        l4_t: "Niveau 4 — Partenaire Collaboratif Avancé", l4a: "Services d'oncologie complets", l4b: "Forte intégration avec le COC", l4c: "Programmes et recherche conjoints", l4d: "Formation et renforcement des capacités", l4e: "Leadership régional en soins du cancer"
      },
      hub: {
        head: "Le Modèle en Étoile (Hub-and-Spoke)",
        desc: "Le COC (Douala-Bekoko, Centre Principal) avec des annexes affiliées à Bamenda, Garoua, Maroua, Ngaoundéré, Bertoua et Douala-Bonabéri",
        b1: "Rapprocher les soins des patients", b2: "Réduire les coûts de déplacement", b3: "Diagnostic plus précoce", b4: "Meilleure adhésion au traitement", b5: "Accès à l'expertise spécialisée", b6: "Télémédecine et partage des connaissances", b7: "Un réseau de soins du cancer plus fort et plus équitable"
      },
      components: { head: "Composantes Clés", c1: "Processus de Référence Complet", c2: "Consultation Multidisciplinaire", c3: "Conseil Tumoral Multidisciplinaire", c4: "Retour d'Information Continu" },
      benefits_physicians: { head: "Avantages pour les Médecins", b1: "Accès à l'avis de spécialistes", b2: "Formation médicale continue", b3: "Soins partagés et cogestion", b4: "Reconnaissance en tant que partenaire du COC", b5: "Soutien pour les cas complexes" },
      benefits_patients: { head: "Avantages pour les Patients", b1: "Accès plus rapide aux soins spécialisés", b2: "Soins plus proches de chez soi", b3: "Réduction des coûts de déplacement", b4: "Continuité des soins", b5: "Meilleurs résultats de traitement" },
      commitment: { head: "Notre Engagement", c1: "Partenariat", c2: "Qualité", c3: "Équité", c4: "Un Cameroun en meilleure santé" }
    }
  },

  /* The languages below are wired into the switcher but not yet
     translated — t() already falls back to English key-by-key for
     anything missing here, so selecting one of these shows English
     content (with a one-time toast explaining that) until real
     translations are filled in. Keeping them as real (empty) objects
     rather than omitting them is what lets applyLanguage() accept the
     selection instead of silently forcing it back to English. */
  es: {}, pt: {}, de: {}, it: {}, ar: {}, zh: {}, ru: {}, sw: {},
  dua: {}, ewo: {}, ful: {}, bas: {}, bbj: {}
};

/* Metadata for the language dropdown: code, native display name, and
   whether real translated content exists yet (drives the "coming soon"
   toast). Both the desktop topbar and the mobile drawer build their
   <select> options from this single list. */
const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', translated: true },
  { code: 'fr', name: 'Français', translated: true },
  { code: 'es', name: 'Español', translated: false },
  { code: 'pt', name: 'Português', translated: false },
  { code: 'de', name: 'Deutsch', translated: false },
  { code: 'it', name: 'Italiano', translated: false },
  { code: 'ar', name: 'العربية', translated: false },
  { code: 'zh', name: '中文', translated: false },
  { code: 'ru', name: 'Русский', translated: false },
  { code: 'sw', name: 'Kiswahili', translated: false },
  { code: 'dua', name: 'Duala', translated: false },
  { code: 'ewo', name: 'Ewondo', translated: false },
  { code: 'ful', name: 'Fulfulde', translated: false },
  { code: 'bas', name: 'Bassa', translated: false },
  { code: 'bbj', name: "Ghomala'", translated: false },
];

function i18nGet(lang, key) {
  const parts = key.split('.');
  let node = translations[lang];
  for (const p of parts) {
    if (node == null) return undefined;
    node = node[p];
  }
  return node;
}

function t(key) {
  const lang = getCurrentLang();
  const val = i18nGet(lang, key);
  if (val !== undefined) return val;
  const fallback = i18nGet('en', key);
  return fallback !== undefined ? fallback : key;
}

// In-memory fallback: some contexts (restricted file:// access, sandboxed
// previews, strict privacy settings) throw on any localStorage access at
// all. Without this fallback, that throw happens during page init — before
// the EN/FR buttons ever get their click listeners attached — which makes
// the whole switcher look dead. Language switching must never depend on
// storage succeeding; persistence is a nice-to-have on top of it.
let memoryLang = 'en';

function getCurrentLang() {
  try {
    return localStorage.getItem('coc_lang') || memoryLang;
  } catch (e) {
    return memoryLang;
  }
}

function applyLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  memoryLang = lang;
  try {
    localStorage.setItem('coc_lang', lang);
  } catch (e) {
    // Storage unavailable — language still switches for this page view,
    // it just won't persist across a full reload/navigation.
  }
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = t(el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const val = t(el.getAttribute('data-i18n-html'));
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const val = t(el.getAttribute('data-i18n-placeholder'));
    if (val !== undefined) el.setAttribute('placeholder', val);
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const val = t(el.getAttribute('data-i18n-title'));
    if (val !== undefined) el.setAttribute('title', val);
  });

  document.querySelectorAll('select.lang-select').forEach((sel) => {
    sel.value = lang;
  });

  document.dispatchEvent(new CustomEvent('coc:language-changed', { detail: { lang } }));
}

/* Turns a plain container (the topbar's .lang-switch div, or the mobile
   drawer's injected language block) into a <select> populated from
   SUPPORTED_LANGUAGES. Called for every such container on the page, and
   again by main.js right after it injects the mobile drawer's copy —
   idempotent via the langBuilt marker so re-running it is harmless. */
function buildLanguageSwitcher(container) {
  if (!container || container.dataset.langBuilt) return null;
  container.dataset.langBuilt = 'true';
  const select = document.createElement('select');
  select.className = 'lang-select';
  select.setAttribute('aria-label', 'Choose language / Choisir la langue');
  SUPPORTED_LANGUAGES.forEach((l) => {
    const opt = document.createElement('option');
    opt.value = l.code;
    opt.textContent = l.name;
    select.appendChild(opt);
  });
  select.value = getCurrentLang();
  select.addEventListener('change', () => {
    applyLanguage(select.value);
    showLanguageToast(select.value);
  });
  container.innerHTML = '';
  container.appendChild(select);
  return select;
}

/* One-time heads-up when a visitor picks a language that isn't translated
   yet, since applyLanguage()'s per-key English fallback would otherwise
   just silently show English with no explanation. Only fires on an actual
   user choice (see buildLanguageSwitcher's change handler) — never on the
   automatic re-apply that runs on every page load. */
function showLanguageToast(lang) {
  const meta = SUPPORTED_LANGUAGES.find((l) => l.code === lang);
  if (!meta || meta.translated) return;
  let toast = document.querySelector('.lang-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'lang-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = `${meta.name}: full translation coming soon — showing available content in English for now.`;
  toast.classList.add('show');
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove('show'), 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-switch').forEach((el) => buildLanguageSwitcher(el));
  applyLanguage(getCurrentLang());
});
