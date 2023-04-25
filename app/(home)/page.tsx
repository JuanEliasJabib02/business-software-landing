import Header from "@/components/Header/Header";
import "./home.css"
import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
export default function Home() {
  return (
    <div className="home-container">
      < Header />
      < Banner />
      < Services />
    </div>
  )
}
