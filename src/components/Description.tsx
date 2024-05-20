import { memo, useEffect, useRef, useState } from "react";

type Props = {
  description: string;
};

const Description: React.FC<Props> = ({ description }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [expandText, setExpandText] = useState(false);
  const wraperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typographyElement = wraperRef.current;
    typographyElement &&
      setIsOverflowing(
        typographyElement?.scrollHeight > typographyElement?.clientHeight
      );
  }, []);

  return (
    <>
      <h3 className="text-lg font-semibold">About Hotel:</h3>
      <span
        ref={wraperRef}
        className={`text-gray-700 text-sm break-words ${
          !expandText ? "line-clamp-5" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {isOverflowing && (
        <div className="flex justify-end mt-2">
          <button
            className="flex border border-blue-200 rounded py-1 px-2 hover:bg-blue-100 active:bg-blue-200 font-medium text-blue-500"
            onClick={() => setExpandText(!expandText)}
          >
            {expandText ? "Collapse" : "Read More"}
          </button>
        </div>
      )}
    </>
  );
};

export default memo(Description);
