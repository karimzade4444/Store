import { Bell, Search } from "lucide-react";
import CustomInput from "../custom/CustomInput";
import { Button } from "../ui/button";



const Header = () => {
  return (
    <div className="w-full max-h-25 h-fit bg-secondary border-b-2 p-5">
      <div>
        <CustomInput
          start={<Search className="size-10 pr-3 " color="black" />}
          placeholder="Search"
          className="bg-primary-foreground py-5 w-120"
        />
        <Button>
          <Bell />
        </Button>
      </div>
    </div>
  );
}

export default Header