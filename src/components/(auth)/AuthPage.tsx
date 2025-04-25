import { Button, Container, Stack, TextField, Typography } from "@mui/material";
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
        minHeight={{ sm: "80vh", md: "60vh" }}
        textAlign={"center"}
        padding={6}
      >
        {/* Header */}
        <Typography fontWeight={"bold"} variant="h4">
          {header}
        </Typography>
        <Typography>
          Have an Account?
          <Link href={"#"} className={"link"}>
            {" "}
            Sign In
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
        <Button sx={{ marginY: 3 }} variant="contained">
          {pageType === "signup" ? "Create Account" : "Sign In"}
        </Button>

        <Stack gap={1}>
          <Typography variant="body2">
            By creating account, you agree to our
          </Typography>
          <Link href={"#"} style={{ fontSize: "15px" }} className={"link"}>
            Terms of Service
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}

