import CheckedIcon from "@/assets/CheckedIcon";
import LineIcon from "@/assets/LineIcon";
import PropTypes from "prop-types";

interface Props {
  state: 1 | 2 | 3 | 4;
}

export const Stepper: React.FC<Props> = ({ state }: Props) => {
  return (
    <div className="flex items-center gap-2.5 px-2.5 py-6 text-primary">
      <div className="items-center justify-center flex gap-[15px]">
        <div className="flex items-center justify-center gap-2.5 p-1  bg-primary rounded-full overflow-hidden">
          <CheckedIcon />
        </div>
        <div className="text-body-medium-semibold whitespace-nowrap">
          About You
        </div>
      </div>
      <LineIcon />
      <div className="items-center justify-center flex gap-[15px]">
        <div className="flex items-center justify-center gap-2.5 p-1  bg-primary rounded-full overflow-hidden">
          <CheckedIcon />
        </div>
        <div className="text-body-medium-semibold whitespace-nowrap">
          Inspirations
        </div>
      </div>
      <LineIcon />
      <div className="items-center justify-center flex gap-[15px]">
        <div className="bg-primary font-semibold flex items-center justify-center gap-2.5 w-[25px] h-[25px] rounded-full text-white text-[10px]">
          3
        </div>
        <div className="text-body-medium-semibold whitespace-nowrap">
          Brand Voice
        </div>
      </div>
      <LineIcon />
      <div className="items-center justify-center flex gap-[15px]">
        <div className="bg-gray-scale-10 text-gray-scale-60 border border-solid border-gray-scale-40 flex flex-col items-center justify-center gap-2.5 w-[25px] h-[25px] rounded-full overflow-hidden text-caption-semibold">
          4
        </div>
        <div className="text-body-medium-semibold text-gray-scale-40 whitespace-nowrap">
          Knowledge Base
        </div>
      </div>
    </div>
  );
};
