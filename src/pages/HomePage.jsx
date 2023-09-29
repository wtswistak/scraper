import Form from "../components/form/Form";
import { useState } from "react";
import HomeMain from "../components/results/HomeMain";

function HomePage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div className="flex justify-center py-24 bg-[var(--primary-color)] max-sm:py-16">
        <Form isChecked={isChecked} setIsChecked={setIsChecked} />
      </div>
      <HomeMain isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  );
}

export default HomePage;
