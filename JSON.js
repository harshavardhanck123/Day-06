//To create own resume data in JSON format
var resume={
    "Name": "Harshavardhan",
    "Email": "harsha@example.com",
    "Phone": "+1234567890",
    "Pddress": "123 Main Street, City, Country",
    "Summary": "Results-driven software engineer with 5 years of experience in developing web applications. Proficient in JavaScript, HTML, CSS, and various front-end frameworks. Strong problem-solving skills and a passion for learning new technologies.",
    "Hobbies":"reading books",
    "Education": [
      {
        "Degree": "Bachelor of Engineering in Electronics and Communication",
        "University": "Sri Ramakrishna Engineering College",
        "Graduation_year": 2024
      }
    ],
    "Skills": [
      "JavaScript",
      "HTML",
      "CSS",
    ]
    
  }

  //For Loop
  console.log("ForLoop")
  let keys=Object.keys(resume)
  let values=Object.values(resume)
  for(var i=0;i<keys.length;i++)
  {
    console.log(keys[i],":",values[i])
  }
  console.log("Details of Education using ForLoop")
  for(var k=0;k<resume.Education.length;k++)
  {
    console.log("Degree :" + resume.Education[0].Degree)
    console.log("University :" + resume.Education[0].University)
    console.log("Graduation Year :" + resume.Education[0].Graduation_year)
  }
  

  //For...in Loop
  console.log("For...In Loop")
  for(var j in resume)
  {
    console.log(resume[j]);
  }
  console.log("Details of Education using For...in Loop");
  for (var key in resume.Education[0]) {
    if (key === "Degree") {
      console.log("Degree"+ " : " +resume.Education[0][key]);
      }
  } 

  //For...of Loop
  console.log("For...ofLoop")
  for (const [key, value] of Object.entries(resume)) {
    console.log(key + " : " + value);
  }
  console.log("Details of Skills using For...Of Loop")
  for (const [key, value] of Object.entries(resume.Skills)) {
    console.log(value);
  }

  //For...each Loop
  let entry = Object.entries(resume)
  console.log("For...each Loop")
  entry.forEach(([Name,element]) => 
    console.log(Name + " : " +element)
  );
  console.log("Details of Skill using For...each loop")
  resume.Skills.forEach((Skills) => 
    console.log(Skills)
  );