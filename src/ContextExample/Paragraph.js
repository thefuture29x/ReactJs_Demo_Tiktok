import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);
  return (
    <div className={context.theme}>
      <p>
        Cao ốc nào cũng được xây từ viên gạch đầu tiên, hãy đăng câu hỏi hoặc
        chia sẻ kiến thức của bạn để nhóm mới này sớm trở thành tòa cao ốc bạn
        nhé
      </p>
    </div>
  );
}

export default Paragraph;
