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
    <div className="mt-4">
      <span
        ref={wraperRef}
        className={`text-gray-700 break-words ${
          !expandText ? "line-clamp-5" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {isOverflowing && (
        <div className="flex justify-end">
          <button
            className="flex border rounded py-1 px-2 hover:bg-gray-200 active:bg-gray-300 font-medium"
            onClick={() => setExpandText(!expandText)}
          >
            {expandText ? "Collapse" : "Expand"}
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(Description);
