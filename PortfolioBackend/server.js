const dotenv = require("dotenv");
const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const fs = require("fs");
const cors = require("cors");

dotenv.config();
const multer = require("multer");
const upload = multer();

//create a new Express instance
const app = express();
//store the port
const port = process.env.PORT || 3000;

//configure the Express middleware to accept Angular miltipart/form-data needed for the attachment and parse request body into .json
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//define the cors options
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionSuccessStatus: 200,
};

//configure the Express middleware to use the cors option we defined
app.use(cors(corsOptions));

//store email template path and store the emailTemplate in templateContent
const templatePath = "email.html";
const templateContent = fs.readFileSync(templatePath, "utf-8");

// create a function to replace placeholders in the email template with received data
function replacePlaceholders(html, data) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const placeholder = `{{${key}}}`;
      html = html.replace(new RegExp(placeholder, "g"), data[key]);
    }
  }
  return html;
}

// define send endpoint, which will send emails and response with the corresponding status
app.post("/send", upload.none(), async (req, res) => {
  console.log("Received request body:", req.body);
  try {
    const {name, email, message} = req.body;

    // extra backend validation
    if (!name || !email || !message) {
      return res.status(400).json({error: "Missing required fields"});
    }

    // create nodemailer transport
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "72a99512d7f59d",
        pass: "8c2cd72eed3746",
      },
    });

    // replace placeholders in the email template with received data
    const emailHtml = replacePlaceholders(templateContent, {
      name,
      email,
      message,
    });

    // define the options of your email like to/from-headers, subject line, body text, html and attachment
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: [process.env.RECIPIENT_EMAIL, "orgestpasha2005@gmail.com"],
      text: `New message \n\nFrom: ${name}\nEmail: ${email}\n\nMessage:\n\n${message}`,
      html: emailHtml,
    };

    // store send mail response
    const info = await transport.sendMail(mailOptions);

    // provide console feedback and return a positive response to the client
    console.log("Email sent:", info.response);
    res.status(200).json({message: "Email sent successfully"});
  } catch (error) {
    // provide error information in case there is any and send corresponding response
    console.error("Error sending email:", error);
    res.status(500).json({error: "Error sending email"});
  }
});

// bind and listen for connections on the specified host and port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
