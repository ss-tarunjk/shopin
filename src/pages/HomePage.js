import Hero from "../components/home/Hero";
import ShowProducts from "../components/common/ShowProducts";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ShowProducts title={"NEW ARRIVALS"} />
      <ShowProducts title={"top selling"} />
    </div>
  );
}
