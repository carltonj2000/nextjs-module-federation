import Head from "next/head";

import DogImage from "./DogImage";
//import DogCaptionRemote from "./DogCaptionRemote";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DogImage />
      {/* <DogCaptionRemote name="Freddy" /> */}
    </div>
  );
};
