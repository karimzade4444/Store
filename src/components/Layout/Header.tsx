import { Search } from "lucide-react";
import CustomInput from "../custom/CustomInput";



const Header = () => {
  return (
    <div className="w-full max-h-25 h-fit bg-secondary border-b-2 p-5">
      <CustomInput
        start={<Search size={200} />}
        placeholder="Search"
        className="bg-primary-foreground py-5"
      />
      
    </div>
  );
}

export default Header