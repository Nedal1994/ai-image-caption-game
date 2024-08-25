import Head from "next/head";
import { NextPage } from "next";

// import Navbar from '../components/Navbar'
import Main from "./main/page";
import EvaluationModal from "@/components/EvaluationModal";


export default function AppPage() {
  return (
    <div>
      {/* <Navbar/> */}
      <Main/>
      {/* <EvaluationModal/> */}
    </div>
  )
}
