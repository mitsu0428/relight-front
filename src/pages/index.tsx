import * as HeadConfig from "@/components/config/HeadConfig";
import * as Heading from "@/components/features/Heading";
import * as InputForm from "@/components/features/InputForm";
import * as Footer from "@/components/features/Footer";
import * as CircleCanvas from "@/components/features/CanvasWrapper";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeadConfig.Components />
      <main className={styles.main}>
        <Heading.Components />
        <InputForm.Components />
        <CircleCanvas.Components />
        <Footer.Components />
      </main>
    </>
  );
}
