import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://i.postimg.cc/0NhV2W7S/Resend-mail.jpg"
            width="150"
            height="150"
            alt="Banner"
            style={logo}
          />
          <Heading style={h1}>Welcome, {firstName}!</Heading>
          <Text style={text}>
            Thanks for joining us. We're excited to have you on board.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const logo = {
  margin: "0 auto",
};

const text = {
  color: "#333",
  fontSize: "14px",
  margin: "24px 0",
};
