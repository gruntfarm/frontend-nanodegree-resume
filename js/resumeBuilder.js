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

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
})

bio.display();
work.display();
projects.display();
