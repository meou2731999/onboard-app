type Props = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const Field: React.FC<Props> = ({ value, onChange }: Props) => {
  return (
    <div className="border-[0.5px] h-[46px] border-solid w-full flex items-center overflow-hidden rounded-lg relative border-gray-scale-60">
      <div className="flex h-full items-center px-2.5 bg-gray-scale-20">
        <div className="text-body-large-regular text-gray-scale-60">
          https://
        </div>
      </div>
      <input
        className="relative text-body-medium-regular text-gray-scale-40 w-full h-full p-2 bg-gray-scale-15 rounded-e-lg focus:outline-none"
        placeholder="input URL"
        onChange={onChange}
        value={value}
        role="textbox"
      />
    </div>
  );
};
