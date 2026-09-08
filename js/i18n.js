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
        research: "Research & Training",
        research_publications: "Publications",
        research_training: "Training Programs",
        news: "News & Media",
        news_outreach: "Community Outreach",
        news_press: "Press & Announcements",
        careers: "Careers",
        contact: "Contact Us"
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
        title: "Request received.",
        desc: "Our patient coordination team will contact you shortly to confirm your appointment."
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
        research: "Recherche et Formation",
        research_publications: "Publications",
        research_training: "Programmes de Formation",
        news: "Actualités et Médias",
        news_outreach: "Sensibilisation Communautaire",
        news_press: "Presse et Annonces",
        careers: "Carrières",
        contact: "Contactez-nous"
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
        title: "Demande reçue.",
        desc: "Notre équipe de coordination des patients vous contactera sous peu pour confirmer votre rendez-vous."
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
    }
  }
};

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

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.dispatchEvent(new CustomEvent('coc:language-changed', { detail: { lang } }));
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(getCurrentLang());

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
});
