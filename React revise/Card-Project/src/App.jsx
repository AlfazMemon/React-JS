import "./App.css"
import Card from "./Components/Card"

const jobs = [
  {
    company: "Amazon",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdQkDmPAVnD9Lrwp7lQrPKSkGkIO8fhq1j_6aTTPptA&s=10",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    company: "Google",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzZmNFhSRT7ohLbQi47IYOQCFoqiZPPI2PDbTiX5DIg&s",
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Bangalore, India"
  },
  {
    company: "Microsoft",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpX6LLQ-9ZQ1Cr8B42xUu30zZS3jD_W_qP6m3qHTPWQ&s=10",
    posted: "1 day ago",
    title: "React Developer",
    type: "Full time",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    company: "Meta",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaVGO_waUfeYzkK7jKysSoQYf_NjIhljvoMOqUMmLnw&s=10",
    posted: "3 days ago",
    title: "Product Designer",
    type: "Full time",
    level: "Mid Level",
    salary: "$105/hr",
    location: "Remote"
  },
  {
    company: "Netflix",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsoKyHWXyJiRi4X_xVvdhCAy8PLNzBL3nJ0Vv6z34Iw&s=10",
    posted: "4 days ago",
    title: "UI Designer",
    type: "Part time",
    level: "Junior Level",
    salary: "$80/hr",
    location: "Delhi, India"
  },
  {
    company: "Adobe",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRcN38lCDcvWWfbPwpSSnCzEvQlBu6mgALa4jck3EYA&s=10",
    posted: "6 days ago",
    title: "UX Researcher",
    type: "Full time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Pune, India"
  },
  {
    company: "Spotify",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4Etwn9YseNZjBn99AHtkQXAkeDoT7UKtSsRUVz0ldA&s=10",
    posted: "1 week ago",
    title: "Frontend Engineer",
    type: "Full time",
    level: "Senior Level",
    salary: "$115/hr",
    location: "Remote"
  },
  {
    company: "Flipkart",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lY-6Y5gDEzAps8BGaTW25pvQHWSKP-wa7yu_NosOSw&s=10",
    posted: "3 days ago",
    title: "Web Developer",
    type: "Full time",
    level: "Junior Level",
    salary: "$70/hr",
    location: "Bangalore, India"
  },
  {
    company: "Zomato",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbxDYII7JDphQ6IF6dxR6vKDNSmWPjEg6nLANLiAIvvw&s=10",
    posted: "2 days ago",
    title: "UI/UX Designer",
    type: "Part time",
    level: "Mid Level",
    salary: "$85/hr",
    location: "Gurgaon, India"
  },
  {
    company: "TCS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3x-Xihii0MqNDSL0ASS7ZUp36dmpawKSZJHryuYQT6Q&s=10",
    posted: "5 days ago",
    title: "Software Developer",
    type: "Full time",
    level: "Senior Level",
    salary: "$90/hr",
    location: "Ahmedabad, India"
  }
];

const App = () => {
  return (
    <div>
      <div className="parent">

        {
         jobs.map(function(elem,index){
          return <Card key={index} {...elem} />
         })

          }
        
      </div>
    </div>
  )
}

export default App
