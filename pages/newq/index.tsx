import Head from "next/head";
import { verifyIdToken } from "../../firebase/firebaseAdmin";
import nookies from "nookies";
import { NewQuestionContainer, UploadButton, InputArea } from "./newq.styled";
import React, { useState } from "react";
import { SnackbarComp } from "../../components/snackbar/Snackbar";

export default function NewQuestion() {
  const [question, setQuestion] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const onSubmitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(question);
    setOpen(true);
    setQuestion("");
  };

  return (
    <>
      <Head>
        <title>New Query</title>
      </Head>
      <form onSubmit={onSubmitHandler}>
        <NewQuestionContainer>
          <InputArea
            placeholder="Ask any Query"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></InputArea>
          <UploadButton type="submit">upload</UploadButton>
        </NewQuestionContainer>
        <SnackbarComp
          isOpen={open}
          handleClose={handleClose}
          msg="Your Question uploaded"
        />
      </form>
    </>
  );
}
export async function getServerSideProps(context: any) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    return {
      props: {},
    };
  } catch (err) {
    context.res.writeHead(302, { location: "/login" });
    context.res.end();
    return { props: {} };
  }
}
