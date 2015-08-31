/*
This is empty on purpose! Your code to build the resume will go here.
 */
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

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
})

displayWork()
