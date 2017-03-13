/*
 This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append(internationalizeButton);
var bio = {
    name: 'Rishabh Ahuja',
    role: 'Web Developer',
    contacts: {
        Mobile: '+919999425219',
        Github: 'https://github.com/Rishabh-Ahuja',
        location: 'Delhi',
        Email: 'ahuja.rishabh99@hotmail.com'
    },
    welcomeMessage: 'Web Developers Are Awesome ! So You Are!',
    skills: ['Html', 'CSS', 'Javascript', 'NodeJS', 'AngularJs', 'Bootstrap', 'React', 'Ember', 'MongoDB'],
    bioPic: 'images/fry.jpg',
    display: function () {
        $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role)).prepend(HTMLheaderName.replace('%data%', bio.name)).append(HTMLbioPic.replace('%data%', bio.bioPic)).append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage)).append(HTMLskillsStart);
        $.each(bio.contacts, function (key, value) {
            $('#topContacts').append(HTMLcontactGeneric.replace('%contact%', key).replace('%data%', value));
            // .replace('%data%', value));
            $('#footerContacts').append(HTMLcontactGeneric.replace('%contact%', key).replace('%data%', value));
            // .replace('%data%', value));
        });

        $.each(bio.skills, function (value) {
            $('#skills').append(HTMLskills.replace('%data%', bio.skills[value]));
        });
    }

};
var education = {
    "schools": [{
        "name": "Gyan Bharati School",
        "location": "Delhi",
        "degree": "10+2",
        "majors": "N/A",
        "dates": "2016",
        "url": "http://gyanbharatischool.net"
    },
        {
            "name": "Ramanujan College",
            "location": "Delhi",
            "degree": "BA",
            "majors": ["N/A"],
            "dates": "2018",
            "url": "http://rcdu.in"
        }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "March 2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
    }, {
        "title": "Angularjs",
        "school": "University Of Hong Kong Science And Technology (Coursera)",
        "dates": "March 2017",
        "url": "https://www.codecademy.com/learn/javascript",
    },
        {
            "title": "HTML,CSS,Javascript",
            "school": "University Of Hong Kong Science And Technology (Coursera)",
            "dates": "October 2016",
            "url": "https://www.codecademy.com/learn/javascript",
        }],
    display: function () {
        $.each(education.schools, function (index) {
            $("#education").append(HTMLschoolStart);
            var schoolName = HTMLschoolName.replace('%data%', education.schools[index].name).replace('#', education.schools[index].url);
            var schoolDegree = HTMLschoolDegree.replace('%data%', education.schools[index].degree);
            var NameAndDegree = schoolName + schoolDegree;
            var schoolDates = HTMLschoolDates.replace('%data%', education.schools[index].dates);
            var schoolLocation = HTMLschoolLocation.replace('%data%', education.schools[index].location);
            var schoolMajour = HTMLschoolMajor.replace('%data%', education.schools[index].majors);
            $(".education-entry:last").append(NameAndDegree + schoolDates + schoolLocation + schoolMajour);
        });
        $("#education").append(HTMLonlineClasses);
        $.each(education.onlineCourses, function (index) {
            $("#education").append(HTMLschoolStart);
            var title = HTMLonlineTitle.replace('%data%', education.onlineCourses[index].title);
            var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
            var onlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[index].dates);
            var onlineUrl = HTMLonlineURL.replace('#', education.onlineCourses[index].url).replace('%data%', education.onlineCourses[index].url);
            $(".education-entry:last").append(title + onlineSchool + onlineDates + onlineUrl);
        });
    }
};
var work = {
    "jobs": [
        {
            "employer": "Srestha Club",
            "title": "Web Developer",
            'location': "Delhi",
            "dates": "January 2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit justo et sapien dapibus ullamcorper. In risus mi, commodo vitae placerat eu, dapibus at diam. Proin pretium vitae nulla sit amet lacinia. Etiam posuere vitae neque et semper. Duis ultrices fermentum elit vulputate fermentum. Nullam dui tortor, condimentum id varius a, congue feugiat odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;."
        },
        {
            "employer": "Vedic Club",
            "title": "Web Developer",
            'location': "Bangalore",
            "dates": "January 2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit justo et sapien dapibus ullamcorper. In risus mi, commodo vitae placerat eu, dapibus at diam. Proin pretium vitae nulla sit amet lacinia. Etiam posuere vitae neque et semper. Duis ultrices fermentum elit vulputate fermentum. Nullam dui tortor, condimentum id varius a, congue feugiat odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; "
        }
    ],
    displayWork: function () {

        $.each(work.jobs, function (index, value) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[index].employer);
            var formattedWorkTittle = HTMLworkTitle.replace('%data%', work.jobs[index].title);
            var formattedEmployerTittle = formattedEmployer + formattedWorkTittle;
            var workdates = HTMLworkDates.replace('%data%', work.jobs[index].dates);
            var workLocation = HTMLworkLocation.replace('%data%', work.jobs[index].location);
            var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[index].description);
            $(".work-entry:last").append(formattedEmployerTittle + workdates + workLocation + formattedWorkDescription);
        });

    }

};
var projects = {
    "projects": [{
        "title": "Srestha Website",
        "dates": "January 2017",
        "description": "Design and Develop a Website for them",
        "images": ["http://placehold.it/413x413", "http://placehold.it/413x413"]
    }],
    display: function () {
        $.each(projects.projects, function (index, value) {
            $("#projects").append(HTMLprojectStart);
            var fixProject = projects.projects[index];
            var formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', fixProject.title);
            var formattedHTMLprojectDates = HTMLprojectDates.replace('%data%', fixProject.dates);
            var formattedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', fixProject.description);
            $(".project-entry:last").append(formattedHTMLprojectTitle + formattedHTMLprojectDates + formattedHTMLprojectDescription);
            $.each(fixProject.images, function (index, value) {
                var formattedHTMLprojectImage = HTMLprojectImage.replace('%data%', fixProject.images[index]);
                $(".project-entry:last").append(formattedHTMLprojectImage);
            })
        });
    }
};
bio.display();
projects.display();
work.displayWork();
education.display();
function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name.join(" ");
}
$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
function displayMap() {
    $('#mapDiv').append(googleMap);
}

displayMap();