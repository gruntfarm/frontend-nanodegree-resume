/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Mladen Kovacevic",
    "role": "Digital Marketing Manager",
    "contact": {
        "mobile": "416-906-1722",
        "email": "mladen.kovacevic@gmail.com",
        "github": "gruntfarm",
        "twitter": "@vrshift",
        "location": "Toronto"
    },
    "picture": "https://pbs.twimg.com/profile_images/442474686169899008/Bb5ejYI2_400x400.jpeg",
    "welcomeMessage": "Welcome to my dojo",
    "skills": ["Light Saber", "Using the Force", "Android Maintenance", "Spaceship Piloting"]
}
var work = {
    "jobs": [
        {
            "employer": "Glacier Media Group",
            "title": "Marketing manager",
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
        }
    ]
}


var projects = {
    "project": [
        {
            "title": "Crestbound",
            "dates": "2012-2015",
            "description": "Crestbound website",
            "images": [""]
        },
        {
            "title": "VRshift",
            "dates": "2015",
            "description": "VRshift - VR news site",
            "images": [""]
        }
    ]
}

var education = {
    "schools": [
    {
        "name":"York University",
        "city":"Toronto, Ontario",
        "degree":"Bachelor of Fine Arts",
        "majors":["Film Studies"],
        "year":2004,
        "url":"http://www.yorku.ca"
    },
    {
        "name":"Jedi Academy",
        "city":"Tatooine, Galaxy far far away",
        "degree":"Light Side",
        "majors":["Telekinesis", "Kickin' Sith Ass"],
        "year":2015,
        "url":"http://www.starwars.com"
    }
],
"onlineCourses": [
    {
        "course": "Front End Web Development Nanodegree",
        "school":"Udacity",
        "url":"http://www.udacity.com",
        "year":2015
    }
]
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#header").append(formattedPic);
    $("#header").append(formattedWelcomeMsg);


    for (item in bio.contact) {
        var formattedContact = HTMLcontactGeneric.replace("%contact%", item).replace("%data%", bio.contact[item]);

        $("#topContacts:last").append(formattedContact);
    }
    $("#header").append(HTMLskillsStart);

    for (item in bio.skills) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[item]);
        $("#skills").append(formattedSkill);
    }



}

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

projects.display = function() {
    for (project in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[project].images);
        $(".project-entry:last").append(formattedProjectImage);

    }
}

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedSchoolCity);


        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].year);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor);

    }

    for (course in education.onlineCourses) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].course);
        $(".education-entry:last").append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineURL);

        var formattedOnlineYear = HTMLonlineDates.replace("%data%", education.onlineCourses[course].year);
        $(".education-entry:last").append(formattedOnlineYear);

    }
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
})

bio.display();
work.display();
projects.display();
education.display();