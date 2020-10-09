import {IAuthModel} from "../models/IAuthModel";
import api from "../api";
import {IMailModel} from "../models/IMailModel";

export const ACTION_TYPES = {
  GET_AUTH: "GET_AUTH",
  SEND_CONTACTFORM: "SEND_CONTACTFORM",
  CLOSE_SUCCESSMSG: "CLOSE_SUCCESSMSG",
}

const authUrl = "auth/authenticate"
const mailUrl = "mail"

export const getAuth = () => {
  const authAcc: IAuthModel = {
    email: "contact@lov.education",
    password: "loveducation"
  };
  return {
    type: ACTION_TYPES.GET_AUTH,
    payload: api.post(authUrl, authAcc),
  }
}

export const sendContactForm = (data: any) => {
  const contactForm: IMailModel = {
    to: {
      email: "info@lov.education",
      name: "LOV"
    },
    body: "" +
      "Name: {{firstName}} {{lastName}}<br>" +
      "Email: {{email}}<br>" +
      "Phone: {{phone}}<br>" +
      "Field Of Study: {{fieldOfStudy}}<br>" +
      "Message: {{message}}<br>",
    type: "html",
    subject: "Contact Form Submission",
    data,
  }

  return {
    type: ACTION_TYPES.SEND_CONTACTFORM,
    payload: api.post(mailUrl, contactForm),
  }
}

export const closeSuccessMsg = () => {
  return {
    type: ACTION_TYPES.CLOSE_SUCCESSMSG,
  }
}