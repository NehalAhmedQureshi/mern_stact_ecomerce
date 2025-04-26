import {
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface Field {
  label: string;
  name: string;
  placeholder?: string;
  type: string;
}

const textFields = {
  signup: [
    {
      label: "Email",
      name: "email",
      placeholder: "Enter Email Address",
      type: "textfield",
    },
    {
      label: "Password",
      name: "password",
      placeholder: "Enter Password Address",
      type: "textfield",
    },
    // {label: 'Keep me signed if in' , name : 'known' , type : 'checkbox'}
  ] as const,
  login: [
    {
      label: "Email",
      name: "email",
      placeholder: "Enter Email Address",
      type: "textfield",
    },
    {
      label: "Password",
      name: "password",
      placeholder: "Enter Password Address",
      type: "textfield",
    },
  ] as const,
  reset: [
    {
      label: "Email",
      name: "email",
      placeholder: "Enter Email Address",
      type: "textfield",
    },
  ] as const,
  confirm: [
    {
      label: "Confirmation Code",
      name: "number",
      placeholder: "Enter Code",
      type: "textfield",
    },
  ] as const,
};

interface authPageProps {
  header: string;
  pageType: keyof typeof textFields;
}
export default function AuthPage({ header, pageType }: authPageProps) {
  return (
    <Container
      maxWidth={"lg"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack
        bgcolor={"white"}
        color={"black"}
        width={{ xs: "70%", md: "50%" }}
        minHeight={{ sm: "60vh", md: "50vh" }}
        textAlign={"center"}
        padding={6}
        justifyContent={"center"}
        gap={1}
      >
        {/* Header */}
        <Typography fontWeight={"bold"} variant="h4">
          {header}
        </Typography>
        <Typography>
          {pageType === "signup"
            ? "Have an Account?"
            : pageType === "login"
            ? "New to Our Product?"
            : pageType === "confirm"
            ? "Check Your Email and Enter Confirmation Code"
            : ""}
          <Link
            href={
              pageType === "login"
                ? "/signup"
                : pageType === "signup"
                ? "/login"
                : "#"
            }
            style={{ color: "primary.light" }}
            className={"link"}
          >
            {" "}
            {pageType === "signup"
              ? "Sign In"
              : pageType === "login"
              ? "Create an Account"
              : ""}
          </Link>
        </Typography>

        {/* Text fields */}
        <Stack marginTop={5} gap={3}>
          {textFields[pageType]?.map((data, index) => (
            <TextField
              key={index}
              label={data?.label}
              name={data?.name}
              placeholder={data?.placeholder}
            />
          ))}
        </Stack>

        {/* login | sign up button */}
        <Button
          component={Link}
          href={
            pageType === "signup"
              ? routes?.login
              : pageType === "reset"
              ? routes?.confirm
              : pageType === "confirm"
              ? routes?.reset
              : "#"
          }
          sx={{ marginY: 3 }}
          variant="contained"
        >
          {" "}
          {button[pageType]}
        </Button>
        <Divider />

        <Stack gap={1} my={2}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {rememberMessages[pageType] || ""}
          </Typography>
          {(pageType === "signup" || pageType === "login") && (
            <Link
              href={pageType === "login" ? "/password-reset" : "#"}
              style={{ fontSize: "16px", color: "primary.main" }}
              className={"link"}
            >
              {pageType === "signup"
                ? "Terms of Service"
                : "Forgot your password?"}
            </Link>
          )}
        </Stack>
        {(pageType === "reset" || pageType === "confirm") && (
          <Button
            component={Link}
            href={pageType === "reset" ? routes?.login : "#"}
            variant={"outlined"}
          >
            {pageType === "reset" ? "Back to Sign In" : "Resend Code"}
          </Button>
        )}
      </Stack>
    </Container>
  );
}

const rememberMessages = {
  login: "",
  signup: "By creating account, you agree to our",
  reset: "Remember your Password?",
  confirm: "Haven’t received your code?",
};

const button = {
  login: "Sign In",
  signup: "Create Account",
  reset: "Reset Password",
  confirm: "Confirm Email",
};

const routes = {
  signup: "/signup",
  login: "/login",
  reset: "/password-reset",
  confirm: "confirm-email",
};
