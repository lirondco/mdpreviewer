import {
  faMinusSquare,
  faPen,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@material-ui/core";

type EditorProps = {
  isExpanded: string;
  handleChange: any;
  handleExpand: any;
  text: string;
};

const Editor = ({
  isExpanded,
  handleChange,
  handleExpand,
  text,
}: EditorProps): JSX.Element => {
  const shouldExpand = isExpanded === "editor";
  const icon = shouldExpand ? (
    <FontAwesomeIcon icon={faMinusSquare} />
  ) : (
    <FontAwesomeIcon icon={faPlusCircle} />
  );
  const containerClass = shouldExpand ? "window-enlarged" : "editor-window";
  const toolTip = shouldExpand ? "Minimize" : "Maximize";
  const ariaLabel = toolTip + " editor window.";
  const numRows = shouldExpand ? 80 : 15;

  return (
    <div className={`container ${containerClass}`}>
      <div className="title-bar">
        <div className="window-title">
          <FontAwesomeIcon icon={faPen} /> Editor
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
      <textarea
        id="editor"
        rows={numRows}
        onChange={handleChange}
        value={text}
        aria-label="Enter your markdown here"
      />
    </div>
  );
};

export default Editor;
