/*
This is empty on purpose! Your code to build the resume will go here.
 */
var data = "%data%";
var $header = $("#header");

var bio = {
    "name": "Mladen Kovacevic",
    "role": "Front-End Padawan",
    "contacts": {
        "mobile": "416-906-1722",
        "email": "mladen.kovacevic@gmail.com",
        "github": "gruntfarm",
        "twitter": "@vrshift",
        "location": "Toronto, Ontario"
    },
    "picture": "https://pbs.twimg.com/profile_images/442474686169899008/Bb5ejYI2_400x400.jpeg",
    "welcomeMessage": "Welcome to my dojo",
    "skills": ["Light Saber Maintenance", "Using the Force", "Android Cleaning", "Speeder Racing", "Javascript"]
};

var work = {
    "jobs": [{
            "employer": "Glacier Media Group",
            "title": "Marketing Manager",
            "location": "Toronto, Ontario",
            "dates": "2008-2015",
            "description": "Revenue growth generation and customer nurturing achieved via careful planning, execution and analysis across a number of marketing channels. Lead in SEO optimization analysis and consulting (keyword and taxonomy strategy, back-linking expansion, reporting and guidance). Execution of all pay-per-click campaigns (Bing, Google, Facebook, Linkedin, Twitter). Development and maintenance of full e-mail marketing program reaching over 60K customers and prospects (list selection, segmentation, design, content curation, deployment and analysis ). Full-stack management of content marketing, landing pages and special promotions",
        },
        {
            "employer": "Canamedia",
            "title":"Technical Coordinator",
            "location": "Toronto, Ontario",
            "dates": "2006-2008",
            "description": "Managed distribution and logistics of extensive library of international television content. Played a lead graphic designer and online marketing role",
        }]
};

var projects = {
    "project": [{
            "title": "Crestbound",
            "dates": "2012-2015",
            "description": "Crestbound website",
            "images": ["https://pbs.twimg.com/profile_images/631535425333518336/D-i_GqpT.jpg"]
        },
        {
            "title": "VRshift",
            "dates": "2015",
            "description": "VRshift - VR news site",
            "images": ["http://i.ytimg.com/vi/ngElkyQ6Rhs/hqdefault.jpg"]
        }]
};

var education = {
    "schools": [{
        "name":"York University",
        "location":"Toronto, Ontario",
        "degree":"Bachelor of Fine Arts",
        "majors":["Film Studies"],
        "year":2004,
        "url":"http://www.yorku.ca"
    },
    {
        "name":"Jedi Academy",
        "location":"Skywalker Ranch, California",
        "degree":"Light Side",
        "majors":["Holochess", "Kickin' Sith Ass"],
        "year":2015,
        "url":"http://www.starwars.com"
    }],
"onlineCourses": [{
        "course": "Front End Web Development Nanodegree",
        "school":"Udacity",
        "url":"http://www.udacity.com",
        "year":2015
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedPic = HTMLbioPic.replace(data, bio.picture);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $($header).prepend(formattedRole);
    $($header).prepend(formattedName);

    $($header).append(formattedPic);
    $($header).append(formattedWelcomeMsg);

    $.each( bio.contacts, function( key, value) {
        var formattedContact = HTMLcontactGeneric.replace("%contact%", key).replace(data, value);
        $("#topContacts:last").append(formattedContact);
        $("#footerContacts:last").append(formattedContact);
    });

    $($header).append(HTMLskillsStart);

    var len = bio.skills.length;
    for ( var skill = 0; skill < len; skill++ ) {
        var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
};

work.display = function() {
    var len = work.jobs.length;
    for ( var job = 0; job < len; job++ ) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    var len = projects.project.length;
    for ( var proj = 0; proj < len; proj++) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.project[proj].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace(data, projects.project[proj].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.project[proj].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.project[proj].images !== null) {
            var imageLen = projects.project[proj].images.length;
            for (var img = 0; img < imageLen; img++) {
                var formattedProjectImage = HTMLprojectImage.replace(data, projects.project[proj].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

education.display = function() {
    var len = education.schools.length;
    for (var school = 0; school < len; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);

        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

        var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].year);
        $(".education-entry:last").append(formattedSchoolDates);

        if (education.schools[school].majors !== null) {
            var majorsLen = education.schools[school].majors.length;
            for (var major = 0; major < majorsLen; major++) {

                var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedSchoolMajor);

            }
        }
    }
    var coursesLen = education.onlineCourses.length;
    for (var course = 0; course < coursesLen; course++) {
        $("#education").append(HTMLonlineClasses);

        var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[course].course);

        var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[course].school);
        $("#education").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[course].url);
        $("#education").append(formattedOnlineURL);

        var formattedOnlineYear = HTMLonlineDates.replace(data, education.onlineCourses[course].year);
        $("#education").append(formattedOnlineYear);
    }
};

$("#mapDiv").append(googleMap);

// $(document).click(function(loc) {
//     var x = loc.pageX;
//     var y = loc.pageY;
// logClicks(x,y);
// });

bio.display();
work.display();
projects.display();
education.display();
