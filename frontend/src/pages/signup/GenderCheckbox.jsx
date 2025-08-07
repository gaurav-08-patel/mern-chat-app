import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const GenderCheckbox = ({inputs , setInputs }) => {

    return (
        <RadioGroup defaultValue="male" className="flex">
            <div className="flex items-center space-x-2  ">
                <RadioGroupItem value="male" id="male" onClick={ (e)=> setInputs({...inputs , gender: e.target.value})   } />
                <Label htmlFor="male" className="cursor-pointer">Male</Label>
            </div>
            <div className="flex items-center space-x-2  ">
                <RadioGroupItem value="female" id="female"  onClick={ (e)=> setInputs({...inputs , gender: e.target.value})   } />
                <Label htmlFor="female" className="cursor-pointer">Female</Label>
            </div>
        </RadioGroup>
    );
};

export default GenderCheckbox;
