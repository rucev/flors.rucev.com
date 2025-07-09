import exp from './exp'
import privacy from './privacy'
import projects from './projects'
import skills from './skills'
import workshops from './workshops'

export default {
  titleName: 'Flors Rueda Cebollero',
  role: 'Full Stack Developer',
  links: {
    skillsLink: 'Skills',
    expLink: 'Experience',
    projectsLink: 'Projects',
    contactLink: 'Let’s Talk!',
    workshopsLink: 'Workshops',
    menuLabel: 'Main Navigation'
  },
  contact: {
    title: 'Let’s Talk!',
    formNameLabel: 'Name',
    formNamePlaceholder: 'Jane Doe',
    formEmailLabel: 'Email',
    formEmailPlaceholder: 'jane-doe@email.com',
    formMessageLabel: 'Message',
    formMessagePlaceholderOther: 'Tell me what’s on your mind.',
    formMessagePlaceholderPartnership: 'Want to collaborate? Tell me more!',
    formMessagePlaceholderWork: 'Give me the details of the job you have in mind.',
    formMessagePlaceholderContent: 'Anything specific you want to request for the blog?',
    formMessagePlaceholderFeedback: 'What do you think about this website?',
    formMessagePlaceholderBug: 'If you find a bug, please let me know!',
    formMessagePlaceholderPrivacy: 'Any questions related to privacy policies?',
    formTopicsLabel: 'What do you want to talk about?',
    formTagOther: 'Other',
    formTagPartnership: 'Partnerships',
    formTagWork: 'Job Offers',
    formTagContent: 'Content Request',
    formTagFeedback: 'Feedback',
    formTagBug: 'Report a Bug',
    formTagPrivacy: 'Privacy',
    formButton: 'SEND',
    formAgree: 'I agree with ',
    formPrivacy: 'the privacy policy',
    formNameError: 'Please enter your name.',
    formEmailError: 'Please enter a valid email address.',
    formMessageError: 'Please provide a more detailed message.',
    formTermsError: 'Please, read and agree with the terms of use and privacy policy.',
    ariaLabelTag: 'Choose ',
    ariaLabelSend: 'Send message',
    ariaLabelOpenTerms: 'Go to privacy policy',
  },
  footer: {
    linkedin: 'Open Flors Rueda Linkedin profile in a new tab',
    github: 'Open Flors Rueda GitHub profile in a new tab',
    lang: 'Change language'
  },
  other: {
    errorMessage: 'Sorry, something went wrong!',
    smallScreenMessage: 'Looks like your screen’s a bit small! Try resizing your window or using a larger device for the best view.',
    submitMessage: 'Message sent successfully'
  },
  privacy: {
    title: "Privacy Policy",
    intro: "This Privacy Policy describes how the website collects, uses, and protects the personal information you provide on flors.rucev.com.",
    sections: privacy
  },
  exp: {
    title: 'Work Experience Timeline',
    experience: exp,
  },
  skills: {
    title: 'Skills and Tech Stacks',
    skills: skills,
  },
  projects: {
    title: 'Portfolio of projects',
    projects: projects
  },
  workshops: {
    title: 'Workshops’ repositories',
    workshops: workshops
  }
}
