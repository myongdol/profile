export const URLs = {
    email: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=myongdol132@gmail.com",
    github: "https://github.com/myongdol",
    blog: "https://blog.naver.com/ares132",
}


export const ResumeType = {
    default: {
      components: [
        "ProfileImage",
        "Name",
        "Info",
        "Introduce",
        "Career",
        "Work",
        "TechStack",
        "Education",
        "ProjectSection",
      ],
    },
    onlyResume: {
      components: [
        "ProfileImage",
        "Name",
        "Career",
        "Work",
        "TechStack",
        "Education",
        "ProjectSection",
      ],
    },
    onlyIntroduce: {
      components: ["ProfileImage", "Name", "Info", "Introduce"],
    },
  };