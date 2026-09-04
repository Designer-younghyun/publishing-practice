
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ServiceIconNav from "@/components/ServiceIconNav";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <div className="mx-auto w-[1280px]">
      <Header />
      <SearchBar />
      <ServiceIconNav />
      <MainSection />
    </div>
  );
}