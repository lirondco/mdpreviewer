import {
  faGlasses,
  faMinusSquare,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@material-ui/core";

type PreviewProps = {
  isExpanded: string;
  text: string;
  handleExpand: any;
};

const Preview = ({
  isExpanded,
  text,
  handleExpand,
}: PreviewProps): JSX.Element => {
  const shouldExpand = isExpanded === "preview";
  const icon = shouldExpand ? (
    <FontAwesomeIcon icon={faMinusSquare} />
  ) : (
    <FontAwesomeIcon icon={faPlusCircle} />
  );
  const containerClass = shouldExpand ? "window-enlarged" : "preview-window";
  const toolTip = shouldExpand ? "Minimize" : "Maximize";
  const ariaLabel = toolTip + " preview window.";

  return (
    <div className={`container ${containerClass}`}>
      <div className="title-bar">
        <div className="window-title">
          <FontAwesomeIcon icon={faGlasses} /> Preview
        </div>
        <Tooltip title={toolTip} arrow>
          <button
            className="arrow"
            aria-label={ariaLabel}
            onClick={handleExpand}
          >
            {icon}{" "}
          </button>
        </Tooltip>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: text }}>
      </div>
    </div>
  );
};

export default Preview;
