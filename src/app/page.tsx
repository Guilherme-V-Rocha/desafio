// import styles from "./page.module.css";
// import AppleWatch from '@/images/iphoneX.svg'

'use-client'
import { Head } from "@/components/head/head";
import {Product} from "@/components/product/product";
export default function Home() {
  return (
    <main>
      <Head/>
    <Product/>
    </main>
  );
}
